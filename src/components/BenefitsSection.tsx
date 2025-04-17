import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AutomationIcon, TimeIcon, ClientsIcon, SimplicityIcon } from './BenefitIcons';
import { Badge } from "@/components/ui/badge";

// Interface pour nos bénéfices
interface BenefitProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

// Liste des bénéfices
const benefitsList: BenefitProps[] = [
  {
    icon: AutomationIcon,
    title: "Automatisation via WhatsApp",
    description: "Gérez tout depuis l'application que vous utilisez déjà."
  },
  {
    icon: TimeIcon,
    title: "Gain de Temps Garanti",
    description: "Réduisez les tâches répétitives et concentrez-vous sur votre cœur de métier."
  },
  {
    icon: ClientsIcon,
    title: "Plus de Clients, Moins d'Effort",
    description: "Ne manquez plus d'opportunités grâce à des réponses rapides et un suivi simplifié."
  },
  {
    icon: SimplicityIcon,
    title: "Simplicité Avant Tout",
    description: "Pas de logiciel compliqué à installer ou à apprendre."
  }
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Nos{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Avantages
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {["WhatsApp", "Gain de temps", "Simplicité", "IA", "Artisans", "TPE"].map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefitsList.map(({ icon: Icon, title, description }: BenefitProps) => (
          <Card 
            key={title}
            className="h-full card-hover-effect drop-shadow-md shadow-black/10 dark:shadow-white/10"
          >
            <CardHeader>
              <div className="bg-primary/10 p-4 w-fit rounded-2xl mb-3">
                <Icon className="h-7 w-7 text-primary" />
              </div>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>
              <CardDescription className="text-md font-medium">{description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-muted p-8 rounded-lg mt-12">
        <div className="md:text-center space-y-4">
          <h3 className="text-xl font-bold">Des solutions conçues pour vous</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            D-Solution IA transforme votre façon de travailler avec une approche simple mais puissante :
            une solution qui s'intègre à vos habitudes, un gain de temps mesurable dès la première semaine,
            et une mise en place rapide sans formation complexe.
          </p>
        </div>
      </div>
    </section>
  );
}
