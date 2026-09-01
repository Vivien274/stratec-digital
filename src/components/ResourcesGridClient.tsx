"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Download,
  BookOpen,
  FileText,
  Video,
  Sparkles,
  X,
  CheckCircle2,
  Loader2,
  ArrowRight,
  Shield,
  AlertTriangle,
  Send,
  Lock,
} from "lucide-react";

interface FreeResourceItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string | null;
  downloadUrl: string | null;
  mailchimpTag: string | null;
}

export default function ResourcesGridClient({ resources }: { resources: FreeResourceItem[] }) {
  // State for anti-bot honeypot trap
  const [honeypot, setHoneypot] = useState("");

  // State for inline forms
  const [retractationEmail, setRetractationEmail] = useState("");
  const [retractationGdpr, setRetractationGdpr] = useState(false);
  const [retractationLoading, setRetractationLoading] = useState(false);
  const [retractationSuccess, setRetractationSuccess] = useState(false);
  const [retractationError, setRetractationError] = useState("");

  const [rentreeEmail, setRentreeEmail] = useState("");
  const [rentreeGdpr, setRentreeGdpr] = useState(false);
  const [rentreeLoading, setRentreeLoading] = useState(false);
  const [rentreeSuccess, setRentreeSuccess] = useState(false);
  const [rentreeError, setRentreeError] = useState("");

  // State for modal (other resources)
  const [selectedResource, setSelectedResource] = useState<FreeResourceItem | null>(null);
  const [modalName, setModalName] = useState("");
  const [modalEmail, setModalEmail] = useState("");
  const [modalGdpr, setModalGdpr] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);
  const [modalError, setModalError] = useState("");

  // Handlers for featured inline forms
  const handleRetractationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!retractationGdpr) {
      setRetractationError("Merci d'accepter les conditions RGPD pour recevoir ton tuto.");
      return;
    }
    setRetractationLoading(true);
    setRetractationError("");

    try {
      const res = await fetch("/api/subscribe-resource", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: retractationEmail,
          resourceTitle: "Tuto Bouton de rétractation obligatoire",
          tag: "avocat-tuto",
          downloadUrl: "/downloads/tuto-bouton-retractation.pdf",
          honeypot,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Une erreur est survenue.");
      setRetractationSuccess(true);
    } catch (err: unknown) {
      const error = err as Error;
      setRetractationError(error.message || "Impossible de valider ton inscription.");
    } finally {
      setRetractationLoading(false);
    }
  };

  const handleRentreeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rentreeGdpr) {
      setRentreeError("Merci d'accepter les conditions RGPD pour recevoir ton plan d'action.");
      return;
    }
    setRentreeLoading(true);
    setRentreeError("");

    try {
      const res = await fetch("/api/subscribe-resource", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: rentreeEmail,
          resourceTitle: "Plan d'action gratuit pour préparer ta rentrée",
          tag: "plan-rentree",
          downloadUrl: "/downloads/plan-action-rentree.pdf",
          honeypot,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Une erreur est survenue.");
      setRentreeSuccess(true);
    } catch (err: unknown) {
      const error = err as Error;
      setRentreeError(error.message || "Impossible de valider ton inscription.");
    } finally {
      setRentreeLoading(false);
    }
  };

  // Handlers for grid modal
  const handleOpenModal = (resource: FreeResourceItem) => {
    setSelectedResource(resource);
    setModalName("");
    setModalEmail("");
    setModalGdpr(false);
    setModalSuccess(false);
    setModalError("");
  };

  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedResource) return;
    if (!modalGdpr) {
      setModalError("Merci de cocher la case d'accord RGPD pour recevoir ta ressource.");
      return;
    }
    setModalLoading(true);
    setModalError("");

    try {
      const res = await fetch("/api/subscribe-resource", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: modalName,
          email: modalEmail,
          resourceId: selectedResource.id,
          resourceTitle: selectedResource.title,
          honeypot,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erreur d'inscription.");
      setModalSuccess(true);
    } catch (err: unknown) {
      const error = err as Error;
      setModalError(error.message || "Impossible de valider ton inscription.");
    } finally {
      setModalLoading(false);
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Guide PDF":
        return BookOpen;
      case "Checklist":
        return FileText;
      case "Tuto Vidéo":
      case "Tuto Réglementaire":
        return Video;
      default:
        return Sparkles;
    }
  };

  // Filter out featured resources from the secondary grid if desired
  const otherResources = resources.filter(
    (r) => r.slug !== "tuto-bouton-retractation" && r.slug !== "plan-action-rentree"
  );

  return (
    <div className="space-y-16">
      {/* FEATURED RESOURCE 1: TUTO BOUTON DE RÉTRACTATION */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#562C2C]/10 shadow-lg hover:shadow-xl transition-all relative overflow-hidden">
        <div className="flex items-center gap-2 mb-6">
          <span className="px-3.5 py-1 rounded-full bg-[#F2542D] text-white text-xs font-black uppercase tracking-wider">
            LOI EUROPÉENNE &bull; OBLIGATOIRE
          </span>
          <span className="text-xs font-bold text-[#127475] bg-[#0E9594]/15 px-3 py-1 rounded-full">
            Tuto Gratuit 🎁
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Image Screenshot */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200 group bg-slate-100">
              <Image
                src="/images/tuto-retractation.png"
                alt="Tuto gratuit bouton de rétractation e-commerce Stratec Digital"
                width={817}
                height={601}
                priority
                className="w-full h-auto object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md border border-[#F5DFBB] flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#F2542D]" />
                <span className="text-xs font-extrabold text-[#562C2C]">Conforme Loi Juin 2026</span>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Inline Direct Form */}
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-black text-[#562C2C] leading-tight">
              🎁 Ton tuto gratuit pour être en règle dès aujourd&apos;hui
            </h2>

            <p className="text-base font-bold text-[#562C2C] leading-relaxed">
              Depuis le 19 juin 2026, une nouvelle loi européenne impose à tous les sites e-commerce de proposer un bouton de rétractation visible et accessible.
            </p>

            {/* Alert Box */}
            <div className="bg-[#562C2C]/5 border-l-4 border-[#F2542D] p-4 rounded-r-xl flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#F2542D] shrink-0 mt-0.5" />
              <p className="text-sm font-black text-[#562C2C]">
                Sanction si tu t&apos;en fiches : jusqu&apos;à 75 000€ d&apos;amende.
              </p>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              Nom d&apos;une pipe, autant régler ça maintenant — et c&apos;est exactement pour ça que j&apos;ai créé ce tuto. 😄
            </p>

            <p className="text-sm font-semibold text-[#127475]">
              👇 Entre ton email, je te l&apos;envoie immédiatement et gratuitement.
            </p>

            {/* Form standard directly on page (No modal needed!) */}
            {!retractationSuccess ? (
              <form onSubmit={handleRetractationSubmit} className="space-y-4 pt-2">
                {/* Anti-Bot Honeypot Invisible Trap Field */}
                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {retractationError && (
                  <div className="p-3 rounded-xl bg-red-100 text-red-800 text-xs font-semibold">
                    {retractationError}
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    value={retractationEmail}
                    onChange={(e) => setRetractationEmail(e.target.value)}
                    placeholder="Entre ton adresse email ici"
                    className="flex-grow px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#F2542D] text-sm bg-white shadow-xs"
                  />
                  <button
                    type="submit"
                    disabled={retractationLoading}
                    className="px-6 py-3.5 rounded-xl font-bold text-sm bg-[#562C2C] hover:bg-[#F2542D] text-white shadow-md transition-all flex items-center justify-center gap-2 shrink-0 disabled:opacity-50"
                  >
                    {retractationLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Envoi...</span>
                      </>
                    ) : (
                      <>
                        <span>Je reçois mon tuto gratuit</span>
                        <Send className="w-4 h-4 text-[#F5DFBB]" />
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-start gap-2 pt-1 text-left">
                  <input
                    type="checkbox"
                    id="gdprRetractation"
                    required
                    checked={retractationGdpr}
                    onChange={(e) => setRetractationGdpr(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded border-slate-300 text-[#F2542D] focus:ring-[#F2542D] shrink-0 cursor-pointer"
                  />
                  <label htmlFor="gdprRetractation" className="text-[11px] text-slate-600 leading-snug cursor-pointer">
                    En cliquant, j&apos;atteste avoir compris que mes données ne seront pas partagées, et ne seront utilisées que pour me contacter. Aucune donnée ne sera vendue, conformément aux Mentions légales, politiques de confidentialité et RGPD.
                  </label>
                </div>
              </form>
            ) : (
              <div className="bg-[#0E9594]/15 border border-[#0E9594]/30 rounded-2xl p-5 text-left space-y-3">
                <div className="flex items-center gap-2 text-[#0E9594] font-bold text-base">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>C&apos;est en route ! 📩</span>
                </div>
                <p className="text-xs text-[#562C2C] leading-relaxed">
                  Merci ! Ton tuto gratuit vient d&apos;être envoyé à l&apos;adresse <strong className="text-[#127475]">{retractationEmail}</strong>. Pense à vérifier tes spams si tu ne le vois pas d&apos;ici 2 minutes.
                </p>
                <div className="pt-2">
                  <a
                    href="/downloads/tuto-bouton-retractation.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download="tuto-bouton-retractation-stratec-digital.pdf"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs bg-[#562C2C] hover:bg-[#F2542D] text-white shadow-md transition-all"
                  >
                    <Download className="w-4 h-4 text-[#F5DFBB]" />
                    <span>Télécharger mon PDF directement</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* DIVIDER ACCENT */}
      <div className="relative flex items-center justify-center">
        <div className="w-full border-t border-[#562C2C]/15" />
        <span className="absolute bg-[#FAF4F2] px-4 text-[#562C2C]/40 text-xs font-black uppercase tracking-widest">
          &bull; &bull; &bull;
        </span>
      </div>

      {/* FEATURED RESOURCE 2: PLAN D'ACTION RENTRÉE */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#562C2C]/10 shadow-lg hover:shadow-xl transition-all relative overflow-hidden">
        <div className="flex items-center gap-2 mb-6">
          <span className="px-3.5 py-1 rounded-full bg-[#127475] text-white text-xs font-black uppercase tracking-wider">
            ORGANISATION &bull; STRATÉGIE
          </span>
          <span className="text-xs font-bold text-[#562C2C] bg-[#F5DFBB] px-3 py-1 rounded-full">
            Plan d&apos;action offert 🎁
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Copy & Inline Direct Form */}
          <div className="lg:col-span-7 space-y-5 order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl font-black text-[#562C2C] leading-tight">
              🎁 Ton plan d&apos;action gratuit pour préparer ta rentrée
            </h2>

            <p className="text-base font-bold text-[#562C2C] leading-relaxed">
              L&apos;été c&apos;est creux pour ton activité ? C&apos;est une chance unique.
            </p>

            <p className="text-slate-700 text-sm leading-relaxed">
              Pendant que tes concurrents coupent tout, profite du mois calme pour poser calmement les bases de ta présence en ligne, sans stress et sans jargon.
            </p>

            {/* Warning Box */}
            <div className="bg-[#FAF4F2] border-l-4 border-[#127475] p-4 rounded-r-xl space-y-1">
              <p className="text-sm font-bold text-[#562C2C]">
                <strong>Le risque si tu ne fais rien :</strong> Arriver en septembre sous l&apos;eau, sans visibilité, et passer à côté des clients qui cherchent tes créations ou ton savoir-faire sur Google.
              </p>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              Nom d&apos;une pipe, autant utiliser ce temps calme maintenant — et c&apos;est exactement pour ça que j&apos;ai créé ce plan d&apos;action en 4 étapes. 😁
            </p>

            <p className="text-sm font-semibold text-[#127475]">
              👇 Entre ton email, je te l&apos;envoie immédiatement et gratuitement.
            </p>

            {/* Inline Form */}
            {!rentreeSuccess ? (
              <form onSubmit={handleRentreeSubmit} className="space-y-4 pt-2">
                {/* Anti-Bot Honeypot Invisible Trap Field */}
                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {rentreeError && (
                  <div className="p-3 rounded-xl bg-red-100 text-red-800 text-xs font-semibold">
                    {rentreeError}
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    value={rentreeEmail}
                    onChange={(e) => setRentreeEmail(e.target.value)}
                    placeholder="Entre ton adresse email ici"
                    className="flex-grow px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#127475] text-sm bg-white shadow-xs"
                  />
                  <button
                    type="submit"
                    disabled={rentreeLoading}
                    className="px-6 py-3.5 rounded-xl font-bold text-sm bg-[#562C2C] hover:bg-[#127475] text-white shadow-md transition-all flex items-center justify-center gap-2 shrink-0 disabled:opacity-50"
                  >
                    {rentreeLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Envoi...</span>
                      </>
                    ) : (
                      <>
                        <span>Je reçois mon plan d&apos;action</span>
                        <Send className="w-4 h-4 text-[#F5DFBB]" />
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-start gap-2 pt-1 text-left">
                  <input
                    type="checkbox"
                    id="gdprRentree"
                    required
                    checked={rentreeGdpr}
                    onChange={(e) => setRentreeGdpr(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded border-slate-300 text-[#127475] focus:ring-[#127475] shrink-0 cursor-pointer"
                  />
                  <label htmlFor="gdprRentree" className="text-[11px] text-slate-600 leading-snug cursor-pointer">
                    En cliquant, j&apos;atteste avoir compris que mes données ne seront pas partagées, et ne seront utilisées que pour me contacter. Aucune donnée ne sera vendue, conformément aux Mentions légales, politiques de confidentialité et RGPD.
                  </label>
                </div>
              </form>
            ) : (
              <div className="bg-[#0E9594]/15 border border-[#0E9594]/30 rounded-2xl p-5 text-left space-y-3">
                <div className="flex items-center gap-2 text-[#0E9594] font-bold text-base">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Le plan d&apos;action arrive ! 📩</span>
                </div>
                <p className="text-xs text-[#562C2C] leading-relaxed">
                  Merci ! Ton plan d&apos;action gratuit vient d&apos;être envoyé à <strong className="text-[#127475]">{rentreeEmail}</strong>. Consulte ton dossier de réception dès maintenant !
                </p>
                <div className="pt-2">
                  <a
                    href="/downloads/plan-action-rentree.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download="plan-action-rentree-stratec-digital.pdf"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs bg-[#562C2C] hover:bg-[#127475] text-white shadow-md transition-all"
                  >
                    <Download className="w-4 h-4 text-[#F5DFBB]" />
                    <span>Télécharger mon PDF directement</span>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Image Screenshot */}
          <div className="lg:col-span-5 relative order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200 group bg-slate-100">
              <Image
                src="/images/plan-action-rentree.webp"
                alt="Plan d'action rentrée ressources gratuites Stratec Digital"
                width={801}
                height={607}
                className="w-full h-auto object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md border border-[#F5DFBB] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#127475]" />
                <span className="text-xs font-extrabold text-[#562C2C]">Méthode 4 Étapes</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
