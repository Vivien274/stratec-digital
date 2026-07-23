import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { CheckCircle2, Star, Sparkles, ArrowRight, Phone, ShieldCheck, HelpCircle, ExternalLink } from "lucide-react";

export const revalidate = 60; // ISR 60s

export const metadata = {
  title: "Services & Tarifs • Stratec Digital | Formules Artisans",
  description: "Découvrez les 4 packs d'accompagnement digital Stratec Digital pour artisans et indépendants. Tarifs clairs, sans abonnement ni frais cachés.",
};

export default async function ServicesTarifsPage() {
  const packs = await prisma.pack.findMany({
    orderBy: { sortOrder: "asc" },
  });

  return (
    <div className="space-y-20 pb-24 pt-8">
      
      {/* PAGE HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 text-center max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5DFBB]/60 text-[#562C2C] border border-[#562C2C]/20 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#F2542D]" />
            <span>Offres &amp; Tarifs Transparents</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#562C2C] tracking-tight">
            Pour que chacun y trouve chaussure à son pied
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            4 formules clés-en-main conçues spécifiquement pour les besoins des artisans, créateurs et micro-entrepreneurs.
          </p>

          {/* WORKLOAD REASSURANCE BANNER */}
          <div className="bg-white border border-[#562C2C]/10 rounded-2xl p-5 mt-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#F5DFBB] text-[#562C2C] flex items-center justify-center shrink-0 font-extrabold text-lg shadow-xs">
              💡
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              <strong className="text-[#562C2C]">Tu n&apos;as pas de textes rédigés ni de photos de studio ?</strong> Pas de panique ! Je t&apos;aide à tout rassembler très simplement depuis ton téléphone sans te prendre de précieux temps sur tes chantiers ou tes créations.
            </p>
          </div>
        </div>
      </section>

      {/* PACKS GRID SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {packs.map((pack) => {
            let features: string[] = [];
            try {
              features = typeof pack.features === "string" ? JSON.parse(pack.features) : pack.features;
              if (!Array.isArray(features)) features = [String(pack.features)];
            } catch {
              features = pack.features ? [String(pack.features)] : [];
            }
            return (
              <div
                key={pack.id}
                id={pack.slug}
                className={`bg-white rounded-3xl p-8 border ${
                  pack.popularBadge ? "border-[#F2542D] shadow-xl ring-2 ring-[#F2542D]/20 relative" : "border-slate-200/80 shadow-sm"
                } flex flex-col justify-between space-y-8`}
              >
                {pack.popularBadge && (
                  <span className="absolute -top-3.5 right-8 bg-[#F2542D] text-white text-xs font-bold uppercase px-4 py-1 rounded-full shadow-xs flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-white" /> Formule Populaire
                  </span>
                )}

                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#127475] bg-[#0E9594]/10 px-3 py-1 rounded-full">
                      {pack.audience}
                    </span>
                    <h2 className="text-2xl font-bold text-[#562C2C] mt-3">{pack.title}</h2>
                    <p className="text-sm text-slate-500 mt-1">{pack.tagline}</p>
                  </div>

                  <div className="p-4 bg-[#FAF4F2] rounded-2xl border border-slate-200/60 flex items-baseline justify-between">
                    <div>
                      <span className="text-3xl font-extrabold text-[#562C2C]">{pack.price}</span>
                      <span className="text-xs text-slate-500 font-medium ml-2">({pack.billingPeriod})</span>
                    </div>
                    <span className="text-xs font-semibold text-[#127475] bg-[#F5DFBB]/60 px-2.5 py-1 rounded-md">
                      Paiement en 3x possible
                    </span>
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed">{pack.description}</p>

                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#562C2C]">
                      Ce que comprend le pack :
                    </h3>
                    <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                      {features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-[#0E9594] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-4">
                  <a
                    href="https://calendar.app.google/LmPYPbdEHxwC4ewq6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex-1 text-center py-3.5 px-6 rounded-xl font-bold text-sm bg-[#562C2C] hover:bg-[#F2542D] text-white shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Réserver un rendez-vous</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto py-3.5 px-5 rounded-xl font-bold text-xs text-[#562C2C] bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
                  >
                    <HelpCircle className="w-3.5 h-3.5 text-[#F2542D]" />
                    <span>Une question ?</span>
                  </Link>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* BOUTIQUE GUIDES-DIGITAUX.COM BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#F5DFBB]/80 via-white to-[#FAF4F2] border-2 border-[#F2542D]/30 p-8 sm:p-12 rounded-3xl shadow-md flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <span className="inline-block px-3.5 py-1 bg-[#F2542D] text-white text-xs font-black uppercase tracking-wider rounded-full shadow-xs">
              💡 Quand y&apos;en a plus, y&apos;en a encore !
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#562C2C]">
              Découvre la boutique en ligne Guides-Digitaux.com
            </h3>
            <p className="text-slate-700 text-sm sm:text-base max-w-2xl leading-relaxed">
              Envie d&apos;outils pratiques supplémentaires ? Retrouve tous nos guides complets, modèles prêts à l&apos;emploi et fiches conseils sur notre boutique officielle.
            </p>
          </div>
          <a
            href="https://guides-digitaux.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 rounded-xl font-extrabold text-sm bg-[#562C2C] hover:bg-[#F2542D] text-white transition-all shadow-md shrink-0 inline-flex items-center gap-2"
          >
            <span>Visiter la boutique Guides-Digitaux.com</span>
            <ExternalLink className="w-4 h-4 text-[#F5DFBB]" />
          </a>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5DFBB]/60 text-[#562C2C] border border-[#562C2C]/20 text-xs font-bold uppercase">
            <HelpCircle className="w-4 h-4 text-[#F2542D]" /> Foire aux questions
          </span>
          <h2 className="text-3xl font-extrabold text-[#562C2C]">Questions Fréquentes</h2>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm space-y-6">
          <div className="space-y-2 pb-4 border-b border-slate-100">
            <h3 className="font-bold text-[#562C2C] text-base">Faut-il avoir une boutique physique pour se lancer ?</h3>
            <p className="text-sm text-slate-600">
              Absolument pas ! La majorité de mes clients travaillent à domicile ou en itinérance. La fiche Google Business Profile permet de masquer votre adresse personnelle tout en apparaissant dans les recherches locales.
            </p>
          </div>

          <div className="space-y-2 pb-4 border-b border-slate-100">
            <h3 className="font-bold text-[#562C2C] text-base">Y a-t-il des coûts récurrents mensuels ?</h3>
            <p className="text-sm text-slate-600">
              Non. Mes tarifs sont transparents et s&apos;entendent sans abonnement caché. Si votre projet nécessite un hébergement web ou un nom de domaine, nous choisissons ensemble la solution la plus économique et vous en restez propriétaire à 100%.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-[#562C2C] text-base">Combien de temps prend la livraison d&apos;un pack ?</h3>
            <p className="text-sm text-slate-600">
              En moyenne entre 10 et 15 jours ouvrés à compter de notre premier appel découverte et de la validation du projet.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
