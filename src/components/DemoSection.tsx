import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Hammer, Utensils, Lightbulb, Scissors, Car, HandPlatter, CheckCircle } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { InteractiveChatDemo } from '@/components/InteractiveChatDemo'; // Nous conservons votre composant
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

// Interface pour les cas d'usage
interface UseCaseProps {
  id: string;
  icon: React.ElementType;
  title: string;
  painPoint: string;
  description: string;
  impactMetric: string;
}

// Données des cas d'usage
const useCaseList: UseCaseProps[] = [
  { 
    id: 'macon', 
    icon: Hammer, 
    title: "Maçon : Devis instantanés", 
    painPoint: "Devis chronophages et souvent non convertis", 
    description: "Génération de devis instantanés via WhatsApp pour répondre rapidement aux demandes.", 
    impactMetric: "Temps de réponse réduit de 95%, conversion +28%" 
  },
  { 
    id: 'boulangerie', 
    icon: Utensils, 
    title: "Boulangerie : Commandes automatisées", 
    painPoint: "Gestion des commandes et modifications de dernière minute", 
    description: "Commandes automatisées avec confirmation instantanée pour simplifier la gestion.", 
    impactMetric: "Erreurs de commande -70%, satisfaction client +35%" 
  },
  { 
    id: 'electricien', 
    icon: Lightbulb, 
    title: "Électricien : Qualification des urgences", 
    painPoint: "Qualification des demandes pendant les interventions", 
    description: "Qualification automatique des urgences et dispatching pour optimiser les interventions.", 
    impactMetric: "Taux de conversion +42% sur appels d'urgence" 
  },
  { 
    id: 'coiffeur', 
    icon: Scissors, 
    title: "Salon de coiffure : Gestion des rendez-vous", 
    painPoint: "No-show et créneaux non optimisés", 
    description: "Rappels intelligents et gestion des créneaux disponibles pour réduire les no-shows.", 
    impactMetric: "Temps d'inactivité réduit de 37%, no-show -43%" 
  },
  { 
    id: 'traiteur', 
    icon: HandPlatter, 
    title: "Traiteur : Devis événementiel automatisé", 
    painPoint: "Qualification chronophage des demandes événementielles", 
    description: "Client demande un buffet pour événement → qualification auto des besoins (type, allergies, quantités) → devis avec photos de réalisations similaires.", 
    impactMetric: "Temps de réponse -95%, conversion +40%" 
  },
  { 
    id: 'garage', 
    icon: Car, 
    title: "Garage Auto : Devis instantanés", 
    painPoint: "Interruptions fréquentes pour faire des devis qui cassent le rythme de travail", 
    description: "Client demande prix courroie distribution → système identifie le véhicule → devis précis généré en 2 minutes.", 
    impactMetric: "Temps de réponse -85%, productivité atelier +30%" 
  }
];

// Composant carte avec sélection - redesigné selon le style du template
const UseCaseCard = ({ 
  useCase, 
  isSelected, 
  onSelect 
}: { 
  useCase: UseCaseProps; 
  isSelected: boolean; 
  onSelect: () => void 
}) => {
  const { title, painPoint, description, impactMetric } = useCase;
  
  return (
    <Card 
      className={`overflow-hidden border hover:border-primary/40 card-hover-effect cursor-pointer ${
        isSelected 
          ? 'drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-primary' 
          : 'drop-shadow-md shadow-black/10 dark:shadow-white/10'
      }`}
      onClick={onSelect}
    >
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {title}
          {isSelected && (
            <Badge
              variant="secondary"
              className="text-sm text-primary"
            >
              Sélectionné
            </Badge>
          )}
        </CardTitle>
        <CardDescription className="text-destructive font-medium">
          Problème : {painPoint}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{description}</p>
        <div className="bg-green-600/10 dark:bg-green-400/10 border border-green-600/20 dark:border-green-400/20 rounded-md px-3 py-1.5 text-sm font-medium text-green-700 dark:text-green-300">
          Résultat : {impactMetric}
        </div>
      </CardContent>
    </Card>
  );
};

