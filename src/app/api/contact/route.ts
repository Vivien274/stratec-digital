import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyReCaptchaToken } from "@/lib/recaptcha";
import crypto from "crypto";

export const dynamic = "force-dynamic";

// In-memory rate limiting map for Stratec Digital (IP -> timestamps)
const rateLimitMap = new Map<string, number[]>();

function isRateLimited(ip: string, limitCount = 5, windowMs = 5 * 60 * 1000): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter(t => now - t < windowMs);

  if (validTimestamps.length >= limitCount) {
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return false;
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || '127.0.0.1';

    // 1. Anti-Spam Rate-Limiting (max 5 submissions per 5 minutes per IP)
    if (isRateLimited(ip, 5, 5 * 60 * 1000)) {
      return NextResponse.json(
        { error: 'Trop de tentatives en peu de temps. Veuillez patienter 5 minutes.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, phone, activity, serviceInterest, message, newsletter, honeypot, recaptchaToken } = body;

    // 2. Anti-Bot Honeypot Trap: if honeypot is filled out by automated bots, return fake success without database write
    if (honeypot && honeypot.trim() !== '') {
      console.warn(`[Anti-Spam Stratec Digital] Bot trap triggered by IP ${ip} (honeypot: "${honeypot}")`);
      return NextResponse.json({ success: true, leadId: 'hp_blocked' });
    }

    // 3. Google reCAPTCHA v3 Verification (if token or secret key configured)
    if (recaptchaToken || process.env.RECAPTCHA_SECRET_KEY) {
      const captchaResult = await verifyReCaptchaToken(recaptchaToken);
      if (!captchaResult.success) {
        console.warn(`[Anti-Spam Stratec Digital] reCAPTCHA failed for IP ${ip}: ${captchaResult.error}`);
        return NextResponse.json(
          { error: captchaResult.error || 'Contrôle anti-robot échoué.' },
          { status: 400 }
        );
      }
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Veuillez remplir les champs obligatoires (Nom, Email, Message)." },
        { status: 400 }
      );
    }

    const trimmedEmail = email.trim().toLowerCase();

    const lead = await prisma.leadMessage.create({
      data: {
        name,
        email: trimmedEmail,
        phone: phone || null,
        activity: activity || null,
        serviceInterest: serviceInterest || "Non spécifié",
        message,
        status: "NEW",
      },
    });

    // If newsletter checkbox checked or Mailchimp keys present
    const apiKey = process.env.MAILCHIMP_API_KEY;
    const listId = process.env.MAILCHIMP_LIST_ID;

    if (newsletter && apiKey && listId) {
      try {
        const dc = apiKey.split("-")[1] || "us15";
        const subscriberHash = crypto.createHash("md5").update(trimmedEmail).digest("hex");
        const url = `https://${dc}.api.mailchimp.com/3.0/lists/${listId}/members/${subscriberHash}`;

        const authHeader = `Basic ${Buffer.from(`anystring:${apiKey}`).toString("base64")}`;

        await fetch(url, {
          method: "PUT",
          headers: {
            Authorization: authHeader,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email_address: trimmedEmail,
            status_if_new: "subscribed",
            status: "subscribed",
            merge_fields: { FNAME: name },
          }),
        });

        // Add newsletter tag
        const tagsUrl = `https://${dc}.api.mailchimp.com/3.0/lists/${listId}/members/${subscriberHash}/tags`;
        await fetch(tagsUrl, {
          method: "POST",
          headers: {
            Authorization: authHeader,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            tags: [{ name: "newsletter", status: "active" }],
          }),
        });
      } catch (mcErr) {
        console.error("Mailchimp newsletter error:", mcErr);
      }
    }

    return NextResponse.json({ success: true, leadId: lead.id });
  } catch (error: unknown) {
    console.error("Error saving lead message:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'enregistrement de ton message." },
      { status: 500 }
    );
  }
}
