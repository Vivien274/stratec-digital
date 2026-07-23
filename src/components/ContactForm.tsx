"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    activity: "",
    serviceInterest: "Pack Premiers pas digitaux",
    message: "",
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
        text: "Merci ! Votre message a bien été envoyé. Stéphanie vous recontactera très rapidement.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        activity: "",
        serviceInterest: "Pack Premiers pas digitaux",
        message: "",
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
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md space-y-6">
      <h3 className="text-2xl font-bold text-[#562C2C]">Envoyez-moi un message</h3>
      <p className="text-sm text-slate-600">
        Une question ? Envie de réserver un rendez-vous ou d&apos;échanger sur votre projet ? Remplissez ce formulaire et je vous réponds sous 24h.
      </p>

      {status && (
        <div
          className={`p-4 rounded-2xl flex items-start gap-3 text-sm font-medium ${
            status.type === "success" ? "bg-emerald-50 text-emerald-800 border border-emerald-200" : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {status.type === "success" ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          )}
          <span>{status.text}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-[#562C2C] uppercase tracking-wider mb-2">
            Votre Nom &amp; Prénom *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="ex: Jean Dupont"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0E9594] focus:border-transparent text-slate-900 text-sm bg-slate-50/50"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-[#562C2C] uppercase tracking-wider mb-2">
            Votre Email *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="jean@monmetier.fr"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0E9594] focus:border-transparent text-slate-900 text-sm bg-slate-50/50"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-[#562C2C] uppercase tracking-wider mb-2">
            Téléphone (optionnel)
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="06 00 00 00 00"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0E9594] focus:border-transparent text-slate-900 text-sm bg-slate-50/50"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-[#562C2C] uppercase tracking-wider mb-2">
            Votre Métier / Activité
          </label>
          <input
            type="text"
            value={formData.activity}
            onChange={(e) => setFormData({ ...formData, activity: e.target.value })}
            placeholder="Plombier, Coiffeuse, Artisan..."
            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0E9594] focus:border-transparent text-slate-900 text-sm bg-slate-50/50"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-[#562C2C] uppercase tracking-wider mb-2">
          Service ou Pack Recherché
        </label>
        <select
          value={formData.serviceInterest}
          onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0E9594] focus:border-transparent text-slate-900 text-sm bg-slate-50/50"
        >
          <option value="Pack Premiers pas digitaux">Pack &quot;Premiers pas digitaux&quot; (300 €)</option>
          <option value="Pack Artisan 100% connecté">Pack &quot;Artisan 100% connecté&quot; (Sur-Mesure)</option>
          <option value="Pack Coaching tranquille">Pack &quot;Coaching tranquille&quot; (490 €)</option>
          <option value="Pack Vendre sur les réseaux">Pack &quot;Vendre sur les réseaux&quot; (350 €)</option>
          <option value="Autre demande / Audit gratuit">Autre demande / Audit gratuit</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-bold text-[#562C2C] uppercase tracking-wider mb-2">
          Votre Message *
        </label>
        <textarea
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Dites-moi en quelques mots où vous en êtes dans votre projet..."
          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0E9594] focus:border-transparent text-slate-900 text-sm bg-slate-50/50"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-white bg-[#562C2C] hover:bg-[#F2542D] shadow-md hover:shadow-lg transition-all disabled:opacity-50"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Envoi en cours...</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>Envoyer le message</span>
          </>
        )}
      </button>
    </form>
  );
}
