import Link from "next/link";
import {
  CheckCircle2,
  Star,
  Sparkles,
  ArrowRight,
  HelpCircle,
  ExternalLink,
  Calendar,
  Layers,
  ShoppingBag,
  Share2,
  Search,
  GraduationCap,
  MessageCircle,
  Bot,
  Zap,
  Target,
  Clock,
  FileText,
  Smartphone,
  ShieldCheck,
  CreditCard,
  HeartHandshake,
  Unlock
} from "lucide-react";

export const revalidate = 60; // ISR 60s

export const metadata = {
  title: "Services & Tarifs • Stratec Digital | Formules Artisans",
  description:
    "Découvre les 4 packs d'accompagnement digital Stratec Digital pour artisans, créateurs et micro-entrepreneurs. Tarifs clairs, sans abonnement ni frais cachés.",
};

export default function ServicesTarifsPage() {
  return (
    <div className="space-y-20 pb-24 pt-8 bg-[#FAF4F2] text-[#562C2C]">
      
      {/* PAGE HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 text-center max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5DFBB] text-[#562C2C] border border-[#562C2C]/10 text-xs font-extrabold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-4 h-4 text-[#F2542D]" />
            <span>Offres &amp; Tarifs Transparents</span>
          </span>

          <h1 className="text-3xl sm:text-5xl font-black text-[#562C2C] tracking-tight leading-tight">
            Pour que chacun y trouve chaussure à son pied, nous proposons 4 Packs
          </h1>

          <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Des accompagnements clés-en-main conçus spécifiquement pour les besoins des artisans, créateurs et micro-entrepreneurs à domicile.
          </p>

          {/* REASSURANCE CARDS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 text-left">
            <div className="bg-white rounded-2xl p-5 border border-[#562C2C]/10 shadow-xs hover:shadow-md transition-all space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#F5DFBB]/70 text-[#F2542D] flex items-center justify-center font-bold">
                <CreditCard className="w-5 h-5 text-[#F2542D]" />
              </div>
              <h3 className="font-extrabold text-sm text-[#562C2C]">Paiement 3x ou 4x</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Règle tes prestations sereinement sans impacter la trésorerie de ton activité.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-[#562C2C]/10 shadow-xs hover:shadow-md transition-all space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#E2F1E7] text-[#0E9594] flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5 text-[#0E9594]" />
              </div>
              <h3 className="font-extrabold text-sm text-[#562C2C]">Zéro Frais Cachés</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tarifs forfaitaires 100% transparents. Aucun abonnement mensuel forcé.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-[#562C2C]/10 shadow-xs hover:shadow-md transition-all space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center font-bold">
                <Unlock className="w-5 h-5 text-[#0284C7]" />
              </div>
              <h3 className="font-extrabold text-sm text-[#562C2C]">100% Propriétaire</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tu es seul propriétaire de tes outils et formé.e pour les administrer en autonomie.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-[#562C2C]/10 shadow-xs hover:shadow-md transition-all space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#FEF3C7] text-[#D97706] flex items-center justify-center font-bold">
                <HeartHandshake className="w-5 h-5 text-[#D97706]" />
              </div>
              <h3 className="font-extrabold text-sm text-[#562C2C]">Interlocutrice Unique</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Un suivi humain de proximité, du vrai sur-mesure sans jargon ni prise de tête.
              </p>
            </div>
          </div>

          {/* QUICK JUMP NAVIGATION BAR */}
          <div className="pt-4 flex flex-wrap justify-center gap-3">
            <a
              href="#premiers-pas-digitaux"
              className="px-4 py-2 rounded-xl bg-white hover:bg-[#F5DFBB] border border-[#562C2C]/10 text-xs font-bold transition-all shadow-xs"
            >
              Pack Premiers pas digitaux (300 €)
            </a>
            <a
              href="#artisan-connecte"
              className="px-4 py-2 rounded-xl bg-white hover:bg-[#F5DFBB] border border-[#562C2C]/10 text-xs font-bold transition-all shadow-xs"
            >
              Pack Artisan 100% connecté (Sur-Mesure)
            </a>
            <a
              href="#coaching-tranquille"
              className="px-4 py-2 rounded-xl bg-white hover:bg-[#F5DFBB] border border-[#562C2C]/10 text-xs font-bold transition-all shadow-xs"
            >
              Pack Coaching tranquille (400 €)
            </a>
            <a
              href="#vendre-sur-les-reseaux"
              className="px-4 py-2 rounded-xl bg-white hover:bg-[#F5DFBB] border border-[#562C2C]/10 text-xs font-bold transition-all shadow-xs"
            >
              Pack Vendre sur les réseaux (300 €)
            </a>
          </div>

          {/* WORKLOAD REASSURANCE BANNER */}
          <div className="bg-white border border-[#562C2C]/10 rounded-2xl p-5 mt-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#F5DFBB] text-[#562C2C] flex items-center justify-center shrink-0 font-extrabold text-lg shadow-xs">
              💡
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              <strong className="text-[#562C2C]">Tu n&apos;as pas de textes rédigés ni de photos de studio ?</strong> Pas de panique ! Je t&apos;aide à tout rassembler très simplement depuis ton téléphone sans te prendre de précieux temps sur tes chantiers ou tes créations.
            </p>
          </div>
        </div>
      </section>

      {/* DETAILED PACKS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* ========================================================================= */}
        {/* PACK 1: PREMIERS PAS DIGITAUX */}
        {/* ========================================================================= */}
        <div
          id="premiers-pas-digitaux"
          className="bg-white rounded-3xl p-8 sm:p-12 border border-[#F2542D] shadow-xl ring-2 ring-[#F2542D]/10 relative space-y-8"
        >
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-slate-100 pb-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F2542D] text-white text-xs font-black uppercase tracking-wider">
                <Star className="w-3.5 h-3.5 fill-white" /> Formule Populaire
              </div>
              <h2 className="text-3xl font-black text-[#562C2C]">Pack &quot;Premiers pas digitaux&quot;</h2>
              <p className="text-base font-semibold text-[#127475]">
                Tu travailles à domicile et tu souhaites te lancer en ligne ?
              </p>
            </div>
            <div className="bg-[#FAF4F2] p-4 rounded-2xl border border-slate-200 text-right shrink-0">
              <span className="text-4xl font-black text-[#562C2C]">300 €</span>
              <span className="block text-xs text-slate-500 font-semibold mt-1">Paiement en 3x sans frais</span>
            </div>
          </div>

          <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              Tu es artisan, créateur, micro-entrepreneur... Tu maîtrises ton métier mais le digital te semble flou, compliqué ou inadapté ? Bonne nouvelle : ce pack est fait pour toi !
            </p>
            <p className="font-bold text-[#562C2C] bg-[#F5DFBB]/40 p-3 rounded-xl border border-[#562C2C]/10">
              📌 Pas besoin de boutique physique pour avoir une vraie présence en ligne.
            </p>
            <p>
              Je te propose un accompagnement clé-en-main pour créer tes premiers outils digitaux, à ton rythme, sans stress ni jargon technique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            {/* Left: Target & Program */}
            <div className="space-y-6">
              <div className="bg-[#FAF4F2]/70 p-6 rounded-2xl space-y-3 border border-[#562C2C]/10">
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#562C2C] flex items-center gap-2">
                  👥 Pour qui est ce pack ?
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0E9594] shrink-0 mt-0.5" />
                    <span>Tu travailles à domicile, seul.e, sans boutique ni point de vente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0E9594] shrink-0 mt-0.5" />
                    <span>Tu vends par bouche-à-oreille ou sur des petits marchés locaux</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0E9594] shrink-0 mt-0.5" />
                    <span>Tu n’as ni site, ni réseaux pros, ni fiche Google</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0E9594] shrink-0 mt-0.5" />
                    <span>Tu as envie de te lancer mais tu ne sais pas par où commencer</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-base font-extrabold text-[#562C2C] uppercase tracking-wider">
                  📅 Ce que comprend le Pack :
                </h3>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
                    <h4 className="font-bold text-[#562C2C] flex items-center gap-2">
                      📱 Fiche Google Business Profile
                    </h4>
                    <p className="text-slate-600">
                      Visibilité locale optimisée (même à domicile avec adresse masquée), photos, prestations, lien vers tes réseaux/contacts, et conseils pour récolter tes premiers avis clients.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
                    <h4 className="font-bold text-[#562C2C] flex items-center gap-2">
                      📈 Réseaux Sociaux Professionnels
                    </h4>
                    <p className="text-slate-600">
                      Création de tes pages (2 réseaux sociaux maximum) + paramétrage complet, bio optimisée, et visuels adaptés.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
                    <h4 className="font-bold text-[#562C2C] flex items-center gap-2">
                      👁️ Gestionnaire de liens (Linktree / Paage)
                    </h4>
                    <p className="text-slate-600">
                      Tous tes liens réunis en un seul endroit. Pratique pour tes cartes de visite et flyers : un seul QR code pour tous tes liens !
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
                    <h4 className="font-bold text-[#562C2C] flex items-center gap-2">
                      🔧 Kit de survie digitale
                    </h4>
                    <p className="text-slate-600">
                      Lexique du digital pour ne plus rien redouter + guide &quot;mes premiers pas sur le web : sans stress ni blabla&quot;.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Bonus, Deliverables & Actions */}
            <div className="space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="bg-[#127475]/10 p-6 rounded-2xl border border-[#127475]/20 space-y-3">
                  <h3 className="text-sm font-extrabold text-[#127475] uppercase tracking-wider flex items-center gap-2">
                    ☑️ Bonus : Accompagnement humain inclus
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#127475] shrink-0" />
                      <span>1 appel visio de 1h de cadrage pour cerner tes besoins</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#127475] shrink-0" />
                      <span>15 jours de support après la livraison (WhatsApp ou email)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#127475] shrink-0" />
                      <span>Livraison du pack sous 10 à 15 jours à compter de l&apos;acompte</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#F5DFBB]/30 p-6 rounded-2xl border border-[#562C2C]/10 space-y-3">
                  <h3 className="text-sm font-extrabold text-[#562C2C] uppercase tracking-wider">
                    ✨ Ce que tu vas obtenir
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F2542D] shrink-0 mt-0.5" />
                      <span>Une vraie visibilité en ligne pour attirer tes premiers clients</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F2542D] shrink-0 mt-0.5" />
                      <span>Des outils simples que tu sauras utiliser toi-même</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F2542D] shrink-0 mt-0.5" />
                      <span>Une base solide pour développer ton activité sans aucun stress</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <a
                  href="https://calendar.app.google/LmPYPbdEHxwC4ewq6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-sm bg-[#562C2C] hover:bg-[#F2542D] text-white shadow-md transition-all"
                >
                  <Calendar className="w-4 h-4 text-[#F5DFBB]" />
                  <span>Réserver mon entretien gratuit pour ce pack</span>
                </a>
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-xs bg-slate-100 hover:bg-slate-200 text-[#562C2C] transition-colors"
                >
                  <HelpCircle className="w-3.5 h-3.5 text-[#F2542D]" />
                  <span>Poser une question sur ce pack</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PACK 2: ARTISAN 100% CONNECTÉ */}
        {/* ========================================================================= */}
        <div
          id="artisan-connecte"
          className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md space-y-8"
        >
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-slate-100 pb-6">
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-full bg-[#0E9594]/15 text-[#127475] text-xs font-black uppercase tracking-wider">
                Site Web &amp; E-commerce
              </span>
              <h2 className="text-3xl font-black text-[#562C2C]">Pack &quot;Artisan 100% connecté&quot;</h2>
              <p className="text-base font-semibold text-[#127475]">
                Pour lancer concrètement ta présence en ligne, vendre tes produits et connecter les bons outils — sans stress ni blabla technique.
              </p>
            </div>
            <div className="bg-[#FAF4F2] p-4 rounded-2xl border border-slate-200 text-right shrink-0">
              <span className="text-2xl font-black text-[#562C2C]">Sur-Mesure</span>
              <span className="block text-xs text-slate-500 font-semibold mt-1">Devis selon tes besoins</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="bg-[#FAF4F2]/70 p-6 rounded-2xl space-y-3 border border-[#562C2C]/10">
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#562C2C]">
                  🧩 Pour qui est ce pack ?
                </h3>
                <p className="text-xs text-slate-600">Cet accompagnement s&apos;adresse aux artisans, créateurs et micro-entrepreneurs qui :</p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0E9594] shrink-0 mt-0.5" />
                    <span>Travaillent à domicile (sans boutique physique)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0E9594] shrink-0 mt-0.5" />
                    <span>Veulent vendre en ligne ou se rendre très visibles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0E9594] shrink-0 mt-0.5" />
                    <span>N&apos;y connaissent pas grand-chose au digital (et c&apos;est très bien comme ça !)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0E9594] shrink-0 mt-0.5" />
                    <span>Ont besoin qu&apos;on les accompagne pas à pas pour faire les choses concrètement</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-base font-extrabold text-[#562C2C] uppercase tracking-wider">
                  🧰 Au programme de ce pack :
                </h3>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
                    <h4 className="font-bold text-[#562C2C]">
                      ✅ Création de ton site ou plateforme de vente
                    </h4>
                    <p className="text-slate-600">
                      Choix de la bonne solution (WordPress, WooCommerce, ou plateforme sur-mesure), aide à la configuration (nom, pages essentielles, design) et accompagnement à la mise en ligne.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
                    <h4 className="font-bold text-[#562C2C]">
                      🛒 Rédaction et mise en ligne de tes 5 premières fiches produits
                    </h4>
                    <p className="text-slate-600">
                      Vendre, c&apos;est bien. Mais encore faut-il savoir présenter ! Aide à la rédaction des descriptions, conseils titres/photos/prix, et mise en ligne directe.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
                    <h4 className="font-bold text-[#562C2C]">
                      🔄 Connexion aux outils de gestion de commandes
                    </h4>
                    <p className="text-slate-600">
                      Mise en place d&apos;un outil de suivi des commandes simple et adapté à ton fonctionnement, avec explications claires et pédagogiques.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
                    <h4 className="font-bold text-[#562C2C]">
                      🔗 Connexion de tes réseaux sociaux &amp; SEO local
                    </h4>
                    <p className="text-slate-600">
                      Relier Instagram, Facebook et ton site, création d&apos;un &quot;Link in bio&quot; et optimisation SEO pour apparaître sur Google sur les mots-clés de ton secteur.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
                    <h4 className="font-bold text-[#562C2C]">
                      🎓 Formation personnalisée aux outils
                    </h4>
                    <p className="text-slate-600">
                      Formation simple et illustrée à la gestion quotidienne de ton site + fiches récap et mini-tutos vidéos dédiés.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="bg-[#F5DFBB]/30 p-6 rounded-2xl border border-[#562C2C]/10 space-y-3">
                  <h3 className="text-sm font-extrabold text-[#562C2C] uppercase tracking-wider">
                    🎁 À la fin, tu repars avec :
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0E9594] shrink-0 mt-0.5" />
                      <span>Un site ou une boutique en ligne fonctionnelle (référencement &amp; pages légales incluses)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0E9594] shrink-0 mt-0.5" />
                      <span>Tes 5 premières fiches produits prêtes à vendre</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0E9594] shrink-0 mt-0.5" />
                      <span>Des outils connectés et simples pour gérer tes commandes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0E9594] shrink-0 mt-0.5" />
                      <span>Des réseaux sociaux alignés avec ton activité</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0E9594] shrink-0 mt-0.5" />
                      <span>L&apos;autonomie pour continuer... sans être perdu·e !</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 text-xs sm:text-sm space-y-2 text-slate-700">
                  <h4 className="font-extrabold text-[#562C2C] uppercase tracking-wider">
                    💸 Tarif sur-mesure
                  </h4>
                  <p>
                    Cette offre s&apos;adapte aux boutiques en ligne, sites vitrines ou plateformes de vente. Le tarif est fixé en fonction de la <strong>complexité de la demande</strong> et de <strong>mon taux d&apos;implication</strong> (réalisation clé-en-main ou accompagnement guidé).
                  </p>
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <a
                  href="https://calendar.app.google/LmPYPbdEHxwC4ewq6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-sm bg-[#562C2C] hover:bg-[#F2542D] text-white shadow-md transition-all"
                >
                  <Calendar className="w-4 h-4 text-[#F5DFBB]" />
                  <span>Demander un devis sur-mesure</span>
                </a>
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-xs bg-slate-100 hover:bg-slate-200 text-[#562C2C] transition-colors"
                >
                  <HelpCircle className="w-3.5 h-3.5 text-[#F2542D]" />
                  <span>Poser une question sur ce pack</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PACK 3: COACHING TRANQUILLE MAIS EFFICACE */}
        {/* ========================================================================= */}
        <div
          id="coaching-tranquille"
          className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md space-y-8"
        >
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-slate-100 pb-6">
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-full bg-[#F5DFBB] text-[#562C2C] text-xs font-black uppercase tracking-wider border border-[#562C2C]/10">
                Accompagnement 1 Mois
              </span>
              <h2 className="text-3xl font-black text-[#562C2C]">Pack &quot;Coaching tranquille mais efficace&quot;</h2>
              <p className="text-base font-semibold text-[#127475]">
                Un accompagnement sur 1 mois pour poser des bases solides, prendre confiance, et avancer à ton rythme.
              </p>
            </div>
            <div className="bg-[#FAF4F2] p-4 rounded-2xl border border-slate-200 text-right shrink-0">
              <span className="text-4xl font-black text-[#562C2C]">400 €</span>
              <span className="block text-xs text-slate-500 font-semibold mt-1">4 séances individuelles</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="bg-[#FAF4F2]/70 p-6 rounded-2xl space-y-3 border border-[#562C2C]/10">
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#562C2C]">
                  🧩 Pour qui est ce pack ?
                </h3>
                <p className="text-xs text-slate-600">Cet accompagnement est idéal si tu es :</p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0E9594] shrink-0 mt-0.5" />
                    <span>Artisan·e, créateur·rice ou micro-entrepreneur·e</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0E9594] shrink-0 mt-0.5" />
                    <span>Installé·e chez toi, sans boutique physique</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0E9594] shrink-0 mt-0.5" />
                    <span>Un peu perdu·e dans tout ce qu&apos;il faut faire pour &quot;être sur le web&quot;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0E9594] shrink-0 mt-0.5" />
                    <span>Motivé·e à faire les choses correctement, mais sans pression</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0E9594] shrink-0 mt-0.5" />
                    <span>Dans l&apos;envie d&apos;un cadre bienveillant, avec quelqu&apos;un qui te guide pas à pas</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#127475]/10 p-6 rounded-2xl border border-[#127475]/20 space-y-2 text-xs sm:text-sm">
                <h4 className="font-extrabold text-[#127475] uppercase tracking-wider">
                  🗓️ Format de l&apos;accompagnement :
                </h4>
                <ul className="space-y-1.5 text-slate-700">
                  <li>&bull; <strong>Durée :</strong> 4 semaines</li>
                  <li>&bull; <strong>1 séance par semaine</strong> (1h chacune, en visio)</li>
                  <li>&bull; <strong>Accès WhatsApp/Email entre les séances</strong> pour poser tes questions</li>
                  <li>&bull; <strong>Supports fournis :</strong> fiches mémo, tutos personnalisés, check-lists</li>
                </ul>
              </div>

              {/* BONUS: FORMATION GRATUITE SUR GUIDES-DIGITAUX.COM */}
              <div className="bg-[#F5DFBB]/40 p-6 rounded-2xl border-2 border-[#F2542D]/30 space-y-2 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-[#F2542D] text-base">🎁</span>
                  <h4 className="font-black text-[#562C2C] uppercase tracking-wider text-xs sm:text-sm">
                    Bonus spécial inclus offert !
                  </h4>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  <strong>Accès gratuit et à vie</strong> à la formation en ligne <strong className="text-[#562C2C]">&quot;Création d&apos;un site vitrine WordPress&quot;</strong> disponible sur la plateforme{" "}
                  <a
                    href="https://guides-digitaux.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#127475] font-extrabold underline hover:text-[#F2542D]"
                  >
                    Guides-Digitaux.com
                  </a>.
                </p>
              </div>
            </div>

            {/* Right Column: Weekly Breakdown */}
            <div className="space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-base font-extrabold text-[#562C2C] uppercase tracking-wider">
                  🧰 Ce que l&apos;on fait ensemble, semaine après semaine :
                </h3>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
                    <h4 className="font-bold text-[#562C2C]">
                      🟢 Semaine 1 : Faire le point et définir tes objectifs
                    </h4>
                    <p className="text-slate-600">
                      Analyse de ton activité, choix du bon canal (Google, site, réseaux) et sélection des outils adaptés à TA réalité.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
                    <h4 className="font-bold text-[#562C2C]">
                      🟡 Semaine 2 : Créer ou optimiser tes bases
                    </h4>
                    <p className="text-slate-600">
                      Création/optimisation de ta fiche Google Business Profile, paramétrage du réseau principal, rédaction d&apos;une bio claire et mots-clés.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
                    <h4 className="font-bold text-[#562C2C]">
                      🔵 Semaine 3 : Mettre en valeur ce que tu fais
                    </h4>
                    <p className="text-slate-600">
                      Aide à la rédaction de 2 fiches produits/pages, organisation des visuels, idées de publications et connexion des outils.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
                    <h4 className="font-bold text-[#562C2C]">
                      🔴 Semaine 4 : Être autonome et continuer en confiance
                    </h4>
                    <p className="text-slate-600">
                      Formation express aux outils, plan d&apos;action personnalisé pour les 30 jours à venir et conseils d&apos;organisation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <a
                  href="https://calendar.app.google/LmPYPbdEHxwC4ewq6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-sm bg-[#562C2C] hover:bg-[#F2542D] text-white shadow-md transition-all"
                >
                  <Calendar className="w-4 h-4 text-[#F5DFBB]" />
                  <span>Réserver mon créneau de coaching</span>
                </a>
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-xs bg-slate-100 hover:bg-slate-200 text-[#562C2C] transition-colors"
                >
                  <HelpCircle className="w-3.5 h-3.5 text-[#F2542D]" />
                  <span>Poser une question sur ce coaching</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PACK 4: VENDRE SUR LES RÉSEAUX */}
        {/* ========================================================================= */}
        <div
          id="vendre-sur-les-reseaux"
          className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md space-y-8"
        >
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-slate-100 pb-6">
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-full bg-[#127475]/10 text-[#127475] text-xs font-black uppercase tracking-wider">
                Réseaux Sociaux &amp; IA
              </span>
              <h2 className="text-3xl font-black text-[#562C2C]">Pack &quot;Vendre sur les réseaux&quot;</h2>
              <p className="text-base font-semibold text-[#127475]">
                Pour les artisans à domicile qui veulent se lancer sur les réseaux sociaux sans s’éparpiller, en posant les bonnes bases pour vendre leurs créations.
              </p>
            </div>
            <div className="bg-[#FAF4F2] p-4 rounded-2xl border border-slate-200 text-right shrink-0">
              <span className="text-4xl font-black text-[#562C2C]">300 €</span>
              <span className="block text-xs text-slate-500 font-semibold mt-1">2 RDV d&apos;1h30 + 10 jours de suivi</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="bg-[#FAF4F2]/70 p-6 rounded-2xl space-y-3 border border-[#562C2C]/10">
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#562C2C]">
                  🧩 À qui s’adresse ce pack ?
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0E9594] shrink-0 mt-0.5" />
                    <span>Aux artisans, créateurs, prestataires qui travaillent chez eux</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0E9594] shrink-0 mt-0.5" />
                    <span>À ceux qui veulent communiquer et vendre via les réseaux sociaux</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0E9594] shrink-0 mt-0.5" />
                    <span>À ceux qui cherchent un cadre simple, pédagogique et pratique pour débuter</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0E9594] shrink-0 mt-0.5" />
                    <span>À ceux qui n’ont pas le temps de tout apprendre, mais veulent être guidés</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0E9594] shrink-0 mt-0.5" />
                    <span>À ceux qui n&apos;ont pas le temps de poster ou qui culpabilisent de ne rien avoir mis depuis 2 semaines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0E9594] shrink-0 mt-0.5" />
                    <span>À ceux qui ont l&apos;impression d&apos;être toujours sur les réseaux alors qu&apos;ils n&apos;aiment pas ça</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-base font-extrabold text-[#562C2C] uppercase tracking-wider">
                  🔍 Ce que contient ce pack :
                </h3>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
                    <h4 className="font-bold text-[#562C2C]">
                      📘 Mini-guide &quot;Quel réseau choisir selon mon activité ?&quot;
                    </h4>
                    <p className="text-slate-600">
                      Pour savoir où concentrer tes efforts et toucher les bonnes personnes (Instagram, Facebook, Pinterest...).
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
                    <h4 className="font-bold text-[#562C2C]">
                      🗓️ Création de ton calendrier éditorial
                    </h4>
                    <p className="text-slate-600">
                      Planification simple sur 4 semaines (produits, coulisses, savoir-faire) duplicable chaque mois.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
                    <h4 className="font-bold text-[#562C2C]">
                      ✍️ Création de tes 10 premières publications
                    </h4>
                    <p className="text-slate-600">
                      Textes personnalisés et aide au choix/création des visuels Canva prêts à être publiés.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
                    <h4 className="font-bold text-[#562C2C]">
                      🔁 Automatisation de tes publications
                    </h4>
                    <p className="text-slate-600">
                      Tutoriel clair pour planifier tes posts gratuitement (Meta Business Suite...).
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
                    <h4 className="font-bold text-[#562C2C]">
                      🤖 Bases de l&apos;Intelligence Artificielle créative
                    </h4>
                    <p className="text-slate-600">
                      Initiation à <strong>Claude</strong> ou <strong>Gemini</strong> : tu apprends à utiliser les bonnes IA en fonction de tes besoins (prompts personnalisés pour générer des idées, rédiger des textes et créer des visuels simples).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="bg-[#F5DFBB]/30 p-6 rounded-2xl border border-[#562C2C]/10 space-y-3">
                  <h3 className="text-sm font-extrabold text-[#562C2C] uppercase tracking-wider">
                    ✅ Résultat final
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F2542D] shrink-0 mt-0.5" />
                      <span>Un réseau bien choisi et structuré</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F2542D] shrink-0 mt-0.5" />
                      <span>Un calendrier simple et durable</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F2542D] shrink-0 mt-0.5" />
                      <span>Des idées de posts prêtes à inspirer ton contenu</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F2542D] shrink-0 mt-0.5" />
                      <span>10 publications <strong>prêtes à l&apos;emploi</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F2542D] shrink-0 mt-0.5" />
                      <span>Une méthode pour te soulager des réseaux sociaux (quelques heures pour programmer ton mois entier)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F2542D] shrink-0 mt-0.5" />
                      <span>Des outils faciles pour t&apos;organiser et créer du contenu</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F2542D] shrink-0 mt-0.5" />
                      <span>Une vraie base pour vendre de manière régulière et autonome</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#127475]/10 p-6 rounded-2xl border border-[#127475]/20 text-xs sm:text-sm space-y-2 text-slate-700">
                  <h4 className="font-extrabold text-[#127475] uppercase tracking-wider">
                    📦 Format &amp; Livrables :
                  </h4>
                  <ul className="space-y-1 text-slate-700">
                    <li>&bull; 2 rendez-vous personnalisés d&apos;1h30</li>
                    <li>&bull; Suivi par email ou WhatsApp pendant 10 jours après le dernier RDV</li>
                    <li>&bull; Livrables : mini-guide, calendrier, 10 posts prêts, fiches IA</li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <a
                  href="https://calendar.app.google/LmPYPbdEHxwC4ewq6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-sm bg-[#562C2C] hover:bg-[#F2542D] text-white shadow-md transition-all"
                >
                  <Calendar className="w-4 h-4 text-[#F5DFBB]" />
                  <span>Réserver mon RDV pour les réseaux sociaux</span>
                </a>
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-xs bg-slate-100 hover:bg-slate-200 text-[#562C2C] transition-colors"
                >
                  <HelpCircle className="w-3.5 h-3.5 text-[#F2542D]" />
                  <span>Poser une question sur ce pack</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* BOUTIQUE GUIDES-DIGITAUX.COM BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-gradient-to-r from-[#F5DFBB]/80 via-white to-[#FAF4F2] border-2 border-[#F2542D]/30 p-8 sm:p-12 rounded-3xl shadow-md flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <span className="inline-block px-3.5 py-1 bg-[#F2542D] text-white text-xs font-black uppercase tracking-wider rounded-full shadow-xs">
              💡 Quand y&apos;en a plus, y&apos;en a encore !
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#562C2C]">
              Découvre la boutique en ligne Guides-Digitaux.com
            </h3>
            <p className="text-slate-700 text-sm sm:text-base max-w-2xl leading-relaxed">
              Envie d&apos;aller encore plus loin ? Retrouve nos formations en ligne, nos checklists et nos guides complets sur notre boutique officielle pour rendre le digital simple et accessible à tous.
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
              Absolument pas ! La majorité de mes clients travaillent à domicile ou en itinérance. La fiche Google Business Profile permet de masquer ton adresse personnelle tout en apparaissant dans les recherches locales.
            </p>
          </div>

          <div className="space-y-2 pb-4 border-b border-slate-100">
            <h3 className="font-bold text-[#562C2C] text-base">Y a-t-il des coûts récurrents mensuels ?</h3>
            <p className="text-sm text-slate-600">
              Non. Mes tarifs sont transparents et s&apos;entendent sans abonnement caché. Si ton projet nécessite un hébergement web ou un nom de domaine, on choisit ensemble la solution la plus économique et tu en restes propriétaire à 100%.
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
