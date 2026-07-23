import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { ExternalLink, Sparkles, Quote } from "lucide-react";

export const revalidate = 60; // ISR 60s

export const metadata = {
  title: "Portfolio & Réalisations • Stratec Digital | Stéphanie ROCQ",
  description: "Découvrez les sites web, boutiques e-commerce et projets créés pour des artisans, commerçants et passionnés.",
};

export default async function PortfolioPage() {
  const projects = await prisma.project.findMany({
    orderBy: { sortOrder: "asc" },
  });

  return (
    <div className="space-y-16 pb-24 pt-8">
      
      {/* PAGE HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-sm space-y-6 text-center max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5DFBB]/60 text-[#562C2C] border border-[#562C2C]/20 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#F2542D]" />
            <span>Réalisations Client &bull; Études de Cas</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#562C2C] tracking-tight">
            Ils ont franchi le pas du digital
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Découvrez une sélection de projets réalisés pour des artisans, créateurs et entreprises locales.
          </p>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Thumbnail */}
                <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#562C2C]/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
                    {project.category}
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-[#562C2C]">{project.title}</h2>
                    <span className="text-xs font-semibold text-slate-400">{project.year}</span>
                  </div>

                  <p className="text-xs font-bold text-[#127475] uppercase tracking-wider">
                    {project.clientName}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Challenge & Solution */}
                  {project.challenge && (
                    <div className="p-3.5 bg-[#FAF4F2] rounded-2xl border border-slate-200/60 text-xs space-y-1.5">
                      <p className="font-semibold text-slate-800">
                        🎯 <span className="underline">Défi :</span> {project.challenge}
                      </p>
                      {project.result && (
                        <p className="font-bold text-[#127475]">
                          ✨ <span className="underline">Résultat :</span> {project.result}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Testimonial snippet */}
                  {project.testimonialText && (
                    <div className="p-4 bg-[#F5DFBB]/40 rounded-2xl border border-[#562C2C]/10 text-xs space-y-2">
                      <Quote className="w-4 h-4 text-[#F2542D]" />
                      <p className="italic text-slate-800 font-medium">
                        &quot;{project.testimonialText}&quot;
                      </p>
                      <p className="text-right font-bold text-[#562C2C] text-[11px]">
                        &mdash; {project.testimonialAuthor}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Footer Live Link */}
              {project.liveUrl && (
                <div className="p-6 pt-0">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs bg-[#562C2C] hover:bg-[#F2542D] text-white transition-colors"
                  >
                    <span>Visiter le projet en ligne</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#562C2C] text-white rounded-3xl p-10 text-center space-y-4 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5DFBB]">Vous avez un projet similaire ?</h2>
          <p className="text-sm text-slate-200 max-w-xl mx-auto">
            Discutons ensemble de vos envies et créons la solution digitale qui correspond exactement à votre savoir-faire.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-[#F2542D] hover:bg-[#d8431f] transition-colors shadow-md"
            >
              <span>Me présenter mon projet</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
