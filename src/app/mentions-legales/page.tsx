import { Helmet } from 'react-helmet';

export default function MentionsLegalesPage() {
  return (
    <>
      <Helmet>
        <title>Mentions Légales - D-Solution IA</title>
        <meta name="description" content="Mentions légales et informations juridiques de D-Solution IA" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-card-bg p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-8 text-white">Mentions Légales</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Éditeur du site</h2>
            <p className="text-subtle-text mb-2">
              <strong className="text-white">D-Solution IA</strong><br />
              [Adresse de votre entreprise]<br />
              [Code postal] [Ville]<br />
              France
            </p>
            <p className="text-subtle-text mb-2"><strong className="text-white">SIRET</strong> : [Votre numéro SIRET]</p>
            <p className="text-subtle-text mb-2"><strong className="text-white">Numéro de TVA intracommunautaire</strong> : [Votre numéro de TVA ou &quot;Non applicable&quot;]</p>
            <p className="text-subtle-text mb-2"><strong className="text-white">Capital social</strong> : [Montant du capital social ou &quot;Non applicable&quot;] €</p>
            <p className="text-subtle-text mb-2"><strong className="text-white">Forme juridique</strong> : [Votre forme juridique - ex: SASU, EI, etc.]</p>
            <p className="text-subtle-text mb-2"><strong className="text-white">Directeur de la publication</strong> : [Prénom et Nom du directeur de publication]</p>
            <p className="text-subtle-text mb-2">
              <strong className="text-white">Contact</strong> : 
              <a href="mailto:contact@dsolution.com" className="text-primary hover:text-secondary transition-colors ml-1">
                contact@dsolution.com
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Hébergement</h2>
            <p className="text-subtle-text mb-2">Le site dsolution.com est hébergé par :</p>
            <p className="text-subtle-text mb-2">
              <strong className="text-white">Netlify, Inc.</strong><br />
              2325 3rd Street, Suite 215<br />
              San Francisco, California 94107<br />
              États-Unis
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Propriété intellectuelle</h2>
            <p className="text-subtle-text mb-4">
              L&apos;ensemble du contenu de ce site (textes, images, vidéos, graphismes, logo, icônes, etc.) est la propriété exclusive de D-Solution IA, 
              à l&apos;exception des éléments provenant de partenaires ou de contenus sous licence.
            </p>
            <p className="text-subtle-text mb-2">
              Toute reproduction, représentation, modification, publication, adaptation ou exploitation, partielle ou intégrale des éléments du site 
              est strictement interdite sans l&apos;autorisation écrite préalable de D-Solution IA.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Liens hypertextes</h2>
            <p className="text-subtle-text mb-2">
              Le site dsolution.com peut contenir des liens vers d&apos;autres sites internet ou ressources disponibles sur Internet. 
              D-Solution IA ne dispose d&apos;aucun moyen pour contrôler les sites en connexion avec son site internet et ne répond pas de la disponibilité 
              de tels sites et sources externes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Limitation de responsabilité</h2>
            <p className="text-subtle-text mb-2">
              D-Solution IA s&apos;efforce d&apos;assurer au mieux de ses possibilités l&apos;exactitude et la mise à jour des informations diffusées sur son site, 
              dont elle se réserve le droit de corriger le contenu à tout moment et sans préavis. Toutefois, D-Solution IA ne peut garantir l&apos;exactitude, 
              la précision ou l&apos;exhaustivité des informations mises à disposition sur son site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Loi applicable et juridiction</h2>
            <p className="text-subtle-text mb-2">
              Les présentes mentions légales sont régies par la loi française. En cas de différend et à défaut d&apos;accord amiable, 
              le litige sera porté devant les tribunaux français compétents.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
