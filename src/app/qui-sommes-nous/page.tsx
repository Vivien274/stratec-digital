import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, HeartHandshake, ArrowRight, MapPin, Award, Phone } from "lucide-react";

export const metadata = {
  title: "Qui sommes-nous • Stratec Digital | Stéphanie ROCQ",
  description: "Découvrez l'histoire de Stéphanie ROCQ et l'engagement éthique de Stratec-Digital auprès des artisans et créateurs.",
};

export default function AboutPage() {
  return (
    <div className="space-y-20 pb-20 pt-8">
      
      {/* HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 text-center max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5DFBB]/60 text-[#562C2C] border border-[#562C2C]/20 text-xs font-bold uppercase tracking-wider">
            <HeartHandshake className="w-4 h-4 text-[#F2542D]" />
            <span>Mon Histoire &amp; Mon Engagement</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#562C2C] tracking-tight">
            Accompagner les artisans avec écoute, éthique et bienveillance
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Stratec-Digital est née d&apos;une volonté claire : rendre la digitalisation accessible, compréhensible et épanouissante pour chaque artisan et créateur d&apos;entreprise.
          </p>
        </div>
      </section>

      {/* BIO & PHOTO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 relative">
            <div className="relative bg-white p-4 rounded-3xl border border-slate-200/80 shadow-lg">
              <div className="relative h-[420px] w-full rounded-2xl overflow-hidden bg-slate-100">
                <Image
                  src="/images/BG_Head-Stef.webp"
                  alt="Stéphanie Rocq"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-4 bg-[#562C2C] text-white rounded-2xl mt-4 space-y-1">
                <h3 className="font-bold text-base text-[#F5DFBB]">Stéphanie ROCQ</h3>
                <p className="text-xs text-slate-200 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#F2542D]" /> Basée à Comines (59560)
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl font-extrabold text-[#562C2C]">
              Pourquoi avoir créé Stratec-Digital ?
            </h2>
            <div className="prose prose-slate text-slate-600 space-y-4 text-base leading-relaxed">
              <p>
                Pendant des années, j&apos;ai constaté à quel point beaucoup d&apos;artisans, de coiffeuses à domicile, d&apos;électriciens ou de créateurs d&apos;art se sentaient déboussolés face aux agences web traditionnelles.
              </p>
              <p>
                Devis exorbitants, jargon incompréhensible, contrats d&apos;engagement étouffants... Beaucoup finissaient par renoncer ou par payer très cher des outils qu&apos;ils ne maîtrisaient pas.
              </p>
              <p>
                <strong>Chez Stratec-Digital, ma démarche est exactement l&apos;inverse.</strong> Je prends le temps d&apos;écouter votre histoire, de comprendre vos contraintes et de vous proposer des outils simples, sur-mesure et pérennes.
              </p>

              <div className="p-4 bg-[#F5DFBB]/40 border-l-4 border-[#F2542D] rounded-r-2xl text-sm italic font-medium text-[#562C2C]">
                &quot;Un artisan ou un créateur met ses mains, sa passion et son cœur dans ce qu&apos;il fabrique. Vous méritez qu&apos;on mette le même soin, la même honnêteté et la même bienveillance dans votre communication digitale.&quot;
              </div>
            </div>

            {/* Key Values List */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-2xl border border-slate-200/80 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#0E9594] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#562C2C]">100% Transparent</h4>
                  <p className="text-xs text-slate-500">Aucun coût caché ni abonnement forcé.</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-slate-200/80 flex items-start gap-3">
                <Award className="w-5 h-5 text-[#0E9594] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#562C2C]">Pédagogie &amp; Formation</h4>
                  <p className="text-xs text-slate-500">Vous restez maître et autonome de vos outils.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-[#562C2C] hover:bg-[#F2542D] shadow-md transition-all"
              >
                <span>Échanger avec Stéphanie</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+33782404062"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-[#562C2C] bg-white border border-slate-300 hover:bg-slate-50 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#F2542D]" />
                <span>07 82 40 40 62</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* WORK METHODOLOGY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#562C2C] text-white rounded-3xl p-10 sm:p-14 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-[#F5DFBB]">Comment se déroule notre collaboration ?</h2>
            <p className="text-slate-200 text-sm">
              Un processus en 4 étapes simples pour avancer en toute sérénité.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-[#452323] p-6 rounded-2xl border border-[#6B3B3B] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F2542D] text-white font-black text-lg flex items-center justify-center">
                1
              </div>
              <h3 className="font-bold text-base text-[#F5DFBB]">Appel Découverte</h3>
              <p className="text-xs text-slate-200">
                30 minutes d&apos;échange gratuit pour faire connaissance et cibler exactement vos attentes.
              </p>
            </div>

            <div className="bg-[#452323] p-6 rounded-2xl border border-[#6B3B3B] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F2542D] text-white font-black text-lg flex items-center justify-center">
                2
              </div>
              <h3 className="font-bold text-base text-[#F5DFBB]">Proposition Clés</h3>
              <p className="text-xs text-slate-200">
                Envoi d&apos;un plan d&apos;action clair avec tarif fixe et délais précis.
              </p>
            </div>

            <div className="bg-[#452323] p-6 rounded-2xl border border-[#6B3B3B] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F2542D] text-white font-black text-lg flex items-center justify-center">
                3
              </div>
              <h3 className="font-bold text-base text-[#F5DFBB]">Création &amp; Configuration</h3>
              <p className="text-xs text-slate-200">
                Mise en place de vos outils (fiche Google, réseaux, site web) avec retours réguliers.
              </p>
            </div>

            <div className="bg-[#452323] p-6 rounded-2xl border border-[#6B3B3B] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F2542D] text-white font-black text-lg flex items-center justify-center">
                4
              </div>
              <h3 className="font-bold text-base text-[#F5DFBB]">Livraison &amp; Support</h3>
              <p className="text-xs text-slate-200">
                Explication pas à pas de la prise en main et assistance incluse pendant 15 à 30 jours.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
