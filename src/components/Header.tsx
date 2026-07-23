"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Facebook, Instagram } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/qui-sommes-nous", label: "Qui sommes-nous" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/services-et-tarifs", label: "Services et tarifs" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="relative z-50 bg-transparent">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-44 h-12 flex items-center">
            <Image
              src="/images/LogoHD.png"
              alt="Stratec Digital Logo"
              width={180}
              height={48}
              priority
              className="object-contain"
            />
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-800 hover:text-emerald-700 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://www.facebook.com/stratec.digital/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="text-slate-800 hover:text-emerald-700 transition-colors p-1"
          >
            <Facebook className="w-4 h-4 fill-slate-800 hover:fill-emerald-700 stroke-none" />
          </a>
          <a
            href="https://www.instagram.com/stratec_digital/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="text-slate-800 hover:text-emerald-700 transition-colors p-1"
          >
            <Instagram className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-800 hover:bg-slate-200/50"
            aria-label="Menu Mobile"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-slate-900 hover:text-emerald-700 border-b border-slate-100"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 flex items-center gap-4">
            <a
              href="https://www.facebook.com/stratec.digital/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-800 hover:text-emerald-700"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/stratec_digital/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-800 hover:text-emerald-700"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
