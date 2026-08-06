import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import crypto from "crypto";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const { name, email, resourceTitle, resourceId } = await req.json();

    if (!email || !name) {
      return NextResponse.json({ error: "Le prénom et l'email sont obligatoires." }, { status: 400 });
    }

    const trimmedEmail = email.trim().toLowerCase();

    // 1. Record lead in DB so Stephanie can track all resource downloads in Admin Leads panel
    const lead = await prisma.leadMessage.create({
      data: {
        name,
        email: trimmedEmail,
        serviceInterest: `Ressource Gratuite: ${resourceTitle || "Guide"}`,
        message: `Demande d'envoi automatique de la ressource gratuite "${resourceTitle}". (Contact entré dans la boucle Mailchimp).`,
        status: "NEW",
      },
    });

    // 2. Mailchimp API v3 Integration
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
            merge_fields: { FNAME: name },
          }),
        });

        if (!mcResponse.ok) {
          const mcError = await mcResponse.text();
          console.error("Mailchimp API Member Error:", mcError);
        } else {
          console.log(`✅ Mailchimp subscriber ${trimmedEmail} successfully added/updated to list ${listId}!`);

          // Add tags via Mailchimp /members/<hash>/tags endpoint
          if (resourceTitle) {
            const tagsUrl = `https://${dc}.api.mailchimp.com/3.0/lists/${listId}/members/${subscriberHash}/tags`;
            const cleanTag = String(resourceTitle).slice(0, 50);
            await fetch(tagsUrl, {
              method: "POST",
              headers: {
                Authorization: authHeader,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                tags: [
                  { name: "ressource-gratuite", status: "active" },
                  { name: cleanTag, status: "active" },
                ],
              }),
            });
          }
        }
      } catch (mcErr) {
        console.error("Mailchimp fetch error:", mcErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Merci ! Ton inscription est bien enregistrée. Vérifie ta boîte mail sous peu.",
      leadId: lead.id,
    });
  } catch (error) {
    console.error("Error subscribing resource:", error);
    return NextResponse.json({ error: "Erreur lors de l'enregistrement de l'inscription." }, { status: 500 });
  }
}
