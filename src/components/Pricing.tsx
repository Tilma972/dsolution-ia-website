import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: string;
  setupFee?: string;
  description: string;
  buttonText: string;
  benefitList: string[];
  note?: string;
}

const pricingList: PricingProps[] = [
  {
    title: "Essentiel",
    popular: 0,
    price: "119€/mois",
    setupFee: "+ 599€ setup (Accompagnement API inclus)",
    description:
      "Idéal pour automatiser les tâches répétitives basiques et gagner du temps au quotidien.",
    buttonText: "Choisir Essentiel",
    benefitList: [
      "Automatisation WhatsApp (Réponses...)",
      "Accompagnement setup API",
      "500 conversations clients/mois incluses*",
      "Support email"
    ],
    note: "*Conversation supplémentaire : 0.06€"
  },
  {
    title: "Pro",
    popular: 1,
    price: "199€/mois",
    setupFee: "+ 599€ setup (Accompagnement API inclus)",
    description:
      "Solution complète pour les processus métier complexes avec qualification des demandes et suivi commercial.",
    buttonText: "Choisir Pro",
    benefitList: [
      "Toutes fonctionnalités Essentiel",
      "1200 conversations clients/mois incluses*",
      "Chatbot IA personnalisé...",
      "IA pour génération devis/factures",
      "Mini-CRM...",
      "Support prioritaire..."
    ],
    note: "*Conversation supplémentaire : 0.06€"
  },
  {
    title: "Sur Mesure",
    popular: 0,
    price: "Sur Devis",
    description:
      "Parfait pour les besoins spécifiques nécessitant des intégrations personnalisées et des volumes importants.",
    buttonText: "Demander un Devis",
    benefitList: [
      "Toutes les fonctionnalités Pro, PLUS :",
      "Intégrations spécifiques (CRM, ERP, etc.)",
      "Développement IA sur mesure",
      "Workflows d'automatisation complexes",
      "Gestion de volumes personnalisés",
      "Support dédié & SLA",
      "Accompagnement stratégique"
    ]
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Un investissement 
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}clair{" "}
        </span>
        pour une croissance visible
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Choisissez le plan adapté à vos ambitions ou contactez-nous pour une solution entièrement personnalisée.
        Nos tarifs incluent l'accès à la plateforme WhatsApp Business officielle et un volume de conversations.
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={`card-hover-effect ${
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-primary"
                : "drop-shadow-md shadow-black/10 dark:shadow-white/10"
            }`}
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge
                    variant="secondary"
                    className="text-sm text-primary"
                  >
                    Le plus populaire
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">{pricing.price}</span>
                {pricing.setupFee && (
                  <p className="text-sm text-muted-foreground mt-1">{pricing.setupFee}</p>
                )}
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full" asChild>
                <a href="https://dsolutionia.zohobookings.eu" target="_blank" rel="noopener noreferrer">
                  {pricing.buttonText}
                </a>
              </Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex flex-col items-start">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span
                    key={benefit}
                    className="flex"
                  >
                    <Check className="text-green-500 shrink-0 mr-2" />{" "}
                    <span>{benefit}</span>
                  </span>
                ))}
              </div>
              {pricing.note && (
                <p className="text-sm text-muted-foreground mt-6">{pricing.note}</p>
              )}
              
              <div className="w-full mt-6">
                <WhatsAppCTA 
                  phoneNumber="33612345678"
                  message={`Bonjour, je suis intéressé(e) par votre offre ${pricing.title} à ${pricing.price}. Pouvez-vous me donner plus d'informations ?`}
                  label="Discuter de cette offre"
                  variant="secondary"
                  fullWidth={true}
                  trackingId={`pricing_${pricing.title.toLowerCase().replace(/\s+/g, '_')}`}
                />
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      {/* Badge Offre de Lancement */}
      <div className="bg-muted mt-16 border border-primary/30 rounded-lg p-4 mb-6 max-w-2xl mx-auto">
        <p className="text-center font-semibold">
          <span className="text-primary">Offre de Lancement :</span> Tarifs garantis jusqu'au 30 juin 2025 !
        </p>
      </div>
            
      {/* Note sur les conversations */}
      <div className="text-muted-foreground text-center text-sm max-w-2xl mx-auto mt-4">
        <p>*Une 'conversation' (incluse dans Essentiel/Pro) correspond à une session d'échange de 24h initiée par le client ou l'entreprise via WhatsApp.</p>
      </div>
    </section>
  );
}
