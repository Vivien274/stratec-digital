"use client";

import { useState } from "react";
import Link from "next/link";
import { Download, BookOpen, FileText, Video, Sparkles, X, CheckCircle2, Loader2, ArrowRight, Shield } from "lucide-react";

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
  const [selectedResource, setSelectedResource] = useState<FreeResourceItem | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rgpdConsent, setRgpdConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleOpenModal = (resource: FreeResourceItem) => {
    setSelectedResource(resource);
    setName("");
    setEmail("");
    setRgpdConsent(false);
    setSuccess(false);
    setErrorMsg("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedResource) return;
    if (!rgpdConsent) {
      setErrorMsg("Merci de cocher la case d'accord RGPD pour recevoir ta ressource.");
      return;
    }
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe-resource", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          resourceId: selectedResource.id,
          resourceTitle: selectedResource.title,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Erreur d'inscription.");
      }

      setSuccess(true);
    } catch (err: unknown) {
      const error = err as Error;
      setErrorMsg(error.message || "Impossible de valider ton inscription.");
    } finally {
      setLoading(false);
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Guide PDF":
        return BookOpen;
      case "Checklist":
        return FileText;
      case "Tuto Vidéo":
        return Video;
      default:
        return Sparkles;
    }
  };

  return (
    <>
      {/* Resources Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {resources.map((res) => {
          const IconComponent = getCategoryIcon(res.category);
          return (
            <div
              key={res.id}
              className="bg-white rounded-3xl p-8 border border-[#562C2C]/10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {res.image && (
                  <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-slate-100 border border-slate-100">
                    {/* eslint-disable-next-next/no-img-element */}
                    <img src={res.image} alt={res.title} className="w-full h-full object-cover" />
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#127475] bg-[#0E9594]/15 px-3 py-1 rounded-full">
                    {res.category}
                  </span>
                  <span className="text-[11px] text-[#562C2C] font-bold flex items-center gap-1 bg-[#F5DFBB]/60 px-2.5 py-1 rounded-lg">
                    ⏱️ 5 min &bull; 0 jargon
                  </span>
                </div>

                <h2 className="text-xl font-bold text-[#562C2C] leading-snug">
                  {res.title}
                </h2>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {res.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#562C2C]/10">
                <button
                  onClick={() => handleOpenModal(res)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-xs bg-[#562C2C] hover:bg-[#F2542D] text-white transition-colors shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Obtenir gratuitement</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Subscription Modal */}
      {selectedResource && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FAF4F2] text-[#562C2C] rounded-3xl max-w-lg w-full p-8 shadow-2xl relative space-y-6 border border-[#562C2C]/10">
            <button
              onClick={() => setSelectedResource(null)}
              className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-[#562C2C] hover:bg-[#F5DFBB]/50 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!success ? (
              <>
                <div className="space-y-2 pr-8">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#127475] bg-[#0E9594]/15 px-3 py-1 rounded-full inline-block mb-2">
                    {selectedResource.category}
                  </span>
                  <h3 className="text-2xl font-black leading-tight">
                    Où dois-je t&apos;envoyer ton &quot;{selectedResource.title}&quot; ?
                  </h3>
                  <p className="text-xs text-slate-600">
                    Renseigne ton prénom et ton email pour le recevoir instantanément dans ta boîte de réception.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 rounded-xl bg-red-100 text-red-800 text-xs font-semibold">
                    {errorMsg}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-extrabold text-[#562C2C] uppercase tracking-wider mb-1.5">
                      Ton Prénom *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="ex: Stéphanie"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0E9594] text-sm bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-[#562C2C] uppercase tracking-wider mb-1.5">
                      Ton Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="stephanie@monmetier.fr"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0E9594] text-sm bg-white"
                    />
                  </div>

                  <div className="flex items-start gap-2.5 pt-1 text-left">
                    <input
                      type="checkbox"
                      id="rgpdConsentModal"
                      required
                      checked={rgpdConsent}
                      onChange={(e) => setRgpdConsent(e.target.checked)}
                      className="mt-0.5 w-4 h-4 rounded border-slate-300 text-[#F2542D] focus:ring-[#F2542D] shrink-0 cursor-pointer"
                    />
                    <label htmlFor="rgpdConsentModal" className="text-xs text-slate-700 font-medium leading-snug cursor-pointer">
                      J&apos;accepte de recevoir la ressource gratuite et les conseils digitaux de Stratec Digital par email. (Désinscription en 1 clic à tout moment).
                    </label>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-slate-500 bg-[#F5DFBB]/40 p-3 rounded-xl">
                    <Shield className="w-4 h-4 text-[#0E9594] shrink-0" />
                    <span>
                      🔒 Pas de spam. Tu recevras directement ton document par email + mes meilleurs conseils.
                    </span>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-6 rounded-xl font-bold text-sm bg-[#562C2C] hover:bg-[#F2542D] text-white shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Envoi en cours...</span>
                      </>
                    ) : (
                      <>
                        <span>Recevoir gratuitement par email</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#0E9594]/20 text-[#0E9594] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-[#562C2C]">C&apos;est parti ! 📩</h3>
                <p className="text-sm text-slate-700 leading-relaxed max-w-sm mx-auto">
                  Merci <strong className="text-[#562C2C]">{name}</strong> ! La ressource <strong className="text-[#562C2C]">&quot;{selectedResource.title}&quot;</strong> vient de t&apos;être envoyée à l&apos;adresse <span className="text-[#127475] font-semibold">{email}</span>.
                </p>
                <p className="text-xs text-slate-500 pt-2">
                  (Pense à vérifier ton dossier Spams ou Indésirables si tu ne le vois pas d&apos;ici 2 minutes !)
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSelectedResource(null)}
                    className="px-6 py-2.5 rounded-xl font-bold text-xs bg-[#562C2C] text-white hover:bg-[#F2542D] transition-colors"
                  >
                    Fermer cette fenêtre
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
