import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyAntiSpam } from "@/lib/antiSpam";
import crypto from "crypto";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || '127.0.0.1';
    const body = await request.json();
    const { name, email, phone, activity, serviceInterest, message, newsletter, honeypot, recaptchaToken } = body;

    // 1. Centralized Anti-Spam & Bot Verification
    const antiSpamResult = await verifyAntiSpam({
      ip,
      email: email || '',
      honeypot,
      recaptchaToken,
    });

    if (antiSpamResult.isSpam) {
      if (antiSpamResult.isBotHoneypot || antiSpamResult.reason?.includes("automatisé") || antiSpamResult.reason?.includes("robot")) {
        console.warn(`[Anti-Spam Contact] Silent drop of bot lead from IP ${ip}: ${email}`);
        return NextResponse.json({ success: true, leadId: 'hp_blocked' });
      }

      return NextResponse.json(
        { error: antiSpamResult.reason || "Message refusé par le contrôle anti-spam." },
        { status: 400 }
      );
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
