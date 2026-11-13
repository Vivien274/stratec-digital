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
  metadataBase: new URL("https://www.stratec-digital.com"),
  title: {
    default: "Stéphanie ROCQ • Référente accessibilité web pour agences & PME | Stratec Digital",
    template: "%s | Stratec Digital",
  },
  description:
    "Référente accessibilité web pour agences web et PME. Audits RGAA / WCAG 2.2, formations d'équipe et accompagnement mensuel sans jargon.",
  keywords: ["accessibilité web", "référente accessibilité", "RGAA", "WCAG 2.2", "audit accessibilité", "formation accessibilité web", "Stéphanie ROCQ", "Stratec Digital"],
  authors: [{ name: "Stéphanie ROCQ" }],
  openGraph: {
    title: "Stéphanie ROCQ • Référente accessibilité web | Stratec Digital",
    description: "Votre référente accessibilité sans recruter. Audits, formations et accompagnement mensuel expliqués simplement.",
    url: "https://www.stratec-digital.com",
    siteName: "Stratec Digital",
    images: [
      {
        url: "/images/LogoHD.png",
        width: 1200,
        height: 630,
        alt: "Stratec Digital - Stéphanie ROCQ",
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
