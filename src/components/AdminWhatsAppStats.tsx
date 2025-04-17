import React from 'react';
import { WhatsAppAnalytics, WhatsAppClickTable } from './WhatsAppAnalytics';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface WhatsAppStatsProps {
  whatsappNumber: string;
  // Vous pouvez ajouter d'autres propriétés si nécessaire
}

export const AdminWhatsAppStats: React.FC<WhatsAppStatsProps> = ({ 
  whatsappNumber = "33612345678" // Remplacez par votre numéro WhatsApp
}) => {
  return (
    <div className="container py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">
        Statistiques du Funnel WhatsApp
      </h1>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Numéro WhatsApp actif</CardTitle>
            <CardDescription>Numéro utilisé pour les points de contact</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <div className="online-status-dot mr-2"></div>
              <span className="text-xl font-medium">+{whatsappNumber}</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Ce numéro est utilisé dans tous les points de contact WhatsApp sur votre site.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Conseils d'optimisation</CardTitle>
            <CardDescription>Améliorez votre taux de conversion</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Vérifiez quels points d'entrée génèrent le plus de clics et renforcez-les</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Personnalisez vos messages pré-remplis selon le contexte pour augmenter l'engagement</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Testez différentes variantes de boutons (couleurs, textes) et suivez les résultats</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <WhatsAppAnalytics />
      <WhatsAppClickTable />
      
      <div className="mt-8 bg-muted p-4 rounded-lg border">
        <h3 className="font-medium mb-2">Comment améliorer votre funnel de conversion WhatsApp</h3>
        <p className="text-muted-foreground mb-4">
          Utilisez ces statistiques pour identifier les points forts et les opportunités d'amélioration de votre funnel.
        </p>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-primary mr-2">1.</span>
            <span>
              <strong>Analysez les points d'entrée populaires</strong> - Concentrez-vous sur l'optimisation des sections qui génèrent le plus de contacts.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">2.</span>
            <span>
              <strong>Personnalisez vos messages</strong> - Adaptez les messages pré-remplis pour qu'ils soient spécifiques au contexte.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">3.</span>
            <span>
              <strong>A/B Testing</strong> - Testez différentes formulations, couleurs et positions de vos CTA WhatsApp.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">4.</span>
            <span>
              <strong>Synchronisez avec votre outil CRM</strong> - Suivez le parcours complet de vos prospects depuis le clic initial.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
