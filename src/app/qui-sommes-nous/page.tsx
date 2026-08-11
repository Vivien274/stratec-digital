import Image from "next/image";
import Link from "next/link";
import { 
  HeartHandshake, 
  ArrowRight, 
  MapPin, 
  ShieldCheck, 
  PhoneCall, 
  FileCheck, 
  Layers, 
  Rocket, 
  Clock, 
  Compass, 
  Coffee, 
  Sparkles, 
  Calendar, 
  ExternalLink,
  Target,
  Zap,
  CheckCircle2
} from "lucide-react";

export const metadata = {
  title: "À propos — La petite histoire de ton GPS du digital | Stratec Digital",
  description: "Découvrez l'histoire de Stéphanie ROCQ et Stratec Digital, l'alliée du quotidien des artisans, créateurs et TPE pour faire décoller leur présence en ligne.",
};

export default function AboutPage() {
  const pillars = [
    {
      emoji: "🍵",
      title: "1. La pédagogie & la clarté",
      description:
        "Pas de jargon barbare pour faire savant. On parle un français simple et accessible. Si une étape n'est pas claire, c'est que je l'ai mal expliquée — point barre. Et toujours autour d'une bonne tasse de thé !",
      bgColor: "bg-[#F5DFBB]/30",
      borderColor: "border-[#F5DFBB]",
    },
    {
      emoji: "🤝",
      title: "2. L'autonomie comme objectif",
      description:
        "Mon but n'est pas de te rendre dépendant pour le moindre changement de virgule. Je te forme, je t'outille et je te donne les clés pour que tu prennes confiance et gères ton activité sereinement.",
      bgColor: "bg-[#0E9594]/10",
      borderColor: "border-[#0E9594]/30",
    },
    {
      emoji: "🛡️",
      title: "3. La protection de ton budget",
      description:
        "On va à l'essentiel. Pas besoin de fonctionnalités hors de prix qui ne valent pas tripette pour ton activité : on investit uniquement sur ce qui t'apporte de vrais clients.",
      bgColor: "bg-[#F2542D]/10",
      borderColor: "border-[#F2542D]/30",
    },
    {
      emoji: "📍",
      title: "4. L'ancrage local & humain",
      description:
        "Basée dans les Hauts-de-France, je travaille à taille humaine. Que l'on collabore en présentiel ou à distance, c'est l'écoute, la bienveillance et la proximité qui guident chaque projet.",
      bgColor: "bg-[#562C2C]/10",
      borderColor: "border-[#562C2C]/20",
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Du temps pour ton cœur de métier",
      description:
        "Fini de passer tes dimanches soirs à batailler avec tes réglages web ou tes visuels. Concentre-toi sur tes clients, je m'occupe du reste.",
    },
    {
      icon: Sparkles,
      title: "Une présence web sur-mesure",
      description:
        "Pas de modèle générique. Ton site et ta communication reflètent ta vraie personnalité et la qualité exceptionnelle de ton travail.",
    },
    {
      icon: Compass,
      title: "La sérénité d'une feuille de route claire",
      description:
        "Tu ne navigues plus à vue. Tu sais exactement quoi faire, comment le faire, et pourquoi tu le fais, étape par étape.",
    },
  ];

  return (
    <div className="space-y-24 pb-20 pt-8 bg-[#FAF4F2]">
      
      {/* BLOC 1 — HERO & HISTOIRE DU GPS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 text-center max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5DFBB] text-[#562C2C] border border-[#562C2C]/10 text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-sm">
            <Compass className="w-4 h-4 text-[#F2542D] animate-spin-slow" />
            <span>Ton GPS du digital</span>
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#562C2C] tracking-tight leading-tight">
            À propos — La petite histoire de ton GPS du digital
          </h1>
          <p className="text-slate-700 text-base sm:text-xl leading-relaxed font-medium">
            Derrière Stratec Digital, pas d&apos;armée de consultants en costume-cravate. Juste Stéphanie, une passionnée du web et des cultures, alliée du quotidien des artisans, créateurs et TPE qui veulent faire décoller leur présence en ligne sans s&apos;y perdre.
          </p>
        </div>
      </section>

      {/* BLOC 2 — MON PARCOURS : DE L'INTERNATIONAL AUX ARTISANS DU COIN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Photo Stéphanie */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-white p-4 rounded-3xl border border-slate-200 shadow-xl">
              <div className="relative h-[440px] w-full rounded-2xl overflow-hidden bg-slate-100">
                <Image
                  src="/images/pourquoi-stratec.webp"
                  alt="Stéphanie Rocq - Fondatrice de Stratec Digital"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="p-4 bg-[#562C2C] text-white rounded-2xl mt-4 space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg text-[#F5DFBB]">Stéphanie ROCQ</h3>
                  <span className="text-xs bg-[#F2542D] text-white px-2.5 py-0.5 rounded-full font-semibold">Fondatrice</span>
                </div>
                <p className="text-xs text-slate-200 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#F2542D]" /> Basée à Comines (59560) • Hauts-de-France
                </p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0E9594]/15 text-[#127475] text-xs font-extrabold uppercase tracking-wider">
              <HeartHandshake className="w-3.5 h-3.5 text-[#127475]" />
              <span>Mon Parcours &amp; Ma Vision</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-[#562C2C] leading-tight">
              Du monde des achats au numérique : une histoire de curiosité et d&apos;écoute
            </h2>

            <div className="prose prose-slate text-slate-700 space-y-4 text-base sm:text-lg leading-relaxed">
              <p>
                Passionnée par les langues, les cultures étrangères et les voyages, j’ai vécu deux expatriations et passé plus de cinq ans dans le secteur des achats. Ce parcours m&apos;a appris une chose essentielle : <strong>pour bien négocier ou former, il faut d&apos;abord comprendre l&apos;autre.</strong>
              </p>
              <p>
                Fin 2022, je décide d&apos;amorcer un tournant et de me consacrer pleinement au numérique. Mais très vite, un constat m&apos;a sauté aux yeux : le monde du web regorge de jargonneurs, de solutions complexes et d&apos;offres de derrière les fagots où l&apos;humain passe bien après la technique.
              </p>
              <p>
                D&apos;un côté, des agences web qui vous livrent un site puis vous laissent seul au milieu du désert. De l&apos;autre, des artisans et créateurs avec un savoir-faire en or, mais totalement démunis face aux réseaux sociaux, à la fiche Google ou au référencement local.
              </p>
            </div>

            {/* Highlighted Interpreter Box */}
            <div className="p-5 bg-white border-l-4 border-[#F2542D] rounded-r-2xl shadow-sm text-base font-bold text-[#562C2C] space-y-2">
              <p className="text-[#F2542D] font-extrabold text-sm uppercase tracking-wider">Ma mission</p>
              <p className="italic text-lg">
                &quot;J&apos;ai créé Stratec Digital pour être l&apos;interprète entre ton savoir-faire et le monde numérique.&quot;
              </p>
            </div>

            {/* Role Box */}
            <div className="p-5 bg-[#562C2C] text-white rounded-2xl space-y-2 shadow-md">
              <h4 className="font-extrabold text-[#F5DFBB] text-base flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#F2542D]" />
                <span>Mon rôle ? Devenir ton GPS du digital</span>
              </h4>
              <p className="text-sm text-slate-200 leading-relaxed">
                Je te montre la route la plus simple, je t&apos;évite les pièges et les dépenses inutiles, et je reste à tes côtés jusqu&apos;à ce que tu sois capable de conduire tout seul.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* BLOC 3 — MES 4 PILIERS DE TRAVAIL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#562C2C]/10 shadow-lg space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5DFBB] text-[#562C2C] text-xs font-extrabold uppercase tracking-wider border border-[#562C2C]/10">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F2542D]" />
              <span>Valeurs &amp; Méthode Crafto</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#562C2C]">
              Comment on avance ensemble (sans prise de tête)
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              4 piliers simples et concrets pour transformer ta présence en ligne sans stress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pil, idx) => (
              <div
                key={idx}
                className={`p-6 sm:p-8 rounded-2xl border-2 ${pil.borderColor} ${pil.bgColor} space-y-4 hover:-translate-y-1 transition-transform shadow-sm`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{pil.emoji}</span>
                  <h3 className="text-xl font-extrabold text-[#562C2C]">{pil.title}</h3>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {pil.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* BLOC 4 — CE QUE STRATEC DIGITAL APPORTE À TON ACTIVITÉ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0E9594]/15 text-[#127475] text-xs font-extrabold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 text-[#127475]" />
              <span>Bénéfices Concrets</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#562C2C]">
              Ce qu&apos;on gagne à faire équipe
            </h2>
            <p className="text-slate-600 text-base">
              Des résultats réels pour ton activité au quotidien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((b, idx) => {
              const IconComp = b.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-3xl border border-[#562C2C]/10 shadow-md space-y-4 relative overflow-hidden group hover:border-[#F2542D] transition-colors"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#F5DFBB] text-[#562C2C] flex items-center justify-center group-hover:bg-[#F2542D] group-hover:text-white transition-colors">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-extrabold text-[#562C2C]">{b.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{b.description}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* WORK METHODOLOGY - TIMELINE (CONSERVED) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#562C2C] text-white rounded-3xl p-8 sm:p-14 space-y-12 shadow-2xl relative overflow-hidden">
          
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F2542D]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="text-center max-w-2xl mx-auto space-y-3 relative z-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5DFBB]/20 text-[#F5DFBB] text-xs font-bold uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5 text-[#F2542D]" />
              <span>Méthodologie Étape par Étape</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#F5DFBB] tracking-tight">
              Comment se déroule notre collaboration ?
            </h2>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Un parcours fluide, transparent et sans mauvaise surprise, de notre premier contact à ton autonomie totale.
            </p>
          </div>

          {/* TIMELINE CONTAINER */}
          <div className="relative max-w-4xl mx-auto pt-4 pb-2 z-10">
            
            <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-1 bg-gradient-to-b from-[#F2542D] via-[#F5DFBB] to-[#0E9594] -translate-x-1/2 rounded-full" />
            <div className="md:hidden absolute left-6 top-8 bottom-8 w-1 bg-gradient-to-b from-[#F2542D] via-[#F5DFBB] to-[#0E9594] rounded-full" />

            <div className="space-y-12">
              
              {/* STEP 1 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center group">
                <div className="md:w-1/2 md:pr-12 md:text-right w-full pl-16 md:pl-0 space-y-2">
                  <span className="inline-block px-3 py-0.5 rounded-full bg-[#F2542D]/20 text-[#F5DFBB] border border-[#F2542D]/40 text-xs font-bold">
                    Étape 1 • 30 minutes
                  </span>
                  <h3 className="text-xl font-bold text-white flex md:justify-end items-center gap-2">
                    <span>Appel Découverte &amp; Écoute</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Un échange téléphonique ou en visioconférence totalement gratuit et sans engagement pour faire connaissance, comprendre ton métier, tes besoins réels et tes contraintes au quotidien.
                  </p>
                </div>

                <div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 w-12 h-12 rounded-2xl bg-[#F2542D] text-white flex items-center justify-center font-black text-base shadow-lg ring-4 ring-[#562C2C] group-hover:scale-110 transition-transform">
                  <PhoneCall className="w-5 h-5 text-white" />
                </div>

                <div className="hidden md:block md:w-1/2 md:pl-12" />
              </div>

              {/* STEP 2 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center group">
                <div className="hidden md:block md:w-1/2 md:pr-12" />

                <div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 w-12 h-12 rounded-2xl bg-[#F5DFBB] text-[#562C2C] flex items-center justify-center font-black text-base shadow-lg ring-4 ring-[#562C2C] group-hover:scale-110 transition-transform">
                  <FileCheck className="w-5 h-5 text-[#562C2C]" />
                </div>

                <div className="md:w-1/2 md:pl-12 w-full pl-16 md:pl-0 space-y-2">
                  <span className="inline-block px-3 py-0.5 rounded-full bg-[#F5DFBB]/20 text-[#F5DFBB] border border-[#F5DFBB]/40 text-xs font-bold">
                    Étape 2 • 24h à 48h
                  </span>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span>Proposition Claire &amp; Sur-Mesure</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Je te transmets une formule adaptée avec un devis clair, un tarif fixe sans abonnement caché, et un calendrier d&apos;intervention bien défini.
                  </p>
                </div>
              </div>

              {/* STEP 3 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center group">
                <div className="md:w-1/2 md:pr-12 md:text-right w-full pl-16 md:pl-0 space-y-2">
                  <span className="inline-block px-3 py-0.5 rounded-full bg-[#127475]/30 text-[#9AEBA3] border border-[#127475]/50 text-xs font-bold">
                    Étape 3 • 7 à 14 jours
                  </span>
                  <h3 className="text-xl font-bold text-white flex md:justify-end items-center gap-2">
                    <span>Création &amp; Ajustements en Direct</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Mise en place de tes outils (fiche Google, réseaux sociaux, site web). Je t&apos;envoie des points d&apos;avancement réguliers pour valider chaque étape ensemble.
                  </p>
                </div>

                <div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 w-12 h-12 rounded-2xl bg-[#0E9594] text-white flex items-center justify-center font-black text-base shadow-lg ring-4 ring-[#562C2C] group-hover:scale-110 transition-transform">
                  <Layers className="w-5 h-5 text-white" />
                </div>

                <div className="hidden md:block md:w-1/2 md:pl-12" />
              </div>

              {/* STEP 4 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center group">
                <div className="hidden md:block md:w-1/2 md:pr-12" />

                <div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 w-12 h-12 rounded-2xl bg-[#F2542D] text-white flex items-center justify-center font-black text-base shadow-lg ring-4 ring-[#562C2C] group-hover:scale-110 transition-transform">
                  <Rocket className="w-5 h-5 text-white" />
                </div>

                <div className="md:w-1/2 md:pl-12 w-full pl-16 md:pl-0 space-y-2">
                  <span className="inline-block px-3 py-0.5 rounded-full bg-[#F2542D]/20 text-[#F5DFBB] border border-[#F2542D]/40 text-xs font-bold">
                    Étape 4 • Suivi 30 jours offert
                  </span>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span>Livraison, Formation &amp; Autonomie</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Formation pas-à-pas pour administrer tes outils facilement, remise de tes identifiants 100% propriétaire et assistance réactive pour répondre à tes questions.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* BLOC 5 — CTA FINAL (LA RENCONTRE) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#562C2C] to-[#3a1d1d] text-white rounded-3xl p-10 sm:p-14 text-center space-y-8 shadow-2xl relative overflow-hidden border border-[#F5DFBB]/20">
          
          <div className="w-16 h-16 rounded-3xl bg-[#F5DFBB] text-[#562C2C] flex items-center justify-center mx-auto shadow-md">
            <Coffee className="w-8 h-8 text-[#F2542D]" />
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black text-[#F5DFBB]">
              On se prend un thé virtuel pour en parler ?
            </h2>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              Le feeling, c&apos;est la clé d&apos;un accompagnement réussi. Réserve un premier échange de 30 minutes, gratuit et sans engagement. On fait le point sur tes besoins, et tu repars avec des conseils concrets — que l&apos;on travaille ensemble ou pas.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
            <a
              href="https://calendar.app.google/LmPYPbdEHxwC4ewq6"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-extrabold text-base bg-[#F2542D] hover:bg-[#d8431f] text-white shadow-lg transition-all transform hover:scale-105"
            >
              <Calendar className="w-5 h-5 text-[#F5DFBB]" />
              <span>👉 Je réserve mon appel gratuit sur Google Agenda</span>
            </a>
            <Link
              href="/services-et-tarifs"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
            >
              <span>👉 Je découvre les services et tarifs</span>
              <ArrowRight className="w-4 h-4 text-[#F5DFBB]" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
