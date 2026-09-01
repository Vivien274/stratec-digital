import { verifyReCaptchaToken } from './recaptcha';

// In-memory IP rate limiter map
const ipRateLimitMap = new Map<string, number[]>();

export interface AntiSpamResult {
  isSpam: boolean;
  reason?: string;
  isBotHoneypot?: boolean;
}

const DISPOSABLE_DOMAINS = new Set([
  'mailinator.com',
  'yopmail.com',
  'yopmail.fr',
  'guerrillamail.com',
  'tempmail.com',
  '10minutemail.com',
  'dispostable.com',
  'trashmail.com',
  'sharklasers.com',
  'getnada.com',
  'temp-mail.org',
  'binkmail.com',
  'safetymail.info',
]);

/**
  * Validates an email address against known automated bot patterns.
  */
export function isSpamEmail(email: string): AntiSpamResult {
  if (!email || typeof email !== 'string') {
    return { isSpam: true, reason: 'Email manquant ou invalide' };
  }

  const trimmed = email.trim().toLowerCase();
  const parts = trimmed.split('@');

  if (parts.length !== 2) {
    return { isSpam: true, reason: 'Format email invalide' };
  }

  const [username, domain] = parts;

  // 1. Check Disposable Domains
  if (DISPOSABLE_DOMAINS.has(domain)) {
    return { isSpam: true, reason: 'Domaine temporaire/jetable non autorisé' };
  }

  // 2. Detect Gmail / Yahoo / Hotmail Dot-Trick Spam Generators (e.g., zh.an.gh.unt.e.r.x@gmail.com, davek.a.r.un.4.6.2@gmail.com)
  const dotCount = (username.match(/\./g) || []).length;
  if (dotCount >= 3) {
    return { isSpam: true, reason: 'Motif d’email automatisé (trop de points dans le pseudonyme)' };
  }

  // 3. Detect Bot Username Patterns (e.g. m.ika.gabri.ell.e.71, zh.an.gh.unt)
  // Username containing numbers interleaved with dots or repeated single character dot segments (e.g. .a.r.un.4.6.2)
  const dotSegmentPattern = /(\.[a-z0-9]){3,}/i;
  if (dotSegmentPattern.test(username)) {
    return { isSpam: true, reason: 'Motif de points généré par robot' };
  }

  // 4. Basic format validation
  const validEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!validEmailRegex.test(trimmed)) {
    return { isSpam: true, reason: 'Format email non valide' };
  }

  return { isSpam: false };
}

/**
 * Checks rate limiting for an IP address.
 */
export function isIpRateLimited(ip: string, limitCount = 3, windowMs = 10 * 60 * 1000): boolean {
  const now = Date.now();
  const timestamps = ipRateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter(t => now - t < windowMs);

  if (validTimestamps.length >= limitCount) {
    return true;
  }

  validTimestamps.push(now);
  ipRateLimitMap.set(ip, validTimestamps);
  return false;
}

/**
 * Full anti-spam verification check for API routes.
 */
export async function verifyAntiSpam({
  ip,
  email,
  honeypot,
  recaptchaToken,
}: {
  ip: string;
  email: string;
  honeypot?: string;
  recaptchaToken?: string;
}): Promise<AntiSpamResult> {
  // 1. Honeypot Check (Invisible Form Field)
  if (honeypot && honeypot.trim() !== '') {
    console.warn(`[Anti-Spam Stratec] Bot trap triggered by IP ${ip} (honeypot: "${honeypot}")`);
    return { isSpam: true, isBotHoneypot: true, reason: 'Piège à robot déclenché' };
  }

  // 2. IP Rate-Limiting
  if (isIpRateLimited(ip, 4, 10 * 60 * 1000)) {
    console.warn(`[Anti-Spam Stratec] IP Rate limit exceeded for IP ${ip}`);
    return { isSpam: true, reason: 'Trop de soumissions en peu de temps. Veuillez réespacer vos tentatives.' };
  }

  // 3. Email Pattern Filter
  const emailCheck = isSpamEmail(email);
  if (emailCheck.isSpam) {
    console.warn(`[Anti-Spam Stratec] Spam email rejected for IP ${ip}: ${email} (${emailCheck.reason})`);
    return emailCheck;
  }

  // 4. reCAPTCHA Verification (if token provided or secret configured)
  if (recaptchaToken || process.env.RECAPTCHA_SECRET_KEY) {
    const captchaResult = await verifyReCaptchaToken(recaptchaToken || '');
    if (!captchaResult.success) {
      console.warn(`[Anti-Spam Stratec] reCAPTCHA control failed for IP ${ip}: ${captchaResult.error}`);
      return { isSpam: true, reason: captchaResult.error || 'Contrôle anti-robot échoué' };
    }
  }

  return { isSpam: false };
}
