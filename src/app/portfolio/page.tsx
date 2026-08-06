import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Sparkles, ArrowRight } from "lucide-react";
import PortfolioGridClient from "@/components/PortfolioGridClient";

export const revalidate = 60; // ISR 60s

export const metadata = {
  title: "Portfolio & Réalisations • Stratec Digital | Stéphanie ROCQ",
  description:
    "Découvre les projets concrets réalisés pour des artisans, créateurs et indépendants : sites vitrine, boutiques en ligne, ateliers pâtisserie et référencement local.",
};

export default async function PortfolioPage() {
  const projects = await prisma.project.findMany({
    orderBy: { sortOrder: "asc" },
  });

  return (
    <div className="space-y-16 pb-24 pt-8 bg-[#FAF4F2] text-[#562C2C]">
      
      {/* PAGE HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-sm space-y-6 text-center max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5DFBB]/60 text-[#562C2C] border border-[#562C2C]/20 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#F2542D]" />
            <span>Réalisations Client &bull; Études de Cas</span>
          </span>
          
          <h1 className="text-3xl sm:text-5xl font-black text-[#562C2C] tracking-tight leading-tight">
            Les projets sur lesquels j&apos;ai travaillé
          </h1>
          
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Ces réalisations sont le fruit d’un vrai travail d’équipe avec chaque artisan accompagné. À l’écoute de leurs besoins, j’ai conçu des solutions simples, efficaces et toujours pensées pour leur métier.
          </p>
        </div>
      </section>

      {/* INTERACTIVE CLIENT PROJECTS GRID & MODAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PortfolioGridClient projects={projects} />
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#562C2C] text-white rounded-3xl p-10 text-center space-y-4 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5DFBB]">Tu as un projet similaire ?</h2>
          <p className="text-sm text-slate-200 max-w-xl mx-auto leading-relaxed">
            Discutons ensemble de tes envies et créons la solution digitale qui correspond exactement à ton savoir-faire.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-[#F2542D] hover:bg-[#d8431f] transition-all shadow-md"
            >
              <span>Me présenter mon projet</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
