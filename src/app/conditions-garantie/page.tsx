import { Helmet } from 'react-helmet';

export default function ConditionsGarantiePage() {
  return (
    <>
      <Helmet>
        <title>Conditions de Garantie - D-Solution IA</title>
        <meta name="description" content="Conditions de garantie et informations sur notre engagement de satisfaction client chez D-Solution IA." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-card-bg p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-8 text-white">Conditions de Garantie</h1>
          <p className="text-subtle-text mb-6">Date de dernière mise à jour : 07 Avril 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">1. Notre Engagement Qualité</h2>
            <p className="text-subtle-text mb-4">
              Chez D-Solution IA, la satisfaction de nos clients est notre priorité absolue. Nous sommes convaincus de la valeur et de l&apos;efficacité de nos solutions d&apos;automatisation via WhatsApp. C&apos;est pourquoi nous proposons une garantie &quot;Satisfait ou Remboursé&quot; sur le premier mois d&apos;abonnement pour vous permettre de tester nos services en toute sérénité.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">2. Étendue de la Garantie</h2>
            <p className="text-subtle-text mb-4">
              La garantie &quot;Satisfait ou Remboursé&quot; s&apos;applique au premier mois d&apos;abonnement payant pour tous nos plans : Essentiel, Pro et Sur Mesure (pour la partie abonnement mensuel du plan Sur Mesure, hors frais de développement spécifiques éventuels convenus séparément).
            </p>
            <p className="text-subtle-text mb-2">
              Cette garantie couvre votre satisfaction concernant les fonctionnalités et la performance des services d&apos;automatisation fournis par D-Solution IA pendant cette période initiale.
            </p>
            <p className="text-subtle-text mb-2">
              Les frais uniques de setup (mise en place initiale, configuration, accompagnement API) ne sont pas couverts par cette garantie &quot;Satisfait ou Remboursé&quot; du premier mois d&apos;abonnement, car ils correspondent à un travail initial de configuration et d&apos;accompagnement personnalisé.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">3. Conditions d&apos;Application</h2>
            <p className="text-subtle-text mb-4">Pour bénéficier de la garantie &quot;Satisfait ou Remboursé&quot;, les conditions suivantes doivent être remplies :</p>
            <ul className="list-disc pl-6 mb-4 text-subtle-text space-y-1">
              <li>Être un nouveau client D-Solution IA souscrivant à un abonnement payant pour la première fois.</li>
              <li>Avoir réglé intégralement la première facture correspondant au premier mois d&apos;abonnement et aux éventuels frais de setup.</li>
              <li>Avoir utilisé activement les services pendant le premier mois.</li>
              <li>Formuler une demande de remboursement motivée par email à <a href="mailto:contact@dsolution.com" className="text-primary hover:text-secondary transition-colors">contact@dsolution.com</a> avant la fin du premier mois calendaire suivant la date de début de l&apos;abonnement.</li>
              <li>La demande doit clairement indiquer les raisons de l&apos;insatisfaction.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">4. Exclusions et Limitations</h2>
            <p className="text-subtle-text mb-4">La garantie &quot;Satisfait ou Remboursé&quot; ne s&apos;applique pas dans les cas suivants :</p>
            <ul className="list-disc pl-6 mb-4 text-subtle-text space-y-1">
              <li>Non-respect des conditions d&apos;application mentionnées à l&apos;article 3.</li>
              <li>Demande formulée après la fin du premier mois d&apos;abonnement.</li>
              <li>Insatisfaction liée à des éléments extérieurs aux services fournis par D-Solution IA (ex: problème de connexion internet du client, mauvaise utilisation de WhatsApp, etc.).</li>
              <li>Frais de setup initiaux.</li>
              <li>Coûts liés aux conversations WhatsApp supplémentaires au-delà du volume inclus dans le plan choisi.</li>
              <li>Services ou développements spécifiques réalisés dans le cadre d&apos;un plan &quot;Sur Mesure&quot; et facturés séparément de l&apos;abonnement mensuel.</li>
            </ul>
            <p className="text-subtle-text mb-2">
              D-Solution IA se réserve le droit d&apos;analyser la demande et les motifs d&apos;insatisfaction avant de valider le remboursement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">5. Procédure de Remboursement</h2>
            <p className="text-subtle-text mb-4">
              Si votre demande de remboursement est acceptée conformément aux présentes conditions, D-Solution IA procédera au remboursement du montant correspondant au premier mois d&apos;abonnement (hors frais de setup et frais de conversations supplémentaires) dans un délai de 30 jours ouvrés suivant la validation de votre demande.
            </p>
            <p className="text-subtle-text mb-2">
              Le remboursement sera effectué par le même moyen de paiement que celui utilisé pour le paiement initial, sauf accord différent entre les parties. La résiliation de l&apos;abonnement prendra effet immédiatement après la validation de la demande de remboursement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">6. Dispositions Légales</h2>
            <p className="text-subtle-text mb-4">
              Les présentes Conditions de Garantie sont régies par le droit français. Tout litige relatif à leur interprétation ou exécution relèvera de la compétence exclusive des tribunaux français compétents.
            </p>
            <p className="text-subtle-text mb-2">
              Pour toute question relative à ces conditions, veuillez nous contacter à <a href="mailto:contact@dsolution.com" className="text-primary hover:text-secondary transition-colors">contact@dsolution.com</a>.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
