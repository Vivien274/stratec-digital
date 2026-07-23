import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminSession } from "@/lib/auth";

export async function GET() {
  try {
    const resources = await prisma.freeResource.findMany({
      orderBy: { sortOrder: "asc" },
    });
    return NextResponse.json(resources);
  } catch (error) {
    return NextResponse.json({ error: "Erreur lors de la récupération des ressources" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }

    const body = await req.json();
    const { title, slug, category, description, image, downloadUrl, mailchimpTag, sortOrder } = body;

    if (!title || !description) {
      return NextResponse.json({ error: "Le titre et la description sont requis." }, { status: 450 });
    }

    const generatedSlug =
      slug ||
      title
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

    const resource = await prisma.freeResource.create({
      data: {
        title,
        slug: generatedSlug,
        category: category || "Guide PDF",
        description,
        image: image || null,
        downloadUrl: downloadUrl || null,
        mailchimpTag: mailchimpTag || null,
        sortOrder: sortOrder ? parseInt(sortOrder) : 0,
      },
    });

    return NextResponse.json(resource, { status: 201 });
  } catch (error) {
    console.error("Error creating resource:", error);
    return NextResponse.json({ error: "Erreur serveur lors de la création." }, { status: 500 });
  }
}
