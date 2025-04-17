/**
 * Utilitaires pour le funnel de conversion WhatsApp
 * Cette bibliothèque contient des fonctions pour le suivi des conversions,
 * la génération de messages contextuels, et la gestion d'UTM pour WhatsApp
 */

// Configuration globale pour WhatsApp
export const whatsappConfig = {
    // Numéro WhatsApp principal (sans le +)
    phoneNumber: "33612345678", // ⚠️ À MODIFIER avec votre numéro WhatsApp Business
  
    // Préfixes de messages selon les sections
    messagePrefixes: {
      default: "Bonjour, je vous contacte depuis votre site web concernant vos services d'automatisation WhatsApp. ",
      hero: "Bonjour, je découvre votre solution d'automatisation WhatsApp et j'aimerais en savoir plus. ",
      pricing: "Bonjour, je suis intéressé(e) par votre offre tarifaire et j'aimerais plus de détails. ",
      faq: "Bonjour, j'ai une question qui n'est pas dans votre FAQ : ",
      testimonials: "Bonjour, j'ai vu les témoignages sur votre site et je voudrais savoir si votre solution peut fonctionner pour mon activité de ",
      contact: "Bonjour, je souhaite être contacté(e) pour discuter de votre solution. ",
    },
  
    // Paramètres de tracking
    tracking: {
      // Activer/désactiver le tracking (localStorage)
      enabled: true,
      // Nom de la clé dans localStorage
      storageKey: "whatsapp_cta_clicks",
      // Envoyer les événements à Google Analytics
      sendToGA: true,
    },
  };
  
  /**
   * Enregistre un clic sur un bouton WhatsApp
   * @param trackingId Identifiant du point d'entrée
   */
  export const trackWhatsAppClick = (trackingId: string): void => {
    if (!whatsappConfig.tracking.enabled) return;
  
    try {
      // Tracking local (localStorage)
      const storedData = localStorage.getItem(whatsappConfig.tracking.storageKey) || '{}';
      const clickData = JSON.parse(storedData);
      
      // Incrémenter le compteur pour cet ID spécifique
      clickData[trackingId] = (clickData[trackingId] || 0) + 1;
      
      // Sauvegarder les données mises à jour
      localStorage.setItem(whatsappConfig.tracking.storageKey, JSON.stringify(clickData));
      
      // Tracking Google Analytics (si activé et disponible)
      if (whatsappConfig.tracking.sendToGA && typeof window.gtag === 'function') {
        window.gtag('event', 'whatsapp_click', {
          'event_category': 'engagement',
          'event_label': trackingId,
          'value': 1
        });
      }
    } catch (error) {
      console.error('Error tracking WhatsApp click:', error);
    }
  };
  
  /**
   * Génère une URL WhatsApp avec un message pré-rempli et UTM tracking
   * @param params Paramètres pour la génération de l'URL
   */
  export const generateWhatsAppUrl = ({
    phoneNumber = whatsappConfig.phoneNumber,
    message = "",
    prefix = "default",
    utm_source = "website",
    utm_medium = "whatsapp",
    utm_campaign = "conversion",
    utm_content = "",
    trackingId = ""
  }: {
    phoneNumber?: string;
    message?: string;
    prefix?: keyof typeof whatsappConfig.messagePrefixes;
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_content?: string;
    trackingId?: string;
  }): string => {
    // Construire le message complet avec préfixe
    const fullMessage = whatsappConfig.messagePrefixes[prefix] + message;
    
    // Encodage du message pour l'URL
    const encodedMessage = encodeURIComponent(fullMessage);
    
    // Construction de l'URL de base
    let whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Si un trackingId est fourni, l'ajouter comme utm_content
    if (trackingId && !utm_content) {
      utm_content = trackingId;
    }
    
    // Ajout des paramètres UTM (ils seront visibles dans les statistiques de WhatsApp Business)
    whatsappUrl += `&utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}`;
    
    if (utm_content) {
      whatsappUrl += `&utm_content=${utm_content}`;
    }
    
    return whatsappUrl;
  };
  
  /**
   * Construire un message contextuel pour l'activité de l'utilisateur
   * @param businessType Type d'activité
   * @param section Section du site
   */
  export const buildContextualMessage = (
    businessType: string = "",
    section: keyof typeof whatsappConfig.messagePrefixes = "default"
  ): string => {
    const prefix = whatsappConfig.messagePrefixes[section];
    
    // Si une activité est spécifiée, personnaliser davantage le message
    if (businessType) {
      switch (businessType.toLowerCase()) {
        case "artisan":
        case "artisanat":
          return `${prefix}Je suis artisan et je cherche à automatiser mes rendez-vous et devis. Pouvez-vous m'expliquer comment votre solution pourrait m'aider?`;
          
        case "restaurant":
        case "restauration":
          return `${prefix}Je gère un restaurant et je voudrais automatiser les réservations et commandes. Votre solution est-elle adaptée?`;
          
        case "commerce":
        case "boutique":
          return `${prefix}Je possède une boutique et je voudrais améliorer le service client. Comment votre solution peut-elle m'aider?`;
          
        case "professionnel":
        case "libéral":
          return `${prefix}Je suis professionnel libéral et je souhaite automatiser mes prises de rendez-vous. Pouvez-vous me présenter votre solution?`;
          
        default:
          return `${prefix}Mon activité est ${businessType} et je voudrais savoir comment votre solution pourrait m'aider.`;
      }
    }
    
    // Message par défaut
    return `${prefix}Je souhaiterais en savoir plus sur votre solution d'automatisation WhatsApp.`;
  };
  
  // Déclaration pour TypeScript - pour Google Analytics
  declare global {
    interface Window {
      gtag?: (...args: any[]) => void;
    }
  }