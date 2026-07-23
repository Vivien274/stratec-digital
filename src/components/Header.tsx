"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Facebook, Instagram } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/qui-sommes-nous", label: "A propos" },
    { href: "/services-et-tarifs", label: "Services & Tarifs" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/ressources-gratuites", label: "Ressources gratuites" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="relative z-50 bg-[#FAF4F2]/90 backdrop-blur-md border-b border-[#562C2C]/10 sticky top-0 transition-all">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
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
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-[#562C2C] hover:text-[#F2542D] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Social Icons & Call Button */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href="https://www.facebook.com/stratec.digital/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="text-[#562C2C] hover:text-[#F2542D] transition-colors p-1"
          >
            <Facebook className="w-4 h-4 fill-[#562C2C] hover:fill-[#F2542D] stroke-none" />
          </a>
          <a
            href="https://www.instagram.com/stratec_digital/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="text-[#562C2C] hover:text-[#F2542D] transition-colors p-1"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <Link
            href="/contact"
            className="ml-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#562C2C] hover:bg-[#F2542D] transition-all shadow-xs"
          >
            Appel gratuit
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#562C2C] hover:bg-[#F5DFBB]/50 transition-colors"
            aria-label="Menu Mobile"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF4F2] border-b border-[#562C2C]/10 px-6 py-6 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-bold text-[#562C2C] hover:text-[#F2542D] border-b border-[#562C2C]/10"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/stratec.digital/"
                target="_blank"
                rel="noreferrer"
                className="text-[#562C2C] hover:text-[#F2542D]"
              >
                <Facebook className="w-5 h-5 fill-[#562C2C]" />
              </a>
              <a
                href="https://www.instagram.com/stratec_digital/"
                target="_blank"
                rel="noreferrer"
                className="text-[#562C2C] hover:text-[#F2542D]"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#F2542D]"
            >
              Appel gratuit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