// Composant accordéon pour les cas d'usage sur mobile
const UseCaseAccordion = ({
  useCases,
  selectedSectorId,
  setSelectedSectorId
}: {
  useCases: UseCaseProps[];
  selectedSectorId: string;
  setSelectedSectorId: (id: string) => void;
}) => {
  return (
    <Accordion 
      type="single" 
      collapsible 
      className="w-full"
      value={selectedSectorId} // Synchroniser l'accordéon avec le secteur sélectionné
      onValueChange={(value) => {
        if (value) setSelectedSectorId(value);
      }}
    >
      {useCases.map((useCase) => (
        <AccordionItem key={useCase.id} value={useCase.id} className="border-b border-muted">
          <AccordionTrigger className="hover:no-underline">
            <div className="flex items-center gap-3 text-left">
              <div className={`p-2 rounded-md ${selectedSectorId === useCase.id ? 'bg-primary/10' : 'bg-muted'}`}>
                <useCase.icon className={`h-5 w-5 ${selectedSectorId === useCase.id ? 'text-primary' : 'text-muted-foreground'}`} />
              </div>
              <div>
                <span className="font-medium">{useCase.title}</span>
                {selectedSectorId === useCase.id && (
                  <Badge variant="secondary" className="ml-2 text-xs text-primary">
                    Sélectionné
                  </Badge>
                )}
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 px-1">
              <p className="text-destructive font-medium">
                Problème : {useCase.painPoint}
              </p>
              <p className="text-muted-foreground">
                {useCase.description}
              </p>
              <div className="bg-green-600/10 dark:bg-green-400/10 border border-green-600/20 dark:border-green-400/20 rounded-md px-3 py-1.5 text-sm font-medium text-green-700 dark:text-green-300">
                Résultat : {useCase.impactMetric}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

// Composant Section Principal
export function DemoSection() {
  // État pour suivre le secteur d'activité sélectionné
  const [selectedSectorId, setSelectedSectorId] = useState<string>('garage');
  
  return (
    <section id="demos" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Cas concrets
        </span>{" "}
        par métier
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Découvrez comment D-Solution IA s'adapte aux besoins spécifiques de votre profession.
        Sélectionnez votre secteur pour voir une démo personnalisée.
      </p>

      {/* Version accordéon pour mobile */}
      <div className="md:hidden">
        <UseCaseAccordion 
          useCases={useCaseList}
          selectedSectorId={selectedSectorId}
          setSelectedSectorId={setSelectedSectorId}
        />
      </div>

      {/* Version grille pour tablette et desktop */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {useCaseList.map((useCase) => (
          <UseCaseCard 
            key={useCase.id}
            useCase={useCase} 
            isSelected={selectedSectorId === useCase.id}
            onSelect={() => setSelectedSectorId(useCase.id)}
          />
        ))}
      </div>

      {/* Section Simulation WhatsApp - Responsive amélioré */}
      <div className="bg-muted/50 border rounded-lg py-8 sm:py-12 px-4 sm:px-6 mt-12 sm:mt-16">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 sm:mb-4">
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                WhatsApp
              </span>{" "}
              en action
            </h3>
            <p className="text-muted-foreground mb-4 sm:mb-8">
              Visualisez comment notre solution transforme concrètement les échanges avec vos clients, 
              sans aucune complexité technique pour vous.
            </p>
            
            <div className="space-y-4">
              {[
                "Réponses instantanées 24h/24, 7j/7",
                "Qualification des demandes automatisée",
                "Suivi client personnalisé sans effort"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-background rounded-lg border">
              <p className="text-sm flex items-center gap-2">
                <span className="text-primary">💡</span> 
                <span className="font-medium">Astuce :</span> {' '}
                <span className="md:hidden">Cliquez sur un secteur d'activité ci-dessus pour voir une démonstration adaptée à votre métier.</span>
                <span className="hidden md:inline">Cliquez sur une carte ci-dessus pour voir une démonstration adaptée à votre métier.</span>
              </p>
            </div>
          </div>
          
          {/* Composant de chat interactif avec hauteur responsive */}
          <div className="flex justify-center items-center">
            <InteractiveChatDemo sectorId={selectedSectorId} key={selectedSectorId} />
          </div>
        </div>
      </div>
    </section>
  );
}
