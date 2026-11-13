import Link from "next/link";
import Image from "next/image";
import TradeRotater from "@/components/TradeRotater";
import YellowBrushUnderline from "@/components/YellowBrushUnderline";
import { 
  Check, 
  ArrowRight, 
  Calendar, 
  Compass, 
  Sparkles, 
  Mail, 
  Phone, 
  FileSearch, 
  GraduationCap, 
  HeartHandshake, 
  ShieldCheck, 
  Accessibility, 
  CheckCircle2, 
  XCircle,
  HelpCircle,
  Clock,
  Building2,
  Laptop,
  ArrowLeftRight,
  Eye,
  Keyboard
} from "lucide-react";

export const metadata = {
  title: "Stéphanie ROCQ • Référente accessibilité pour agences web & PME",
  description: "Votre référente accessibilité sans recruter. Audits, formations et accompagnement régulier expliqués simplement, sans jargon, pour agences web et PME.",
};

export default function HomePage() {
  const comparisonRows = [
    {
      criterion: "Coût annuel",
      internal: "60 000 € à 80 000 € / an (salaire brut + charges patronales + coût de recrutement)",
      external: "Dès 300 € / mois (budget totalement maîtrisé et prévisible)",
    },
    {
      criterion: "Flexibilité & besoins réels",
      internal: "Coût fixe pesant sur la structure même pendant les mois creux",
      external: "À la demande, activable selon le planning de vos projets",
    },
    {
      criterion: "Engagement",
      internal: "CDI lourd ou CDD d'expert a11y très difficile à sourcer",
      external: "Sans engagement après 2 mois, résiliable à tout moment",
    },
    {
      criterion: "Pertinence",
      internal: "Difficile à rentabiliser pour une agence de 5 à 30 personnes",
      external: "Conçu sur-mesure pour les agences agiles et les PME",
    },
  ];

  return (
    <div className="overflow-x-hidden bg-[#FAF4F2] text-[#562C2C] pb-16 selection:bg-[#F5DFBB] selection:text-[#562C2C]">

      {/* 1. EN-TÊTE (HERO) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F5DFBB]/40 via-[#FAF4F2] to-white pt-10 pb-20 lg:pt-16 lg:pb-28 border-b border-[#562C2C]/10">
        
        {/* Glows décoratifs discrets */}
        <div className="absolute top-12 left-[15%] w-72 h-72 bg-[#F2542D]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-[20%] w-96 h-96 bg-[#0E9594]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Colonne texte gauche */}
            <div className="lg:col-span-7 space-y-6 text-left">

              {/* Badge supérieur */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#562C2C] text-[#F5DFBB] text-xs font-extrabold uppercase tracking-wider shadow-sm">
                <Accessibility className="w-4 h-4 text-[#F2542D] stroke-[2.5]" />
                <span>Stéphanie ROCQ &bull; Référente accessibilité pour agences</span>
              </div>

              {/* Rotateur dynamique */}
              <div className="pt-1">
                <TradeRotater />
              </div>

              {/* H1 Principal avec trait de pinceau */}
              <div className="space-y-3 pt-2">
                <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-black text-[#562C2C] tracking-tight leading-[1.15]">
                  Votre référente accessibilité,{" "}
                  <span className="relative inline-block px-1">
                    sans recruter.
                    <YellowBrushUnderline variant="thick" color="#F2542D" />
                  </span>
                </h1>

                {/* Phrase d'appui */}
                <p className="text-xl sm:text-2xl font-bold text-[#127475] tracking-tight leading-snug">
                  Je m&apos;occupe de l&apos;accessibilité avec vous, simplement.
                </p>
              </div>

              {/* Sous-titre */}
              <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed max-w-2xl pt-1">
                Audits, formations et accompagnement régulier, expliqués clairement, sans jargon.
              </p>

              {/* Boutons d'action */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <a
                  href="https://calendar.app.google/LmPYPbdEHxwC4ewq6"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Réserver un appel de découverte de 30 minutes sur Google Agenda (ouvre un nouvel onglet)"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-white bg-[#562C2C] hover:bg-[#C43219] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-5 h-5 text-[#F5DFBB]" />
                  <span>Réserver un appel de découverte de 30 minutes</span>
                </a>

                <a
                  href="#offres"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-[#562C2C] bg-white hover:bg-[#F5DFBB]/40 border border-[#562C2C]/20 shadow-sm transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>Découvrir les 3 formules</span>
                  <ArrowRight className="w-4 h-4 text-[#C43219]" />
                </a>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 font-semibold pt-1">
                ✓ 30 min concrètes en visio &bull; Zéro discours commercial forcé &bull; Pistes d&apos;action directes
              </p>

            </div>

            {/* Colonne visuelle droite */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end z-20">
              <div className="relative w-full max-w-md lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-[#562C2C]/10 p-3 group">
                  <Image
                    src="/images/BG_Head-Stef-gps.jpg"
                    alt="Stéphanie ROCQ - Référente accessibilité pour agences"
                    width={682}
                    height={1024}
                    priority
                    className="w-full max-h-[540px] object-cover object-top rounded-2xl group-hover:scale-102 transition-transform duration-500"
                  />

                  {/* Badge flottant haut */}
                  <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-[#F5DFBB] flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#127475]/15 text-[#127475] flex items-center justify-center font-bold text-lg">
                      <Accessibility className="w-5 h-5 text-[#127475]" />
                    </div>
                    <div>
                      <p className="text-xs font-extrabold text-[#562C2C]">Zéro jargon</p>
                      <p className="text-xs text-[#127475] font-bold">Explications concrètes</p>
                    </div>
                  </div>

                  {/* Badge flottant bas */}
                  <div className="absolute bottom-6 right-6 bg-[#562C2C] text-[#F5DFBB] p-4 rounded-2xl shadow-2xl border border-[#F5DFBB]/30 max-w-[250px]">
                    <div className="flex items-center gap-2 mb-1 text-[#F5DFBB]">
                      <ShieldCheck className="w-4 h-4 text-[#F5DFBB]" />
                      <span className="text-xs font-bold uppercase tracking-wider">Agences 5 à 30 pers.</span>
                    </div>
                    <p className="text-xs text-[#F5DFBB] leading-snug">
                      Sécurisez vos appels d&apos;offres et vos livraisons sans recruter à plein temps.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. LE PROBLÈME DES AGENCES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-[#562C2C]/10 shadow-xl space-y-10 relative overflow-hidden">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5DFBB] text-[#562C2C] text-xs font-extrabold uppercase tracking-wider border border-[#562C2C]/10">
              <span>LE CONSTAT DES AGENCES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#562C2C] leading-tight tracking-tight">
              Vous perdez sûrement des appels d&apos;offres à cause de l&apos;accessibilité
            </h2>

            <div className="space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed pt-2">
              <p>
                Vos clients vous demandent de plus en plus si vos sites sont accessibles. Vous avez de bons développeurs et de bons designers, mais personne pour dire ce qui bloque vraiment, ni pour répondre sérieusement dans un appel d&apos;offres.
              </p>
              <p>
                Depuis 2025 et l&apos;entrée en vigueur de l&apos;<strong>European Accessibility Act (EAA)</strong>, l&apos;accessibilité n&apos;est plus une simple option : c&apos;est un critère éliminatoire dans les marchés publics et chez les grands comptes privés. Ne laissez pas un défaut de contraste ou une touche tabulation mal gérée vous faire perdre un contrat à 30 000 € ou 50 000 €.
              </p>
              <p>
                Recruter quelqu&apos;un à plein temps coûte cher, surtout pour une petite agence. Alors vous repoussez le sujet, et le risque de passer à côté d&apos;un marché grandit.
              </p>
            </div>

            {/* Encadré de transition */}
            <div className="p-6 bg-[#FAF4F2] border-l-4 border-[#C43219] rounded-r-2xl space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-[#C43219]">La bonne nouvelle</p>
              <p className="text-base sm:text-lg font-bold text-[#562C2C] leading-relaxed">
                Ce n&apos;est pas une fatalité. Je vous accompagne juste quand vous en avez besoin : un audit sur un projet, une formation pour votre équipe, ou un rendez-vous chaque mois pour avancer ensemble.
              </p>
            </div>
          </div>

          {/* 3 Bénéfices immédiats */}
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#562C2C]/10 list-none p-0 m-0">
            <li className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-full bg-[#127475] text-white flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">
                <Check className="w-4 h-4 stroke-[3]" />
              </span>
              <span className="text-sm font-semibold text-[#562C2C] leading-snug">
                Répondre avec assurance aux critères d&apos;accessibilité des appels d&apos;offres.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-full bg-[#127475] text-white flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">
                <Check className="w-4 h-4 stroke-[3]" />
              </span>
              <span className="text-sm font-semibold text-[#562C2C] leading-snug">
                Faire monter vos équipes en compétences sans les surcharger inutilement.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-full bg-[#127475] text-white flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">
                <Check className="w-4 h-4 stroke-[3]" />
              </span>
              <span className="text-sm font-semibold text-[#562C2C] leading-snug">
                Livrer des projets conformes et éviter les retours négatifs après mise en ligne.
              </span>
            </li>
          </ul>

        </div>
      </section>

      {/* 3. TABLEAU COMPARATIF : RECRUTER VS RÉFÉRENTE EXTERNE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="space-y-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#127475]/10 text-[#127475] text-xs font-extrabold uppercase tracking-wider border border-[#127475]/20">
              <span>COMPARAISON SIMPLE &amp; DIRECTE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-[#562C2C] tracking-tight">
              Recruter un expert a11y en interne ou faire équipe avec moi ?
            </h2>

            <p className="text-slate-700 text-sm sm:text-base font-medium">
              Pour une agence de 5 à 30 personnes, le calcul est vite fait.
            </p>
          </div>

          {/* Version Desktop : Tableau classique */}
          <div className="hidden md:block bg-white rounded-3xl border border-[#562C2C]/10 shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#562C2C]/10 bg-[#FAF4F2]">
                    <th scope="col" className="p-5 sm:p-6 text-sm font-black text-[#562C2C] w-1/4">
                      Critère
                    </th>
                    <th scope="col" className="p-5 sm:p-6 text-sm font-black text-slate-700 w-3/8">
                      Recruter un expert a11y à l&apos;année
                    </th>
                    <th scope="col" className="p-5 sm:p-6 text-sm font-black text-[#562C2C] bg-[#F5DFBB]/60 w-3/8">
                      Votre référente accessibilité externe
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#562C2C]/10 text-sm">
                  {comparisonRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <th scope="row" className="p-5 sm:p-6 font-extrabold text-[#562C2C] align-top">
                        {row.criterion}
                      </th>
                      <td className="p-5 sm:p-6 text-slate-700 align-top leading-relaxed">
                        <div className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                          <span>{row.internal}</span>
                        </div>
                      </td>
                      <td className="p-5 sm:p-6 font-bold text-[#562C2C] bg-[#F5DFBB]/20 align-top leading-relaxed">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#127475] shrink-0 mt-0.5" />
                          <span>{row.external}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Version Mobile : Cartes comparatives fluides sans défilement horizontal */}
          <div className="md:hidden space-y-4">
            {comparisonRows.map((row, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#562C2C]/10 shadow-md p-5 space-y-4"
              >
                <div className="border-b border-[#562C2C]/10 pb-2.5">
                  <span className="text-xs font-black uppercase tracking-wider text-[#127475]">Critère comparatif</span>
                  <h3 className="text-base font-black text-[#562C2C] mt-0.5">{row.criterion}</h3>
                </div>

                <div className="space-y-3 text-sm">
                  {/* Option interne */}
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Recruter un expert en interne</p>
                    <div className="flex items-start gap-2 pt-0.5">
                      <XCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-xs sm:text-sm leading-snug">{row.internal}</span>
                    </div>
                  </div>

                  {/* Option Référente externe */}
                  <div className="bg-[#F5DFBB]/30 p-3.5 rounded-xl border border-[#F5DFBB] space-y-1">
                    <p className="text-xs font-black text-[#127475] uppercase tracking-wide">Votre référente externe</p>
                    <div className="flex items-start gap-2 pt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-[#127475] shrink-0 mt-0.5" />
                      <span className="font-bold text-[#562C2C] text-xs sm:text-sm leading-snug">{row.external}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3bis. COMPARAISON VISUELLE : ACCESSIBILITÉ PHYSIQUE VS ACCESSIBILITÉ WEB */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-[#562C2C] text-white rounded-3xl p-8 sm:p-12 shadow-2xl space-y-10 relative border border-[#F5DFBB]/20">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5DFBB] text-[#562C2C] text-xs sm:text-sm font-black uppercase tracking-wider shadow-xs">
              <Accessibility className="w-4 h-4 text-[#C43219]" aria-hidden="true" />
              <span>Même règle, même obligation</span>
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#F5DFBB] leading-tight">
              Dans la rue, vous mettez une rampe. Sur votre site, vous faites quoi ?
            </h2>
            <p className="text-sm sm:text-base text-[#F5DFBB]/90 leading-relaxed">
              Pour une boutique, un bureau ou un établissement public, l&apos;accès physique est une évidence obligatoire. Sur le web, vous êtes désormais obligé de le faire aussi — mais c&apos;est encore trop souvent oublié.
            </p>
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {/* Pastille centrale "=" */}
            <div
              className="hidden lg:flex items-center justify-center w-14 h-14 rounded-full bg-[#C43219] text-white font-black text-3xl shadow-2xl border-4 border-[#562C2C] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
              aria-hidden="true"
            >
              =
            </div>

            {/* Carte 1 : Accessibilité Physique */}
            <div className="bg-white text-[#562C2C] rounded-2xl overflow-hidden shadow-xl flex flex-col">
              <div className="relative aspect-[16/10] w-full bg-slate-100">
                <Image
                  src="/images/accessibilite-physique-rampe.jpg"
                  alt="Entrée d'une boutique équipée d'une rampe d'accès pour fauteuil roulant installée à côté des marches"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#562C2C] px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-md flex items-center gap-1.5 border border-[#562C2C]/10">
                  <Building2 className="w-3.5 h-3.5 text-[#127475]" aria-hidden="true" />
                  <span>Obligatoire dans la vie réelle</span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-3 flex-grow flex flex-col justify-center">
                <h3 className="text-xl sm:text-2xl font-black text-[#562C2C]">
                  Une rampe devant les marches
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Pour un commerce ou un lieu recevant du public, personne ne discute : il faut permettre à chacun d&apos;entrer et de s&apos;orienter librement.
                </p>
              </div>
            </div>

            {/* Carte 2 : Accessibilité Web */}
            <div className="bg-[#FAF4F2] text-[#562C2C] rounded-2xl overflow-hidden shadow-xl border-2 border-[#F5DFBB] flex flex-col">
              <div className="relative aspect-[16/10] w-full bg-slate-100">
                <Image
                  src="/images/accessibilite-web-clavier.jpg"
                  alt="Utilisateur naviguant sur un site internet uniquement au clavier avec la touche Tabulation et un contour de focus visible sur le bouton"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#C43219] text-white px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-md flex items-center gap-1.5">
                  <Laptop className="w-3.5 h-3.5 text-white" aria-hidden="true" />
                  <span>Obligatoire sur votre site aussi</span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-3 flex-grow flex flex-col justify-center">
                <h3 className="text-xl sm:text-2xl font-black text-[#562C2C]">
                  La même exigence sur votre site web
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Navigation fluide au clavier, focus visible, contrastes nets et boutons lisibles au lecteur d&apos;écran : sans ça, vous fermez virtuellement votre porte à vos visiteurs.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 border border-[#F5DFBB]/30 rounded-2xl p-5 text-center max-w-4xl mx-auto">
            <p className="text-sm sm:text-base font-bold text-[#F5DFBB]">
              Ça, vous êtes obligé de le faire aussi sur votre site web. La bonne nouvelle ? En ligne, ça coûte 10 fois moins cher qu&apos;une rampe en béton.
            </p>
          </div>

        </div>
      </section>

      {/* 4. TROIS FAÇONS DE TRAVAILLER ENSEMBLE */}
      <section id="offres" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 scroll-mt-24">
        <div className="space-y-12">

          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5DFBB] text-[#562C2C] text-xs font-extrabold uppercase tracking-wider border border-[#562C2C]/10">
              <span>MES OFFRES D&apos;ACCOMPAGNEMENT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#562C2C] leading-tight tracking-tight">
              Trois façons de travailler ensemble
            </h2>

            <p className="text-slate-700 text-base sm:text-lg">
              Des formules claires, adaptées à votre rythme et sans surprise budgétaire.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

            {/* CARTE 1 : L'AUDIT */}
            <div className="bg-white rounded-3xl p-8 border border-[#562C2C]/10 shadow-md hover:shadow-xl transition-all flex flex-col justify-between gap-8">
              <div className="space-y-5">
                <div className="w-14 h-14 rounded-2xl bg-[#F5DFBB] text-[#562C2C] flex items-center justify-center text-2xl shadow-xs">
                  <FileSearch className="w-7 h-7 text-[#C43219]" />
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#127475]">Ponctuel &amp; Précis</span>
                  <h3 className="text-2xl font-black text-[#562C2C]">L&apos;audit</h3>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed">
                  J&apos;analyse votre site ou votre projet comme le ferait un utilisateur qui navigue au clavier ou avec un lecteur d&apos;écran. Vous recevez un rapport clair, avec les problèmes classés par priorité et expliqués simplement.
                </p>

                <div className="pt-4 border-t border-[#562C2C]/10 space-y-2">
                  <h4 className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">Tarif indicatif</h4>
                  <p className="text-2xl font-black text-[#562C2C]">
                    Dès 450 €
                  </p>
                  <p className="text-xs text-slate-700">Pour un mini-audit de quelques pages clés.</p>
                </div>
              </div>

              <Link
                href="/services-et-tarifs#audit"
                className="w-full text-center py-3.5 px-4 rounded-xl font-bold text-sm bg-[#562C2C] hover:bg-[#C43219] text-white transition-colors block shadow-sm"
              >
                Découvrir l&apos;offre d&apos;audit
              </Link>
            </div>

            {/* CARTE 2 : LA FORMATION */}
            <div className="bg-white rounded-3xl p-8 border-2 border-[#C43219] shadow-xl ring-4 ring-[#C43219]/10 relative flex flex-col justify-between gap-8">
              <span className="absolute -top-3.5 right-6 bg-[#C43219] text-white text-xs font-extrabold uppercase px-3.5 py-1 rounded-full shadow-xs">
                Atelier Pratique
              </span>

              <div className="space-y-5">
                <div className="w-14 h-14 rounded-2xl bg-[#127475]/15 text-[#127475] flex items-center justify-center text-2xl shadow-xs">
                  <GraduationCap className="w-7 h-7 text-[#127475]" />
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#127475]">Montée en compétences</span>
                  <h3 className="text-2xl font-black text-[#562C2C]">La formation</h3>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed">
                  Des ateliers efficaces pour vos designers, vos développeurs et vos chefs de projet. Ils repartent avec des réflexes concrets, pas avec un cours théorique.
                </p>

                <div className="pt-4 border-t border-[#562C2C]/10 space-y-2">
                  <h4 className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">Tarif &amp; Modalités</h4>
                  <p className="text-2xl font-black text-[#562C2C]">
                    À partir de 400 €
                  </p>
                  <p className="text-xs text-slate-700 font-semibold leading-relaxed">
                    La demi-journée &bull; En visio dans toute la France et toute la francophonie, ou sur site en métropole lilloise*
                  </p>
                  <p className="text-xs text-slate-700 italic pt-1 border-t border-dashed border-[#562C2C]/15">
                    * Sur site uniquement en métropole lilloise et si vos locaux sont accessibles physiquement aux personnes à mobilité réduite.
                  </p>
                </div>
              </div>

              <Link
                href="/services-et-tarifs#formation"
                className="w-full text-center py-3.5 px-4 rounded-xl font-bold text-sm bg-[#C43219] hover:bg-[#9E230E] text-white transition-colors block shadow-md"
              >
                Découvrir les 4 modules
              </Link>
            </div>

            {/* CARTE 3 : LE RÉFÉRENT MENSUEL */}
            <div className="bg-white rounded-3xl p-8 border border-[#562C2C]/10 shadow-md hover:shadow-xl transition-all flex flex-col justify-between gap-8">
              <div className="space-y-5">
                <div className="w-14 h-14 rounded-2xl bg-[#F5DFBB] text-[#562C2C] flex items-center justify-center text-2xl shadow-xs">
                  <HeartHandshake className="w-7 h-7 text-[#127475]" />
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#127475]">Sérénité continue</span>
                  <h3 className="text-2xl font-black text-[#562C2C]">Le référent mensuel</h3>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed">
                  Je deviens votre référente accessibilité, à la demande. Vous me posez vos questions, je relis vos maquettes et vos parcours, et on fait le point chaque mois.
                </p>

                <div className="pt-4 border-t border-[#562C2C]/10 space-y-2">
                  <h4 className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">Abonnement flexible</h4>
                  <p className="text-2xl font-black text-[#562C2C]">
                    À partir de 300 € <span className="text-xs font-normal text-slate-700">/ mois</span>
                  </p>
                  <p className="text-xs text-[#127475] font-bold">
                    Deux mois minimum, puis résiliable à tout moment.
                  </p>
                </div>
              </div>

              <Link
                href="/services-et-tarifs#referent"
                className="w-full text-center py-3.5 px-4 rounded-xl font-bold text-sm bg-[#562C2C] hover:bg-[#C43219] text-white transition-colors block shadow-sm"
              >
                Découvrir les 3 formules
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* 5. CE QUE JE FAIS / CE QUE JE NE FAIS PAS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-[#FAF4F2] border border-[#562C2C]/15 rounded-3xl p-8 sm:p-12 space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-[#562C2C]">
              Une collaboration saine et transparente
            </h2>
            <p className="text-slate-700 text-sm sm:text-base font-medium">
              Pour que notre partenariat fonctionne, les règles du jeu sont posées dès le départ.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Ce que je fais */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#127475]/30 space-y-4 shadow-sm">
              <h3 className="text-lg font-bold text-[#127475] flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#127475]" />
                <span>Ce que je fais pour vous</span>
              </h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#127475] shrink-0 mt-0.5 stroke-[3]" />
                  <span>J&apos;audite vos maquettes et vos produits digitaux avec les vrais outils d&apos;assistance (clavier, lecteur d&apos;écran).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#127475] shrink-0 mt-0.5 stroke-[3]" />
                  <span>Je transmets la méthode et les réflexes concrets à vos designers, développeurs et chefs de projet.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#127475] shrink-0 mt-0.5 stroke-[3]" />
                  <span>J&apos;explique les correctifs en français clair pour que votre équipe puisse les appliquer sans perdre de temps.</span>
                </li>
              </ul>
            </div>

            {/* Ce que je ne fais pas */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#C43219]/30 space-y-4 shadow-sm">
              <h3 className="text-lg font-bold text-[#C43219] flex items-center gap-2">
                <XCircle className="w-5 h-5 text-[#C43219]" />
                <span>Ce que je ne fais pas</span>
              </h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#C43219] font-bold text-base leading-none">&times;</span>
                  <span><strong>Pas de réécriture de code :</strong> je n&apos;écris pas de code à la place de vos développeurs. Ils restent maîtres de leur base de code et montent eux-mêmes en compétences.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#C43219] font-bold text-base leading-none">&times;</span>
                  <span><strong>Pas de rapport théorique de 150 pages :</strong> vous recevez une liste d&apos;actions claires, priorisées selon leur impact réel pour les utilisateurs.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#C43219] font-bold text-base leading-none">&times;</span>
                  <span><strong>Pas d&apos;engagement forcé :</strong> le suivi mensuel s&apos;arrête dès que vous n&apos;en avez plus besoin, avec un préavis simple après 2 mois.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 6. EXEMPLARITÉ & ACCESSIBILITÉ DU SITE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#562C2C]/10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#127475]/15 text-[#127475] flex items-center justify-center shrink-0">
              <Accessibility className="w-6 h-6 text-[#127475]" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-[#562C2C]">
                Un site conçu pour être exemplaire et accessible à tous
              </h3>
              <p className="text-xs sm:text-sm text-slate-700">
                Contrastes élevés, navigation intégrale au clavier, structure sémantique et textes alternatifs vérifiés.
              </p>
            </div>
          </div>
          <Link
            href="/accessibilite"
            className="text-xs sm:text-sm font-bold text-[#127475] hover:text-[#C43219] underline underline-offset-4 shrink-0 transition-colors"
          >
            Consulter la déclaration d&apos;accessibilité (RGAA) →
          </Link>
        </div>
      </section>

      {/* 7. APPEL À L'ACTION FINAL */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="bg-[#562C2C] text-white rounded-3xl p-10 sm:p-14 text-center space-y-8 shadow-2xl relative overflow-hidden border border-[#F5DFBB]/20">
          
          <div className="space-y-4 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5DFBB]/20 text-[#F5DFBB] text-xs font-bold uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5 text-[#F5DFBB]" />
              <span>Premier contact sans engagement</span>
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-[#F5DFBB]">
              On en parle autour d&apos;un premier échange ?
            </h2>

            <p className="text-[#F5DFBB] text-base sm:text-lg leading-relaxed">
              30 minutes en visio, gratuit et sans engagement. On fait le point sur vos projets en cours, vos besoins en accessibilité, et vous repartez avec des pistes concrètes.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
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
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
            >
              <Mail className="w-4 h-4 text-[#F5DFBB]" />
              <span>M&apos;écrire directement</span>
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
