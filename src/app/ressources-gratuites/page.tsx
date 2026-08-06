import Link from "next/link";
import { prisma } from "@/lib/prisma";
import YellowBrushUnderline from "@/components/YellowBrushUnderline";
import ResourcesGridClient from "@/components/ResourcesGridClient";
import { Sparkles, ArrowRight, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Ressources Gratuites • Stratec Digital | Stéphanie ROCQ",
  description:
    "Téléchargez gratuitement nos guides pratiques, modèles et fiches conseils pensés pour aider les artisans et créateurs à se développer en ligne.",
};

export const revalidate = 60; // Refresh dynamic resources every 60 seconds

export default async function FreeResourcesPage() {
  const resources = await prisma.freeResource.findMany({
    orderBy: { sortOrder: "asc" },
  });

  return (
    <div className="bg-[#FAF4F2] text-[#562C2C] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header Title Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5DFBB] text-[#562C2C] text-xs font-extrabold uppercase tracking-wider border border-[#562C2C]/10">
            <Sparkles className="w-3.5 h-3.5 text-[#F2542D]" />
            <span>ACCÈS LIBRE &amp; GRATUIT</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-[#562C2C] leading-tight tracking-tight">
            Des ressources conçues pour{" "}
            <span className="relative inline-block px-1">
              faciliter ton quotidien
              <YellowBrushUnderline variant="thick" color="#F2542D" />
            </span>
          </h1>

          <p className="text-slate-700 text-lg leading-relaxed pt-2">
            Pas de théorie incompréhensible ni de blabla marketing. Retrouve ici nos outils et fiches pratiques à recevoir gratuitement dans ta boîte mail pour développer ta présence en ligne en toute autonomie.
          </p>
        </div>

        {/* Dynamic Client Grid with Modal Mailchimp Capture */}
        <ResourcesGridClient resources={resources} />

        {/* Guides-Digitaux.com Online Shop Banner */}
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

        {/* Need custom advice CTA */}
        <div className="bg-[#562C2C] text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-black text-[#F5DFBB]">Tu préfères un accompagnement sur-mesure ?</h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Discutons 30 minutes de ton projet et de tes besoins lors d&apos;un entretien découverte totalement offert.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3.5 rounded-xl font-bold text-sm bg-[#F2542D] hover:bg-[#d8431f] text-white transition-all shrink-0 inline-flex items-center gap-2"
          >
            <span>Réserver un échange gratuit</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
