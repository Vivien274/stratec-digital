"use client";

import Link from "next/link";
import Script from "next/script";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2, AlertCircle, Loader2, Shield } from "lucide-react";

function ContactFormInner() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    activity: "",
    serviceInterest: "Audit accessibilité",
    message: "",
    newsletter: false,
    honeypot: "",
  });

  useEffect(() => {
    const service = searchParams.get("service");
    const formule = searchParams.get("formule");

    if (service === "audit") {
      setFormData((prev) => ({ ...prev, serviceInterest: "Audit accessibilité" }));
    } else if (service === "formation") {
      setFormData((prev) => ({ ...prev, serviceInterest: "Formation équipe" }));
    } else if (formule === "legere") {
      setFormData((prev) => ({ ...prev, serviceInterest: "Référent mensuel - Légère" }));
    } else if (formule === "standard") {
      setFormData((prev) => ({ ...prev, serviceInterest: "Référent mensuel - Standard" }));
    } else if (formule === "renforcee") {
      setFormData((prev) => ({ ...prev, serviceInterest: "Référent mensuel - Renforcée" }));
    }
  }, [searchParams]);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      let recaptchaToken = '';
      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LdGep4tAAAAALXgCbdUGx8TNwExONfFSeNoUOAz';
      if (typeof window !== 'undefined' && (window as any).grecaptcha && siteKey) {
        try {
          recaptchaToken = await new Promise<string>((resolve) => {
            (window as any).grecaptcha.ready(async () => {
              try {
                const token = await (window as any).grecaptcha.execute(siteKey, { action: 'contact_submit' });
                resolve(token);
              } catch (e) {
                resolve('');
              }
            });
          });
        } catch (e) {
          console.warn('grecaptcha execution fallback:', e);
        }
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Une erreur s'est produite lors de l'envoi.");
      }

      setStatus({
        type: "success",
        text: "Merci ! Votre message a bien été envoyé. Je vous réponds sous 48h ouvrées.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        activity: "",
        serviceInterest: "Audit accessibilité",
        message: "",
        newsletter: false,
        honeypot: "",
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
    <>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LdGep4tAAAAALXgCbdUGx8TNwExONfFSeNoUOAz'}`}
        strategy="afterInteractive"
      />
      <form onSubmit={handleSubmit} className="bg-white p-8 sm:p-10 rounded-3xl border border-[#562C2C]/10 shadow-lg space-y-6">
        {/* Hidden Honeypot Field for Bot Spam Prevention with Accessible Label */}
        <label htmlFor="website_url_hp" className="sr-only">
          Ne pas remplir ce champ de vérification anti-spam
        </label>
        <input
          type="text"
          id="website_url_hp"
          name="website_url_hp"
          aria-label="Ne pas remplir ce champ de vérification anti-spam"
          value={formData.honeypot}
          onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden opacity-0 pointer-events-none absolute -left-[9999px] w-0 h-0"
        />

      <div className="space-y-2">
        <h3 className="text-2xl font-black text-[#562C2C]">Vous avez un projet en tête ?</h3>
        <p className="text-sm text-slate-700">
          Remplissez ce formulaire ci-dessous, je vous réponds sous 48h ouvrées.
        </p>
        <p className="text-xs text-slate-700 font-semibold pt-1">
          Les champs marqués d&apos;un astérisque (<span aria-hidden="true" className="text-[#C43219] font-bold">*</span><span className="sr-only">obligatoire</span>) sont obligatoires.
        </p>
      </div>

      {status && (
        <div
          role={status.type === "error" ? "alert" : "status"}
          aria-live="polite"
          className={`p-4 rounded-2xl flex items-start gap-3 text-sm font-medium ${
            status.type === "success"
              ? "bg-[#127475]/10 text-[#127475] border border-[#127475]/30"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {status.type === "success" ? (
            <CheckCircle2 className="w-5 h-5 text-[#127475] shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          )}
          <span>{status.text}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-name" className="block text-xs font-extrabold text-[#562C2C] uppercase tracking-wider mb-2">
            Votre Nom &amp; Prénom <span aria-hidden="true" className="text-[#C43219]">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            required
            aria-required="true"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="ex: Thomas Martin"
            className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#127475] focus:border-transparent text-slate-900 text-sm bg-[#FAF4F2]/40"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-xs font-extrabold text-[#562C2C] uppercase tracking-wider mb-2">
            Votre Email Professionnel <span aria-hidden="true" className="text-[#C43219]">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            required
            aria-required="true"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="thomas@agence-web.fr"
            className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#127475] focus:border-transparent text-slate-900 text-sm bg-[#FAF4F2]/40"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-phone" className="block text-xs font-extrabold text-[#562C2C] uppercase tracking-wider mb-2">
            Téléphone (optionnel)
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="06 00 00 00 00"
            className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#127475] focus:border-transparent text-slate-900 text-sm bg-[#FAF4F2]/40"
          />
        </div>

        <div>
          <label htmlFor="contact-activity" className="block text-xs font-extrabold text-[#562C2C] uppercase tracking-wider mb-2">
            Votre Agence / Entreprise
          </label>
          <input
            id="contact-activity"
            type="text"
            value={formData.activity}
            onChange={(e) => setFormData({ ...formData, activity: e.target.value })}
            placeholder="Nom de l'agence, PME..."
            className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#127475] focus:border-transparent text-slate-900 text-sm bg-[#FAF4F2]/40"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-service" className="block text-xs font-extrabold text-[#562C2C] uppercase tracking-wider mb-2">
          Service ou Formule Recherchée
        </label>
        <select
          id="contact-service"
          value={formData.serviceInterest}
          onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
          className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#127475] focus:border-transparent text-slate-900 text-sm bg-[#FAF4F2]/40"
        >
          <option value="Audit accessibilité">Audit accessibilité (dès 450 €)</option>
          <option value="Formation équipe">Formation équipe (dès 400 €)</option>
          <option value="Référent mensuel - Légère">Référent mensuel &mdash; Formule Légère (1/2 journée, env. 300 € / mois)</option>
          <option value="Référent mensuel - Standard">Référent mensuel &mdash; Formule Standard (1 journée, env. 600 € / mois)</option>
          <option value="Référent mensuel - Renforcée">Référent mensuel &mdash; Formule Renforcée (2 journées, env. 1 200 € / mois)</option>
          <option value="Autre demande / Échange découverte">Autre demande / Échange préliminaire</option>
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-xs font-extrabold text-[#562C2C] uppercase tracking-wider mb-2">
          Votre Message <span aria-hidden="true" className="text-[#C43219]">*</span>
        </label>
        <textarea
          id="contact-message"
          required
          aria-required="true"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Décrivez brièvement votre projet, vos échéances ou vos interrogations sur l'accessibilité..."
          className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#127475] focus:border-transparent text-slate-900 text-sm bg-[#FAF4F2]/40"
        />
      </div>

      {/* Newsletter Checkbox */}
      <div className="flex items-start gap-3 pt-1">
        <input
          type="checkbox"
          id="contact-newsletter"
          checked={formData.newsletter}
          onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
          className="mt-1 w-4 h-4 text-[#C43219] rounded border-slate-300 focus:ring-[#127475]"
        />
        <label htmlFor="contact-newsletter" className="text-xs text-slate-700 font-medium leading-tight cursor-pointer">
          Je souhaite m&apos;inscrire pour recevoir des conseils et retours d&apos;expérience sur l&apos;accessibilité numérique.
        </label>
      </div>

      {/* Reassurance text */}
      <div className="flex items-center gap-2 text-xs text-slate-700 bg-[#F5DFBB]/40 p-3 rounded-xl border border-[#562C2C]/10">
        <Shield className="w-4 h-4 text-[#127475] shrink-0" />
        <span>
          🔒 Vos données restent confidentielles &mdash; aucun démarchage abusif ni revente. Consultez nos{" "}
          <Link href="/mentions-legales" className="text-[#127475] font-bold underline hover:text-[#C43219]">
            Mentions légales
          </Link>.
        </span>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-white bg-[#562C2C] hover:bg-[#C43219] shadow-md hover:shadow-lg transition-all disabled:opacity-50"
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
    </>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={<div className="p-8 bg-white rounded-3xl border border-[#562C2C]/10 min-h-[400px] animate-pulse" />}>
      <ContactFormInner />
    </Suspense>
  );
}
