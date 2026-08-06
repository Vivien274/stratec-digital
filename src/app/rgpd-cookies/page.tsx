export const metadata = {
  title: "RGPD & Protection des Données • Stratec Digital",
};

export default function RgpdCookiesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
      <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
        <h1 className="text-3xl font-extrabold text-[#562C2C] border-b border-slate-200 pb-4">
          Politique de Confidentialité &amp; Cookies (RGPD)
        </h1>

        <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#562C2C]">1. Collecte des Données Personnelles</h2>
            <p>
              Les données personnelles collectées sur ce site (via le formulaire de contact) sont strictement destinées au traitement de vos demandes d&apos;information, de devis et d&apos;accompagnement par Stéphanie ROCQ.
            </p>
            <p>
              Aucune donnée n&apos;est vendue ni transmise à des tiers sous quelque forme que ce soit.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#562C2C]">2. Vos Droits (Accès, Rectification, Suppression)</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez à tout moment d&apos;un droit d&apos;accès, de rectification et de suppression de vos données personnelles.
            </p>
            <p>
              Pour exercer ce droit, adressez un message à : <a href="mailto:stephanie@stratec-digital.com" className="text-[#127475] font-bold underline">stephanie@stratec-digital.com</a>.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#562C2C]">3. Gestion des Cookies</h2>
            <p>
              Ce site utilise uniquement des cookies de mesure d&apos;audience anonymes (Google Analytics) dans le strict but d&apos;améliorer l&apos;expérience utilisateur. Vous pouvez à tout moment désactiver les cookies dans les options de votre navigateur.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
