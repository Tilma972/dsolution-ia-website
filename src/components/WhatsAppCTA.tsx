import React from 'react';
import { Button, ButtonProps } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageSquare } from "lucide-react";

interface WhatsAppCTAProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  phoneNumber: string;                // Numéro WhatsApp sans le +, ex: 33612345678
  message?: string;                   // Message pré-rempli
  label?: string;                     // Texte du bouton
  variant?: ButtonProps["variant"];   // Variante du bouton de shadcn
  size?: ButtonProps["size"];         // Taille du bouton
  className?: string;                 // Classes additionnelles
  showBadge?: boolean;                // Afficher un badge "Réponse rapide"
  trackingId?: string;                // ID pour le tracking
  icon?: boolean;                     // Afficher l'icône WhatsApp
  fullWidth?: boolean;                // Prendre toute la largeur
  customIcon?: React.ReactNode;       // Icône personnalisée
}

export const WhatsAppCTA: React.FC<WhatsAppCTAProps> = ({
  phoneNumber,
  message = "Bonjour, je vous contacte depuis votre site web concernant vos services d'automatisation WhatsApp.",
  label = "Discuter sur WhatsApp",
  variant = "default",
  size = "default",
  className = "",
  showBadge = false,
  trackingId = "general",
  icon = true,
  fullWidth = false,
  customIcon,
  ...props
}) => {
  // Encoder le message pour l'URL
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  // Gérer le clic pour le tracking
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Analytique: tracking de conversion
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        'event_category': 'engagement',
        'event_label': trackingId,
        'value': 1
      });
    }
    
    // LocalStorage pour le tracking interne simple
    try {
      const storedData = localStorage.getItem('whatsapp_cta_clicks') || '{}';
      const clickData = JSON.parse(storedData);
      
      // Incrémenter le compteur pour cet ID spécifique
      clickData[trackingId] = (clickData[trackingId] || 0) + 1;
      
      // Sauvegarder les données mises à jour
      localStorage.setItem('whatsapp_cta_clicks', JSON.stringify(clickData));
    } catch (error) {
      console.error('Error tracking WhatsApp click:', error);
    }
  };

  // Classes pour le bouton
  const buttonClasses = `
    ${fullWidth ? 'w-full' : ''}
    ${className}
    ${showBadge ? 'mb-6' : ''}
    flex items-center justify-center gap-2
  `;

  // Icône WhatsApp personnalisée
  const WhatsAppIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 448 512" 
      className="h-5 w-5 fill-current"
    >
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.8 0-65.7-10.1-94.2-29.2l-6.7-4-69.8 18.3L72 359.2l-4.5-7c-18.9-29.7-29.9-65.4-29.9-102.1 0-108.5 88.2-196.6 196.6-196.6 53 0 102.8 20.8 138.9 57.2 36.2 36.2 57.2 86 57.2 138.9-.1 108.5-88.3 196.6-196.7 196.6zm101.7-164.7c-3.9-2-23.1-11.4-26.7-12.7-3.6-1.3-6.3-2-9 2-2.6 4-10.1 12.7-12.4 15.3-2.2 2.6-4.5 2.9-8.3 1s-16.4-6-31.2-19.2c-11.9-10.6-20.1-23.7-22.5-27.9s-.3-6.3 1.9-8.3c1.9-1.7 4.1-4.5 6.2-6.7 2-2.2 2.6-3.9 3.9-6.6 1.3-2.6 0-5-1-7s-9-21.6-12.3-29.5c-3.2-7.8-6.4-6.7-9-6.7-2.6 0-5.5-.3-8.3-.3s-6.3.9-9.7 4.4c-3.3 3.4-12.9 12.6-12.9 30.6 0 18 13.2 35.4 15 37.8 1.8 2.4 26.1 39.6 63.1 55.7 8.9 3.8 16.7 6 22.4 7.7 5.8 1.7 11.1 1.5 15.3 1 4.5-.5 14.1-5.8 16.1-11.4 2-5.6 2-10.4 1.4-11.4-.6-1-3.2-2-7.1-4z"/>
    </svg>
  );

  return (
    <div className="relative">
      {showBadge && (
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 white-space-nowrap">
          <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
            <div className="flex items-center">
              <span className="online-status-dot"></span>
              Réponse rapide garantie
            </div>
          </Badge>
        </div>
      )}

      <Button 
        variant={variant} 
        size={size}
        asChild
        className={`${buttonClasses} animate-gentle-bounce`}
        {...props}
      >
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={handleClick}
        >
          {icon && (customIcon || <WhatsAppIcon />)}
          {label}
        </a>
      </Button>
    </div>
  );
};

// Exporter aussi une version flottante (version améliorée de votre FloatingWhatsAppButton)
export const FloatingWhatsAppCTA: React.FC<WhatsAppCTAProps> = (props) => {
  return (
    <div className="fixed bottom-5 right-5 z-50 animate-slow-pulse-glow animate-gentle-bounce">
      <WhatsAppCTA 
        variant="outline"
        className="rounded-full h-14 w-14 bg-white dark:bg-gray-800 drop-shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 border border-green-500"
        icon={true}
        label=""
        customIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="h-7 w-7 fill-green-500"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.8 0-65.7-10.1-94.2-29.2l-6.7-4-69.8 18.3L72 359.2l-4.5-7c-18.9-29.7-29.9-65.4-29.9-102.1 0-108.5 88.2-196.6 196.6-196.6 53 0 102.8 20.8 138.9 57.2 36.2 36.2 57.2 86 57.2 138.9-.1 108.5-88.3 196.6-196.7 196.6zm101.7-164.7c-3.9-2-23.1-11.4-26.7-12.7-3.6-1.3-6.3-2-9 2-2.6 4-10.1 12.7-12.4 15.3-2.2 2.6-4.5 2.9-8.3 1s-16.4-6-31.2-19.2c-11.9-10.6-20.1-23.7-22.5-27.9s-.3-6.3 1.9-8.3c1.9-1.7 4.1-4.5 6.2-6.7 2-2.2 2.6-3.9 3.9-6.6 1.3-2.6 0-5-1-7s-9-21.6-12.3-29.5c-3.2-7.8-6.4-6.7-9-6.7-2.6 0-5.5-.3-8.3-.3s-6.3.9-9.7 4.4c-3.3 3.4-12.9 12.6-12.9 30.6 0 18 13.2 35.4 15 37.8 1.8 2.4 26.1 39.6 63.1 55.7 8.9 3.8 16.7 6 22.4 7.7 5.8 1.7 11.1 1.5 15.3 1 4.5-.5 14.1-5.8 16.1-11.4 2-5.6 2-10.4 1.4-11.4-.6-1-3.2-2-7.1-4z"/>
          </svg>
        }
        trackingId="floating_button"
        {...props}
      />
    </div>
  );
};

// Animation du pulse pour le FloatingWhatsAppCTA
export const whatsAppAnimationCSS = `
@keyframes slow-pulse-glow {
  0% {
    box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.4);
    transform: scale(1);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(74, 222, 128, 0);
    transform: scale(1.05);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(74, 222, 128, 0);
    transform: scale(1);
  }
}

.animate-slow-pulse-glow {
  animation: slow-pulse-glow 2s infinite;
}
`;
