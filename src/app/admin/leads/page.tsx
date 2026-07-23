import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Inbox, Mail, Phone, Calendar, User, CheckCircle2 } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminLeadsPage() {
  const session = await getAdminSession();
  if (!session) {
    redirect("/admin/login");
  }

  const leads = await prisma.leadMessage.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-8">
      
      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Inbox className="w-6 h-6 text-emerald-600" /> Boîte de Réception des Leads ({leads.length})
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Consultez les messages reçus depuis le formulaire de contact du site.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {leads.map((lead) => (
          <div
            key={lead.id}
            className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 hover:border-emerald-300 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-4 gap-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-base">
                  {lead.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">{lead.name}</h3>
                  <p className="text-xs text-slate-500 font-semibold">{lead.activity || "Artisan / Indépendant"}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <span className="bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full">
                  {lead.serviceInterest}
                </span>
                <span className="text-slate-400 font-medium">
                  {new Date(lead.createdAt).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-slate-600">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                <a href={`mailto:${lead.email}`} className="text-emerald-700 hover:underline">
                  {lead.email}
                </a>
              </div>
              {lead.phone && (
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                  <a href={`tel:${lead.phone}`} className="text-slate-800 hover:underline">
                    {lead.phone}
                  </a>
                </div>
              )}
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 text-sm text-slate-800 leading-relaxed whitespace-pre-line">
              {lead.message}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
