import { getAdminSession } from "@/lib/auth";
import Link from "next/link";
import Image from "next/image";
import { LayoutDashboard, Inbox, Package, FolderKanban, Download, Globe, ShieldCheck } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  let session = null;
  try {
    session = await getAdminSession();
  } catch (e) {
    session = null;
  }

  if (!session) {
    return <div className="min-h-screen bg-[#FAF4F2]">{children}</div>;
  }

  return (
    <div className="min-h-screen bg-[#FAF4F2] flex flex-col md:flex-row">
      {/* Sidebar with Stratec Dark Brown */}
      <aside className="w-full md:w-64 bg-[#562C2C] text-[#F5DFBB] p-6 flex flex-col justify-between shrink-0 border-r border-[#452323]">
        <div className="space-y-8">
          
          <div className="space-y-2">
            <div className="bg-white p-2.5 rounded-xl inline-block w-44 shadow-sm">
              <Image
                src="/images/LogoHD.png"
                alt="Stratec Digital"
                width={160}
                height={40}
                className="object-contain"
              />
            </div>
            <p className="text-[11px] text-[#F5DFBB]/80 font-bold uppercase tracking-wider pl-1">
              Administration
            </p>
          </div>

          <nav className="space-y-1 text-sm font-semibold">
            <Link
              href="/admin"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[#F5DFBB] hover:bg-[#452323] hover:text-[#F2542D] transition-colors"
            >
              <LayoutDashboard className="w-4 h-4 text-[#F2542D]" />
              <span>Tableau de bord</span>
            </Link>

            <Link
              href="/admin/leads"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[#F5DFBB] hover:bg-[#452323] hover:text-[#F2542D] transition-colors"
            >
              <Inbox className="w-4 h-4 text-[#F2542D]" />
              <span>Demandes &amp; Leads</span>
            </Link>

            <Link
              href="/admin/services"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[#F5DFBB] hover:bg-[#452323] hover:text-[#F2542D] transition-colors"
            >
              <Package className="w-4 h-4 text-[#F2542D]" />
              <span>Packs &amp; Tarifs</span>
            </Link>

            <Link
              href="/admin/portfolio"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[#F5DFBB] hover:bg-[#452323] hover:text-[#F2542D] transition-colors"
            >
              <FolderKanban className="w-4 h-4 text-[#F2542D]" />
              <span>Projets Portfolio</span>
            </Link>

            <Link
              href="/admin/resources"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[#F5DFBB] hover:bg-[#452323] hover:text-[#F2542D] transition-colors"
            >
              <Download className="w-4 h-4 text-[#F2542D]" />
              <span>Ressources Gratuites</span>
            </Link>
          </nav>
        </div>

        <div className="pt-6 border-t border-[#6B3B3B] space-y-3 text-xs">
          <div className="flex items-center gap-2 text-[#F5DFBB]/80">
            <ShieldCheck className="w-4 h-4 text-[#F2542D]" />
            <span>Connecté : {session.name}</span>
          </div>

          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-2 text-[#F5DFBB] hover:text-[#F2542D] transition-colors font-medium"
          >
            <Globe className="w-4 h-4" />
            <span>Voir le site public &rarr;</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 sm:p-10 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
