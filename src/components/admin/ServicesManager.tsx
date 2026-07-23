"use client";

import { useState } from "react";
import { Pack } from "@prisma/client";
import { Save, CheckCircle2, Star, Loader2, Sparkles, CreditCard, Tag, ListChecks } from "lucide-react";

export default function ServicesManager({ initialPacks }: { initialPacks: Pack[] }) {
  const [packs, setPacks] = useState<Pack[]>(initialPacks);
  const [savingId, setSavingId] = useState<string | null>(null);
  const [savedId, setSavedId] = useState<string | null>(null);

  // Helper to parse features json string to multiline text for editing
  const getFeaturesText = (featuresRaw: string) => {
    try {
      const parsed = JSON.parse(featuresRaw);
      if (Array.isArray(parsed)) {
        return parsed.join("\n");
      }
      return String(featuresRaw);
    } catch {
      return String(featuresRaw || "");
    }
  };

  const handleUpdate = async (pack: Pack, rawFeaturesText: string) => {
    setSavingId(pack.id);
    setSavedId(null);

    // Convert raw lines to clean string array
    const featuresList = rawFeaturesText
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);

    const packToSave = {
      ...pack,
      features: JSON.stringify(featuresList),
    };

    try {
      const res = await fetch(`/api/admin/packs/${pack.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(packToSave),
      });

      if (!res.ok) throw new Error("Erreur de sauvegarde.");

      setSavedId(pack.id);
      setTimeout(() => setSavedId(null), 3000);
    } catch (err) {
      alert("Erreur lors de l'enregistrement de l'offre.");
    } finally {
      setSavingId(null);
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
      {packs.map((pack, index) => {
        const [featuresText, setFeaturesText] = useState(getFeaturesText(pack.features));

        return (
          <div
            key={pack.id}
            className={`bg-white p-6 sm:p-8 rounded-3xl border ${
              pack.popularBadge ? "border-[#F2542D] ring-2 ring-[#F2542D]/20 shadow-lg" : "border-slate-200 shadow-sm"
            } space-y-6 transition-all`}
          >
            {/* Header controls & badges */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <span className="text-xs font-black uppercase tracking-wider text-[#127475] bg-[#0E9594]/15 px-3.5 py-1 rounded-full">
                Formule n°{index + 1}
              </span>

              <div className="flex items-center gap-4">
                {/* Popular Badge Toggle */}
                <label className="flex items-center gap-2 text-xs font-bold text-[#562C2C] cursor-pointer bg-[#F5DFBB]/40 hover:bg-[#F5DFBB]/80 px-3 py-1.5 rounded-xl border border-[#562C2C]/10 transition-colors">
                  <input
                    type="checkbox"
                    checked={pack.popularBadge}
                    onChange={(e) => {
                      const updated = { ...pack, popularBadge: e.target.checked };
                      setPacks(packs.map((p) => (p.id === pack.id ? updated : p)));
                    }}
                    className="w-4 h-4 text-[#F2542D] rounded focus:ring-[#F2542D]"
                  />
                  <span className="flex items-center gap-1.5">
                    <Star className={`w-3.5 h-3.5 ${pack.popularBadge ? "text-[#F2542D] fill-[#F2542D]" : "text-slate-400"}`} />
                    Formule Populaire
                  </span>
                </label>
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              {/* Tag / Audience */}
              <div>
                <label className="block text-xs font-bold text-[#562C2C] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-[#127475]" /> Tag / Public cible (ex: ARTISANS, CRÉATEURS)
                </label>
                <input
                  type="text"
                  value={pack.audience}
                  onChange={(e) => {
                    const updated = { ...pack, audience: e.target.value };
                    setPacks(packs.map((p) => (p.id === pack.id ? updated : p)));
                  }}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0E9594] text-slate-900 text-xs font-semibold"
                  placeholder="ex: Artisans, créateurs et micro-entrepreneurs"
                />
              </div>

              {/* Title */}
              <div>
                <label className="block text-xs font-bold text-[#562C2C] uppercase tracking-wider mb-1">
                  Titre de l&apos;offre *
                </label>
                <input
                  type="text"
                  value={pack.title}
                  onChange={(e) => {
                    const updated = { ...pack, title: e.target.value };
                    setPacks(packs.map((p) => (p.id === pack.id ? updated : p)));
                  }}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0E9594] text-slate-900 font-extrabold text-base"
                  placeholder="ex: Pack Premiers pas digitaux"
                />
              </div>

              {/* Tagline / Subtitle */}
              <div>
                <label className="block text-xs font-bold text-[#562C2C] uppercase tracking-wider mb-1">
                  Sous-titre / Accroche
                </label>
                <input
                  type="text"
                  value={pack.tagline}
                  onChange={(e) => {
                    const updated = { ...pack, tagline: e.target.value };
                    setPacks(packs.map((p) => (p.id === pack.id ? updated : p)));
                  }}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0E9594] text-slate-700 text-xs"
                  placeholder="ex: Posez vos premières fondations sur le web en toute simplicité."
                />
              </div>

              {/* Price & Billing Period */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#562C2C] uppercase tracking-wider mb-1">
                    Tarif (ex: 300 €) *
                  </label>
                  <input
                    type="text"
                    value={pack.price}
                    onChange={(e) => {
                      const updated = { ...pack, price: e.target.value };
                      setPacks(packs.map((p) => (p.id === pack.id ? updated : p)));
                    }}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0E9594] text-slate-900 font-extrabold text-sm"
                    placeholder="300 € ou Sur-Mesure"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#562C2C] uppercase tracking-wider mb-1">
                    Mention de tarif (ex: tarif fixe, devis)
                  </label>
                  <input
                    type="text"
                    value={pack.billingPeriod}
                    onChange={(e) => {
                      const updated = { ...pack, billingPeriod: e.target.value };
                      setPacks(packs.map((p) => (p.id === pack.id ? updated : p)));
                    }}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0E9594] text-slate-700 text-xs"
                    placeholder="tarif fixe / devis personnalisé"
                  />
                </div>
              </div>

              {/* Split payment checkbox */}
              <div className="pt-1">
                <label className="flex items-center gap-2.5 text-xs font-bold text-[#562C2C] cursor-pointer bg-[#FAF4F2] p-3 rounded-xl border border-[#562C2C]/10">
                  <input
                    type="checkbox"
                    checked={pack.allowSplitPayment !== false}
                    onChange={(e) => {
                      const updated = { ...pack, allowSplitPayment: e.target.checked };
                      setPacks(packs.map((p) => (p.id === pack.id ? updated : p)));
                    }}
                    className="w-4 h-4 text-[#0E9594] rounded focus:ring-[#0E9594]"
                  />
                  <span className="flex items-center gap-1.5">
                    <CreditCard className="w-4 h-4 text-[#127475]" />
                    Afficher le badge &quot;Paiement en 3x possible&quot;
                  </span>
                </label>
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-bold text-[#562C2C] uppercase tracking-wider mb-1">
                  Description de l&apos;offre
                </label>
                <textarea
                  rows={3}
                  value={pack.description}
                  onChange={(e) => {
                    const updated = { ...pack, description: e.target.value };
                    setPacks(packs.map((p) => (p.id === pack.id ? updated : p)));
                  }}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0E9594] text-slate-800 text-xs leading-relaxed"
                  placeholder="Présentation claire et rassurante du pack..."
                />
              </div>

              {/* Features Multiline Editor */}
              <div>
                <label className="block text-xs font-bold text-[#562C2C] uppercase tracking-wider mb-1 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <ListChecks className="w-4 h-4 text-[#F2542D]" /> Ce que comprend le pack (1 puce par ligne)
                  </span>
                  <span className="text-[10px] text-slate-400 font-normal">Chaque saut de ligne crée un point</span>
                </label>
                <textarea
                  rows={6}
                  value={featuresText}
                  onChange={(e) => setFeaturesText(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0E9594] text-slate-800 text-xs leading-relaxed font-mono bg-[#FAF4F2]/30"
                  placeholder="Création Google Business Profile&#10;Mise en place de 2 réseaux sociaux&#10;Formation vidéo 1h..."
                />
              </div>
            </div>

            {/* Footer Actions */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              {savedId === pack.id ? (
                <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Modifications enregistrées !
                </span>
              ) : (
                <span></span>
              )}

              <button
                onClick={() => handleUpdate(pack, featuresText)}
                disabled={savingId === pack.id}
                className="px-6 py-3 rounded-xl font-extrabold text-xs bg-[#562C2C] hover:bg-[#F2542D] text-white transition-colors flex items-center gap-2 shadow-md disabled:opacity-50"
              >
                {savingId === pack.id ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sauvegarde...</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    <span>Enregistrer la formule</span>
                  </>
                )}
              </button>
            </div>

          </div>
        );
      })}
    </div>
  );
}
