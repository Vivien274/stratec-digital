import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock, Calendar, Sparkles, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Contact & Rendez-vous • Stratec Digital | Stéphanie ROCQ",
  description: "Prenez contact avec Stéphanie ROCQ pour votre projet de digitalisation. Appel découverte gratuit de 30 minutes sans engagement.",
};

export default function ContactPage() {
  return (
    <div className="space-y-16 pb-24 pt-8">
      
      {/* PAGE HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-sm space-y-6 text-center max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5DFBB]/60 text-[#562C2C] border border-[#562C2C]/20 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#F2542D]" />
            <span>Contact Direct &amp; Prise de RDV</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#562C2C] tracking-tight">
            Parlons de votre projet autour d&apos;un café
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Vous avez une question, besoin d&apos;un devis ou simplement envie d&apos;échanger ? Je vous réponds sans langage technique et avec grand plaisir.
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-[#562C2C] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#0E9594]" /> Mes Coordonnées Directes
              </h2>

              <ul className="space-y-5 text-sm">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#F5DFBB]/60 text-[#562C2C] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#F2542D]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#562C2C] text-xs uppercase tracking-wider">Adresse</h3>
                    <p className="text-slate-600 mt-0.5">40 rue du Hoccart, 59560 Comines, France</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#F5DFBB]/60 text-[#562C2C] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#F2542D]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#562C2C] text-xs uppercase tracking-wider">Téléphone</h3>
                    <a href="tel:+33635259113" className="text-[#127475] font-bold hover:underline mt-0.5 block">
                      +33 6 35 25 91 13
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#F5DFBB]/60 text-[#562C2C] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#F2542D]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#562C2C] text-xs uppercase tracking-wider">Email</h3>
                    <a href="mailto:stephanie@stratec-digital.com" className="text-slate-700 font-medium hover:underline mt-0.5 block">
                      stephanie@stratec-digital.com
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#F5DFBB]/60 text-[#562C2C] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#F2542D]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#562C2C] text-xs uppercase tracking-wider">Horaires d&apos;ouverture</h3>
                    <p className="text-slate-600 mt-0.5">Du Lundi au Vendredi &bull; 9h00 - 18h30</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Google Calendar Direct Booking Card */}
            <div className="bg-[#562C2C] text-white p-8 rounded-3xl space-y-4 shadow-md">
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-[#F5DFBB]" />
                <h3 className="text-lg font-bold text-[#F5DFBB]">Réserver un créneau direct</h3>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">
                Prénérez-vous réserver un appel vidéo ou téléphonique directement dans mon agenda ?
              </p>
              <a
                href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ36BWDCosNBGqbl_kjWWPlx_mBdLvB0OUEZ6wbzIwW2TAGr2RgW42ZDFOGr6pTQ5nAtYSa3nto9?gv=true"
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-xs bg-[#F2542D] hover:bg-[#d8431f] text-white transition-colors shadow-sm"
              >
                <span>Ouvrir l&apos;Agenda en Ligne</span>
              </a>
            </div>

          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </section>

    </div>
  );
}
