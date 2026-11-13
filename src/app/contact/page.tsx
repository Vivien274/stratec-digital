import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import YellowBrushUnderline from "@/components/YellowBrushUnderline";
import {
  MapPin,
  Mail,
  Phone,
  Calendar,
  ArrowRight,
  Linkedin,
  Youtube,
  Coffee,
  Clock,
  Sparkles,
  CheckCircle2,
  Accessibility,
  MessageSquare,
  Send,
  Search
} from "lucide-react";

export const metadata = {
  title: "Contact & Rendez-vous • Stratec Digital | Stéphanie ROCQ",
  description:
    "Prenez contact avec Stéphanie ROCQ, référente accessibilité pour agences web et PME. Réservez votre entretien découverte de 30 minutes ou écrivez-moi directement.",
};

export default function ContactPage() {
  const steps = [
    {
      icon: Send,
      color: "text-[#C43219]",
      bg: "bg-[#F5DFBB]/60",
      title: "1. Vous m'envoyez votre message",
      description: "Via le formulaire ci-dessous ou directement par email en décrivant votre besoin.",
    },
    {
      icon: Search,
      color: "text-[#127475]",
      bg: "bg-[#127475]/15",
      title: "2. J'étudie votre demande",
      description: "J'analyse vos enjeux, vos plannings et vos interrogations techniques.",
    },
    {
      icon: MessageSquare,
      color: "text-[#C43219]",
      bg: "bg-[#F5DFBB]/60",
      title: "3. Je vous réponds sous 48h",
      description: "Une réponse personnalisée et concrète, avec des premières pistes de travail.",
    },
    {
      icon: Calendar,
      color: "text-[#127475]",
      bg: "bg-[#127475]/15",
      title: "4. Si c'est pertinent",
      description: "Nous calons un premier échange en visio de 30 minutes pour approfondir ensemble.",
    },
  ];

  const stats = [
    { value: "48h", label: "Délai de réponse maximum garanti pour vos demandes" },
    { value: "100%", label: "Des agences repartent avec des conseils concrets dès le 1er échange" },
    { value: "0", label: "Jargon inutile : des explications claires et directes" },
    { value: "30 min", label: "D'appel découverte gratuit et sans engagement" },
  ];

  return (
    <div className="bg-[#FAF4F2] text-[#562C2C] min-h-screen py-16 px-4 sm:px-6 lg:px-8 space-y-20">

      {/* HEADER SECTION */}
      <section className="max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5DFBB] text-[#562C2C] text-xs font-extrabold uppercase tracking-wider border border-[#562C2C]/10">
          <Accessibility className="w-3.5 h-3.5 text-[#F2542D]" />
          <span>CONTACT DIRECT &bull; ÉCHANGE SANS ENGAGEMENT</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#562C2C] leading-tight tracking-tight">
          Parlons de vos projets{" "}
          <span className="relative inline-block px-1">
            d&apos;accessibilité.
            <YellowBrushUnderline variant="thick" color="#F2542D" />
          </span>
        </h1>

        <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed pt-2 max-w-3xl mx-auto">
          <p>
            Vous avez une question sur une maquette, un appel d&apos;offres avec des critères d&apos;accessibilité, ou le besoin de faire monter votre équipe en compétences ?
          </p>
          <p className="font-bold text-[#127475]">
            N&apos;hésitez pas à m&apos;écrire ou à réserver directement un créneau en visio. Pas de pression commerciale : nous faisons simplement le point sur votre situation.
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
                <span className="text-xs font-bold text-[#F5DFBB] uppercase tracking-wider">Le plus rapide &bull; 30 min</span>
                <h2 className="text-2xl font-extrabold text-[#F5DFBB]">
                  Vous préférez échanger de vive voix ?
                </h2>
                <p className="text-sm text-slate-200 leading-relaxed pt-1">
                  Réservez votre appel découverte gratuit de 30 minutes en visio. Pas de script de vente agressif : une vraie discussion pour voir comment sécuriser vos projets d&apos;accessibilité.
                </p>
              </div>

              <a
                href="https://calendar.app.google/LmPYPbdEHxwC4ewq6"
                target="_blank"
                rel="noreferrer"
                aria-label="Réserver mon créneau de 30 minutes sur Google Agenda (ouvre un nouvel onglet)"
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-sm bg-[#C43219] hover:bg-[#9E230E] text-white transition-all shadow-md transform hover:scale-102"
              >
                <Calendar className="w-4 h-4 text-[#F5DFBB]" />
                <span>Réserver mon créneau sur Google Agenda →</span>
              </a>

              <p className="text-xs text-[#F5DFBB]/80 font-medium text-center pt-1">
                ✓ 30 min concrètes en visio &bull; Zéro discours commercial forcé &bull; Pistes d&apos;action directes
              </p>
            </div>

            {/* Coordinates Card */}
            <div className="bg-white p-8 rounded-3xl border border-[#562C2C]/10 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-[#562C2C] border-b border-[#562C2C]/10 pb-3">
                Coordonnées &amp; Informations
              </h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#F5DFBB] text-[#562C2C] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#C43219]" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[#562C2C] text-xs uppercase tracking-wider">Localisation &amp; Mobilité</h4>
                    <p className="text-slate-700 mt-1 leading-relaxed">
                      Basée en métropole lilloise (Comines). J&apos;interviens en visio partout en France et dans la francophonie, et sur site en métropole lilloise si vos locaux sont physiquement accessibles aux PMR.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#F5DFBB] text-[#562C2C] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#C43219]" />
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
                    <Phone className="w-5 h-5 text-[#C43219]" />
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
                    Retrouvez-moi sur les réseaux
                  </h4>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://www.linkedin.com/in/stephanierocq"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FAF4F2] border border-[#562C2C]/10 text-[#562C2C] hover:bg-[#C43219] hover:text-white transition-colors text-xs font-bold"
                      aria-label="Profil LinkedIn de Stéphanie ROCQ (ouvre un nouvel onglet)"
                    >
                      <Linkedin className="w-4 h-4 fill-current" />
                      <span>LinkedIn</span>
                    </a>

                    <a
                      href="https://www.youtube.com/@Stratecdigital-stephanie"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FAF4F2] border border-[#562C2C]/10 text-[#562C2C] hover:bg-[#C43219] hover:text-white transition-colors text-xs font-bold"
                      aria-label="Chaîne YouTube de Stratec Digital (ouvre un nouvel onglet)"
                    >
                      <Youtube className="w-4 h-4" />
                      <span>YouTube</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION: DÉROULEMENT */}
      <section className="bg-white py-16 border-y border-[#562C2C]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#127475] bg-[#0E9594]/15 px-3.5 py-1 rounded-full">
              LE DÉROULEMENT
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#562C2C]">
              Et ensuite, comment se passe la prise de contact ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FAF4F2]/60 p-6 rounded-3xl border border-[#562C2C]/10 space-y-3 relative hover:-translate-y-1 transition-transform"
                >
                  <div className={`w-12 h-12 rounded-2xl ${step.bg} flex items-center justify-center shadow-2xs`}>
                    <IconComponent className={`w-6 h-6 ${step.color}`} aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-extrabold text-[#562C2C]">{step.title}</h3>
                  <p className="text-sm text-slate-700 leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION: CHIFFRES CLÉS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#562C2C] bg-[#F5DFBB] px-3.5 py-1 rounded-full border border-[#562C2C]/10">
            ENGAGEMENT &amp; RÉACTIVITÉ
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#562C2C]">
            Travailler ensemble en toute sérénité
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((st, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl border border-[#562C2C]/10 shadow-sm text-center space-y-3"
            >
              <div className="text-4xl sm:text-5xl font-black text-[#C43219]">
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
              Prêts à rendre vos projets exemplaires ?
            </h3>
            <p className="text-xs sm:text-sm text-[#F5DFBB]">
              Un premier échange de 30 minutes sans engagement pour faire le point.
            </p>
            <p className="text-base sm:text-xl font-bold text-white pt-2">
              Un simple message, et nous planifions notre rendez-vous !
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://calendar.app.google/LmPYPbdEHxwC4ewq6"
              target="_blank"
              rel="noreferrer"
              aria-label="Réserver mon créneau de 30 minutes sur Google Agenda (ouvre un nouvel onglet)"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-[#C43219] hover:bg-[#9E230E] shadow-lg transition-all transform hover:scale-105"
            >
              <Calendar className="w-4 h-4 text-[#F5DFBB]" />
              <span>Réserver mon créneau sur Google Agenda</span>
            </a>
            <a
              href="mailto:stephanie@stratec-digital.com"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl font-bold text-white border border-white/20 hover:bg-white/10 transition-colors"
            >
              <Mail className="w-4 h-4 text-[#F5DFBB]" />
              <span>Envoyer un email directement</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
