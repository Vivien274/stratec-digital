import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import YellowBrushUnderline from "@/components/YellowBrushUnderline";
import { MapPin, Mail, Phone, Calendar, MessageSquare, ArrowRight, Facebook, Instagram, Linkedin, Coffee, Clock, Sparkles, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Contact • Stratec Digital | Stéphanie ROCQ",
  description:
    "Prenez contact avec Stéphanie ROCQ. Réservez votre entretien découverte gratuit de 30 minutes ou écrivez-moi directement.",
};

export default function ContactPage() {
  const steps = [
    {
      icon: "📩",
      title: "1. Tu m'envoies ton message",
      description: "Écris-moi via le formulaire, directement par email ou sur les réseaux sociaux.",
    },
    {
      icon: "☕",
      title: "2. Je le lis attentivement",
      description: "Avec mon thé, comme une personne civilisée.",
    },
    {
      icon: "📬",
      title: "3. Je te réponds sous 48h",
      description: "Avec une vraie réponse — pas un email automatique de derrière les fagots.",
    },
    {
      icon: "🗓️",
      title: "4. Si c'est pertinent",
      description: "Je te propose un appel pour qu'on aille plus loin ensemble.",
    },
  ];

  const stats = [
    { value: "80", label: "Cafés pas bus en lisant vos messages (j'aime pas ça)" },
    { value: "48h", label: "Délai de réponse garanti même le lundi matin" },
    { value: "0%", label: "Emails automatiques sans âme envoyés depuis la création" },
    { value: "100%", label: "Des clients repartis avec au moins une piste concrète dès le 1er échange" },
  ];

  return (
    <div className="bg-[#FAF4F2] text-[#562C2C] min-h-screen py-16 px-4 sm:px-6 lg:px-8 space-y-20">

      {/* HEADER SECTION */}
      <section className="max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5DFBB] text-[#562C2C] text-xs font-extrabold uppercase tracking-wider border border-[#562C2C]/10">
          <Sparkles className="w-3.5 h-3.5 text-[#F2542D]" />
          <span>CONTACT DIRECT</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#562C2C] leading-tight tracking-tight">
          On se parle ?{" "}
          <span className="relative inline-block px-1">
            Je mords pas &mdash; promis.
            <YellowBrushUnderline variant="thick" color="#F2542D" />
          </span>
        </h1>

        <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed pt-2 max-w-3xl mx-auto">
          <p>
            Pas besoin d&apos;avoir un projet bien ficelé pour me contacter. La plupart de mes clients m&apos;écrivent en mode &quot;je sais même pas trop ce que je veux, mais je sais que j&apos;ai besoin d&apos;aide&quot; &mdash; et c&apos;est exactement là que je suis la plus utile.
          </p>
          <p className="font-bold text-[#127475]">
            Alors nom d&apos;une pipe, hésite pas. Le pire qui puisse arriver c&apos;est qu&apos;on se rende compte qu&apos;on est pas fait pour travailler ensemble &mdash; et même là, tu repars avec des pistes concrètes.
          </p>
        </div>
      </section>

      {/* OPTIONS GRID (FORM VS CALENDAR) */}
      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Column: Calendar Appointment & Coordinates */}
          <div className="lg:col-span-5 space-y-8">

            {/* Calendar Appointment Card */}
            <div className="bg-[#562C2C] text-white p-8 rounded-3xl space-y-6 shadow-xl relative overflow-hidden">
              <div className="space-y-2">
                <h2 className="text-xl font-extrabold text-[#F5DFBB]">
                  Tu préfères qu&apos;on se parle directement ?
                </h2>
                <p className="text-sm text-slate-200 leading-relaxed pt-1">
                  Réserve ton appel découverte gratuit de 30 min. Pas de pression, pas de script de vente. Juste une vraie conversation pour voir si je peux t&apos;aider.
                </p>
              </div>

              <a
                href="https://calendar.app.google/LmPYPbdEHxwC4ewq6"
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-sm bg-[#F2542D] hover:bg-[#d8431f] text-white transition-all shadow-md transform hover:scale-102"
              >
                <Calendar className="w-4 h-4 text-[#F5DFBB]" />
                <span>Je réserve mon créneau →</span>
              </a>
            </div>

            {/* Coordinates Card */}
            <div className="bg-white p-8 rounded-3xl border border-[#562C2C]/10 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-[#562C2C] border-b border-[#562C2C]/10 pb-3">
                Coordonnées &amp; Informations
              </h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#F5DFBB] text-[#562C2C] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#F2542D]" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[#562C2C] text-xs uppercase tracking-wider">Localisation</h4>
                    <p className="text-slate-600 mt-1 leading-relaxed">
                      Basée dans les Hauts-de-France &mdash; j&apos;interviens partout en France, en présentiel ou en visio selon les besoins.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#F5DFBB] text-[#562C2C] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#F2542D]" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[#562C2C] text-xs uppercase tracking-wider">Email</h4>
                    <a
                      href="mailto:stephanie@stratec-digital.com"
                      className="text-[#127475] font-bold hover:underline mt-1 block text-base"
                    >
                      stephanie@stratec-digital.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#F5DFBB] text-[#562C2C] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#F2542D]" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[#562C2C] text-xs uppercase tracking-wider">Téléphone</h4>
                    <a
                      href="tel:+33782404062"
                      className="text-[#127475] font-bold hover:underline mt-1 block text-base"
                    >
                      07 82 40 40 62
                    </a>
                  </div>
                </div>

                <div className="pt-2">
                  <h4 className="font-extrabold text-[#562C2C] text-xs uppercase tracking-wider mb-3">
                    Retrouve moi sur les réseaux sociaux
                  </h4>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://www.facebook.com/stratec-digital"
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-xl bg-[#FAF4F2] border border-[#562C2C]/10 text-[#562C2C] hover:bg-[#F2542D] hover:text-white flex items-center justify-center transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-4 h-4 fill-current" />
                    </a>
                    <a
                      href="https://www.instagram.com/stratec_digital"
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-xl bg-[#FAF4F2] border border-[#562C2C]/10 text-[#562C2C] hover:bg-[#F2542D] hover:text-white flex items-center justify-center transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a
                      href="http://www.linkedin.com/in/stephanierocq"
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-xl bg-[#FAF4F2] border border-[#562C2C]/10 text-[#562C2C] hover:bg-[#F2542D] hover:text-white flex items-center justify-center transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4 fill-current" />
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION: ET APRÈS, IL SE PASSE QUOI ? */}
      <section className="bg-white py-16 border-y border-[#562C2C]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#127475] bg-[#0E9594]/15 px-3.5 py-1 rounded-full">
              LE DÉROULEMENT
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#562C2C]">
              Et après, il se passe quoi ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#FAF4F2]/60 p-6 rounded-3xl border border-[#562C2C]/10 space-y-3 relative hover:-translate-y-1 transition-transform"
              >
                <div className="text-3xl">{step.icon}</div>
                <h3 className="text-base font-extrabold text-[#562C2C]">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION: QUELQUES CHIFFRES QUI FONT DU BIEN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#562C2C] bg-[#F5DFBB] px-3.5 py-1 rounded-full border border-[#562C2C]/10">
            SANS PRÉTENTION
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#562C2C]">
            Quelques chiffres qui font du bien
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((st, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl border border-[#562C2C]/10 shadow-sm text-center space-y-3"
            >
              <div className="text-4xl sm:text-5xl font-black text-[#F2542D]">
                {st.value}
              </div>
              <p className="text-xs font-bold text-[#562C2C] leading-snug">
                {st.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CALL TO ACTION BANNER */}
      <section className="max-w-5xl mx-auto">
        <div className="bg-[#562C2C] text-white rounded-3xl p-10 sm:p-14 text-center space-y-6 shadow-2xl relative overflow-hidden">

          <div className="space-y-3 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-black text-[#F5DFBB]">
              T&apos;as pas encore sauté le pas ?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Promis, j’ai pas inventé ces stats dans mon coin.
            </p>
            <p className="text-base sm:text-xl font-bold text-white pt-2">
              Nom d&apos;une pipe, c&apos;est pourtant simple comme bonjour &mdash; un message, et on se parle ! 😄
            </p>
          </div>

          <div className="pt-2">
            <a
              href="mailto:stephanie@stratec-digital.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-[#F2542D] hover:bg-[#d8431f] shadow-lg transition-all transform hover:scale-105"
            >
              <Mail className="w-4 h-4" />
              <span>Je me lance et j&apos;envoie un message</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
