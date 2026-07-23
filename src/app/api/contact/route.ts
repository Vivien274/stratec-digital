import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, activity, serviceInterest, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Veuillez remplir les champs obligatoires (Nom, Email, Message)." },
        { status: 400 }
      );
    }

    const lead = await prisma.leadMessage.create({
      data: {
        name,
        email,
        phone: phone || null,
        activity: activity || null,
        serviceInterest: serviceInterest || "Non spécifié",
        message,
        status: "NEW",
      },
    });

    return NextResponse.json({ success: true, leadId: lead.id });
  } catch (error: unknown) {
    console.error("Error saving lead message:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'enregistrement de votre message." },
      { status: 500 }
    );
  }
}
