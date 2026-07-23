import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import TradeRotater from "@/components/TradeRotater";
import YellowBrushUnderline from "@/components/YellowBrushUnderline";
import { Check, ArrowRight, ShieldCheck, Zap, Eye, Phone, Calendar, HeartHandshake, Compass, Sparkles, Mail } from "lucide-react";

export const revalidate = 60; // ISR 60 seconds

export default async function HomePage() {
  const allPacks = await prisma.pack.findMany({
    orderBy: { sortOrder: "asc" },
  });

  // Display "sur les réseaux" instead of "coaching-tranquille" on home page
  const packs = allPacks.filter((p) => p.slug !== "coaching-tranquille").slice(0, 3);

  const featuredProjects = await prisma.project.findMany({
    where: { featured: true },
    orderBy: { sortOrder: "asc" },
    take: 3,
  });

  const services = [
    {
      title: "Création de site internet",
      description: "Un site qui te ressemble, optimisé pour le référencement local, et que tu sais utiliser toi-même. Fini la dépendance aux prestataires.",
      icon: "🌐",
      link: "/services-et-tarifs#site",
      popular: false,
    },
    {
      title: "Réseaux sociaux & contenu",
      description: "On choisit les bons réseaux pour ton activité et je t'apprends à créer du contenu qui attire tes clients idéaux — sans y passer tes nuits.",
      icon: "📱",
      link: "/services-et-tarifs#reseaux",
      popular: true,
    },
    {
      title: "Référencement local & Google",
      description: "Fiche Google My Business, avis clients, optimisation locale — pour que les artisans et créateurs près de chez toi te trouvent en deux clics.",
      icon: "📍",
      link: "/services-et-tarifs#google",
      popular: false,
    },
    {
      title: "Stratégie digitale pour artisans",
      description: "On fait le point sur ta situation et on définit les actions prioritaires pour développer ta présence en ligne. Sans usine à gaz.",
      icon: "🎯",
      link: "/services-et-tarifs#strategie",
      popular: false,
    },
  ];

  return (
    <div className="overflow-x-hidden bg-[#FAF4F2] text-[#562C2C] pb-16 selection:bg-[#F5DFBB] selection:text-[#562C2C]">

      {/* HERO SECTION - CRAFTO DATA ANALYSIS LAYOUT WITH STRATEC BRAND PALETTE */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F5DFBB]/40 via-[#FAF4F2] to-white pt-10 pb-20 lg:pt-14 lg:pb-28 border-b border-[#562C2C]/10">

        {/* Decorative Floating Color Glows */}
        <div className="absolute top-12 left-[15%] w-72 h-72 bg-[#F2542D]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-[20%] w-96 h-96 bg-[#0E9594]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">

              {/* Badge Tag: Stéphanie - Stratec Digital */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#562C2C] text-[#F5DFBB] text-xs font-extrabold uppercase tracking-wider shadow-sm">
                <Compass className="w-3.5 h-3.5 text-[#F2542D] stroke-[2.5]" />
                <span>Stéphanie &bull; Stratec Digital</span>
              </div>

              {/* Dynamic Text Rotator Tagline */}
              <div className="pt-1">
                <TradeRotater />
              </div>

              {/* Main Heading H1 with Stratec Underline Accent */}
              <div className="space-y-3 pt-2">
                <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-black text-[#562C2C] tracking-tight leading-[1.1]">
                  Ton{" "}
                  <span className="relative inline-block px-1">
                    GPS du digital
                    <YellowBrushUnderline variant="thick" color="#F2542D" />
                  </span>
                </h1>

                {/* H2 Sub-headline from WP */}
                <h2 className="text-xl sm:text-2xl font-bold text-[#127475] tracking-tight leading-snug">
                  Pour les artisans et créateurs qui veulent se lancer sans se perdre
                </h2>
              </div>

              {/* Paragraph from WP */}
              <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed max-w-2xl pt-1">
                Je t&apos;aide à construire ta présence en ligne, à trouver tes premiers clients sur le web, et à comprendre enfin ce que tu fais — sans jargon, sans arnaque, et sans que ça te coûte un bras.
              </p>

              {/* Dual Action CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <Link
                  href="/services-et-tarifs"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-white bg-[#562C2C] hover:bg-[#F2542D] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>Découvrir les services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-[#562C2C] bg-white hover:bg-[#F5DFBB]/40 border border-[#562C2C]/20 shadow-sm transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-4 h-4 text-[#F2542D]" />
                  <span>Je réserve mon appel gratuit</span>
                </Link>
              </div>

            </div>

            {/* Right Graphic Column with Floating Cards */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end z-20">

              <div className="relative w-full max-w-md lg:max-w-none">

                {/* Main Hero Card Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-[#562C2C]/10 p-3 group">
                  <Image
                    src="/images/BG_Head-Stef.webp"
                    alt="Stéphanie ROCQ Stratec Digital"
                    width={560}
                    height={520}
                    priority
                    className="w-full h-auto object-cover rounded-2xl group-hover:scale-102 transition-transform duration-500"
                  />

                  {/* Floating Top Badge */}
                  <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-[#F5DFBB] flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#0E9594]/15 text-[#0E9594] flex items-center justify-center font-bold text-lg">
                      ✨
                    </div>
                    <div>
                      <p className="text-xs font-extrabold text-[#562C2C]">100% Pédagogie</p>
                      <p className="text-[11px] text-[#127475] font-semibold">Autonomie garantie</p>
                    </div>
                  </div>

                  {/* Floating Bottom Card Badge */}
                  <div className="absolute bottom-6 right-6 bg-[#562C2C] text-[#F5DFBB] p-4 rounded-2xl shadow-2xl border border-[#F2542D]/30 max-w-[220px]">
                    <div className="flex items-center gap-2 mb-1 text-[#F2542D]">
                      <HeartHandshake className="w-4 h-4 text-[#F2542D]" />
                      <span className="text-xs font-bold uppercase tracking-wider">Confiance &amp; Éthique</span>
                    </div>
                    <p className="text-[11px] text-[#F5DFBB]/90 leading-tight">
                      Pas de frais cachés, pas d&apos;abonnements inutiles.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 1: EFFECTIVE BENEFITS ("Et si le digital arrêtait de te donner mal à la tête ?") */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Decorative Image Box */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white p-4 rounded-3xl border border-[#562C2C]/10 shadow-xl relative">
              <Image
                src="/images/stratec-digital-stef.png"
                alt="Accompagnement Stratec Digital"
                width={500}
                height={350}
                className="w-full h-auto object-contain rounded-2xl"
              />
              <div className="absolute -bottom-5 -right-5 bg-[#F2542D] text-white px-5 py-3 rounded-2xl shadow-lg font-black text-sm uppercase tracking-wider flex items-center gap-2 border border-white/20">
                <Sparkles className="w-4 h-4 text-[#F5DFBB]" />
                <span>Simplicité &amp; Clarté</span>
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-7 space-y-6">

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5DFBB] text-[#562C2C] text-xs font-extrabold uppercase tracking-wider border border-[#562C2C]/10">
              <span>Bénéfices</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#562C2C] leading-tight tracking-tight">
              Et si le digital arrêtait de te donner{" "}
              <span className="relative inline-block font-extrabold text-[#562C2C]">
                mal à la tête ?
                <YellowBrushUnderline variant="thick" color="#0E9594" />
              </span>
            </h2>

            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed pt-2">
              <p>
                Tu as monté ton activité à la force du poignet. Ton savoir-faire, il est de derrière les fagots &mdash; aucun doute là-dessus. Mais dès qu&apos;on parle de site internet, de réseaux sociaux ou de fiche Google My Business… c&apos;est la croix et la bannière.
              </p>
              <p>
                Tu ne sais pas par où commencer. Tu as peur de te faire arnaquer. Et franchement, t&apos;as pas le temps pour ça.
              </p>
              <p className="font-bold text-[#F2542D] text-lg">
                Bonne nouvelle : c&apos;est exactement pour ça que j&apos;existe.
              </p>
            </div>

            {/* Check Bullet Points with Teal icons */}
            <div className="pt-2 space-y-3.5">
              <div className="flex items-center gap-3.5">
                <div className="w-6 h-6 rounded-full bg-[#0E9594] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="font-bold text-[#562C2C] text-base">Un accompagnement personnalisé</span>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-6 h-6 rounded-full bg-[#0E9594] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="font-bold text-[#562C2C] text-base">Une approche pédagogique</span>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-6 h-6 rounded-full bg-[#0E9594] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="font-bold text-[#562C2C] text-base">Je te facilite la vie en utilisant un vocabulaire simple</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-[#F2542D] hover:bg-[#d8431f] shadow-md transition-all"
              >
                <span>En savoir plus sur mon approche</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/services-et-tarifs"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-[#562C2C] bg-white hover:bg-[#F5DFBB]/50 border border-[#562C2C]/20 transition-all"
              >
                <span>Explorer les services</span>
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 2: SERVICES CARDS GRID ("Ce qu'on peut construire ensemble") */}
      <section className="bg-white py-20 border-y border-[#562C2C]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-5xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#127475]/10 text-[#127475] text-xs font-extrabold uppercase tracking-wider border border-[#127475]/20">
              <span>CE QU&apos;ON PEUT CONSTRUIRE ENSEMBLE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#562C2C] leading-tight tracking-tight">
              Pas de formule inutile. Juste ce dont tu as vraiment besoin pour être{" "}
              <span className="relative inline-block font-extrabold text-[#562C2C]">
                visible, crédible et autonome en ligne.
                <YellowBrushUnderline variant="wave" color="#F2542D" />
              </span>
            </h2>
          </div>

          {/* 4 Cards Grid - Crafto Icon Box Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((srv, index) => (
              <div
                key={index}
                className={`bg-[#FAF4F2]/50 p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between space-y-6 relative ${srv.popular
                    ? "border-[#F2542D] ring-2 ring-[#F2542D]/20 shadow-xl bg-white"
                    : "border-[#562C2C]/10 shadow-sm hover:shadow-md"
                  }`}
              >
                {srv.popular && (
                  <span className="absolute -top-3.5 right-6 bg-[#F2542D] text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow-xs tracking-wider">
                    POPULAR
                  </span>
                )}

                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#F5DFBB]/60 border border-[#562C2C]/10 flex items-center justify-center text-2xl shadow-xs">
                    {srv.icon}
                  </div>

                  <h3 className="text-xl font-bold text-[#562C2C] leading-snug">
                    {srv.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#562C2C]/10">
                  <Link
                    href={srv.link}
                    className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-[#127475] hover:text-[#F2542D] transition-colors group"
                  >
                    <span>En savoir plus</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* MARQUEE BANNER TICKER WITH STRATEC COLOR PALETTE */}
      <section className="w-full bg-[#562C2C] text-white overflow-hidden py-5 border-y border-[#562C2C]">
        <div className="w-full flex items-center overflow-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-8 text-sm sm:text-base lg:text-lg font-black uppercase tracking-widest">
            <span className="text-stroke-light">&bull; RÉSEAUX SOCIAUX</span>
            <span className="text-[#F5DFBB]">&bull; VENDRE EN LIGNE</span>
            <span className="text-[#F2542D]">&bull; TROUVER DES CLIENTS</span>
            <span className="text-white">&bull; EXPLIQUER VOS SERVICES</span>
            <span className="text-[#0E9594]">&bull; FACILITER LE TRAVAIL</span>
            <span className="text-[#F5DFBB]">&bull; ÉVOLUER</span>

            {/* Repeated set for seamless infinite loop */}
            <span className="text-stroke-light">&bull; RÉSEAUX SOCIAUX</span>
            <span className="text-[#F5DFBB]">&bull; VENDRE EN LIGNE</span>
            <span className="text-[#F2542D]">&bull; TROUVER DES CLIENTS</span>
            <span className="text-white">&bull; EXPLIQUER VOS SERVICES</span>
            <span className="text-[#0E9594]">&bull; FACILITER LE TRAVAIL</span>
            <span className="text-[#F5DFBB]">&bull; ÉVOLUER</span>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY ME / DIFFERENTIATOR ("Pourquoi Stratec Digital plutôt qu'une agence classique ?") */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5DFBB] text-[#562C2C] text-xs font-extrabold uppercase tracking-wider border border-[#562C2C]/10">
            <span>POURQUOI MOI ?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#562C2C] leading-tight tracking-tight">
            Pourquoi{" "}
            <span className="relative inline-block font-extrabold text-[#562C2C]">
              Stratec Digital
              <YellowBrushUnderline variant="thick" color="#0E9594" />
            </span>{" "}
            plutôt qu&apos;une agence classique ?
          </h2>

          <div className="text-slate-700 text-base sm:text-lg leading-relaxed space-y-4 text-center max-w-3xl mx-auto pt-4">
            <p>
              Saperlipopette, les agences web, ça peut être bien &mdash; mais souvent elles te livrent un site, encaissent le chèque, et bonne chance pour la suite.
            </p>
            <p>
              Moi, je travaille différemment. Mon objectif c&apos;est que tu comprennes ce que tu fais en ligne, que tu sois autonome, et que tu n&apos;aies plus besoin de moi à terme. Oui, c&apos;est un drôle de modèle &mdash; mais c&apos;est mon engagement.
            </p>
            <p className="font-bold text-[#127475]">
              Ici pas de promesses miracles, pas d&apos;abonnements inutiles, pas de jargon de derrière les fagots. Juste une vraie stratégie, adaptée à ton budget de TPE ou d&apos;indépendant.
            </p>
          </div>
        </div>

        {/* Crafto Process Step 6 Style: Big Stroke Numbers 01, 02, 03 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">

          {/* Step 01 */}
          <div className="bg-white p-8 rounded-3xl border border-[#562C2C]/10 shadow-sm hover:shadow-md transition-all space-y-4 relative overflow-hidden">
            <div className="text-6xl sm:text-7xl font-black text-stroke opacity-30 select-none">
              01
            </div>
            <h3 className="text-xl font-bold text-[#562C2C]">Pédagogie avant tout</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              J&apos;explique tout avec des mots normaux. Tu sors de chaque session en ayant vraiment compris.
            </p>
          </div>

          {/* Step 02 */}
          <div className="bg-white p-8 rounded-3xl border border-[#562C2C]/10 shadow-sm hover:shadow-md transition-all space-y-4 relative overflow-hidden">
            <div className="text-6xl sm:text-7xl font-black text-stroke opacity-30 select-none">
              02
            </div>
            <h3 className="text-xl font-bold text-[#562C2C]">Spécialisée artisans &amp; créateurs</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Je connais tes contraintes : petit budget, peu de temps, et méfiance totale envers les arnaques du web. Normal.
            </p>
          </div>

          {/* Step 03 */}
          <div className="bg-white p-8 rounded-3xl border border-[#562C2C]/10 shadow-sm hover:shadow-md transition-all space-y-4 relative overflow-hidden">
            <div className="text-6xl sm:text-7xl font-black text-stroke opacity-30 select-none">
              03
            </div>
            <h3 className="text-xl font-bold text-[#562C2C]">Accompagnement vers l&apos;autonomie</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Je suis là pour te guider, pas pour te rendre dépendant. Le GPS t&apos;indique la route &mdash; c&apos;est toi qui conduis.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 5: FEATURED PACKS / FORMULES */}
      <section className="bg-white py-20 border-y border-[#562C2C]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#127475] bg-[#0E9594]/15 px-3.5 py-1 rounded-full">
                FORMULES CLÉ-EN-MAIN
              </span>
              <h2 className="text-3xl font-black text-[#562C2C] mt-3">Mes Formules d&apos;Accompagnement</h2>
            </div>
            <Link
              href="/services-et-tarifs"
              className="inline-flex items-center gap-2 font-bold text-sm text-[#127475] hover:text-[#F2542D] transition-colors"
            >
              <span>Voir tous les 4 packs &amp; tarifs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  className={`bg-[#FAF4F2]/60 rounded-3xl p-8 border ${pack.popularBadge
                      ? "border-[#F2542D] shadow-xl ring-2 ring-[#F2542D]/20 relative bg-white"
                      : "border-[#562C2C]/10 shadow-sm"
                    } flex flex-col justify-between space-y-6`}
                >
                  {pack.popularBadge && (
                    <span className="absolute -top-3.5 right-6 bg-[#F2542D] text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow-xs">
                      Formule Populaire
                    </span>
                  )}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-[#562C2C]">{pack.title}</h3>
                    <p className="text-xs text-slate-500 font-semibold">{pack.audience}</p>
                    <div className="pt-2 flex flex-wrap items-baseline justify-between gap-2">
                      <div>
                        <span className="text-3xl font-black text-[#562C2C]">{pack.price}</span>
                        <span className="text-xs text-slate-500 font-medium ml-1">({pack.billingPeriod})</span>
                      </div>
                      {pack.allowSplitPayment !== false && (
                        <span className="text-[11px] font-semibold text-[#127475] bg-[#F5DFBB]/60 px-2 py-0.5 rounded-md">
                          3x sans frais
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-600 pt-2">{pack.description}</p>

                    <ul className="space-y-2.5 text-xs text-slate-700 pt-4 border-t border-[#562C2C]/10">
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
                    className="w-full text-center py-3.5 px-4 rounded-xl font-bold text-sm bg-[#562C2C] hover:bg-[#F2542D] text-white transition-colors block shadow-sm"
                  >
                    Découvrir cette formule
                  </Link>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 6: FEATURED PORTFOLIO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#562C2C] bg-[#F5DFBB] px-3.5 py-1 rounded-full border border-[#562C2C]/10">
              Réalisations &amp; Fiertés
            </span>
            <h2 className="text-3xl font-black text-[#562C2C] mt-3">Ils m&apos;ont fait confiance</h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 font-bold text-sm text-[#127475] hover:text-[#F2542D] transition-colors"
          >
            <span>Explorer tout le portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#562C2C]/10 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
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
                  <p className="text-xs text-[#0E9594] font-extrabold">{project.clientName} ({project.year})</p>
                  <p className="text-sm text-slate-600 line-clamp-2">{project.summary}</p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <Link
                  href="/portfolio"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-xs bg-[#FAF4F2] hover:bg-[#127475] hover:text-white text-[#562C2C] transition-colors"
                >
                  <Eye className="w-4 h-4" /> Voir le projet
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: FINAL CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="bg-[#562C2C] text-white rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden space-y-8 shadow-2xl">

          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              Prêt.e à faire briller votre savoir-faire en ligne ?
            </h2>
            <p className="text-[#F5DFBB] text-base sm:text-lg">
              Réservez votre appel découverte gratuit de 30 minutes sans aucun engagement. On fait le point sur vos besoins et vos envies.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2 relative z-10">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl font-bold text-white bg-[#F2542D] hover:bg-[#d8431f] shadow-lg transition-all transform hover:scale-105 inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Réserver mon entretien gratuit</span>
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl font-bold text-[#F5DFBB] border border-[#F5DFBB]/40 hover:bg-white/10 transition-colors inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-[#F2542D]" />
              <span>Me contacter par email</span>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
