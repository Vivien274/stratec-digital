import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Inbox, Package, FolderKanban, ArrowUpRight } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const session = await getAdminSession();
  if (!session) {
    redirect("/admin/login");
  }

  const [leadCount, packCount, projectCount, recentLeads] = await Promise.all([
    prisma.leadMessage.count(),
    prisma.pack.count(),
    prisma.project.count(),
    prisma.leadMessage.findMany({
      orderBy: { createdAt: "desc" },
      take: 5,
    }),
  ]);

  return (
    <div className="space-y-8">
      
      {/* Top Banner */}
      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#562C2C]">
            Bonjour, {session.name} 👋
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Bienvenue sur votre espace d&apos;administration Stratec Digital.
          </p>
        </div>
        <Link
          href="/"
          target="_blank"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs bg-[#562C2C] text-white hover:bg-[#F2542D] transition-colors shadow-sm"
        >
          <span>Consulter le site en direct</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        
        <Link
          href="/admin/leads"
          className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4 group"
        >
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-[#F5DFBB]/60 text-[#562C2C] flex items-center justify-center">
              <Inbox className="w-6 h-6 text-[#F2542D]" />
            </div>
            <span className="text-xs font-bold text-[#562C2C] bg-[#F5DFBB]/80 px-2.5 py-1 rounded-full">
              Messages
            </span>
          </div>
          <div>
            <div className="text-3xl font-black text-[#562C2C]">{leadCount}</div>
            <p className="text-xs font-semibold text-slate-500 mt-1">Demandes de contact / Leads</p>
          </div>
        </Link>

        <Link
          href="/admin/services"
          className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4 group"
        >
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-[#0E9594]/10 text-[#0E9594] flex items-center justify-center">
              <Package className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-[#127475] bg-[#0E9594]/10 px-2.5 py-1 rounded-full">
              Offres
            </span>
          </div>
          <div>
            <div className="text-3xl font-black text-[#562C2C]">{packCount}</div>
            <p className="text-xs font-semibold text-slate-500 mt-1">Packs &amp; Tarifs configurés</p>
          </div>
        </Link>

        <Link
          href="/admin/portfolio"
          className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4 group"
        >
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-[#127475]/10 text-[#127475] flex items-center justify-center">
              <FolderKanban className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-[#127475] bg-[#127475]/10 px-2.5 py-1 rounded-full">
              Réalisations
            </span>
          </div>
          <div>
            <div className="text-3xl font-black text-[#562C2C]">{projectCount}</div>
            <p className="text-xs font-semibold text-slate-500 mt-1">Projets au Portfolio</p>
          </div>
        </Link>

      </div>

      {/* Recent Activity Table */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden space-y-4 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-[#562C2C]">Dernières demandes reçues</h2>
            <p className="text-xs text-slate-500">Formulaire de contact du site public</p>
          </div>
          <Link
            href="/admin/leads"
            className="text-xs font-bold text-[#127475] hover:text-[#F2542D] hover:underline"
          >
            Voir tous les messages &rarr;
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#FAF4F2] text-[#562C2C] uppercase font-bold border-y border-slate-200">
              <tr>
                <th className="p-3">Nom</th>
                <th className="p-3">Activité</th>
                <th className="p-3">Service Souhaité</th>
                <th className="p-3">Date</th>
                <th className="p-3">Statut</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-800 font-medium">
              {recentLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-slate-50/80">
                  <td className="p-3 font-bold text-slate-900">
                    {lead.name}
                    <span className="block text-[11px] text-slate-400 font-normal">{lead.email}</span>
                  </td>
                  <td className="p-3">{lead.activity || "Non renseigné"}</td>
                  <td className="p-3 font-semibold text-[#127475]">{lead.serviceInterest}</td>
                  <td className="p-3 text-slate-500">
                    {new Date(lead.createdAt).toLocaleDateString("fr-FR")}
                  </td>
                  <td className="p-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-[#F5DFBB] text-[#562C2C]">
                      {lead.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
