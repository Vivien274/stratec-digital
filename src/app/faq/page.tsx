import Link from "next/link";
import YellowBrushUnderline from "@/components/YellowBrushUnderline";
import { 
  HelpCircle, 
  ArrowRight, 
  Calendar, 
  Mail, 
  ShieldCheck, 
  Sparkles, 
  Code2, 
  Palette, 
  Briefcase, 
  Clock, 
  CheckCircle2,
  ChevronDown
} from "lucide-react";

export const metadata = {
  title: "Foire Aux Questions (FAQ) • Accessibilité Web pour Agences & PME | Stratec Digital",
  description:
    "Toutes les réponses à vos questions sur l'accompagnement d'une référente accessibilité externe : collaboration sans toucher à votre code, créativité préservée, appels d'offres et formules.",
};

export default function FAQPage() {
  const faqCategories = [
    {
      title: "Rôle & Méthode de travail",
      icon: Briefcase,
      color: "#127475",
      badge: "Collaboration & Équipe",
      questions: [
        {
          q: "Pourquoi faire appel à une référente externe plutôt que de recruter en interne ?",
          a: "Pour une agence de 5 à 30 personnes, recruter un profil accessibilité dédié représente un coût annuel de 60 000 € à 80 000 € (salaire brut, charges et coût d'embauche), difficile à rentabiliser sur des mois creux. En collaborant avec moi, vous bénéficiez immédiatement d'une expertise pointue dès 300 € par mois (1 demi-journée), activable à la demande selon votre planning de production, et sans aucun engagement lourd.",
        },
        {
          q: "Allez-vous modifier directement notre code ou réécrire le travail de nos développeurs ?",
          a: "Absolument pas, et c'est un principe non négociable. Vos développeurs restent 100 % maîtres de votre base de code, de vos choix d'architecture et de leurs outils. Mon rôle est de diagnostiquer les blocages, de tester avec les vrais outils d'assistance (clavier, lecteurs d'écran) et de leur transmettre des fiches de correctifs claires et hiérarchisées en français direct. Votre équipe monte durablement en compétences sans jamais se sentir dépossédée.",
        },
        {
          q: "Comment vous intégrez-vous au quotidien dans le flux de travail de notre agence ?",
          a: "En totale transparence avec vos rituels existants, sans bouleverser votre organisation :",
          bullets: [
            "Adaptation complète à vos outils quotidiens : Figma, Notion, Jira, Trello, Slack ou Microsoft Teams.",
            "Réponses asynchrones au fil de vos sprints pour ne jamais bloquer vos développeurs ou designers.",
            "Relecture ciblée de maquettes ou de composants sensibles avant intégration ou livraison.",
            "Point d'étape mensuel en visio pour faire le point sur vos projets en cours et anticiper la suite.",
          ],
        },
        {
          q: "Peut-on vous solliciter uniquement sur un projet ponctuel sans abonnement ?",
          a: "Tout à fait. Si vous avez un besoin précis — par exemple un audit complet pour sécuriser la livraison d'un site ou une réponse technique argumentée pour un appel d'offres —, nous pouvons intervenir en prestation ponctuelle au forfait (audit dès 450 € ou formation dès 400 €). La formule mensuelle est idéale pour la continuité, mais jamais imposée.",
        },
      ],
    },
    {
      title: "Design, Créativité & Faisabilité Technique",
      icon: Palette,
      color: "#C43219",
      badge: "Design & Technique",
      questions: [
        {
          q: "L'accessibilité ne risque-t-elle pas de brider la créativité de nos designers ?",
          a: "C'est l'une des craintes les plus fréquentes, mais c'est une idée reçue. Un site accessible n'est pas un site terne ou monochrome. L'accessibilité impose simplement des règles de lisibilité (ratios de contraste suffisants, hiérarchie visuelle reposante, zones de clic confortables, repérage clair du focus). En réalité, ces contraintes créent des interfaces plus élégantes, plus ergonomiques et infiniment plus agréables à utiliser pour 100 % des internautes.",
        },
        {
          q: "Faut-il viser 100 % de conformité RGAA dès le premier jour ?",
          a: "Non, et vouloir tout faire d'un coup est souvent le meilleur moyen de décourager les équipes. Nous appliquons la méthode des gains rapides (loi de Pareto 80/20) : éliminer d'abord les véritables barrières bloquantes (pièges au clavier, contrastes illisibles, boutons non nommés pour les lecteurs d'écran, formulaires incompréhensibles). Vous levez ainsi 90 % des freins réels pour les utilisateurs tout en restant réalistes sur vos plannings de livraison.",
        },
        {
          q: "À quel moment d'un projet web est-il le plus rentable d'intervenir ?",
          a: "Le plus tôt possible ! Corriger un défaut d'accessibilité sur une maquette Figma prend 5 minutes (ajuster une couleur ou une taille de police). Détecter ce même défaut après le développement nécessite de rouvrir le code, modifier les composants et retester l'ensemble, ce qui coûte 10 à 20 fois plus cher. Intervenir dès la phase de wireframe et de design est le meilleur moyen d'optimiser votre rentabilité.",
        },
      ],
    },
    {
      title: "Marché, Appels d'Offres & Valeur Client",
      icon: ShieldCheck,
      color: "#127475",
      badge: "Marché & Business",
      questions: [
        {
          q: "Quelles sont les obligations légales actuelles et à venir (Directive Européenne 2025) ?",
          a: "Depuis plusieurs années, les administrations et organismes publics sont tenus de respecter le RGAA. Avec la transposition de la Directive Européenne sur l'Accessibilité (European Accessibility Act) qui s'applique à compter de 2025, de nombreuses entreprises privées (e-commerce, services bancaires, médias, transports) sont désormais légalement tenues de rendre leurs services numériques accessibles sous peine de sanctions. Vos clients vont vous le demander de plus en plus.",
        },
        {
          q: "Comment vos interventions nous aident-elles à remporter des appels d'offres ?",
          a: "Dans la plupart des consultations publiques et des briefs de grands comptes, les critères d'accessibilité font l'objet d'une notation éliminatoire ou déterminante. Beaucoup d'agences se contentent de promesses vagues. Grâce à mon accompagnement, vous apportez des réponses précises, crédibles et appuyées sur une méthode reconnue (RGAA / WCAG 2.2), ce qui fait souvent la différence face à vos concurrents.",
        },
        {
          q: "Pouvons-nous refacturer vos prestations d'audit à nos clients finaux ?",
          a: "Oui, c'est même une pratique courante et vertueuse. L'audit d'accessibilité devient une ligne de prestation à haute valeur ajoutée dans vos devis. Vous valorisez le travail d'assurance qualité auprès de votre client, vous sécurisez la recette finale, et vous créez une marge saine pour votre agence sans mobiliser inutilement vos développeurs.",
        },
      ],
    },
    {
      title: "Modalités, Lieux & Formules",
      icon: Clock,
      color: "#562C2C",
      badge: "Organisation & Tarifs",
      questions: [
        {
          q: "Comment se déroulent les formations d'équipe et quelles sont les modalités de lieu ?",
          a: "Nos ateliers durent généralement d'une demi-journée à une journée complète, orientés à 100 % sur vos cas pratiques réels (vos maquettes, vos projets). Ils se déroulent en visioconférence par défaut (de préférence) partout en France et dans la francophonie. Des sessions sur site sont possibles en métropole lilloise, à l'unique condition que vos locaux soient physiquement accessibles aux personnes à mobilité réduite (PMR).",
        },
        {
          q: "Comment fonctionne l'engagement pour l'accompagnement mensuel ?",
          a: "Pour que le suivi porte ses fruits et que nous puissions instaurer de vrais réflexes au sein de votre équipe, l'accompagnement mensuel requiert un engagement initial de 2 mois seulement. Au-delà de ces 2 mois, la formule est résiliable à tout moment avec un simple préavis de 15 jours. Pas de contrat captif ni de mauvaise surprise.",
        },
        {
          q: "Comment se passe le premier échange de 30 minutes ?",
          a: "C'est un rendez-vous gratuit en visioconférence (via Google Agenda), sans aucun engagement commercial ni script de vente insistant. Nous faisons connaissance, vous m'expliquez le fonctionnement de votre agence et les projets sur lesquels vous vous posez des questions, et je vous donne déjà un premier avis franc et des pistes concrètes.",
        },
      ],
    },
  ];

  return (
    <div className="bg-[#FAF4F2] text-[#562C2C] min-h-screen py-16 px-4 sm:px-6 lg:px-8 space-y-20 selection:bg-[#F5DFBB] selection:text-[#562C2C]">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* EN-TÊTE PRINCIPAL */}
        <section className="text-center space-y-5 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5DFBB] text-[#562C2C] text-xs font-extrabold uppercase tracking-wider border border-[#562C2C]/10 shadow-xs">
            <HelpCircle className="w-4 h-4 text-[#C43219]" />
            <span>DES RÉPONSES CLAIRES &bull; ZÉRO JARGON</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#562C2C] leading-tight tracking-tight">
            Foire Aux{" "}
            <span className="relative inline-block px-1">
              Questions
              <YellowBrushUnderline variant="thick" color="#C43219" />
            </span>
          </h1>

          <p className="text-slate-700 text-base sm:text-lg leading-relaxed pt-2">
            Tout ce que les agences web et les entreprises me demandent avant de démarrer : collaboration avec vos équipes, préservation du design, respect de votre code et conformité légale.
          </p>
        </section>

        {/* ACCORDÉONS CATÉGORISÉS (RGAA Compliant avec HTML5 details/summary) */}
        <div className="space-y-12">
          {faqCategories.map((category, catIdx) => {
            const IconComponent = category.icon;
            return (
              <section key={catIdx} className="space-y-6">
                
                {/* En-tête de catégorie */}
                <div className="flex items-center gap-3 border-b border-[#562C2C]/15 pb-3">
                  <div 
                    className="w-10 h-10 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-xs"
                    style={{ backgroundColor: category.color }}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#127475]">
                      {category.badge}
                    </span>
                    <h2 className="text-2xl font-black text-[#562C2C]">
                      {category.title}
                    </h2>
                  </div>
                </div>

                {/* Liste des questions sous forme de détails dépliables */}
                <div className="space-y-4">
                  {category.questions.map((faq, qIdx) => (
                    <details
                      key={qIdx}
                      className="group bg-white rounded-2xl border border-[#562C2C]/10 shadow-xs hover:shadow-md transition-all overflow-hidden"
                    >
                      <summary className="flex items-center justify-between p-6 cursor-pointer select-none font-bold text-base sm:text-lg text-[#562C2C] hover:text-[#C43219] transition-colors focus:outline-none">
                        <span className="flex items-start gap-3 text-left pr-4">
                          <span className="text-[#C43219] font-black text-lg shrink-0">Q.</span>
                          <span>{faq.q}</span>
                        </span>
                        <ChevronDown className="w-5 h-5 text-slate-700 shrink-0 transition-transform duration-300 group-open:rotate-180" />
                      </summary>

                      <div className="px-6 pb-6 pt-3 text-slate-700 text-sm sm:text-base leading-relaxed border-t border-[#562C2C]/5 space-y-3 bg-[#FAF4F2]/30">
                        <p>{faq.a}</p>
                        {"bullets" in faq && Array.isArray(faq.bullets) && (
                          <ul className="space-y-2 pt-1 pl-1">
                            {faq.bullets.map((bullet, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-2.5">
                                <CheckCircle2 className="w-4 h-4 text-[#127475] shrink-0 mt-1" aria-hidden="true" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </details>
                  ))}
                </div>

              </section>
            );
          })}
        </div>

        {/* ENCADRÉ RÉASSURANCE ÉTHIQUE */}
        <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#562C2C]/10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#127475]/15 text-[#127475] flex items-center justify-center shrink-0 mt-1">
              <Sparkles className="w-6 h-6 text-[#127475]" />
            </div>
            <div className="space-y-1">
              <h3 className="font-extrabold text-lg text-[#562C2C]">
                Une autre question en tête ?
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Chaque agence a son propre fonctionnement et ses contraintes d&apos;équipe. Aucun sujet n&apos;est tabou, posez-moi vos questions directement en toute franchise.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-6 py-3.5 rounded-xl font-bold text-sm bg-[#562C2C] hover:bg-[#C43219] text-white transition-all shadow-sm"
          >
            Me poser une question
          </Link>
        </section>

        {/* CALL TO ACTION FINAL */}
        <section className="bg-[#562C2C] text-white rounded-3xl p-10 sm:p-14 text-center space-y-8 shadow-2xl relative overflow-hidden border border-[#F5DFBB]/20">
          
          <div className="space-y-4 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5DFBB]/20 text-[#F5DFBB] text-xs font-bold uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5 text-[#F5DFBB]" />
              <span>30 MINUTES EN VISIO &bull; SANS ENGAGEMENT</span>
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-[#F5DFBB]">
              Faisons le point sur vos projets en cours
            </h2>

            <p className="text-[#F5DFBB] text-base sm:text-lg leading-relaxed">
              Réservez votre appel découverte gratuit de 30 minutes. Nous échangeons sur vos enjeux, vos interrogations et voyons comment faire de l&apos;accessibilité un levier de sérénité pour votre agence.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
            <a
              href="https://calendar.app.google/LmPYPbdEHxwC4ewq6"
              target="_blank"
              rel="noreferrer"
              aria-label="Réserver un appel de découverte sur Google Agenda (ouvre un nouvel onglet)"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-extrabold text-base bg-[#C43219] hover:bg-[#9E230E] text-white shadow-lg transition-all transform hover:scale-105"
            >
              <Calendar className="w-5 h-5 text-[#F5DFBB]" />
              <span>Réserver mon appel sur Google Agenda</span>
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

        </section>

      </div>
    </div>
  );
}
