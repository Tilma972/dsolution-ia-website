import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Helmet>
        <title>Politique de Confidentialité - D-Solution IA</title>
        <meta name="description" content="Politique de confidentialité et informations sur la protection des données de D-Solution IA" />
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
          <h1 className="text-4xl font-bold mb-8 text-white">Politique de Confidentialité</h1>
          <p className="text-subtle-text mb-6">Date de dernière mise à jour : [01/04/2025] {/* Mettez la date réelle */}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Introduction</h2>
            <p className="text-subtle-text mb-4">
              D-Solution IA s'engage à protéger votre vie privée. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos données personnelles lorsque vous utilisez notre site web ou nos services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Données collectées</h2>
            <h3 className="text-xl font-semibold mb-3 text-white">Données que vous nous fournissez directement</h3>
            <p className="text-subtle-text mb-4">
              Lorsque vous utilisez notre site web ou nos services (notamment via le formulaire de contact ou la réservation de démo), nous pouvons collecter les types de données suivants :
            </p>
            <ul className="list-disc pl-6 mb-4 text-subtle-text space-y-1">
              <li>Informations de contact (nom, prénom, adresse e-mail, numéro de téléphone)</li>
              <li>Informations professionnelles (nom de l'entreprise, secteur d'activité, besoins exprimés)</li>
              <li>Messages et demandes que vous nous envoyez</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-white">Données collectées automatiquement</h3>
            <p className="text-subtle-text mb-4">
              Lorsque vous naviguez sur notre site web, nous collectons automatiquement certaines informations via des cookies ou technologies similaires :
            </p>
            <ul className="list-disc pl-6 mb-4 text-subtle-text space-y-1">
              <li>Informations techniques (adresse IP anonymisée, type de navigateur, appareil utilisé)</li>
              <li>Données de navigation (pages visitées, durée de la visite, source du trafic)</li>
              {/* Préciser si vous utilisez Google Analytics ou autre */}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Utilisation de vos données</h2>
            <p className="text-subtle-text mb-4">Nous utilisons vos données personnelles pour :</p>
            <ul className="list-disc pl-6 mb-4 text-subtle-text space-y-1">
              <li>Répondre à vos demandes de contact et de démonstration</li>
              <li>Vous fournir nos services d'automatisation</li>
              <li>Personnaliser notre offre selon vos besoins spécifiques</li>
              <li>Communiquer avec vous concernant nos services (suivi, informations)</li>
              <li>Améliorer notre site web et nos services (analyse de l'utilisation)</li>
              <li>Respecter nos obligations légales et réglementaires</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Base légale du traitement</h2>
            <p className="text-subtle-text mb-4">Nous traitons vos données personnelles sur les bases légales suivantes :</p>
            <ul className="list-disc pl-6 mb-4 text-subtle-text space-y-1">
              <li>L'exécution de mesures précontractuelles (lorsque vous demandez une démo) ou d'un contrat (lorsque vous devenez client)</li>
              <li>Votre consentement (par exemple, pour certains cookies non essentiels)</li>
              <li>Nos intérêts légitimes à développer notre activité, améliorer nos services et assurer la sécurité de notre site, tout en respectant vos droits</li>
              <li>Le respect de nos obligations légales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Conservation des données</h2>
            <p className="text-subtle-text mb-4">Nous conservons vos données personnelles uniquement pour la durée nécessaire aux finalités pour lesquelles elles ont été collectées :</p>
            <ul className="list-disc pl-6 mb-4 text-subtle-text space-y-1">
              <li>Données prospects (demande de démo non aboutie) : [Durée, ex: 3 ans] après le dernier contact.</li>
              <li>Données clients : Pendant toute la durée de la relation contractuelle, puis archivées pour la durée légale de prescription.</li>
              <li>Données de navigation : [Durée, ex: 13 mois] maximum.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Partage de vos données</h2>
            <p className="text-subtle-text mb-4">Nous pouvons partager vos données personnelles avec :</p>
            <ul className="list-disc pl-6 mb-4 text-subtle-text space-y-1">
              <li>Nos sous-traitants techniques (hébergeur Netlify, outil de réservation type Calendly si utilisé, fournisseur API WhatsApp Business si pertinent, outil CRM éventuel) qui traitent les données pour notre compte et selon nos instructions.</li>
              <li>Des autorités légales si la loi nous y oblige.</li>
            </ul>
            <p className="text-subtle-text mb-2">Nous ne vendons jamais vos données personnelles à des tiers.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Protection de vos données</h2>
            <p className="text-subtle-text mb-2">
              Nous mettons en œuvre des mesures de sécurité techniques (HTTPS, etc.) et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, perte, altération ou destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Transferts internationaux de données</h2>
            <p className="text-subtle-text mb-2">
              Certains de nos sous-traitants (ex: Netlify, Google Analytics si utilisé) peuvent être situés aux États-Unis. Nous nous assurons que ces transferts sont encadrés par des garanties appropriées (ex: Clauses Contractuelles Types de la Commission Européenne).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Cookies</h2>
            <p className="text-subtle-text mb-2">
              Notre site utilise des cookies essentiels au fonctionnement et potentiellement des cookies d'analyse (ex: Google Analytics) pour comprendre comment notre site est utilisé. Vous pouvez gérer vos préférences concernant les cookies non essentiels via un bandeau cookies (si mis en place) ou les paramètres de votre navigateur.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Vos droits</h2>
            <p className="text-subtle-text mb-4">
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants sur vos données personnelles :
            </p>
            <ul className="list-disc pl-6 mb-4 text-subtle-text space-y-1">
              <li>Droit d'accès</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement (« droit à l'oubli »)</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité</li>
              <li>Droit d'opposition (notamment au traitement à des fins de prospection)</li>
              <li>Droit de retirer votre consentement à tout moment (sans affecter la licéité du traitement basé sur le consentement avant ce retrait)</li>
              <li>Droit de définir des directives relatives au sort de vos données après votre décès</li>
            </ul>
            <p className="text-subtle-text mb-2">
              Pour exercer ces droits, veuillez nous contacter à l'adresse : 
              <a href="mailto:rgpd@dsolution.com" className="text-primary hover:text-secondary transition-colors ml-1">
                rgpd@dsolution.com
              </a> ou par courrier postal à l'adresse indiquée dans les mentions légales.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Modifications de notre politique</h2>
            <p className="text-subtle-text mb-2">
              Nous pouvons modifier cette politique de confidentialité de temps à autre. Toute modification sera publiée sur cette page avec une date de mise à jour révisée. Nous vous encourageons à consulter régulièrement cette page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Contact</h2>
            <p className="text-subtle-text mb-4">
              Pour toute question concernant notre politique de confidentialité ou nos pratiques en matière de protection des données, veuillez nous contacter :
            </p>
            <p className="text-subtle-text mb-2">
              <strong className="text-white">D-Solution IA</strong><br />
              Email : <a href="mailto:rgpd@dsolution.com" className="text-primary hover:text-secondary transition-colors ml-1">rgpd@dsolution.com</a><br />
              Adresse : [Votre adresse complète]
            </p>
            <p className="text-subtle-text mb-2">
              Vous avez également le droit d'introduire une réclamation auprès de l'autorité de contrôle compétente, la Commission Nationale de l'Informatique et des Libertés (CNIL) en France.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
