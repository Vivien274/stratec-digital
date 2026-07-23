export const metadata = {
  title: "Mentions Légales • Stratec Digital",
};

export default function MentionsLegalesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 text-[#562C2C]">
      <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#562C2C]/10 shadow-sm space-y-6">
        <h1 className="text-3xl font-black text-[#562C2C] border-b border-[#562C2C]/10 pb-4">
          Mentions Légales
        </h1>

        <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#562C2C]">1. Éditeur du site</h2>
            <p>
              Le site <strong>Stratec-Digital</strong> est édité par Stéphanie ROCQ.<br />
              <strong>Siège social :</strong> 40 rue du Hoccart, 59560 Comines, France.<br />
              <strong>Téléphone :</strong> 07 82 40 40 62<br />
              <strong>Email :</strong> stephanie@stratecdigital.com<br />
              <strong>Directrice de la publication :</strong> Stéphanie ROCQ.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#562C2C]">2. Hébergement</h2>
            <p>
              Le site est hébergé par la société <strong>Vercel Inc.</strong><br />
              Adresse : 440 N Barranca Ave #4133 Covina, CA 91723, États-Unis.<br />
              Site web : <a href="https://vercel.com" target="_blank" rel="noreferrer" className="text-[#127475] font-bold underline">https://vercel.com</a>
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#562C2C]">3. Propriété Intellectuelle</h2>
            <p>
              L&apos;ensemble des éléments (textes, visuels, logos, graphismes) présents sur le site Stratec-Digital sont protégés par le droit d&apos;auteur. Toute reproduction ou réutilisation sans autorisation préalable écrite est strictement interdite.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#562C2C]">4. Protection des Données Personnelles &amp; RGPD</h2>
            <p>
              Les données récoltées via le formulaire de contact et les demandes de ressources gratuites sont utilisées exclusivement dans le cadre de la relation commerciale et de l&apos;envoi d&apos;informations utiles par Stratec Digital. Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données sur simple demande par email à <a href="mailto:stephanie@stratecdigital.com" className="text-[#127475] font-bold underline">stephanie@stratecdigital.com</a>.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#562C2C]">5. Contact</h2>
            <p>
              Pour toute question concernant le site, vous pouvez envoyer un courriel à <a href="mailto:stephanie@stratecdigital.com" className="text-[#127475] font-bold underline">stephanie@stratecdigital.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
