import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/MainLayout";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stratec-Digital • Stéphanie ROCQ | Digitalisation & Accompagnement Artisans",
  description:
    "Consultante en digitalisation pour artisans, créateurs et micro-entreprises. Création de sites web, visibilité locale Google, réseaux sociaux et accompagnement éthique sans blabla.",
  keywords: ["stratec-digital", "stéphanie rocq", "digitalisation artisan", "création site web comines", "seo local", "accompagnement digital"],
  authors: [{ name: "Stéphanie ROCQ" }],
  openGraph: {
    title: "Stratec-Digital • Stéphanie ROCQ",
    description: "Accompagnement digital éthique et sur-mesure pour les artisans et indépendants.",
    url: "https://www.stratec-digital.com",
    siteName: "Stratec Digital",
    images: [
      {
        url: "/images/LogoHD.png",
        width: 1200,
        height: 630,
        alt: "Stratec Digital Logo",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${jakarta.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col antialiased bg-[#FAF4F2] text-slate-900 selection:bg-emerald-200 selection:text-emerald-900">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
