"use client";

import { useState } from "react";
import { Project } from "@prisma/client";
import { Save, Trash2, CheckCircle2, Star, Loader2, Eye, Plus } from "lucide-react";
import Image from "next/image";

export default function PortfolioManager({ initialProjects }: { initialProjects: Project[] }) {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [savingId, setSavingId] = useState<string | null>(null);
  const [savedId, setSavedId] = useState<string | null>(null);

  const handleUpdate = async (project: Project) => {
    setSavingId(project.id);
    setSavedId(null);

    try {
      const res = await fetch(`/api/admin/projects/${project.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(project),
      });

      if (!res.ok) throw new Error("Erreur de mise à jour.");

      setSavedId(project.id);
      setTimeout(() => setSavedId(null), 3000);
    } catch (err) {
      alert("Erreur lors de la mise à jour du projet.");
    } finally {
      setSavingId(null);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Voulez-vous vraiment supprimer ce projet ?")) return;

    try {
      const res = await fetch(`/api/admin/projects/${id}`, { method: "DELETE" });
      if (res.ok) {
        setProjects(projects.filter((p) => p.id !== id));
      }
    } catch (err) {
      alert("Erreur lors de la suppression.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-5"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">{project.title}</h3>
                  <span className="text-xs font-semibold text-emerald-700">{project.clientName}</span>
                </div>
              </div>

              <label className="flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={project.featured}
                  onChange={(e) => {
                    const updated = { ...project, featured: e.target.checked };
                    setProjects(projects.map((p) => (p.id === project.id ? updated : p)));
                  }}
                  className="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500"
                />
                <span className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" /> Mis en avant
                </span>
              </label>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Nom du Projet</label>
                  <input
                    type="text"
                    value={project.title}
                    onChange={(e) => {
                      const updated = { ...project, title: e.target.value };
                      setProjects(projects.map((p) => (p.id === project.id ? updated : p)));
                    }}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-bold text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Catégorie</label>
                  <input
                    type="text"
                    value={project.category}
                    onChange={(e) => {
                      const updated = { ...project, category: e.target.value };
                      setProjects(projects.map((p) => (p.id === project.id ? updated : p)));
                    }}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Résumé / Description</label>
                <textarea
                  rows={2}
                  value={project.summary}
                  onChange={(e) => {
                    const updated = { ...project, summary: e.target.value };
                    setProjects(projects.map((p) => (p.id === project.id ? updated : p)));
                  }}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-800"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Défi Client</label>
                  <input
                    type="text"
                    value={project.challenge || ""}
                    onChange={(e) => {
                      const updated = { ...project, challenge: e.target.value };
                      setProjects(projects.map((p) => (p.id === project.id ? updated : p)));
                    }}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-800"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Résultat Obtenu</label>
                  <input
                    type="text"
                    value={project.result || ""}
                    onChange={(e) => {
                      const updated = { ...project, result: e.target.value };
                      setProjects(projects.map((p) => (p.id === project.id ? updated : p)));
                    }}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Avis / Témoignage Client</label>
                <input
                  type="text"
                  value={project.testimonialText || ""}
                  onChange={(e) => {
                    const updated = { ...project, testimonialText: e.target.value };
                    setProjects(projects.map((p) => (p.id === project.id ? updated : p)));
                  }}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-800"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Lien vers le site en ligne</label>
                <input
                  type="text"
                  value={project.liveUrl || ""}
                  onChange={(e) => {
                    const updated = { ...project, liveUrl: e.target.value };
                    setProjects(projects.map((p) => (p.id === project.id ? updated : p)));
                  }}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-800"
                />
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => handleDelete(project.id)}
                className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1"
              >
                <Trash2 className="w-3.5 h-3.5" /> Supprimer
              </button>

              <div className="flex items-center gap-3">
                {savedId === project.id && (
                  <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" /> Enregistré !
                  </span>
                )}
                <button
                  onClick={() => handleUpdate(project)}
                  disabled={savingId === project.id}
                  className="px-4 py-2 rounded-xl font-bold text-xs bg-slate-900 hover:bg-emerald-600 text-white transition-colors flex items-center gap-2 disabled:opacity-50"
                >
                  {savingId === project.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                  <span>Enregistrer</span>
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
