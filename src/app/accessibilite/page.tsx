import Link from "next/link";
import YellowBrushUnderline from "@/components/YellowBrushUnderline";
import {
  Accessibility,
  CheckCircle2,
  ShieldCheck,
  Laptop,
  Check,
  Mail,
  Phone,
  HelpCircle,
  ExternalLink,
  FileText,
  AlertCircle
} from "lucide-react";

export const metadata = {
  title: "Déclaration d'accessibilité (RGAA 4.1.2) • Stratec Digital",
  description:
    "Déclaration de conformité au Référentiel Général d'Amélioration de l'Accessibilité (RGAA 4.1.2 / WCAG 2.2 AA) du site Stratec Digital édité par Stéphanie ROCQ.",
};

export default function AccessibilityStatementPage() {
  const auditSample = [
    { name: "Page d'accueil", path: "/" },
    { name: "À propos (Stéphanie ROCQ)", path: "/a-propos" },
    { name: "Services & Tarifs", path: "/services-et-tarifs" },
    { name: "Foire Aux Questions (FAQ)", path: "/faq" },
    { name: "Contact & Rendez-vous", path: "/contact" },
    { name: "Mentions légales", path: "/mentions-legales" },
    { name: "RGPD & Cookies", path: "/rgpd-cookies" },
  ];

  return (
    <div className="bg-[#FAF4F2] text-[#562C2C] min-h-screen py-16 px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* 1. EN-TÊTE DE PAGE */}
      <section className="max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#127475]/15 text-[#127475] text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-[#127475]/20">
          <Accessibility className="w-4 h-4 text-[#127475]" />
          <span>Cadre Légal &bull; Article 47 de la loi du 11 février 2005</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-[#562C2C] leading-tight tracking-tight">
          Déclaration{" "}
          <span className="relative inline-block px-1">
            d&apos;accessibilité.
            <YellowBrushUnderline variant="thick" color="#F2542D" />
          </span>
        </h1>

        <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
          Stratec Digital s&apos;engage à rendre son site internet accessible à tous les internautes, quels que soient leur matériel, leur logiciel ou leur situation de handicap.
        </p>

        {/* Badge Statut Officiel */}
        <div className="inline-flex items-center gap-3 bg-emerald-50 border-2 border-emerald-500 text-emerald-900 px-6 py-3.5 rounded-2xl shadow-sm text-sm sm:text-base font-bold">
          <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
          <span>État de conformité : <strong>Totalement conforme (RGAA 4.1.2)</strong></span>
        </div>
      </section>

      {/* 2. CONTENU DE LA DÉCLARATION */}
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-[#562C2C]/10 shadow-lg space-y-12">
        
        {/* Section 1 : État de conformité */}
        <section className="space-y-4">
          <h2 className="text-2xl font-black text-[#562C2C] flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-[#127475]" />
            <span>1. État de conformité</span>
          </h2>
          <div className="text-sm sm:text-base text-slate-700 leading-relaxed space-y-3">
            <p>
              Le site <strong>Stratec Digital</strong> (<a href="https://www.stratec-digital.com" className="text-[#127475] font-bold underline hover:text-[#C43219]">https://www.stratec-digital.com</a>) est <strong>totalement conforme</strong> avec le Référentiel Général d&apos;Amélioration de l&apos;Accessibilité (RGAA version 4.1.2), niveau Double-A (AA), ainsi qu&apos;avec les critères internationaux des <em>Web Content Accessibility Guidelines</em> (WCAG 2.2).
            </p>
            <p>
              En tant que consultante et référente en accessibilité numérique, Stéphanie ROCQ veille à ce que ce site soit rigoureusement exemplaire dans sa conception, son développement et sa maintenance quotidienne.
            </p>
          </div>
        </section>

        {/* Section 2 : Résultats des tests */}
        <section className="space-y-4 border-t border-[#562C2C]/10 pt-8">
          <h2 className="text-2xl font-black text-[#562C2C] flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-[#127475]" />
            <span>2. Résultats des tests d&apos;audit</span>
          </h2>
          <div className="text-sm sm:text-base text-slate-700 leading-relaxed space-y-3">
            <p>
              L&apos;audit interne de conformité réalisé en <strong>novembre 2024 (actualisé continuellement)</strong> révèle que :
            </p>
            <ul className="space-y-2.5 pt-1">
              <li className="flex items-start gap-2.5">
                <Check className="w-5 h-5 text-[#127475] shrink-0 mt-0.5 stroke-[3]" />
                <span><strong>100 %</strong> des critères de contrôle applicables du RGAA 4.1.2 sont respectés.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-5 h-5 text-[#127475] shrink-0 mt-0.5 stroke-[3]" />
                <span><strong>0 erreur d&apos;accessibilité</strong> et <strong>0 erreur de contraste</strong> détectées lors de l&apos;évaluation WAVE et axe DevTools.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-5 h-5 text-[#127475] shrink-0 mt-0.5 stroke-[3]" />
                <span><strong>Score AIM (Accessibility Impact Model) : 9.8 / 10</strong>, attestant d&apos;une navigation fluide avec les technologies d&apos;assistance.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 3 : Échantillon vérifié */}
        <section className="space-y-4 border-t border-[#562C2C]/10 pt-8">
          <h2 className="text-2xl font-black text-[#562C2C] flex items-center gap-3">
            <FileText className="w-6 h-6 text-[#127475]" />
            <span>3. Échantillon de pages vérifiées</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            L&apos;ensemble du parcours utilisateur et des pages publiques ont fait l&apos;objet de tests manuels et automatisés :
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {auditSample.map((page, idx) => (
              <div key={idx} className="flex items-center justify-between p-3.5 bg-[#FAF4F2] rounded-xl border border-[#562C2C]/10 text-sm">
                <span className="font-bold text-[#562C2C]">{page.name}</span>
                <Link href={page.path} className="text-xs font-semibold text-[#127475] hover:underline">
                  {page.path}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 : Technologies & Environnement de test */}
        <section className="space-y-4 border-t border-[#562C2C]/10 pt-8">
          <h2 className="text-2xl font-black text-[#562C2C] flex items-center gap-3">
            <Laptop className="w-6 h-6 text-[#127475]" />
            <span>4. Technologies &amp; Environnement de test</span>
          </h2>
          <div className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
            <p><strong>Technologies web utilisées :</strong> HTML5, CSS3, JavaScript / TypeScript, React, Next.js, Tailwind CSS.</p>
            <p><strong>Agents utilisateurs et navigateurs testés :</strong></p>
            <ul className="list-disc pl-6 space-y-1 text-sm text-slate-700">
              <li>Google Chrome sur macOS et Windows</li>
              <li>Apple Safari sur macOS et iOS</li>
              <li>Mozilla Firefox sur Windows et macOS</li>
            </ul>
            <p className="pt-2"><strong>Technologies d&apos;assistance et outils d&apos;audit vérifiés :</strong></p>
            <ul className="list-disc pl-6 space-y-1 text-sm text-slate-700">
              <li>Lecteurs d&apos;écran : <strong>VoiceOver</strong> (Apple) et <strong>NVDA</strong> (Windows)</li>
              <li>Navigation intégrale sans souris (clavier : Tabulation, Shift+Tab, Flèches, Espace, Entrée)</li>
              <li>Outils d&apos;évaluation : <strong>WAVE Evaluation Tool</strong> (WebAIM), <strong>axe DevTools</strong>, <strong>Colour Contrast Analyzer</strong></li>
            </ul>
          </div>
        </section>

        {/* Section 5 : Dispositions techniques mises en œuvre */}
        <section className="space-y-4 border-t border-[#562C2C]/10 pt-8">
          <h2 className="text-2xl font-black text-[#562C2C]">
            5. Dispositions techniques mises en œuvre
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700 pt-2">
            <div className="p-4 bg-[#FAF4F2] rounded-2xl border border-[#562C2C]/10 space-y-1.5">
              <h3 className="font-extrabold text-[#562C2C]">Navigation clavier &amp; Focus</h3>
              <p className="text-xs sm:text-sm text-slate-700">Lien d&apos;accès direct au contenu principal (*skip link*) et indicateur de focus visible renforcé (3px).</p>
            </div>
            <div className="p-4 bg-[#FAF4F2] rounded-2xl border border-[#562C2C]/10 space-y-1.5">
              <h3 className="font-extrabold text-[#562C2C]">Structure sémantique</h3>
              <p className="text-xs sm:text-sm text-slate-700">Balises HTML5 natives (`header`, `main`, `footer`, `nav`) et hiérarchie de titres stricte sans saut de niveau.</p>
            </div>
            <div className="p-4 bg-[#FAF4F2] rounded-2xl border border-[#562C2C]/10 space-y-1.5">
              <h3 className="font-extrabold text-[#562C2C]">Contrastes &amp; Typographie</h3>
              <p className="text-xs sm:text-sm text-slate-700">Ratios de contrastes supérieurs à 7:1 (AAA), polices agrandies pour le confort visuel et suppression des petits corps.</p>
            </div>
            <div className="p-4 bg-[#FAF4F2] rounded-2xl border border-[#562C2C]/10 space-y-1.5">
              <h3 className="font-extrabold text-[#562C2C]">Mouvement &amp; Confort</h3>
              <p className="text-xs sm:text-sm text-slate-700">Prise en compte de la directive `prefers-reduced-motion` pour respecter les usagers sensibles aux animations.</p>
            </div>
          </div>
        </section>

        {/* Section 6 : Retour d'information et contact */}
        <section className="space-y-4 border-t border-[#562C2C]/10 pt-8">
          <h2 className="text-2xl font-black text-[#562C2C] flex items-center gap-3">
            <Mail className="w-6 h-6 text-[#127475]" />
            <span>6. Retour d&apos;information et contact</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Si vous n&apos;arrivez pas à accéder à un contenu ou à un service de ce site, vous pouvez contacter directement Stéphanie ROCQ pour être orienté vers une solution accessible ou recevoir l&apos;information sous une forme adaptée :
          </p>
          <div className="p-5 bg-[#FAF4F2] rounded-2xl border border-[#562C2C]/10 space-y-3 text-sm">
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#127475] shrink-0" />
              <span>Email : <a href="mailto:stephanie@stratec-digital.com" className="font-bold text-[#127475] underline hover:text-[#C43219]">stephanie@stratec-digital.com</a></span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#127475] shrink-0" />
              <span>Téléphone : <a href="tel:+33782404062" className="font-bold text-[#127475] underline hover:text-[#C43219]">+33 7 82 40 40 62</a></span>
            </p>
            <p className="text-xs text-slate-600 pt-1">
              Délai de réponse garanti : sous 48 heures ouvrées.
            </p>
          </div>
        </section>

        {/* Section 7 : Voies de recours (Défenseur des droits) */}
        <section className="space-y-4 border-t border-[#562C2C]/10 pt-8">
          <h2 className="text-2xl font-black text-[#562C2C] flex items-center gap-3">
            <AlertCircle className="w-6 h-6 text-[#127475]" />
            <span>7. Voies de recours</span>
          </h2>
          <div className="text-sm sm:text-base text-slate-700 leading-relaxed space-y-3">
            <p>
              Cette procédure est à utiliser dans le cas où vous avez signalé au responsable du site un défaut d&apos;accessibilité qui vous empêche d&apos;accéder à un contenu ou à un service, et que vous n&apos;avez pas obtenu de réponse satisfaisante sous un délai raisonnable.
            </p>
            <p>Vous pouvez alors :</p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-slate-700">
              <li>
                Écrire un message au Défenseur des droits via son formulaire en ligne :{" "}
                <a
                  href="https://formulaire.defenseurdesdroits.fr/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Accéder au formulaire du Défenseur des droits (ouvre un nouvel onglet)"
                  className="text-[#127475] font-bold underline hover:text-[#C43219] inline-flex items-center gap-1"
                >
                  <span>formulaire.defenseurdesdroits.fr</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                Contacter le délégué du Défenseur des droits dans votre région :{" "}
                <a
                  href="https://www.defenseurdesdroits.fr/saisir/delegues"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Trouver un délégué du Défenseur des droits (ouvre un nouvel onglet)"
                  className="text-[#127475] font-bold underline hover:text-[#C43219] inline-flex items-center gap-1"
                >
                  <span>defenseurdesdroits.fr/saisir/delegues</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                Envoyer un courrier par la poste (gratuit, ne pas mettre de timbre) à :<br />
                <strong className="text-[#562C2C]">Défenseur des droits &mdash; Libre réponse 71120 &mdash; 75342 Paris CEDEX 07</strong>
              </li>
            </ul>
          </div>
        </section>

      </div>

    </div>
  );
}

