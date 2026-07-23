"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Lock, Mail, ArrowRight, Loader2, AlertCircle } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("stephanie@stratec-digital.com");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Identifiants incorrects.");
      }

      router.push("/admin");
      router.refresh();
    } catch (err: unknown) {
      const error = err as Error;
      setError(error.message || "Erreur de connexion.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF4F2] flex items-center justify-center p-4">
      <div className="bg-white max-w-md w-full p-8 rounded-3xl border border-slate-200 shadow-xl space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="bg-[#562C2C] p-3 rounded-2xl inline-block shadow-sm">
            <Image
              src="/images/LogoHD.png"
              alt="Stratec Digital Logo"
              width={160}
              height={40}
              className="object-contain"
            />
          </div>
          <h1 className="text-2xl font-bold text-[#562C2C] pt-2">Espace Administration</h1>
          <p className="text-xs text-slate-500">Connectez-vous pour gérer votre site Stratec Digital</p>
        </div>

        {error && (
          <div className="p-4 rounded-xl bg-red-50 text-red-700 border border-red-200 text-xs font-semibold flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-[#562C2C] uppercase tracking-wider mb-2">
              Adresse Email
            </label>
            <div className="relative">
              <Mail className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="stephanie@stratec-digital.com"
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0E9594] focus:outline-none text-slate-900 text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#562C2C] uppercase tracking-wider mb-2">
              Mot de passe
            </label>
            <div className="relative">
              <Lock className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0E9594] focus:outline-none text-slate-900 text-sm"
              />
            </div>
          </div>

          <div className="p-3.5 bg-[#F5DFBB]/40 rounded-xl border border-[#562C2C]/20 text-[11px] text-slate-700 space-y-1">
            <p className="font-bold text-[#562C2C]">💡 Identifiants par défaut :</p>
            <p>Email : <code className="bg-white/80 px-1 rounded text-[#562C2C] font-semibold">stephanie@stratec-digital.com</code></p>
            <p>Mot de passe : <code className="bg-white/80 px-1 rounded text-[#562C2C] font-semibold">Stratec2026!</code></p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-white bg-[#562C2C] hover:bg-[#F2542D] shadow-md transition-all disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Connexion...</span>
              </>
            ) : (
              <>
                <span>Se connecter</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <div className="text-center pt-4 border-t border-slate-100">
          <a href="/" className="text-xs font-bold text-slate-500 hover:text-[#F2542D] transition-colors">
            &larr; Retourner sur le site public
          </a>
        </div>

      </div>
    </div>
  );
}
