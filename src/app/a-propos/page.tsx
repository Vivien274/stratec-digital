import Image from "next/image";
import Link from "next/link";
import YellowBrushUnderline from "@/components/YellowBrushUnderline";
import { 
  HeartHandshake, 
  ArrowRight, 
  MapPin, 
  ShieldCheck, 
  Calendar, 
  Accessibility, 
  CheckCircle2, 
  Sparkles, 
  Coffee, 
  Check, 
  XCircle,
  Brain,
  Eye,
  Layers,
  GraduationCap
} from "lucide-react";

export const metadata = {
  title: "À propos — Rendre le numérique accessible, parce que je suis concernée | Stratec Digital",
  description: "Découvrez le parcours de Stéphanie ROCQ, référente accessibilité web pour les agences. Un regard authentique, ancré dans le vécu et tourné vers la pédagogie.",
};

export default function AboutPage() {
  const principles = [
    {
      icon: Sparkles,
      title: "1. Clarté & zéro jargon",
      description:
        "Je m'exprime simplement, sans jargon technique inutile ni anglicismes à la mode. Si une recommandation n'est pas limpide pour votre équipe, c'est que je l'ai mal expliquée.",
      bgColor: "bg-[#F5DFBB]/30",
      borderColor: "border-[#F5DFBB]",
    },
    {
      icon: MapPin,
      title: "2. Visio & Présentiel adapté",
      description:
        "Je travaille principalement en visioconférence dans toute la France et la francophonie. Je peux me déplacer sur site en métropole lilloise, à condition que vos locaux soient physiquement accessibles aux personnes à mobilité réduite.",
      bgColor: "bg-[#0E9594]/10",
      borderColor: "border-[#0E9594]/30",
    },
    {
      icon: ShieldCheck,
      title: "3. Conseiller & Contrôler (sans coder)",
      description:
        "Je ne fais pas de remise en conformité technique directe ni de code à la place de vos développeurs. Vous gardez 100 % de la main sur votre base de code, et votre équipe monte durablement en compétences.",
      bgColor: "bg-[#F2542D]/10",
      borderColor: "border-[#F2542D]/30",
    },
    {
      icon: GraduationCap,
      title: "4. Honnêteté & formation continue",
      description:
        "L'accessibilité web évolue en permanence. Je me forme en continu et je vous le dis en toute franchise, y compris sur ce que je ne maîtrise pas encore.",
      bgColor: "bg-[#562C2C]/10",
      borderColor: "border-[#562C2C]/20",
    },
  ];

  return (
    <div className="space-y-24 pb-20 pt-8 bg-[#FAF4F2] text-[#562C2C]">
      
      {/* 1. EN-TÊTE (HERO) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 text-center max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5DFBB] text-[#562C2C] border border-[#562C2C]/10 text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-sm">
            <Accessibility className="w-4 h-4 text-[#F2542D]" />
            <span>Mon parcours &bull; Ma vision</span>
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#562C2C] tracking-tight leading-tight">
            Rendre le numérique accessible,{" "}
            <span className="relative inline-block px-1">
              parce que je suis concernée.
              <YellowBrushUnderline variant="thick" color="#F2542D" />
            </span>
          </h1>

          <p className="text-slate-700 text-base sm:text-xl leading-relaxed font-medium max-w-3xl mx-auto">
            Derrière Stratec Digital, il y a Stéphanie : un parcours façonné par le produit numérique, une écoute aiguisée par le terrain, et un regard unique forgé par un quotidien avec le handicap.
          </p>
        </div>
      </section>

      {/* 2. MON HISTOIRE & PHOTO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Photo Stéphanie */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-white p-4 rounded-3xl border border-slate-200 shadow-xl">
              <div className="relative h-[440px] w-full rounded-2xl overflow-hidden bg-slate-100">
                <Image
                  src="/images/pourquoi-stratec.webp"
                  alt="Portrait de Stéphanie ROCQ, référente accessibilité numérique"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="p-4 bg-[#562C2C] text-white rounded-2xl mt-4 space-y-1">
                <div className="flex items-center justify-between">
                  <h2 className="font-bold text-lg text-[#F5DFBB]">Stéphanie ROCQ</h2>
                  <span className="text-xs bg-[#C43219] text-white px-2.5 py-0.5 rounded-full font-semibold">Référente Accessibilité</span>
                </div>
                <p className="text-xs text-[#F5DFBB] flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#F5DFBB]" /> Basée à Comines (59560) &bull; Métropole lilloise
                </p>
              </div>
            </div>
          </div>

          {/* Récit de parcours */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0E9594]/15 text-[#127475] text-xs font-extrabold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-[#127475]" />
              <span>D&apos;où je viens</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-[#562C2C] leading-tight">
              Du monde des achats et du produit au cœur de l&apos;accessibilité
            </h2>

            <div className="prose prose-slate text-slate-700 space-y-4 text-base sm:text-lg leading-relaxed">
              <p>
                J&apos;ai commencé par les langues étrangères et le commerce international, puis j&apos;ai travaillé plusieurs années comme acheteuse et cheffe de produit. Ce premier métier m&apos;a appris deux choses essentielles : négocier avec pragmatisme et toujours partir du besoin réel de l&apos;utilisateur.
              </p>
              <p>
                En 2023, j&apos;amorce un virage en validant un <strong>MBA en stratégie et transformation numérique</strong>, suivi d&apos;une expérience de Product Manager. Ce passage m&apos;a permis de comprendre de l&apos;intérieur le fonctionnement d&apos;une équipe technique : les méthodes agiles, les contraintes de backlog, les sprints et la nécessité d&apos;arbitrer intelligemment entre temps et budget.
              </p>
              <p>
                Trouver sa place dans ce milieu n&apos;a cependant pas été simple : des postes souvent pensés uniquement pour des personnes pouvant bouger sans contrainte. J&apos;ai donc choisi de m&apos;installer à mon compte, d&apos;abord pour accompagner des artisans, créateurs et thérapeutes qui galéraient avec le numérique au point de freiner leur activité.
              </p>
            </div>

            {/* Encart Product Management & Agilité */}
            <div className="p-5 bg-white border-l-4 border-[#127475] rounded-r-2xl shadow-sm text-sm sm:text-base text-slate-700 space-y-1">
              <p className="font-extrabold text-[#127475] uppercase tracking-wider text-xs">Un atout pour vos projets</p>
              <p className="font-medium text-[#562C2C]">
                Mon expérience du <strong>produit</strong> et de la <strong>gestion de projet agile</strong> me permet de dialoguer efficacement avec vos <strong>designers, développeurs et chefs de projet</strong> : je sais que l&apos;accessibilité ne doit pas bloquer votre <strong>planning de livraison</strong>, mais s&apos;intégrer naturellement à vos <strong>étapes de travail</strong>.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. POURQUOI L'ACCESSIBILITÉ & LE VÉCU */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-[#562C2C]/10 shadow-xl space-y-10">
          
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5DFBB] text-[#562C2C] text-xs font-extrabold uppercase tracking-wider border border-[#562C2C]/10">
              <Accessibility className="w-3.5 h-3.5 text-[#F2542D]" />
              <span>Pourquoi l&apos;accessibilité ?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#562C2C] leading-tight tracking-tight">
              Trottoirs mal pensés dans la ville, obstacles invisibles sur le web
            </h2>

            <div className="space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed pt-2">
              <p>
                Au fil de mes accompagnements, un constat s&apos;est imposé : dans le numérique comme dans la vie de tous les jours, <strong>l&apos;accessibilité n&apos;avance que si quelqu&apos;un s&apos;en préoccupe réellement</strong>.
              </p>
              <p>
                Je vis moi-même avec un handicap physique au quotidien. Je connais les trottoirs sans rampe, les portes trop lourdes, les lieux inadaptés. Et je retrouve exactement les mêmes barrières en ligne : des contrastes trop faibles, des parcours impossibles à suivre au clavier, des formulaires confus qui ferment la porte à des personnes qui voulaient simplement utiliser le service.
              </p>
            </div>
          </div>

          {/* Focus Accessibilité Cognitive */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-[#562C2C]/10">
            
            <div className="bg-[#FAF4F2] p-7 rounded-2xl border border-[#562C2C]/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#0E9594]/15 text-[#0E9594] flex items-center justify-center font-bold">
                <Brain className="w-5 h-5 text-[#0E9594]" />
              </div>
              <h3 className="text-lg font-bold text-[#562C2C]">
                Un regard attentif sur l&apos;accessibilité cognitive
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Ce vécu m&apos;apporte un regard particulièrement affûté sur l&apos;accessibilité cognitive — un sujet souvent moins connu et moins abordé que la cécité ou la surdité, qui occupent pourtant le devant de la scène. Des parcours limpides, une hiérarchie visuelle reposante et une information directe profitent à tout le monde.
              </p>
            </div>

            <div className="bg-[#FAF4F2] p-7 rounded-2xl border border-[#562C2C]/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F2542D]/15 text-[#F2542D] flex items-center justify-center font-bold">
                <HeartHandshake className="w-5 h-5 text-[#F2542D]" />
              </div>
              <h3 className="text-lg font-bold text-[#562C2C]">
                Votre alliée pour porter le sujet en agence
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Si tout avait été pensé pour tout le monde dès le départ, nous n&apos;aurions même pas besoin d&apos;en parler. En attendant, mon rôle est de vous aider à intégrer l&apos;accessibilité simplement dans vos projets d&apos;agence, <strong>sans culpabiliser personne</strong>, avec des mots clairs et des actions concrètes.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. MES 4 PRINCIPES DE TRAVAIL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5DFBB] text-[#562C2C] text-xs font-extrabold uppercase tracking-wider border border-[#562C2C]/10">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F2542D]" />
              <span>Méthode &amp; Éthique</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#562C2C]">
              Ma façon de travailler avec vos équipes
            </h2>
            <p className="text-slate-700 text-sm sm:text-base font-medium">
              4 règles simples qui garantissent une collaboration fluide, transparente et respectueuse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((pr, idx) => {
              const IconComponent = pr.icon;
              return (
                <div
                  key={idx}
                  className={`p-6 sm:p-8 rounded-2xl border-2 ${pr.borderColor} ${pr.bgColor} space-y-4 shadow-sm hover:-translate-y-1 transition-transform`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#562C2C] shadow-xs">
                      <IconComponent className="w-5 h-5 text-[#C43219]" />
                    </div>
                    <h3 className="text-xl font-extrabold text-[#562C2C]">{pr.title}</h3>
                  </div>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {pr.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. CTA FINAL */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#562C2C] to-[#3a1d1d] text-white rounded-3xl p-10 sm:p-14 text-center space-y-8 shadow-2xl relative overflow-hidden border border-[#F5DFBB]/20">
          
          <div className="w-16 h-16 rounded-3xl bg-[#F5DFBB] text-[#562C2C] flex items-center justify-center mx-auto shadow-md">
            <Coffee className="w-8 h-8 text-[#C43219]" />
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black text-[#F5DFBB]">
              Parlons de vos projets
            </h2>
            <p className="text-[#F5DFBB] text-base sm:text-lg leading-relaxed">
              Le bon feeling et la confiance mutuelle sont indispensables. Réservez un premier échange de 30 minutes en visio, gratuit et sans engagement, pour faire le point sur vos enjeux d&apos;accessibilité et voir comment nous pouvons avancer ensemble.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
            <a
              href="https://calendar.app.google/LmPYPbdEHxwC4ewq6"
              target="_blank"
              rel="noreferrer"
              aria-label="Réserver mon appel de découverte sur Google Agenda (ouvre un nouvel onglet)"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-extrabold text-base bg-[#C43219] hover:bg-[#9E230E] text-white shadow-lg transition-all transform hover:scale-105"
            >
              <Calendar className="w-5 h-5 text-[#F5DFBB]" />
              <span>Réserver mon appel de découverte sur Google Agenda</span>
            </a>
            
            <Link
              href="/#offres"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
            >
              <span>Découvrir les offres</span>
              <ArrowRight className="w-4 h-4 text-[#F5DFBB]" />
            </Link>
          </div>

          <p className="text-xs sm:text-sm text-[#F5DFBB]/80 font-medium">
            ✓ 30 min concrètes en visio &bull; Zéro discours commercial forcé &bull; Pistes d&apos;action directes
          </p>

        </div>
      </section>

    </div>
  );
}
