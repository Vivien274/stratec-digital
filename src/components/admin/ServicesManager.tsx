"use client";

import { useState } from "react";
import { Pack } from "@prisma/client";
import { Save, CheckCircle2, Star, Loader2 } from "lucide-react";

export default function ServicesManager({ initialPacks }: { initialPacks: Pack[] }) {
  const [packs, setPacks] = useState<Pack[]>(initialPacks);
  const [savingId, setSavingId] = useState<string | null>(null);
  const [savedId, setSavedId] = useState<string | null>(null);

  const handleUpdate = async (pack: Pack) => {
    setSavingId(pack.id);
    setSavedId(null);

    try {
      const res = await fetch(`/api/admin/packs/${pack.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pack),
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {packs.map((pack, index) => (
        <div
          key={pack.id}
          className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-5"
        >
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
              Pack n°{index + 1}
            </span>
            <label className="flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={pack.popularBadge}
                onChange={(e) => {
                  const updated = { ...pack, popularBadge: e.target.checked };
                  setPacks(packs.map((p) => (p.id === pack.id ? updated : p)));
                }}
                className="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500"
              />
              <span className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" /> Badge Populaire
              </span>
            </label>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Titre de l&apos;offre</label>
              <input
                type="text"
                value={pack.title}
                onChange={(e) => {
                  const updated = { ...pack, title: e.target.value };
                  setPacks(packs.map((p) => (p.id === pack.id ? updated : p)));
                }}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 font-bold text-sm"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Prix (ex: 300 €)</label>
                <input
                  type="text"
                  value={pack.price}
                  onChange={(e) => {
                    const updated = { ...pack, price: e.target.value };
                    setPacks(packs.map((p) => (p.id === pack.id ? updated : p)));
                  }}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 font-bold text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Période / Note</label>
                <input
                  type="text"
                  value={pack.billingPeriod}
                  onChange={(e) => {
                    const updated = { ...pack, billingPeriod: e.target.value };
                    setPacks(packs.map((p) => (p.id === pack.id ? updated : p)));
                  }}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Accroche courte</label>
              <input
                type="text"
                value={pack.tagline}
                onChange={(e) => {
                  const updated = { ...pack, tagline: e.target.value };
                  setPacks(packs.map((p) => (p.id === pack.id ? updated : p)));
                }}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Description complète</label>
              <textarea
                rows={3}
                value={pack.description}
                onChange={(e) => {
                  const updated = { ...pack, description: e.target.value };
                  setPacks(packs.map((p) => (p.id === pack.id ? updated : p)));
                }}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-xs"
              />
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            {savedId === pack.id ? (
              <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Sauvegardé avec succès !
              </span>
            ) : (
              <span></span>
            )}

            <button
              onClick={() => handleUpdate(pack)}
              disabled={savingId === pack.id}
              className="px-5 py-2.5 rounded-xl font-bold text-xs bg-slate-900 hover:bg-emerald-600 text-white transition-colors flex items-center gap-2 disabled:opacity-50"
            >
              {savingId === pack.id ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Save className="w-4 h-4" />
              )}
              <span>Enregistrer</span>
            </button>
          </div>

        </div>
      ))}
    </div>
  );
}
