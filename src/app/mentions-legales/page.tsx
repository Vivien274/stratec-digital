export const metadata = {
  title: "Mentions Légales • Stratec Digital",
};

export default function MentionsLegalesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
      <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
        <h1 className="text-3xl font-extrabold text-[#562C2C] border-b border-slate-200 pb-4">
          Mentions Légales
        </h1>

        <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#562C2C]">1. Éditeur du site</h2>
            <p>
              Le site <strong>Stratec-Digital</strong> est édité par Stéphanie ROCQ.<br />
              <strong>Siège social :</strong> 40 rue du Hoccart, 59560 Comines, France.<br />
              <strong>Téléphone :</strong> +33 6 35 25 91 13<br />
              <strong>Email :</strong> stephanie@stratec-digital.com<br />
              <strong>Directrice de la publication :</strong> Stéphanie ROCQ.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#562C2C]">2. Hébergement</h2>
            <p>
              Ce site est hébergé sur des serveurs sécurisés haute performance respectant les normes européennes de protection des données.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#562C2C]">3. Propriété Intellectuelle</h2>
            <p>
              L&apos;ensemble des éléments (textes, visuels, logos, graphismes) présents sur le site Stratec-Digital sont protégés par le droit d&apos;auteur. Toute reproduction ou réutilisation sans autorisation préalable est strictly interdite.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#562C2C]">4. Contact</h2>
            <p>
              Pour toute question concernant le site, vous pouvez envoyer un courriel à <a href="mailto:stephanie@stratec-digital.com" className="text-[#127475] font-bold underline">stephanie@stratec-digital.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
