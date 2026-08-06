import Link from "next/link";
import YellowBrushUnderline from "@/components/YellowBrushUnderline";
import { HelpCircle, ArrowRight, Phone, MessageSquare } from "lucide-react";

export const metadata = {
  title: "Foire Aux Questions (FAQ) • Stratec Digital | Stéphanie ROCQ",
  description:
    "Toutes les réponses à vos questions sur nos services d'accompagnement digital, la création de sites web pour artisans, les tarifs et l'autonomie.",
};

export default function FAQPage() {
  const faqs = [
    {
      q: "Est-ce que je serai vraiment autonome pour modifier mon site ?",
      a: "Absolument. Mon objectif principal est de te transmettre les clés de ton outil. À la livraison, nous faisons une session de formation ensemble et je te remets un guide d'utilisation personnalisé. Tu sauras ajouter une photo, modifier un texte ou publier un article sans devoir faire appel à un prestataire.",
    },
    {
      q: "Y a-t-il des frais cachés ou un abonnement obligatoire ?",
      a: "Aucun. Tu restes propriétaire à 100% de ton nom de domaine et de ton hébergement. Je ne pratique pas d'abonnements pièges ni d'engagements sur plusieurs années.",
    },
    {
      q: "Combien de temps faut-il pour créer un site internet ?",
      a: "Pour un site vitrine classique d'artisan ou de créateur, le délai moyen est de 3 à 5 semaines une fois l'ensemble des éléments (textes, photos) rassemblés.",
    },
    {
      q: "Je n'y connais rien au web, est-ce un problème ?",
      a: "Pas du tout ! C'est justement pour cela que je suis là. J'utilise un vocabulaire simple, sans jargon technique incompréhensible, et je t'explique chaque étape pas à pas.",
    },
    {
      q: "Comment fonctionne la fiche Google My Business pour mon activité ?",
      a: "Je crée et j'optimise ta fiche Google pour que les clients situés autour de chez toi (Comines, Lille et alentours) te trouvent immédiatement lors d'une recherche locale.",
    },
    {
      q: "Comment se déroule le premier entretien gratuit ?",
      a: "C'est un échange téléphonique ou en visio de 30 minutes sans aucun engagement. On fait le point sur ton activité, tes objectifs, et je t'indique la meilleure stratégie adaptée à ton budget.",
    },
  ];

  return (
    <div className="bg-[#FAF4F2] text-[#562C2C] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Title */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5DFBB] text-[#562C2C] text-xs font-extrabold uppercase tracking-wider border border-[#562C2C]/10">
            <HelpCircle className="w-3.5 h-3.5 text-[#F2542D]" />
            <span>DES RÉPONSES CLAIRES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-[#562C2C] leading-tight tracking-tight">
            Foire Aux{" "}
            <span className="relative inline-block px-1">
              Questions
              <YellowBrushUnderline variant="thick" color="#F2542D" />
            </span>
          </h1>

          <p className="text-slate-700 text-lg max-w-2xl mx-auto pt-2">
            Tout ce que tu dois savoir sur mon approche, mes accompagnements et la gestion de ta visibilité en ligne.
          </p>
        </div>

        {/* Accordion / FAQ List */}
        <div className="space-y-6">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-[#562C2C]/10 shadow-sm space-y-3"
            >
              <h2 className="text-xl font-bold text-[#562C2C] flex items-start gap-3">
                <span className="text-[#F2542D] font-extrabold text-lg shrink-0">Q.</span>
                <span>{item.q}</span>
              </h2>
              <p className="text-slate-600 text-base leading-relaxed pl-7 border-l-2 border-[#F5DFBB]">
                {item.a}
              </p>
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="bg-[#562C2C] text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl">
          <div className="space-y-2 max-w-xl mx-auto">
            <h3 className="text-2xl font-black text-[#F5DFBB]">Une question spécifique sur ton projet ?</h3>
            <p className="text-slate-300 text-sm">
              Je réponds à toutes tes interrogations avec plaisir lors de notre entretien découverte offert.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-xl font-bold text-sm bg-[#F2542D] hover:bg-[#d8431f] text-white transition-all inline-flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Poser ma question en direct</span>
            </Link>
            <a
              href="tel:+33782404062"
              className="px-7 py-3.5 rounded-xl font-bold text-sm text-[#F5DFBB] border border-[#F5DFBB]/40 hover:bg-white/10 transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#F2542D]" />
              <span>07 82 40 40 62</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
