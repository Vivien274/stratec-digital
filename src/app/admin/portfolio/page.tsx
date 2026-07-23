import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import PortfolioManager from "@/components/admin/PortfolioManager";

export const dynamic = "force-dynamic";

export default async function AdminPortfolioPage() {
  const session = await getAdminSession();
  if (!session) {
    redirect("/admin/login");
  }

  const projects = await prisma.project.findMany({
    orderBy: { sortOrder: "asc" },
  });

  return (
    <div className="space-y-8">
      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">Gestion des Projets Portfolio</h1>
        <p className="text-xs text-slate-500 mt-1">
          Ajoutez, modifiez ou mettez en avant vos réalisations et études de cas clients.
        </p>
      </div>

      <PortfolioManager initialProjects={projects} />
    </div>
  );
}
