import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function MentionsLegalesPage() {
  return (
    <>
      <Helmet>
        <title>Mentions Légales - D-Solution IA</title>
        <meta name="description" content="Mentions légales et informations juridiques de D-Solution IA" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="mb-6">
          <Button variant="outline" asChild>
            <Link to="/" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour à l'accueil
            </Link>
          </Button>
        </div>
        <div className="max-w-4xl mx-auto bg-card-bg p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-8 text-white">Mentions Légales</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Éditeur du site</h2>
            <p className="text-subtle-text mb-2">
              <strong className="text-white">D-Solution IA</strong><br />
              154 Rue des Asphodèles<br />
              34570 Montarnaud<br />
              France
            </p>
            <p className="text-subtle-text mb-2"><strong className="text-white">SIRET</strong> : 450 649 793</p>            
            <p className="text-subtle-text mb-2"><strong className="text-white">Forme juridique</strong> : EI</p>
            <p className="text-subtle-text mb-2"><strong className="text-white">Directeur de la publication</strong> : Stève DONIVAR</p>
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
              L'ensemble du contenu de ce site (textes, images, vidéos, graphismes, logo, icônes, etc.) est la propriété exclusive de D-Solution IA, 
              à l'exception des éléments provenant de partenaires ou de contenus sous licence.
            </p>
            <p className="text-subtle-text mb-2">
              Toute reproduction, représentation, modification, publication, adaptation ou exploitation, partielle ou intégrale des éléments du site 
              est strictement interdite sans l'autorisation écrite préalable de D-Solution IA.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Liens hypertextes</h2>
            <p className="text-subtle-text mb-2">
              Le site dsolution.com peut contenir des liens vers d'autres sites internet ou ressources disponibles sur Internet. 
              D-Solution IA ne dispose d'aucun moyen pour contrôler les sites en connexion avec son site internet et ne répond pas de la disponibilité 
              de tels sites et sources externes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Limitation de responsabilité</h2>
            <p className="text-subtle-text mb-2">
              D-Solution IA s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour des informations diffusées sur son site, 
              dont elle se réserve le droit de corriger le contenu à tout moment et sans préavis. Toutefois, D-Solution IA ne peut garantir l'exactitude, 
              la précision ou l'exhaustivité des informations mises à disposition sur son site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Loi applicable et juridiction</h2>
            <p className="text-subtle-text mb-2">
              Les présentes mentions légales sont régies par la loi française. En cas de différend et à défaut d'accord amiable, 
              le litige sera porté devant les tribunaux français compétents.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
