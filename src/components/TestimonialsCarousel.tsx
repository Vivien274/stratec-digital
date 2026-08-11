"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star, Quote, CheckCircle2, MessageSquare } from "lucide-react";

interface Testimonial {
  id: number;
  author: string;
  role: string;
  business: string;
  content: string;
  source: "Google" | "Facebook" | "Client Direct";
  rating: number;
  tag: string;
  initials: string;
  avatarBg: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    author: "Cyntia",
    role: "Fondatrice",
    business: "Cyaness Savonnerie Artisanale",
    content:
      "Le nouveau site cyaness.com met enfin en valeur mes savons artisanaux avec une élégance et une clarté incroyables. La boutique est fluide, le parcours client est parfait et mes clients adorent ! Stéphanie a su rendre tout le processus simple, humain et rassurant.",
    source: "Google",
    rating: 5,
    tag: "Avis vérifié Google",
    initials: "CY",
    avatarBg: "bg-[#F2542D]",
  },
  {
    id: 2,
    author: "Camille",
    role: "Artisane Pâtissière",
    business: "Studio Macarons",
    content:
      "Grâce à Stéphanie, mes ateliers de pâtisserie se réservent et se paient directement en ligne sans aucun stress de gestion ! Elle a su lever toutes mes appréhensions techniques avec une vraie pédagogie et toujours la bonne humeur.",
    source: "Google",
    rating: 5,
    tag: "Avis vérifié Google",
    initials: "CM",
    avatarBg: "bg-[#0E9594]",
  },
  {
    id: 3,
    author: "Edwige",
    role: "Présidente d'association",
    business: "1m2 : ma santé !",
    content:
      "Le site 1m2-masante.fr reflète exactement l'esprit et la chaleur de notre association. Stéphanie m'a formée pas à pas et je gère mon site en toute sérénité sans jamais me sentir bloquée. Un vrai GPS du web !",
    source: "Facebook",
    rating: 5,
    tag: "Recommandation Facebook",
    initials: "ED",
    avatarBg: "bg-[#562C2C]",
  },
  {
    id: 4,
    author: "Vivien",
    role: "Photographe Professionnel",
    business: "L'instant Brut",
    content:
      "Une approche éthique, transparente et sans jargon. Stéphanie prend le temps d'expliquer chaque choix technique et de vous former pour vous rendre 100% autonome. C'est l'alliée idéale des créateurs et artisans.",
    source: "Google",
    rating: 5,
    tag: "Avis vérifié Google",
    initials: "VB",
    avatarBg: "bg-[#F2542D]",
  },
  {
    id: 5,
    author: "Arthur",
    role: "Paysagiste & Créateur Végétal",
    business: "Artfolium",
    content:
      "Stéphanie m'a construit une nouvelle identité de marque et une présence digitale claires et super efficaces. Mon offre est enfin lisible pour mes clients et je gagne un temps précieux au quotidien !",
    source: "Facebook",
    rating: 5,
    tag: "Recommandation Facebook",
    initials: "AR",
    avatarBg: "bg-[#0E9594]",
  },
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Autoplay every 6 seconds if not hovered
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <section 
      className="bg-[#FAF4F2] py-20 border-y border-[#562C2C]/10 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Decorative Glows */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#F2542D]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-[#0E9594]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5DFBB] text-[#562C2C] text-xs font-extrabold uppercase tracking-wider border border-[#562C2C]/10 shadow-xs">
            <MessageSquare className="w-3.5 h-3.5 text-[#F2542D]" />
            <span>Témoignages &amp; Avis Clients</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#562C2C] leading-tight tracking-tight">
            Ce que disent les artisans et créateurs qui font équipe avec moi
          </h2>

          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Retrouvez de vrais avis certifiés issus de ma fiche Google Business Profile et de ma page Facebook.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">

          {/* Cards Wrapper */}
          <div className="overflow-hidden px-1 py-4">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((item) => (
                <div
                  key={item.id}
                  className="w-full shrink-0 px-2 sm:px-4"
                >
                  <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#562C2C]/10 shadow-xl relative space-y-6 flex flex-col justify-between min-h-[340px]">
                    
                    <Quote className="absolute top-6 right-8 w-14 h-14 text-[#F5DFBB]/60 -z-0" />

                    {/* Top Row: Stars & Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-3 relative z-10">
                      <div className="flex items-center gap-1">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-[#F2542D] text-[#F2542D]" />
                        ))}
                      </div>

                      <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#127475] bg-[#0E9594]/10 px-3 py-1 rounded-full border border-[#0E9594]/20">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0E9594]" />
                        <span>{item.tag}</span>
                      </span>
                    </div>

                    {/* Testimonial Quote Text */}
                    <blockquote className="text-base sm:text-lg lg:text-xl text-[#562C2C] font-medium leading-relaxed italic relative z-10">
                      &quot;{item.content}&quot;
                    </blockquote>

                    {/* Author Footer */}
                    <div className="flex items-center gap-4 pt-4 border-t border-[#562C2C]/10 relative z-10">
                      <div
                        className={`w-12 h-12 rounded-2xl ${item.avatarBg} text-white font-extrabold text-base flex items-center justify-center shadow-sm shrink-0`}
                      >
                        {item.initials}
                      </div>

                      <div>
                        <h4 className="font-extrabold text-base text-[#562C2C] leading-snug">
                          {item.author}
                        </h4>
                        <p className="text-xs text-slate-500 font-medium">
                          {item.role} • <span className="text-[#127475] font-bold">{item.business}</span>
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls: Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Témoignage précédent"
            className="absolute top-1/2 -left-4 sm:-left-6 -translate-y-1/2 w-12 h-12 rounded-2xl bg-white text-[#562C2C] border border-[#562C2C]/10 shadow-lg flex items-center justify-center hover:bg-[#F2542D] hover:text-white transition-all transform hover:scale-105 z-20"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Témoignage suivant"
            className="absolute top-1/2 -right-4 sm:-right-6 -translate-y-1/2 w-12 h-12 rounded-2xl bg-white text-[#562C2C] border border-[#562C2C]/10 shadow-lg flex items-center justify-center hover:bg-[#F2542D] hover:text-white transition-all transform hover:scale-105 z-20"
          >
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Navigation Controls: Dots */}
          <div className="flex items-center justify-center gap-2 pt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Aller au témoignage ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === idx
                    ? "w-8 h-3 bg-[#F2542D]"
                    : "w-3 h-3 bg-[#562C2C]/20 hover:bg-[#562C2C]/40"
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
