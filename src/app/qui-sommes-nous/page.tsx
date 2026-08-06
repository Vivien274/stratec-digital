import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, HeartHandshake, ArrowRight, MapPin, Award, Phone, PhoneCall, FileCheck, Layers, Rocket, Clock } from "lucide-react";

export const metadata = {
  title: "Qui sommes-nous • Stratec Digital | Stéphanie ROCQ",
  description: "Découvrez l'histoire de Stéphanie ROCQ et l'engagement éthique de Stratec Digital auprès des artisans et créateurs.",
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
            Stratec Digital est née d&apos;une volonté claire : rendre la digitalisation accessible, compréhensible et épanouissante pour chaque artisan et créateur d&apos;entreprise.
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
                  src="/images/pourquoi-stratec.webp"
                  alt="Stéphanie Rocq - Fondatrice de Stratec Digital"
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
              Pourquoi avoir créé Stratec Digital ?
            </h2>
            <div className="prose prose-slate text-slate-600 space-y-4 text-base leading-relaxed">
              <p>
                Pendant des années, j&apos;ai constaté à quel point beaucoup d&apos;artisans, de coiffeuses à domicile, d&apos;électriciens ou de créateurs d&apos;art se sentaient déboussolés face aux agences web traditionnelles.
              </p>
              <p>
                Devis exorbitants, jargon incompréhensible, contrats d&apos;engagement étouffants... Beaucoup finissaient par renoncer ou par payer très cher des outils qu&apos;ils ne maîtrisaient pas.
              </p>
              <p>
                <strong>Chez Stratec Digital, ma démarche est exactement l&apos;inverse.</strong> Je prends le temps d&apos;écouter ton histoire, de comprendre tes contraintes et de te proposer des outils simples, sur-mesure et pérennes.
              </p>

              <div className="p-4 bg-[#F5DFBB]/40 border-l-4 border-[#F2542D] rounded-r-2xl text-sm italic font-medium text-[#562C2C]">
                &quot;Un artisan ou un créateur met ses mains, sa passion et son cœur dans ce qu&apos;il fabrique. Tu mérites qu&apos;on mette le même soin, la même honnêteté et la même bienveillance dans ta communication digitale.&quot;
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
                  <p className="text-xs text-slate-500">Tu restes maître et autonome de tes outils.</p>
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

      {/* WORK METHODOLOGY - TIMELINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#562C2C] text-white rounded-3xl p-8 sm:p-14 space-y-12 shadow-2xl relative overflow-hidden">
          
          {/* Subtle background decoration */}
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
            
            {/* VERTICAL TIMELINE LINE */}
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

                {/* TIMELINE NODE ICON */}
                <div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 w-12 h-12 rounded-2xl bg-[#F2542D] text-white flex items-center justify-center font-black text-base shadow-lg ring-4 ring-[#562C2C] group-hover:scale-110 transition-transform">
                  <PhoneCall className="w-5 h-5 text-white" />
                </div>

                <div className="hidden md:block md:w-1/2 md:pl-12" />
              </div>

              {/* STEP 2 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center group">
                <div className="hidden md:block md:w-1/2 md:pr-12" />

                {/* TIMELINE NODE ICON */}
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

                {/* TIMELINE NODE ICON */}
                <div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 w-12 h-12 rounded-2xl bg-[#0E9594] text-white flex items-center justify-center font-black text-base shadow-lg ring-4 ring-[#562C2C] group-hover:scale-110 transition-transform">
                  <Layers className="w-5 h-5 text-white" />
                </div>

                <div className="hidden md:block md:w-1/2 md:pl-12" />
              </div>

              {/* STEP 4 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center group">
                <div className="hidden md:block md:w-1/2 md:pr-12" />

                {/* TIMELINE NODE ICON */}
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

    </div>
  );
}
