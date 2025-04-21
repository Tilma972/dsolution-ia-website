import React from 'react';

export const FAQPageSchema = () => {
  // Questions FAQ alignées sur les préoccupations réelles des prospects
  const faqData = [
    {
      question: "Quelle est la différence entre D-Solution IA et un simple chatbot sur mon site web ?",
      answer: "La différence principale est le canal : WhatsApp est plus direct, mobile, avec des taux de réponse bien plus élevés. De plus, notre solution va au-delà d'un chatbot basique en utilisant l'IA pour comprendre les demandes et automatiser des processus métiers complets (qualification, devis, suivi) via l'API officielle WhatsApp Business."
    },
    {
      question: "Dois-je changer mon numéro de téléphone pour utiliser ce service ?",
      answer: "Oui, pour bénéficier de l'automatisation avancée via l'API WhatsApp Business officielle, un numéro de téléphone (fixe ou mobile) qui n'est pas déjà lié à un compte WhatsApp personnel ou Business App est nécessaire. Nous vous accompagnons entièrement pour choisir et configurer ce numéro lors du setup, c'est inclus dans nos frais de mise en place."
    },
    {
      question: "Suis-je obligé d'avoir un site web ?",
      answer: "Techniquement, non. Notre solution WhatsApp fonctionne indépendamment. Cependant, nous recommandons fortement d'avoir au moins une page web simple pour renforcer votre crédibilité et permettre à vos clients de trouver facilement comment démarrer une conversation WhatsApp avec vous (via QR code ou lien)."
    },
    {
      question: "Comment mes clients entrent-ils en contact avec mon assistant WhatsApp ?",
      answer: "C'est très simple ! Nous vous fournissons un QR Code unique et un lien direct `wa.me/...`. Vous pouvez les partager sur vos supports existants : site web, cartes de visite, flyers, email, réseaux sociaux, etc. Un scan ou un clic suffit pour démarrer la conversation."
    },
    {
      question: "Les tarifs incluent-ils les coûts des messages WhatsApp ?",
      answer: "Oui, nos plans Essentiel (500/mois) et Pro (1200/mois) incluent un volume défini de 'conversations' WhatsApp officielles (sessions de 24h). Cela couvre la majorité des besoins. Au-delà, un tarif transparent par conversation supplémentaire s'applique, conformément à la tarification de l'API WhatsApp Business."
    },
    {
      question: "Faut-il des compétences techniques pour utiliser D-Solution IA ?",
      answer: "Absolument aucune. Nous nous occupons de toute la configuration technique. Pour vous, tout se passe via l'application WhatsApp que vous utilisez déjà au quotidien. C'est conçu pour être simple et intuitif."
    },
     {
      question: "Combien de temps faut-il pour être opérationnel ?",
      answer: "La mise en place est rapide. Après notre session de configuration accompagnée (environ 1 heure, incluse dans le setup), votre solution d'automatisation est prête à fonctionner immédiatement."
    },
    {
      question: "À quoi servent les frais de setup de 599€ ?",
      answer: "Ces frais uniques couvrent l'audit initial de vos besoins, l'accompagnement complet pour obtenir et vérifier votre compte WhatsApp Business API officiel, la configuration personnalisée de vos scénarios d'automatisation et de l'IA dans nos systèmes, ainsi que votre formation initiale à l'utilisation."
    }
    // Tu peux ajouter 1 ou 2 autres questions si tu le juges pertinent, mais cette sélection couvre les points clés.
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer // Assure-toi que ce texte correspond bien à ce qui est affiché sur la page
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      key="faq-schema" // Ajout d'une clé pour éviter les avertissements React potentiels
    />
  );
};

// --- Les autres schémas (ServiceSchema, LocalBusinessSchema) ---
// Vérifie que les informations y sont correctes et à jour
// Spécifiquement pour LocalBusinessSchema :
// - Remplace "+33612345678" par le VRAI numéro de téléphone (celui de l'API si c'est le contact principal)
// - Assure-toi que l'email "contact@dsolution.com" est bien celui que tu utilises (Zoho)
// - Vérifie l'URL de l'image logo "https://dsolution-ia.com/logo.png" (assure-toi qu'elle existe à cet emplacement une fois déployée)
// - Vérifie que "https://dsolution-ia.com" est bien ton URL finale.

export const ServiceSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Automatisation WhatsApp Intelligente pour Artisans, TPE et Libéraux", // Nom un peu plus précis
    "description": "D-Solution IA propose des solutions d'automatisation via l'API WhatsApp Business, intégrant l'IA pour qualifier les demandes, générer des devis, prendre des RDV et faire gagner un temps précieux aux professionnels indépendants.", // Description affinée
    "provider": {
      "@type": "Organization",
      "name": "D-Solution IA",
      "url": "https://dsolution-ia.com", // Ajout de l'URL de l'organisation
      "logo": "https://dsolution-ia.com/logo.png" // Vérifier l'URL
    },
    "serviceType": "Business Process Automation", // Type de service plus spécifique
    "areaServed": { // Zone desservie
      "@type": "Country",
      "name": "France"
    },
    "offers": {
      "@type": "AggregateOffer",
      "highPrice": "199", // Prix du plan Pro (hors setup)
      "lowPrice": "119",  // Prix du plan Essentiel (hors setup)
      "priceCurrency": "EUR",
      "offerCount": "3" // Essentiel, Pro, Sur Mesure
    }
    // Potentiellement ajouter "availableChannel" pour indiquer WhatsApp ? À vérifier.
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      key="service-schema"
    />
  );
};

export const LocalBusinessSchema = () => {
  // ASSURE-TOI que toutes ces informations sont EXACTES et FINALES
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService", // Plus précis que LocalBusiness pour un consultant/service B2B
    "name": "D-Solution IA",
    "image": "https://dsolution-ia.com/logo.png", // Vérifier l'URL
    "telephone": "+33XXXXXXXXX", // METTRE LE VRAI NUMERO FINAL (API ou contact)
    "email": "contact@dsolution-ia.com", // METTRE LE VRAI EMAIL (celui de Zoho : contact@dsolution-ia.com ?)
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "154 Rue des Asphodèles", // VRAIE ADRESSE (SIRET)
      "addressLocality": "Montarnaud",
      "postalCode": "34570",
      "addressCountry": "FR"
    },
    "url": "https://dsolution-ia.com", // VRAIE URL FINALE
    "priceRange": "€€", // Indication générale du niveau de prix (optionnel mais peut aider)
    "areaServed": {
      "@type": "Country",
      "name": "France"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      key="localbusiness-schema"
    />
  );
};

// Optionnel : Export d'un composant global pour les inclure facilement dans le layout ou la page
export const AppSchemas = () => {
  return (
    <>
      <FAQPageSchema />
      <ServiceSchema />
      <LocalBusinessSchema />
    </>
  );
};