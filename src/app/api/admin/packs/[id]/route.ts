import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminSession } from "@/lib/auth";

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }

    const { id } = await params;
    const body = await request.json();
    const { title, tagline, price, billingPeriod, popularBadge, allowSplitPayment, description, audience, features } = body;

    let featuresJson = "[]";
    if (Array.isArray(features)) {
      featuresJson = JSON.stringify(features);
    } else if (typeof features === "string") {
      try {
        // test if already valid JSON array
        const parsed = JSON.parse(features);
        featuresJson = Array.isArray(parsed) ? JSON.stringify(parsed) : JSON.stringify([features]);
      } catch {
        // split by line if multiline string
        const lines = features.split("\n").map((l) => l.trim()).filter(Boolean);
        featuresJson = JSON.stringify(lines);
      }
    }

    const updatedPack = await prisma.pack.update({
      where: { id },
      data: {
        title,
        tagline,
        price,
        billingPeriod,
        popularBadge: Boolean(popularBadge),
        allowSplitPayment: Boolean(allowSplitPayment),
        description,
        audience,
        features: featuresJson,
      },
    });

    return NextResponse.json({ success: true, pack: updatedPack });
  } catch (error) {
    console.error("Error updating pack:", error);
    return NextResponse.json({ error: "Erreur lors de la mise à jour de l'offre." }, { status: 500 });
  }
}
