"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Linkedin, Youtube } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/a-propos", label: "À propos" },
    { href: "/services-et-tarifs", label: "Services & Tarifs" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="relative z-50 bg-[#FAF4F2]/90 backdrop-blur-md border-b border-[#562C2C]/10 sticky top-0 transition-all">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" aria-label="Stratec Digital - Retour à l'accueil">
          <div className="relative w-44 h-12 flex items-center">
            <Image
              src="/images/LogoHD.png"
              alt="Stratec Digital"
              width={180}
              height={48}
              priority
              className="object-contain"
            />
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-[#562C2C] hover:text-[#C43219] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Social Icons & Call Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/stephanierocq"
            target="_blank"
            rel="noreferrer"
            aria-label="Profil LinkedIn de Stéphanie ROCQ (ouvre un nouvel onglet)"
            className="text-[#562C2C] hover:text-[#C43219] transition-colors p-1"
          >
            <Linkedin className="w-4 h-4 fill-[#562C2C] hover:fill-[#C43219] stroke-none" />
          </a>
          <a
            href="https://www.youtube.com/@Stratecdigital-stephanie"
            target="_blank"
            rel="noreferrer"
            aria-label="Chaîne YouTube de Stratec Digital (ouvre un nouvel onglet)"
            className="text-[#562C2C] hover:text-[#C43219] transition-colors p-1"
          >
            <Youtube className="w-4 h-4" />
          </a>
          <a
            href="https://calendar.app.google/LmPYPbdEHxwC4ewq6"
            target="_blank"
            rel="noreferrer"
            aria-label="Réserver un appel de découverte gratuit de 30 minutes sur Google Agenda (ouvre un nouvel onglet)"
            className="ml-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#562C2C] hover:bg-[#C43219] transition-all shadow-xs"
          >
            Appel gratuit
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#562C2C] hover:bg-[#F5DFBB]/50 transition-colors"
            aria-label={mobileMenuOpen ? "Fermer le menu de navigation" : "Ouvrir le menu de navigation"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-navigation-menu" className="lg:hidden bg-[#FAF4F2] border-b border-[#562C2C]/10 px-6 py-6 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-bold text-[#562C2C] hover:text-[#C43219] border-b border-[#562C2C]/10"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/stephanierocq"
                target="_blank"
                rel="noreferrer"
                aria-label="Profil LinkedIn de Stéphanie ROCQ (ouvre un nouvel onglet)"
                className="text-[#562C2C] hover:text-[#C43219] p-1"
              >
                <Linkedin className="w-5 h-5 fill-[#562C2C]" />
              </a>
              <a
                href="https://www.youtube.com/@Stratecdigital-stephanie"
                target="_blank"
                rel="noreferrer"
                aria-label="Chaîne YouTube de Stratec Digital (ouvre un nouvel onglet)"
                className="text-[#562C2C] hover:text-[#C43219] p-1"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <a
              href="https://calendar.app.google/LmPYPbdEHxwC4ewq6"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Réserver un appel de découverte gratuit de 30 minutes sur Google Agenda (ouvre un nouvel onglet)"
              className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#562C2C] hover:bg-[#C43219]"
            >
              Appel gratuit
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
