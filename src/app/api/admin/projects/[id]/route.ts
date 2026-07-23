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
    const { title, clientName, category, year, summary, challenge, result, testimonialText, testimonialAuthor, liveUrl, featured } = body;

    const updatedProject = await prisma.project.update({
      where: { id },
      data: {
        title,
        clientName,
        category,
        year,
        summary,
        challenge,
        result,
        testimonialText,
        testimonialAuthor,
        liveUrl,
        featured: Boolean(featured),
      },
    });

    return NextResponse.json({ success: true, project: updatedProject });
  } catch (error) {
    return NextResponse.json({ error: "Erreur lors de la mise à jour." }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }

    const { id } = await params;
    await prisma.project.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Erreur lors de la suppression." }, { status: 500 });
  }
}
