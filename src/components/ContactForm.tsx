"use client";

import Link from "next/link";
import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, Shield } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    activity: "",
    serviceInterest: "Pack Premiers pas digitaux",
    message: "",
    newsletter: false,
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Une erreur s'est produite.");
      }

      setStatus({
        type: "success",
        text: "Merci ! Votre message a bien été envoyé. Stéphanie vous répond sous 48h.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        activity: "",
        serviceInterest: "Pack Premiers pas digitaux",
        message: "",
        newsletter: false,
      });
    } catch (err: unknown) {
      const error = err as Error;
      setStatus({
        type: "error",
        text: error.message || "Erreur lors de l'envoi du message.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 sm:p-10 rounded-3xl border border-[#562C2C]/10 shadow-lg space-y-6">
      <div className="space-y-2">
        <h3 className="text-2xl font-black text-[#562C2C]">T&apos;as un projet en tête ?</h3>
        <p className="text-sm text-slate-600">
          Remplis ce formulaire ci-dessous, je te réponds dans les 48h. (Le week-end, je suis peut-être en train de me reposer comme une personne normale 😄)
        </p>
      </div>

      {status && (
        <div
          className={`p-4 rounded-2xl flex items-start gap-3 text-sm font-medium ${
            status.type === "success"
              ? "bg-[#0E9594]/10 text-[#0E9594] border border-[#0E9594]/30"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {status.type === "success" ? (
            <CheckCircle2 className="w-5 h-5 text-[#0E9594] shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          )}
          <span>{status.text}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-extrabold text-[#562C2C] uppercase tracking-wider mb-2">
            Ton Nom &amp; Prénom *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="ex: Jean Dupont"
            className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0E9594] focus:border-transparent text-slate-900 text-sm bg-[#FAF4F2]/40"
          />
        </div>

        <div>
          <label className="block text-xs font-extrabold text-[#562C2C] uppercase tracking-wider mb-2">
            Ton Email *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="jean@monmetier.fr"
            className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0E9594] focus:border-transparent text-slate-900 text-sm bg-[#FAF4F2]/40"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-extrabold text-[#562C2C] uppercase tracking-wider mb-2">
            Téléphone (optionnel)
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="06 00 00 00 00"
            className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0E9594] focus:border-transparent text-slate-900 text-sm bg-[#FAF4F2]/40"
          />
        </div>

        <div>
          <label className="block text-xs font-extrabold text-[#562C2C] uppercase tracking-wider mb-2">
            Ton Métier / Activité
          </label>
          <input
            type="text"
            value={formData.activity}
            onChange={(e) => setFormData({ ...formData, activity: e.target.value })}
            placeholder="Plombier, Coiffeuse, Créateur..."
            className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0E9594] focus:border-transparent text-slate-900 text-sm bg-[#FAF4F2]/40"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-extrabold text-[#562C2C] uppercase tracking-wider mb-2">
          Service ou Pack Recherché
        </label>
        <select
          value={formData.serviceInterest}
          onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
          className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0E9594] focus:border-transparent text-slate-900 text-sm bg-[#FAF4F2]/40"
        >
          <option value="Pack Premiers pas digitaux">Pack &quot;Premiers pas digitaux&quot; (300 €)</option>
          <option value="Pack Artisan 100% connecté">Pack &quot;Artisan 100% connecté&quot; (Sur-Mesure)</option>
          <option value="Pack Coaching tranquille">Pack &quot;Coaching tranquille&quot; (490 €)</option>
          <option value="Pack Vendre sur les réseaux">Pack &quot;Vendre sur les réseaux&quot; (350 €)</option>
          <option value="Autre demande / Échange gratuit">Autre demande / Échange gratuit</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-extrabold text-[#562C2C] uppercase tracking-wider mb-2">
          Ton Message *
        </label>
        <textarea
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Raconte-moi un peu ton projet ou ce qui te bloque actuellement..."
          className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0E9594] focus:border-transparent text-slate-900 text-sm bg-[#FAF4F2]/40"
        />
      </div>

      {/* Newsletter Checkbox */}
      <div className="flex items-start gap-3 pt-1">
        <input
          type="checkbox"
          id="newsletter"
          checked={formData.newsletter}
          onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
          className="mt-1 w-4 h-4 text-[#F2542D] rounded border-slate-300 focus:ring-[#F2542D]"
        />
        <label htmlFor="newsletter" className="text-xs text-slate-700 font-medium leading-tight cursor-pointer">
          Veux-tu t&apos;abonner à ma newsletter pour recevoir des conseils pratiques ?
        </label>
      </div>

      {/* Reassurance text */}
      <div className="flex items-center gap-2 text-[11px] text-slate-500 bg-[#F5DFBB]/40 p-3 rounded-xl border border-[#562C2C]/5">
        <Shield className="w-4 h-4 text-[#0E9594] shrink-0" />
        <span>
          🔒 Tes données restent chez moi &mdash; pas de revente, pas de spam. Je suis consultante, pas dealer de bases de données. Consulte nos{" "}
          <Link href="/mentions-legales" className="text-[#127475] font-bold underline hover:text-[#F2542D]">
            Mentions légales
          </Link>.
        </span>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-white bg-[#562C2C] hover:bg-[#F2542D] shadow-md hover:shadow-lg transition-all disabled:opacity-50"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Envoi du message...</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>Envoyer mon message</span>
          </>
        )}
      </button>
    </form>
  );
}
