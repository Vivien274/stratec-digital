import Link from "next/link";
import YellowBrushUnderline from "@/components/YellowBrushUnderline";
import {
  FileSearch,
  GraduationCap,
  HeartHandshake,
  CheckCircle2,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles,
  Accessibility,
  Check,
  HelpCircle,
  Video,
  MapPin,
  Laptop,
  Eye,
  Code2,
  Brain,
  Briefcase,
  Users,
  Award,
  FileText
} from "lucide-react";

export const metadata = {
  title: "Offres & Tarifs d'Accessibilité Web pour Agences • Stratec Digital",
  description:
    "Découvrez mes 3 modalités d'intervention en accessibilité numérique pour agences web et PME : audit ponctuel, formation d'équipe et référente mensuelle sans recruter.",
};

export default function ServicesTarifsPage() {
  const referentTiers = [
    {
      name: "Formule Légère",
      price: "env. 300 €",
      period: "par mois",
      hours: "1 demi-journée par mois",
      href: "/contact?formule=legere",
      audience: "Le filet de sécurité pour lever les doutes ponctuels et débloquer vos équipes.",
      features: [
        "1 demi-journée d'intervention par mois (fractionnable selon vos besoins)",
        "1 point visio mensuel de 45 minutes",
        "Réponses asynchrones aux questions de l'équipe (Slack, Teams, email)",
        "Relecture rapide d'un composant sensible ou d'un cas particulier",
        "Sans engagement après 2 mois",
      ],
      highlight: false,
    },
    {
      name: "Formule Standard",
      price: "env. 600 €",
      period: "par mois",
      hours: "1 journée complète par mois",
      href: "/contact?formule=standard",
      audience: "L'accompagnement idéal pour sécuriser 1 à 2 projets actifs en conception (facilement refacturable à vos clients).",
      features: [
        "1 journée complète par mois (répartie en 2 demi-journées, ex : cadrage puis recette)",
        "Relecture détaillée des maquettes Figma et validation des parcours clés",
        "Tests au clavier et au lecteur d'écran avant livraison client",
        "Point d'étape mensuel dédié avec vos binômes designers et développeurs",
        "Sans engagement après 2 mois",
      ],
      highlight: true,
      badge: "Recommandé",
    },
    {
      name: "Formule Renforcée",
      price: "env. 1 200 €",
      period: "par mois",
      hours: "2 journées complètes par mois",
      href: "/contact?formule=renforcee",
      audience: "L'immersion continue pour les agences multi-projets et les marchés publics.",
      features: [
        "2 journées complètes par mois (soit 1 demi-journée par semaine à vos côtés)",
        "Suivi continu de vos sprints de production et revues d'étapes",
        "Relecture et cadrage de vos réponses aux appels d'offres pour faire la différence",
        "Audits intermédiaires et recette finale avant mise en ligne",
        "Sans engagement après 2 mois",
      ],
      highlight: false,
    },
  ];

  const faqs = [
    {
      question: "Pourquoi faire appel à une référente externe plutôt que de former un développeur en interne ?",
      answer:
        "Former un membre de votre équipe est une excellente démarche, mais cela prend du temps et ce n'est souvent pas son cœur de métier au quotidien. Faire équipe avec moi vous permet de bénéficier immédiatement d'une expertise opérationnelle, sans surcharger vos développeurs et sans créer de goulot d'étranglement dans vos plannings.",
    },
    {
      question: "Modifiez-vous directement le code de notre site ?",
      answer:
        "Non, et c'est un engagement fort. Vos développeurs restent 100 % maîtres de votre base de code et de vos choix d'architecture. Je leur fournis des rapports clairs avec les points précis à corriger et des explications limpides, pour qu'ils montent eux-mêmes durablement en compétences.",
    },
    {
      question: "Comment se déroulent les formations d'équipe ?",
      answer:
        "Les formations se font en ateliers courts très concrets (d'une demi-journée à une journée). En visio par défaut (de préférence) dans toute la France et toute la francophonie, ou sur site en métropole lilloise si vos locaux sont physiquement accessibles aux personnes à mobilité réduite. Nous travaillons sur vos vrais cas d'usage et vos maquettes, pas sur de la théorie abstraite.",
    },
    {
      question: "Peut-on arrêter la formule mensuelle facilement ?",
      answer:
        "Oui. L'accompagnement mensuel requiert un engagement initial de 2 mois seulement pour poser des bases de travail solides. Au-delà de ces 2 mois, vous pouvez suspendre ou arrêter à tout moment avec un simple préavis de 15 jours.",
    },
  ];

  return (
    <div className="space-y-24 pb-24 pt-8 bg-[#FAF4F2] text-[#562C2C]">
      
      {/* 1. EN-TÊTE DE PAGE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 text-center max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5DFBB] text-[#562C2C] border border-[#562C2C]/10 text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-xs">
            <Accessibility className="w-4 h-4 text-[#F2542D]" />
            <span>Tarifs clairs &amp; Accompagnement sans surprise</span>
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#562C2C] tracking-tight leading-tight">
            Trois façons simples de collaborer,{" "}
            <span className="relative inline-block px-1">
              selon vos besoins réels.
              <YellowBrushUnderline variant="thick" color="#F2542D" />
            </span>
          </h1>

          <p className="text-slate-700 text-base sm:text-xl leading-relaxed max-w-3xl mx-auto font-medium">
            Que vous ayez besoin d&apos;un audit ponctuel pour un appel d&apos;offres, d&apos;un atelier pratique pour votre équipe ou d&apos;une référente à vos côtés chaque mois : des solutions claires, sans engagement lourd.
          </p>

          {/* 4 CARTOUCHES DE RÉASSURANCE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 text-left">
            <div className="bg-white rounded-2xl p-5 border border-[#562C2C]/10 shadow-xs hover:shadow-md transition-all space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#F5DFBB]/60 text-[#C43219] flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5 text-[#C43219]" />
              </div>
              <h2 className="font-extrabold text-base text-[#562C2C]">Sans recrutement lourd</h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                Une expertise a11y immédiate sans le coût fixe d&apos;un profil à plein temps.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-[#562C2C]/10 shadow-xs hover:shadow-md transition-all space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#127475]/15 text-[#127475] flex items-center justify-center font-bold">
                <Laptop className="w-5 h-5 text-[#127475]" />
              </div>
              <h2 className="font-extrabold text-base text-[#562C2C]">Vous gardez le code</h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                Pas d&apos;ingérence technique : vos développeurs appliquent les correctifs et montent en compétences.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-[#562C2C]/10 shadow-xs hover:shadow-md transition-all space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#F5DFBB]/60 text-[#127475] flex items-center justify-center font-bold">
                <Clock className="w-5 h-5 text-[#127475]" />
              </div>
              <h2 className="font-extrabold text-base text-[#562C2C]">Flexibilité totale</h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                Résiliable à tout moment après 2 mois de mise en place. Vous arrêtez quand vous voulez.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-[#562C2C]/10 shadow-xs hover:shadow-md transition-all space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#F5DFBB]/60 text-[#C43219] flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5 text-[#C43219]" />
              </div>
              <h2 className="font-extrabold text-base text-[#562C2C]">Pédagogie &amp; Clarté</h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                Du français simple, zéro jargon et des recommandations actionnables tout de suite.
              </p>
            </div>
          </div>

          {/* BARRE DE RACCOURCIS D'ACCÈS */}
          <div className="pt-4 flex flex-wrap justify-center gap-3">
            <a
              href="#audit"
              className="px-4 py-2.5 rounded-xl text-sm font-bold bg-white text-[#562C2C] border border-[#562C2C]/15 hover:bg-[#F5DFBB]/40 transition-colors shadow-2xs"
            >
              1. L&apos;audit accessibilité ↓
            </a>
            <a
              href="#formation"
              className="px-4 py-2.5 rounded-xl text-sm font-bold bg-white text-[#562C2C] border border-[#562C2C]/15 hover:bg-[#F5DFBB]/40 transition-colors shadow-2xs"
            >
              2. La formation équipe ↓
            </a>
            <a
              href="#referent"
              className="px-4 py-2.5 rounded-xl text-sm font-bold bg-white text-[#562C2C] border border-[#562C2C]/15 hover:bg-[#F5DFBB]/40 transition-colors shadow-2xs"
            >
              3. Le référent mensuel ↓
            </a>
          </div>
        </div>
      </section>

      {/* 2. OFFRE 1 : L'AUDIT ACCESSIBILITÉ */}
      <section id="audit" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-[#562C2C]/10 shadow-lg space-y-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5DFBB] text-[#562C2C] text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-[#562C2C]/10">
                <FileSearch className="w-3.5 h-3.5 text-[#F2542D]" />
                <span>Intervention Ponctuelle</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-[#562C2C]">
                1. L&apos;audit accessibilité
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                J&apos;analyse votre site ou votre projet comme le ferait un utilisateur qui navigue au clavier ou avec un lecteur d&apos;écran. Vous recevez un rapport clair, avec les problèmes classés par priorité et expliqués simplement.
              </p>

              <div className="space-y-3 pt-2">
                <h3 className="font-extrabold text-base text-[#562C2C] uppercase tracking-wider">
                  Ce qui est vérifié :
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#127475] shrink-0 mt-1 stroke-[3]" />
                    <span>Navigation complète au clavier et visibilité du focus</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#127475] shrink-0 mt-1 stroke-[3]" />
                    <span>Compatibilité lecteur d&apos;écran (VoiceOver / NVDA)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#127475] shrink-0 mt-1 stroke-[3]" />
                    <span>Contrastes, lisibilité typographique et états de boutons</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#127475] shrink-0 mt-1 stroke-[3]" />
                    <span>Balisage sémantique, structure de titres et formulaires</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Encart Tarif & Action */}
            <div className="lg:col-span-4 bg-[#FAF4F2] p-6 sm:p-8 rounded-3xl border border-[#562C2C]/10 space-y-6">
              <div className="space-y-1">
                <span className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider">Tarif indicatif</span>
                <p className="text-3xl sm:text-4xl font-black text-[#562C2C]">
                  Dès 450 €
                </p>
                <p className="text-sm text-slate-700 font-medium leading-relaxed">
                  Pour un mini-audit de quelques pages clés (sur devis pour un site complet).
                </p>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-[#562C2C]/10 text-sm text-slate-700 space-y-1.5">
                <h3 className="font-bold text-sm sm:text-base text-[#562C2C]">Livrable fourni :</h3>
                <p className="leading-relaxed">Rapport priorisé par criticité + débrief visio de 45 minutes pour répondre à vos questions techniques.</p>
              </div>

              <Link
                href="/contact?service=audit"
                aria-label="Demander un devis pour un audit de projet"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-sm sm:text-base bg-[#562C2C] hover:bg-[#C43219] text-white transition-colors shadow-sm"
              >
                <span>Demander un audit de projet</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* 3. OFFRE 2 : LA FORMATION ÉQUIPE (TRANSVERSE & SÉCURISÉE NDA) */}
      <section id="formation" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-[#562C2C]/10 shadow-lg space-y-10">
          
          {/* Entête de l'offre */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#127475]/15 text-[#127475] text-xs sm:text-sm font-extrabold uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5 text-[#127475]" />
              <span>Ateliers Pratiques &amp; Catalogue Transverse</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#562C2C] tracking-tight">
              2. La formation équipe : faire travailler toute l&apos;agence ensemble
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              L&apos;accessibilité ne fonctionne pas en vase clos : si vos designers ne connaissent pas les contraintes des développeurs, et si vos chefs de projet ne savent pas cadrer le sujet, tout le monde perd du temps et de l&apos;argent. Mes ateliers réunissent vos métiers autour d&apos;exercices ultra-concrets, ancrés dans la réalité des usages et du handicap.
            </p>
          </div>

          {/* CATALOGUE DES 4 MODULES TRANSVERSES */}
          <div className="space-y-6 pt-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#562C2C]/10 pb-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-[#562C2C]">
                  Catalogue de 4 modules ciblés
                </h3>
                <p className="text-sm text-slate-600">
                  Formations indépendantes ou combinables selon la maturité de votre équipe.
                </p>
              </div>
              <span className="text-sm font-bold text-[#127475] bg-[#127475]/10 px-3.5 py-1.5 rounded-full self-start sm:self-auto">
                Dès 400 € HT la demi-journée
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Module 1 */}
              <div className="bg-[#FAF4F2] p-6 sm:p-7 rounded-3xl border border-[#562C2C]/10 hover:border-[#F2542D]/40 transition-all space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5DFBB] text-[#562C2C] text-xs sm:text-sm font-extrabold uppercase tracking-wider">
                      <Eye className="w-3.5 h-3.5 text-[#F2542D]" />
                      Sensibilisation Immersive
                    </span>
                    <span className="text-sm font-bold text-slate-700">
                      Journée complète
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-black text-[#562C2C] leading-snug">
                    Module 1 &bull; Immersion &amp; Sensibilisation au Handicap
                  </h4>

                  <div className="inline-block bg-white/80 px-3 py-1.5 rounded-lg border border-[#562C2C]/10 text-xs sm:text-sm font-semibold text-[#127475]">
                    Public : Toute l&apos;équipe réunie (Designers, Développeurs, Chefs de projet, Direction)
                  </div>

                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    Vivre concrètement les blocages vécus par les personnes en situation de handicap pour transformer l&apos;empathie en automatismes quotidiens de travail.
                  </p>

                  <div className="space-y-2.5 pt-2 border-t border-[#562C2C]/10 text-sm text-slate-700">
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#127475] shrink-0 mt-0.5 stroke-[3]" />
                      <span>Navigation sans souris (100% clavier) et test au lecteur d&apos;écran (NVDA / VoiceOver)</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#127475] shrink-0 mt-0.5 stroke-[3]" />
                      <span>Compréhension des handicaps invisibles et cognitifs (dyslexie, TDAH, surcharge mentale)</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#127475] shrink-0 mt-0.5 stroke-[3]" />
                      <span>Crash-test sur vos propres réalisations récentes pour identifier les freins réels</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Module 2 */}
              <div className="bg-[#FAF4F2] p-6 sm:p-7 rounded-3xl border border-[#562C2C]/10 hover:border-[#127475]/40 transition-all space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#127475]/15 text-[#127475] text-xs sm:text-sm font-extrabold uppercase tracking-wider">
                      <Code2 className="w-3.5 h-3.5 text-[#127475]" />
                      Duo Métier Clé
                    </span>
                    <span className="text-sm font-bold text-slate-700">
                      Journée complète
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-black text-[#562C2C] leading-snug">
                    Module 2 &bull; Travailler main dans la main : designers et devs
                  </h4>

                  <div className="inline-block bg-white/80 px-3 py-1.5 rounded-lg border border-[#562C2C]/10 text-xs sm:text-sm font-semibold text-[#127475]">
                    Public : Binômes Designers UI/UX &amp; Développeurs Front-end
                  </div>

                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    En finir avec les maquettes inaccessibles et le ping-pong stérile entre l&apos;UI et le code grâce à des conventions partagées dès la conception.
                  </p>

                  <div className="space-y-2.5 pt-2 border-t border-[#562C2C]/10 text-sm text-slate-700">
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#127475] shrink-0 mt-0.5 stroke-[3]" />
                      <span>Spécifier l&apos;accessibilité dans Figma : états de focus visibles, titres Hn, zones tactiles (44&times;44px)</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#127475] shrink-0 mt-0.5 stroke-[3]" />
                      <span>Quand privilégier le HTML sémantique natif et quand éviter absolument de surcharger en ARIA</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#127475] shrink-0 mt-0.5 stroke-[3]" />
                      <span>Conception pas à pas de composants interactifs accessibles (modales, accordéons, menus mobiles)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Module 3 */}
              <div className="bg-[#FAF4F2] p-6 sm:p-7 rounded-3xl border border-[#562C2C]/10 hover:border-[#F2542D]/40 transition-all space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5DFBB] text-[#562C2C] text-xs sm:text-sm font-extrabold uppercase tracking-wider">
                      <Brain className="w-3.5 h-3.5 text-[#F2542D]" />
                      UX &amp; Confort Mental
                    </span>
                    <span className="text-sm font-bold text-slate-700">
                      Demi-journée
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-black text-[#562C2C] leading-snug">
                    Module 3 &bull; Accessibilité Cognitive &amp; Confort Mental des Parcours
                  </h4>

                  <div className="inline-block bg-white/80 px-3 py-1.5 rounded-lg border border-[#562C2C]/10 text-xs sm:text-sm font-semibold text-[#127475]">
                    Public : UX Designers, Rédacteurs (UX Writers), Chefs de projet
                  </div>

                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    Concevoir des parcours reposants pour les usagers neuroatypiques, dyslexiques, âgés ou simplement fatigués face à des écrans saturés.
                  </p>

                  <div className="space-y-2.5 pt-2 border-t border-[#562C2C]/10 text-sm text-slate-700">
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#127475] shrink-0 mt-0.5 stroke-[3]" />
                      <span>Allègement de la charge cognitive : typographie reposante, repères visuels et mise en page aérée</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#127475] shrink-0 mt-0.5 stroke-[3]" />
                      <span>Formulaires déstressants : messages d&apos;erreur bienveillants et précis, conservation des saisies</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#127475] shrink-0 mt-0.5 stroke-[3]" />
                      <span>Rédaction accessible et introduction concrète aux principes du FALC (Facile À Lire et à Comprendre)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Module 4 */}
              <div className="bg-[#FAF4F2] p-6 sm:p-7 rounded-3xl border border-[#562C2C]/10 hover:border-[#127475]/40 transition-all space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#127475]/15 text-[#127475] text-xs sm:text-sm font-extrabold uppercase tracking-wider">
                      <Briefcase className="w-3.5 h-3.5 text-[#127475]" />
                      Stratégie &amp; Business
                    </span>
                    <span className="text-sm font-bold text-slate-700">
                      Demi-journée ou journée complète
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-black text-[#562C2C] leading-snug">
                    Module 4 &bull; Gagner des Appels d&apos;Offres &amp; Cadrer l&apos;Accessibilité
                  </h4>

                  <div className="inline-block bg-white/80 px-3 py-1.5 rounded-lg border border-[#562C2C]/10 text-xs sm:text-sm font-semibold text-[#127475]">
                    Public : Chefs de projet, Directeurs de clientèle, Commerciaux, Dirigeants
                  </div>

                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    Transformer la Directive Européenne et les obligations légales en argument de vente décisif pour remporter vos consultations publiques et privées.
                  </p>

                  <div className="space-y-2.5 pt-2 border-t border-[#562C2C]/10 text-sm text-slate-700">
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#127475] shrink-0 mt-0.5 stroke-[3]" />
                      <span>Décrypter les clauses d&apos;accessibilité des marchés publics (RGAA, WCAG 2.2, échéance 2025)</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#127475] shrink-0 mt-0.5 stroke-[3]" />
                      <span>Chiffrer l&apos;a11y au juste prix dans vos devis et la refacturer intelligemment au client final</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#127475] shrink-0 mt-0.5 stroke-[3]" />
                      <span>Checklist de recette express : 10 tests clés en 5 minutes à exécuter avant chaque livraison client</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ENCART CADRE OFFICIEL, CONVENTION & ATTESTATION NDA (DISTINCT & MIS EN VALEUR) */}
          <div className="bg-gradient-to-br from-[#127475] to-[#0c4e4f] text-white rounded-3xl p-8 sm:p-12 shadow-xl border-2 border-[#127475] relative overflow-hidden space-y-8 mt-12">
            
            {/* Pastille décorative en arrière-plan */}
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/5 rounded-full pointer-events-none blur-2xl" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              <div className="lg:col-span-8 space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5DFBB] text-[#562C2C] text-xs sm:text-sm font-black uppercase tracking-wider shadow-xs">
                  <Award className="w-4 h-4 text-[#C43219]" />
                  <span>Cadre Officiel &amp; Prise en Charge</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                  Organisme de formation déclaré : Convention &amp; Attestation nominative
                </h3>

                <p className="text-base sm:text-lg text-white/95 leading-relaxed font-medium">
                  Stratec Digital est un prestataire de formation professionnelle déclaré sous le <strong className="text-white underline decoration-[#F5DFBB] decoration-2 underline-offset-2">numéro d&apos;activité (NDA) 32591460859</strong> auprès du préfet de région des Hauts-de-France.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start gap-3 bg-white/10 border border-white/20 p-4 rounded-2xl backdrop-blur-xs">
                    <FileText className="w-5 h-5 text-[#F5DFBB] shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="font-black text-white text-base">Convention de formation professionnelle</p>
                      <p className="text-white/90 text-sm leading-relaxed">Établie en bonne et due forme avec votre entreprise pour chaque session d&apos;atelier.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white/10 border border-white/20 p-4 rounded-2xl backdrop-blur-xs">
                    <Award className="w-5 h-5 text-[#F5DFBB] shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="font-black text-white text-base">Attestation de fin de formation</p>
                      <p className="text-white/90 text-sm leading-relaxed">Remise nominative à chaque participant : preuve officielle précieuse pour vos dossiers d&apos;appels d&apos;offres.</p>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-white/80 italic pt-1">
                  * Cet enregistrement ne vaut pas agrément de l&apos;État (art. L. 6352-12 du Code du travail).
                </p>
              </div>

              {/* Bloc Réservation / Modalités */}
              <div className="lg:col-span-4 bg-white text-[#562C2C] p-6 sm:p-8 rounded-2xl border border-white/30 space-y-5 shadow-2xl">
                <div className="space-y-1">
                  <span className="text-xs sm:text-sm font-black text-slate-500 uppercase tracking-wider">Tarifs des formations</span>
                  <p className="text-2xl sm:text-3xl font-black text-[#562C2C]">
                    Dès 400 € <span className="text-base font-bold text-slate-600">HT</span>
                  </p>
                  <p className="text-sm text-slate-700 font-medium">
                    À la demi-journée ou dès 800 € HT la journée. Sur-mesure sur devis.
                  </p>
                </div>

                <div className="text-sm text-slate-700 space-y-2 pt-3 border-t border-[#562C2C]/10">
                  <p className="font-bold text-[#562C2C] flex items-center gap-1.5">
                    <Video className="w-4 h-4 text-[#127475]" />
                    <span>En visio interactive (France &amp; francophonie)</span>
                  </p>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Déplacement possible en métropole lilloise uniquement si vos locaux sont physiquement accessibles aux personnes à mobilité réduite (frais de déplacement en sus).
                  </p>
                </div>

                <Link
                  href="/contact?service=formation"
                  aria-label="Échanger sur vos besoins de formation d'équipe"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-sm sm:text-base bg-[#C43219] hover:bg-[#9E230E] text-white transition-colors shadow-md"
                >
                  <span>Échanger sur vos besoins de formation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 4. OFFRE 3 : LE RÉFÉRENT MENSUEL (3 FORMULES) */}
      <section id="referent" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5DFBB] text-[#562C2C] text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-[#562C2C]/10">
              <HeartHandshake className="w-3.5 h-3.5 text-[#F2542D]" />
              <span>Accompagnement Mensuel Flexible</span>
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#562C2C] leading-tight tracking-tight">
              3. Le référent mensuel
            </h2>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              Je deviens votre référente accessibilité, à la demande. Vous me posez vos questions, je relis vos maquettes et vos parcours, et on fait le point chaque mois.
            </p>

            <p className="text-sm sm:text-base font-bold text-[#127475] inline-block bg-[#127475]/10 px-4 py-1.5 rounded-full">
              À partir de 300 € par mois &bull; Deux mois minimum, puis résiliable à tout moment.
            </p>
          </div>

          {/* LES 3 FORMULES D'ACCOMPAGNEMENT */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
            {referentTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-3xl p-8 border flex flex-col justify-between gap-6 transition-all ${
                  tier.highlight
                    ? "border-2 border-[#C43219] shadow-xl ring-4 ring-[#C43219]/10 relative"
                    : "border-[#562C2C]/10 shadow-md hover:shadow-lg"
                }`}
              >
                {tier.badge && (
                  <span className="absolute -top-3.5 right-6 bg-[#C43219] text-white text-xs sm:text-sm font-extrabold uppercase px-3.5 py-1 rounded-full shadow-xs">
                    {tier.badge}
                  </span>
                )}

                <div className="space-y-5">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-black text-[#562C2C]">{tier.name}</h3>
                    <p className="text-sm font-bold text-[#127475] uppercase tracking-wider">{tier.hours}</p>
                  </div>

                  <div className="pt-2 flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-black text-[#562C2C]">{tier.price}</span>
                    <span className="text-sm text-slate-700 font-semibold">{tier.period}</span>
                  </div>

                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed border-t border-[#562C2C]/10 pt-3">
                    {tier.audience}
                  </p>

                  <ul className="space-y-2.5 text-sm sm:text-base text-slate-700 pt-2">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#127475] shrink-0 mt-0.5 stroke-[3]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={tier.href}
                  aria-label={`Choisir la ${tier.name}`}
                  className={`w-full text-center py-3.5 px-4 rounded-xl font-bold text-sm sm:text-base transition-colors block shadow-sm ${
                    tier.highlight
                      ? "bg-[#C43219] hover:bg-[#9E230E] text-white"
                      : "bg-[#562C2C] hover:bg-[#C43219] text-white"
                  }`}
                >
                  Choisir la {tier.name}
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. FOIRE AUX QUESTIONS (FAQ) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="space-y-8">
          
          <div className="text-center space-y-2">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#127475]/10 text-[#127475] text-xs sm:text-sm font-extrabold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5 text-[#127475]" />
              <span>Questions Fréquentes</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#562C2C]">
              Tout ce que vous devez savoir avant de démarrer
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-[#562C2C]/10 shadow-xs space-y-2.5"
              >
                <h3 className="font-extrabold text-base sm:text-lg text-[#562C2C]">
                  {faq.question}
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. CALL TO ACTION FINAL */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-[#562C2C] text-white rounded-3xl p-10 sm:p-14 text-center space-y-8 shadow-2xl relative overflow-hidden border border-[#F5DFBB]/20">
          
          <div className="space-y-4 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5DFBB]/20 text-[#F5DFBB] text-xs sm:text-sm font-bold uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5 text-[#F5DFBB]" />
              <span>Échange préliminaire gratuit</span>
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F5DFBB]">
              Vous avez un projet ou une question d&apos;accessibilité ?
            </h2>

            <p className="text-[#F5DFBB] text-base sm:text-xl leading-relaxed">
              30 minutes en visio pour faire connaissance, évaluer vos besoins et trouver la formule la plus adaptée à votre agence, sans engagement commercial.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
            <a
              href="https://calendar.app.google/LmPYPbdEHxwC4ewq6"
              target="_blank"
              rel="noreferrer"
              aria-label="Réserver mon appel de découverte de 30 minutes sur Google Agenda (ouvre un nouvel onglet)"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-extrabold text-base bg-[#C43219] hover:bg-[#9E230E] text-white shadow-lg transition-all transform hover:scale-105"
            >
              <Calendar className="w-5 h-5 text-[#F5DFBB]" />
              <span>Réserver mon appel de découverte</span>
            </a>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-base bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
            >
              <span>Me contacter par écrit</span>
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
