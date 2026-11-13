import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, Youtube, ShieldCheck, Lock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#562C2C] text-[#F5DFBB] pt-16 pb-12 border-t border-[#452323]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#6B3B3B]">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="bg-white p-2.5 rounded-xl inline-block w-48 shadow-sm">
              <Image
                src="/images/LogoHD.png"
                alt="Stratec Digital"
                width={170}
                height={45}
                className="object-contain"
              />
            </div>
            <p className="text-xs sm:text-sm text-[#F5DFBB] leading-relaxed">
              Référente accessibilité pour agences web et PME. Des audits, formations et accompagnements mensuels clairs, sans jargon et adaptés à vos projets.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/stephanierocq"
                target="_blank"
                rel="noreferrer"
                aria-label="Profil LinkedIn de Stéphanie ROCQ (ouvre un nouvel onglet)"
                className="w-9 h-9 rounded-full bg-[#452323] hover:bg-[#C43219] text-[#F5DFBB] hover:text-white flex items-center justify-center transition-colors shadow-xs"
              >
                <Linkedin className="w-4 h-4 fill-current stroke-none" />
              </a>
              <a
                href="https://www.youtube.com/@Stratecdigital-stephanie"
                target="_blank"
                rel="noreferrer"
                aria-label="Chaîne YouTube de Stratec Digital (ouvre un nouvel onglet)"
                className="w-9 h-9 rounded-full bg-[#452323] hover:bg-[#C43219] text-[#F5DFBB] hover:text-white flex items-center justify-center transition-colors shadow-xs"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-4">
            <h3 className="text-[#F5DFBB] text-sm font-extrabold tracking-wider uppercase">Navigation</h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/" className="hover:text-white underline-offset-4 hover:underline transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="hover:text-white underline-offset-4 hover:underline transition-colors">
                  À propos (Stéphanie ROCQ)
                </Link>
              </li>
              <li>
                <Link href="/services-et-tarifs" className="hover:text-white underline-offset-4 hover:underline transition-colors">
                  Services &amp; Tarifs Accessibilité
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white underline-offset-4 hover:underline transition-colors">
                  FAQ (Questions fréquentes)
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white underline-offset-4 hover:underline transition-colors">
                  Contact &amp; Rendez-vous
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="text-[#F5DFBB] text-sm font-extrabold tracking-wider uppercase">Contact Direct</h3>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F5DFBB] mt-1 shrink-0" />
                <span>Comines, Métropole lilloise et alentours</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#F5DFBB] shrink-0" />
                <a href="tel:+33782404062" className="hover:text-white underline-offset-4 hover:underline transition-colors font-semibold">
                  +33 7 82 40 40 62
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#F5DFBB] shrink-0" />
                <a href="mailto:stephanie@stratec-digital.com" className="hover:text-white underline-offset-4 hover:underline transition-colors">
                  stephanie@stratec-digital.com
                </a>
              </li>
            </ul>
          </div>

          {/* Engagement & Ethics Box */}
          <div className="space-y-3 bg-[#452323] p-5 rounded-2xl border border-[#6B3B3B]">
            <h3 className="text-[#F5DFBB] text-sm font-bold flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#F5DFBB]" /> Mon Engagement
            </h3>
            <p className="text-xs text-[#F5DFBB] leading-relaxed">
              Pas de devis cachés, pas d&apos;incitation inutile à dépenser. Une relation de confiance et un accompagnement pédagogique à 100%.
            </p>
          </div>

        </div>

        {/* Bottom Copyright & Mentions légales */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#F5DFBB] gap-4">
          <p>© {new Date().getFullYear()} Stratec Digital • Stéphanie ROCQ. Tous droits réservés.</p>
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6">
            <Link
              href="/accessibilite"
              className="hover:text-white underline-offset-4 hover:underline transition-colors font-bold text-[#F5DFBB] flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" aria-hidden="true" />
              <span>Accessibilité : totalement conforme</span>
            </Link>
            <Link href="/mentions-legales" className="hover:text-white underline-offset-4 hover:underline transition-colors">
              Mentions Légales
            </Link>
            <Link href="/rgpd-cookies" className="hover:text-white underline-offset-4 hover:underline transition-colors">
              RGPD &amp; Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
