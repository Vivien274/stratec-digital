import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyAntiSpam } from "@/lib/antiSpam";
import crypto from "crypto";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "127.0.0.1";
    const body = await req.json();
    const { name, email, resourceTitle, resourceId, tag, downloadUrl, honeypot, recaptchaToken } = body;

    if (!email) {
      return NextResponse.json({ error: "L'adresse email est obligatoire." }, { status: 400 });
    }

    const trimmedEmail = email.trim().toLowerCase();

    // 1. Centralized Anti-Spam & Bot Check (Honeypot, Rate Limit, Spam Email Patterns & reCAPTCHA)
    const antiSpamResult = await verifyAntiSpam({
      ip,
      email: trimmedEmail,
      honeypot,
      recaptchaToken,
    });

    if (antiSpamResult.isSpam) {
      // If it's a bot (honeypot or spam pattern), return a silent fake success response without writing to DB or Mailchimp
      if (antiSpamResult.isBotHoneypot || antiSpamResult.reason?.includes("automatisé") || antiSpamResult.reason?.includes("robot")) {
        console.warn(`[Anti-Spam Blocked] Silent drop of bot lead from IP ${ip}: ${trimmedEmail}`);
        return NextResponse.json({
          success: true,
          message: "Merci ! Ton inscription est bien enregistrée.",
          downloadUrl: downloadUrl || "/downloads/tuto-bouton-retractation.pdf",
        });
      }

      return NextResponse.json(
        { error: antiSpamResult.reason || "Inscription refusée par le contrôle anti-spam." },
        { status: 400 }
      );
    }

    const safeName = name && name.trim() ? name.trim() : trimmedEmail.split("@")[0];

    // Determine target tag and downloadUrl if resourceId is provided
    let mailchimpTag = tag || "ressource-gratuite";
    let targetDownloadUrl = downloadUrl || null;

    if (resourceId) {
      const resource = await prisma.freeResource.findUnique({ where: { id: resourceId } });
      if (resource) {
        if (resource.mailchimpTag) mailchimpTag = resource.mailchimpTag;
        if (resource.downloadUrl) targetDownloadUrl = resource.downloadUrl;
      }
    }

    // 2. Record lead in DB so Stephanie can track all legitimate resource downloads in Admin Leads panel
    const lead = await prisma.leadMessage.create({
      data: {
        name: safeName,
        email: trimmedEmail,
        serviceInterest: `Ressource Gratuite: ${resourceTitle || "Guide"}`,
        message: `Demande d'envoi automatique de la ressource gratuite "${resourceTitle}". Tag Mailchimp: ${mailchimpTag}.`,
        status: "NEW",
      },
    });

    // 3. Mailchimp API v3 Integration
    const apiKey = process.env.MAILCHIMP_API_KEY;
    const listId = process.env.MAILCHIMP_LIST_ID;

    if (apiKey && listId) {
      try {
        const dc = apiKey.split("-")[1] || "us15";
        const subscriberHash = crypto.createHash("md5").update(trimmedEmail).digest("hex");
        const url = `https://${dc}.api.mailchimp.com/3.0/lists/${listId}/members/${subscriberHash}`;

        // Standard Mailchimp HTTP Basic Auth header
        const authHeader = `Basic ${Buffer.from(`anystring:${apiKey}`).toString("base64")}`;

        const mcResponse = await fetch(url, {
          method: "PUT",
          headers: {
            Authorization: authHeader,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email_address: trimmedEmail,
            status_if_new: "subscribed",
            status: "subscribed",
            merge_fields: { FNAME: safeName },
          }),
        });

        if (!mcResponse.ok) {
          const mcError = await mcResponse.text();
          console.error("Mailchimp API Member Error:", mcError);
        } else {
          console.log(`✅ Mailchimp subscriber ${trimmedEmail} successfully added/updated with tag [${mailchimpTag}]!`);

          // Add tags via Mailchimp /members/<hash>/tags endpoint
          const tagsUrl = `https://${dc}.api.mailchimp.com/3.0/lists/${listId}/members/${subscriberHash}/tags`;
          const activeTags = [
            { name: "ressource-gratuite", status: "active" },
            { name: mailchimpTag, status: "active" },
          ];

          if (resourceTitle) {
            activeTags.push({ name: String(resourceTitle).slice(0, 50), status: "active" });
          }

          await fetch(tagsUrl, {
            method: "POST",
            headers: {
              Authorization: authHeader,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ tags: activeTags }),
          });
        }
      } catch (mcErr) {
        console.error("Mailchimp fetch error:", mcErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Merci ! Ton inscription est bien enregistrée.",
      leadId: lead.id,
      downloadUrl: targetDownloadUrl,
      tag: mailchimpTag,
    });
  } catch (error) {
    console.error("Error subscribing resource:", error);
    return NextResponse.json({ error: "Erreur lors de l'enregistrement de l'inscription." }, { status: 500 });
  }
}
