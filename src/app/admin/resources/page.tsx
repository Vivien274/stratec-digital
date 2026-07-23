"use client";

import { useState, useEffect } from "react";
import { Plus, Trash2, Edit2, Download, Image as ImageIcon, CheckCircle2, AlertCircle, Loader2, Upload, FileCheck } from "lucide-react";

interface FreeResource {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string | null;
  downloadUrl: string | null;
  mailchimpTag: string | null;
  sortOrder: number;
}

export default function AdminResourcesPage() {
  const [resources, setResources] = useState<FreeResource[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingResource, setEditingResource] = useState<FreeResource | null>(null);
  const [saving, setSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "Guide PDF",
    description: "",
    image: "",
    downloadUrl: "",
    mailchimpTag: "",
    sortOrder: 0,
  });

  const fetchResources = async () => {
    try {
      const res = await fetch("/api/admin/resources");
      const data = await res.json();
      if (Array.isArray(data)) {
        setResources(data);
      }
    } catch (e) {
      console.error("Error fetching resources:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResources();
  }, []);

  const handleOpenAddModal = () => {
    setEditingResource(null);
    setFormData({
      title: "",
      slug: "",
      category: "Guide PDF",
      description: "",
      image: "",
      downloadUrl: "",
      mailchimpTag: "",
      sortOrder: resources.length + 1,
    });
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (res: FreeResource) => {
    setEditingResource(res);
    setFormData({
      title: res.title,
      slug: res.slug,
      category: res.category,
      description: res.description,
      image: res.image || "",
      downloadUrl: res.downloadUrl || "",
      mailchimpTag: res.mailchimpTag || "",
      sortOrder: res.sortOrder,
    });
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Voulez-vous vraiment supprimer cette ressource gratuite ?")) return;

    try {
      const res = await fetch(`/api/admin/resources/${id}`, { method: "DELETE" });
      if (res.ok) {
        setStatus({ type: "success", text: "Ressource supprimée avec succès." });
        fetchResources();
      } else {
        throw new Error("Erreur lors de la suppression");
      }
    } catch (e) {
      setStatus({ type: "error", text: "Impossible de supprimer la ressource." });
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    setStatus(null);

    try {
      const uploadData = new FormData();
      uploadData.append("file", file);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: uploadData,
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Erreur lors de l'upload.");
      }

      setFormData((prev) => ({ ...prev, image: data.url }));
      setStatus({ type: "success", text: "Image téléversée et convertie en WebP avec succès !" });
    } catch (err: unknown) {
      const error = err as Error;
      setStatus({ type: "error", text: error.message });
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setStatus(null);

    try {
      const url = editingResource
        ? `/api/admin/resources/${editingResource.id}`
        : "/api/admin/resources";
      const method = editingResource ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Erreur de sauvegarde");
      }

      setStatus({
        type: "success",
        text: editingResource ? "Ressource mise à jour !" : "Nouvelle ressource créée !",
      });

      setIsModalOpen(false);
      fetchResources();
    } catch (err: unknown) {
      const error = err as Error;
      setStatus({ type: "error", text: error.message });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-8 max-w-6xl">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#562C2C]/10 pb-6">
        <div>
          <h1 className="text-3xl font-black text-[#562C2C]">Gestion des Ressources Gratuites</h1>
          <p className="text-sm text-slate-600">
            Ajoutez, modifiez ou supprimez les guides et fiches pratiques téléchargeables par vos prospects.
          </p>
        </div>

        <button
          onClick={handleOpenAddModal}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#F2542D] hover:bg-[#d8431f] text-white font-bold text-sm shadow-md transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Ajouter une ressource</span>
        </button>
      </div>

      {status && (
        <div
          className={`p-4 rounded-2xl flex items-center gap-3 text-sm font-medium ${
            status.type === "success"
              ? "bg-[#0E9594]/10 text-[#0E9594] border border-[#0E9594]/30"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {status.type === "success" ? <CheckCircle2 className="w-5 h-5 shrink-0" /> : <AlertCircle className="w-5 h-5 shrink-0" />}
          <span>{status.text}</span>
        </div>
      )}

      {/* Resource Cards Table / List */}
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-8 h-8 animate-spin text-[#F2542D]" />
        </div>
      ) : resources.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center space-y-4 border border-[#562C2C]/10">
          <Download className="w-12 h-12 text-slate-400 mx-auto" />
          <h3 className="text-lg font-bold text-[#562C2C]">Aucune ressource gratuite</h3>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            Cliquez sur le bouton ci-dessus pour ajouter votre premier guide PDF ou modèle téléchargeable.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((res) => (
            <div
              key={res.id}
              className="bg-white rounded-3xl p-6 border border-[#562C2C]/10 shadow-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {res.image ? (
                  <div className="relative w-full h-40 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                    {/* eslint-disable-next-next/no-img-element */}
                    <img src={res.image} alt={res.title} className="w-full h-full object-cover" />
                    {res.image.endsWith(".webp") && (
                      <span className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md backdrop-blur-xs">
                        WEBP
                      </span>
                    )}
                  </div>
                ) : (
                  <div className="w-full h-40 rounded-2xl bg-[#F5DFBB]/30 border border-dashed border-[#562C2C]/20 flex items-center justify-center text-slate-400">
                    <ImageIcon className="w-8 h-8 text-[#562C2C]/40" />
                  </div>
                )}

                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="bg-[#127475]/10 text-[#127475] px-2.5 py-1 rounded-full uppercase">
                    {res.category}
                  </span>
                  <span className="text-slate-400">Ordre: {res.sortOrder}</span>
                </div>

                <h3 className="text-lg font-bold text-[#562C2C] leading-snug">{res.title}</h3>
                <p className="text-xs text-slate-600 line-clamp-3">{res.description}</p>
              </div>

              <div className="pt-4 border-t border-[#562C2C]/10 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-mono truncate max-w-[120px]">
                  {res.mailchimpTag || "pas de tag"}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleOpenEditModal(res)}
                    className="p-2 rounded-xl bg-slate-100 hover:bg-[#F5DFBB] text-[#562C2C] transition-colors"
                    title="Modifier"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(res.id)}
                    className="p-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 transition-colors"
                    title="Supprimer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Edit / Add Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-black text-[#562C2C]">
              {editingResource ? "Modifier la ressource" : "Ajouter une ressource"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5 text-sm">
              <div>
                <label className="block text-xs font-bold text-[#562C2C] uppercase tracking-wider mb-1.5">
                  Titre de la ressource *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="ex: Guide Ultime de la Fiche Google My Business"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0E9594]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#562C2C] uppercase tracking-wider mb-1.5">
                    Catégorie
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0E9594]"
                  >
                    <option value="Guide PDF">Guide PDF</option>
                    <option value="Checklist">Checklist</option>
                    <option value="Modèle Prêt-à-l'emploi">Modèle Prêt-à-l&apos;emploi</option>
                    <option value="Tuto Vidéo">Tuto Vidéo</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#562C2C] uppercase tracking-wider mb-1.5">
                    Ordre d&apos;affichage
                  </label>
                  <input
                    type="number"
                    value={formData.sortOrder}
                    onChange={(e) => setFormData({ ...formData, sortOrder: parseInt(e.target.value) || 0 })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0E9594]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#562C2C] uppercase tracking-wider mb-1.5">
                  Description courte *
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Explication claire du contenu de la ressource..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0E9594]"
                />
              </div>

              {/* IMAGE UPLOADER & WEBP CONVERTER ZONE */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-[#562C2C] uppercase tracking-wider">
                  Image d&apos;illustration (Conversion WebP Automatique)
                </label>

                {formData.image && (
                  <div className="relative w-full h-36 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 mb-2 group">
                    {/* eslint-disable-next-next/no-img-element */}
                    <img src={formData.image} alt="Aperçu" className="w-full h-full object-cover" />
                    <div className="absolute top-2 left-2 bg-[#0E9594] text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1">
                      <FileCheck className="w-3 h-3" />
                      <span>Format WebP prêt</span>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-3">
                  <label className="flex-1 cursor-pointer flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 border-dashed border-[#562C2C]/30 hover:border-[#F2542D] bg-[#FAF4F2]/50 hover:bg-[#F5DFBB]/30 transition-all text-xs font-bold text-[#562C2C]">
                    {uploadingImage ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#F2542D]" />
                        <span>Conversion WebP en cours...</span>
                      </>
                    ) : (
                      <>
                        <Upload className="w-4 h-4 text-[#F2542D]" />
                        <span>Téléverser une nouvelle image (JPG, PNG, WebP)</span>
                      </>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      disabled={uploadingImage}
                      className="hidden"
                    />
                  </label>
                </div>

                <input
                  type="text"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="Ou saisissez une URL manuelle (/images/...)"
                  className="w-full px-4 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0E9594] text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#562C2C] uppercase tracking-wider mb-1.5">
                  Tag ou ID Mailchimp (optionnel)
                </label>
                <input
                  type="text"
                  value={formData.mailchimpTag}
                  onChange={(e) => setFormData({ ...formData, mailchimpTag: e.target.value })}
                  placeholder="ex: gmb-guide-2026"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0E9594]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#562C2C] uppercase tracking-wider mb-1.5">
                  Lien direct du fichier PDF / Document (optionnel)
                </label>
                <input
                  type="text"
                  value={formData.downloadUrl}
                  onChange={(e) => setFormData({ ...formData, downloadUrl: e.target.value })}
                  placeholder="https://www.stratec-digital.com/downloads/guide.pdf"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0E9594]"
                />
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl font-bold text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  disabled={saving || uploadingImage}
                  className="px-6 py-2.5 rounded-xl font-bold text-white bg-[#562C2C] hover:bg-[#F2542D] transition-colors disabled:opacity-50 flex items-center gap-2"
                >
                  {saving && <Loader2 className="w-4 h-4 animate-spin" />}
                  <span>{editingResource ? "Mettre à jour" : "Créer la ressource"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
