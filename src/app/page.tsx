import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import TradeRotater from "@/components/TradeRotater";
import { Check, ArrowRight, ShieldCheck, Zap, Eye, Star } from "lucide-react";

export const revalidate = 60; // ISR 60 seconds

export default async function HomePage() {
  const packs = await prisma.pack.findMany({
    orderBy: { sortOrder: "asc" },
    take: 3,
  });

  const featuredProjects = await prisma.project.findMany({
    where: { featured: true },
    orderBy: { sortOrder: "asc" },
    take: 3,
  });

  return (
    <div className="overflow-x-hidden pb-20">
      
      {/* HERO SECTION MATCHING EXACT LAYOUT & BRAND COLORS */}
      <section className="relative overflow-hidden bg-[#FAF4F2] bg-[url('/images/bg-dot.svg')] bg-repeat bg-top pt-6 pb-16 lg:pt-10 lg:pb-24 border-b border-slate-200/40 min-h-[600px]">
        
        {/* Flush Right Image of Stéphanie Rocq + Ribbon Frame (Glued to right edge of screen) */}
        <div className="absolute right-0 bottom-0 w-full sm:w-[50%] lg:w-[45%] xl:w-[42%] h-[420px] sm:h-[500px] lg:h-[580px] pointer-events-none z-10 hidden sm:block">
          <Image
            src="/images/BG_Head-Stef.webp"
            alt="Stéphanie ROCQ Stratec Digital"
            fill
            priority
            className="object-contain object-right-bottom"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-8 text-left">
              
              {/* Heading with Multiline Trade Rotater to prevent any truncation */}
              <div className="space-y-1">
                <span className="block text-4xl sm:text-5xl lg:text-[60px] font-medium text-[#562C2C] tracking-tight">
                  Vous êtes
                </span>
                <span className="block text-4xl sm:text-5xl lg:text-[60px] font-extrabold text-[#111827] tracking-tight">
                  <TradeRotater />
                </span>
              </div>

              {/* Subtitle */}
              <p className="text-xl sm:text-2xl text-slate-800 font-normal leading-relaxed max-w-xl">
                Votre valeur, c&apos;est votre savoir-faire. Je vous aide à le faire rayonner en ligne et à toucher les bons clients.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-white bg-[#562C2C] hover:bg-[#F2542D] shadow-md transition-all duration-300"
                >
                  <span>Me contacter</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/services-et-tarifs"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-all"
                >
                  <span>Découvrir mes services</span>
                </Link>
              </div>

              {/* Green/Teal Checkmark Bullets */}
              <div className="pt-4 space-y-3.5 text-sm sm:text-base font-semibold text-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0E9594] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Des outils et une stratégie pensés pour votre activité.</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0E9594] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Pas de rêve, juste du concret &mdash; avec éthique et respect.</span>
                </div>
              </div>

            </div>

            {/* Right Floating Badge Box */}
            <div className="lg:col-span-5 relative flex flex-col justify-start items-end z-30">
              
              {/* Floating Teal Badge Card (Top Right) */}
              <div className="relative self-end max-w-xs sm:max-w-sm transform hover:-translate-y-1 transition-transform">
                <Image
                  src="/images/stratec-digital-stef.png"
                  alt="Accompagnement Stéphanie Rocq"
                  width={340}
                  height={140}
                  priority
                  className="rounded-xl shadow-2xl object-contain"
                />
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* MARQUEE BANNER DIRECTLY ATTACHED (NO MARGINS, ALL IN ONE SINGLE LINE) */}
      <section className="w-full bg-[#562C2C] text-white overflow-hidden py-4 border-y border-[#562C2C] shadow-inner">
        <div className="w-full px-4 sm:px-8 flex items-center justify-between gap-4 md:gap-8 text-xs sm:text-sm lg:text-base font-bold uppercase tracking-wider text-[#F5DFBB] whitespace-nowrap overflow-x-auto no-scrollbar">
          <span className="text-[#F2542D] font-extrabold flex items-center gap-2 shrink-0">
            <Zap className="w-4 h-4 text-[#F2542D]" /> Réseaux sociaux
          </span>
          <span className="text-slate-400 shrink-0">&bull;</span>
          <span className="shrink-0">Vendre en ligne</span>
          <span className="text-slate-400 shrink-0">&bull;</span>
          <span className="text-[#F2542D] font-extrabold flex items-center gap-2 shrink-0">
            <Zap className="w-4 h-4 text-[#F2542D]" /> Trouver des clients
          </span>
          <span className="text-slate-400 shrink-0">&bull;</span>
          <span className="shrink-0">Expliquer vos services</span>
          <span className="text-slate-400 shrink-0">&bull;</span>
          <span className="shrink-0">Faciliter le travail</span>
          <span className="text-slate-400 shrink-0">&bull;</span>
          <span className="text-[#F2542D] font-extrabold shrink-0">Évoluer</span>
        </div>
      </section>

      {/* THREE ETHICAL PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5DFBB]/60 text-[#562C2C] border border-[#562C2C]/20 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#127475]" />
            <span>Je ne suis pas vendeuse de rêve</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#562C2C]">
            Sincérité, transparence, éthique.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Ma démarche est pensée pour correspondre à vos besoins, et pas pour &quot;faire de l&apos;argent&quot;. Je prône l&apos;honnêteté pour tisser une vraie relation de confiance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pillar 1 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center">
              <Image src="/images/picto-violin.png" alt="Pas de blabla" width={44} height={44} className="object-contain" />
            </div>
            <h3 className="text-xl font-bold text-[#562C2C]">Pas de blabla</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Mon but est que vous compreniez tout, et pas de vous vendre la lune.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center">
              <Image src="/images/picto-cash.png" alt="Pas de frais cachés" width={44} height={44} className="object-contain" />
            </div>
            <h3 className="text-xl font-bold text-[#562C2C]">Pas de frais cachés</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Le contrat et les documents sont clairs, et vous n&apos;aurez aucune mauvaise surprise.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center">
              <Image src="/images/picto-money.png" alt="Pas d'incitation à dépenser" width={44} height={44} className="object-contain" />
            </div>
            <h3 className="text-xl font-bold text-[#562C2C]">Pas d&apos;incitation à dépenser</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Je vous propose plusieurs options, à vous de choisir celle qui vous correspond.
            </p>
          </div>

        </div>
      </section>

      {/* FEATURED PACKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="bg-[#127475]/5 py-16 px-8 rounded-3xl border border-[#127475]/20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#127475] bg-[#0E9594]/10 px-3 py-1 rounded-full">
                Formules Clé-en-Main
              </span>
              <h2 className="text-3xl font-extrabold text-[#562C2C] mt-3">Mes Formules d&apos;Accompagnement</h2>
            </div>
            <Link
              href="/services-et-tarifs"
              className="inline-flex items-center gap-2 font-bold text-[#127475] hover:text-[#F2542D] text-sm transition-colors"
            >
              <span>Voir tous les 4 packs &amp; tarifs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packs.map((pack) => {
              const features: string[] = JSON.parse(pack.features);
              return (
                <div
                  key={pack.id}
                  className={`bg-white rounded-3xl p-8 border ${
                    pack.popularBadge ? "border-[#F2542D] shadow-lg ring-2 ring-[#F2542D]/20 relative" : "border-slate-200/80 shadow-sm"
                  } flex flex-col justify-between space-y-6`}
                >
                  {pack.popularBadge && (
                    <span className="absolute -top-3.5 right-6 bg-[#F2542D] text-white text-xs font-bold uppercase px-3 py-1 rounded-full shadow-xs">
                      Formule Populaire
                    </span>
                  )}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-[#562C2C]">{pack.title}</h3>
                    <p className="text-xs text-slate-500 font-semibold">{pack.audience}</p>
                    <div className="pt-2 flex items-baseline gap-2">
                      <span className="text-3xl font-extrabold text-[#562C2C]">{pack.price}</span>
                      <span className="text-xs text-slate-500 font-medium">({pack.billingPeriod})</span>
                    </div>
                    <p className="text-sm text-slate-600 pt-2">{pack.description}</p>
                    
                    <ul className="space-y-2.5 text-xs text-slate-700 pt-4 border-t border-slate-100">
                      {features.slice(0, 4).map((f, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#0E9594] shrink-0 mt-0.5 stroke-[3]" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/services-et-tarifs"
                    className="w-full text-center py-3 px-4 rounded-xl font-bold text-sm bg-[#562C2C] hover:bg-[#F2542D] text-white transition-colors block"
                  >
                    Découvrir cette formule
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED PORTFOLIO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#127475] bg-[#0E9594]/10 px-3 py-1 rounded-full">
              Réalisations &amp; Fiertés
            </span>
            <h2 className="text-3xl font-extrabold text-[#562C2C] mt-3">Ils m&apos;ont fait confiance</h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 font-bold text-[#127475] hover:text-[#F2542D] text-sm transition-colors"
          >
            <span>Explorer tout le portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#562C2C]/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
                    {project.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-[#562C2C]">{project.title}</h3>
                  <p className="text-xs text-[#127475] font-semibold">{project.clientName} ({project.year})</p>
                  <p className="text-sm text-slate-600 line-clamp-2">{project.summary}</p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <Link
                  href="/portfolio"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-xs bg-slate-100 hover:bg-[#127475] hover:text-white text-slate-800 transition-colors"
                >
                  <Eye className="w-4 h-4" /> Voir le projet
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="bg-[#562C2C] text-white rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden space-y-8 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Prêt.e à faire briller votre savoir-faire en ligne ?
            </h2>
            <p className="text-[#F5DFBB] text-base sm:text-lg">
              Réservez votre appel découverte gratuit de 30 minutes sans aucun engagement. On fait le point sur vos besoins et vos envies.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-2xl font-bold text-white bg-[#F2542D] hover:bg-[#d8431f] shadow-lg transition-all hover:scale-105"
            >
              Réserver mon entretien gratuit
            </Link>
            <a
              href="tel:+33635259113"
              className="px-8 py-4 rounded-2xl font-bold text-[#F5DFBB] border border-[#F5DFBB]/40 hover:bg-[#562C2C]/80 transition-colors"
            >
              Appeler le 06 35 25 91 13
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
