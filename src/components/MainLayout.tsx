"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = Boolean(pathname?.startsWith("/admin"));

  if (isAdmin) {
    return (
      <main id="contenu-principal" tabIndex={-1} className="min-h-screen bg-[#FAF4F2] outline-none">
        {children}
      </main>
    );
  }

  return (
    <>
      {/* Lien d'évitement / Skip to content (RGAA 12.7 / WCAG 2.4.1) */}
      <a
        href="#contenu-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-5 focus:py-3 focus:bg-[#562C2C] focus:text-[#F5DFBB] focus:rounded-xl focus:shadow-2xl focus:ring-4 focus:ring-[#127475] font-extrabold text-sm"
      >
        Aller au contenu principal
      </a>
      <Header />
      <main id="contenu-principal" tabIndex={-1} className="flex-grow outline-none">
        {children}
      </main>
      <Footer />
    </>
  );
}
