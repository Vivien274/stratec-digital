import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Instagram, ShieldCheck, Lock } from "lucide-react";

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
                alt="Stratec Digital Logo"
                width={170}
                height={45}
                className="object-contain"
              />
            </div>
            <p className="text-xs sm:text-sm text-[#F5DFBB]/80 leading-relaxed">
              Consultante en digitalisation des entreprises &amp; artisans. Des solutions claires, éthiques et sans blabla pour faire rayonner votre savoir-faire en ligne.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/stratec.digital/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook Stratec Digital"
                className="w-9 h-9 rounded-full bg-[#452323] hover:bg-[#F2542D] text-[#F5DFBB] hover:text-white flex items-center justify-center transition-colors shadow-xs"
              >
                <Facebook className="w-4 h-4 fill-current stroke-none" />
              </a>
              <a
                href="https://www.instagram.com/stratec_digital/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Stratec Digital"
                className="w-9 h-9 rounded-full bg-[#452323] hover:bg-[#F2542D] text-[#F5DFBB] hover:text-white flex items-center justify-center transition-colors shadow-xs"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-4">
            <h3 className="text-[#F5DFBB] text-sm font-extrabold tracking-wider uppercase">Navigation</h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/" className="hover:text-[#F2542D] transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/qui-sommes-nous" className="hover:text-[#F2542D] transition-colors">
                  Qui sommes-nous (Stéphanie ROCQ)
                </Link>
              </li>
              <li>
                <Link href="/services-et-tarifs" className="hover:text-[#F2542D] transition-colors">
                  Services &amp; Tarifs (Packs Artisans)
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-[#F2542D] transition-colors">
                  Portfolio &amp; Études de cas
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F2542D] transition-colors">
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
                <MapPin className="w-4 h-4 text-[#F2542D] mt-1 shrink-0" />
                <span>40 rue du Hoccart, 59560 Comines, France</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#F2542D] shrink-0" />
                <a href="tel:+33782404062" className="hover:text-[#F2542D] transition-colors font-semibold">
                  +33 7 82 40 40 62
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#F2542D] shrink-0" />
                <a href="mailto:stephanie@stratec-digital.com" className="hover:text-[#F2542D] transition-colors">
                  stephanie@stratec-digital.com
                </a>
              </li>
            </ul>
          </div>

          {/* Engagement & Ethics Box */}
          <div className="space-y-3 bg-[#452323] p-5 rounded-2xl border border-[#6B3B3B]">
            <h3 className="text-[#F5DFBB] text-sm font-bold flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#F2542D]" /> Mon Engagement
            </h3>
            <p className="text-xs text-[#F5DFBB]/80 leading-relaxed">
              Pas de devis cachés, pas d&apos;incitation inutile à dépenser. Une relation de confiance et un accompagnement pédagogique à 100%.
            </p>
            <div className="pt-2 border-t border-[#562C2C]">
              <Link
                href="/admin"
                className="inline-flex items-center gap-1.5 text-xs text-[#F5DFBB]/70 hover:text-white transition-colors"
              >
                <Lock className="w-3.5 h-3.5" /> Espace Admin
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F5DFBB]/70 gap-4">
          <p>© {new Date().getFullYear()} Stratec Digital • Stéphanie ROCQ. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <Link href="/mentions-legales" className="hover:text-[#F2542D] transition-colors">
              Mentions Légales
            </Link>
            <Link href="/rgpd-cookies" className="hover:text-[#F2542D] transition-colors">
              RGPD &amp; Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
