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
    const { title, tagline, price, billingPeriod, popularBadge, description, audience } = body;

    const updatedPack = await prisma.pack.update({
      where: { id },
      data: {
        title,
        tagline,
        price,
        billingPeriod,
        popularBadge: Boolean(popularBadge),
        description,
        audience,
      },
    });

    return NextResponse.json({ success: true, pack: updatedPack });
  } catch (error) {
    return NextResponse.json({ error: "Erreur lors de la mise à jour." }, { status: 500 });
  }
}
