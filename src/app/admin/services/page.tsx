import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import ServicesManager from "@/components/admin/ServicesManager";

export const dynamic = "force-dynamic";

export default async function AdminServicesPage() {
  const session = await getAdminSession();
  if (!session) {
    redirect("/admin/login");
  }

  const packs = await prisma.pack.findMany({
    orderBy: { sortOrder: "asc" },
  });

  return (
    <div className="space-y-8">
      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">Gestion des Services &amp; Tarifs</h1>
        <p className="text-xs text-slate-500 mt-1">
          Modifiez en direct les prix, titres et descriptions de vos 4 offres d&apos;accompagnement.
        </p>
      </div>

      <ServicesManager initialPacks={packs} />
    </div>
  );
}
