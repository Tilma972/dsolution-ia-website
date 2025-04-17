import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Comment fonctionne l'automatisation via WhatsApp ?",
    answer:
      "Notre solution utilise l'API officielle de WhatsApp Business pour connecter un assistant intelligent à votre numéro professionnel. Cet assistant répond aux messages de vos clients 24h/24, qualifie leurs demandes et vous transmet uniquement les informations pertinentes.",
    value: "item-1",
  },
  {
    question: "Ai-je besoin de compétences techniques pour l'utiliser ?",
    answer:
      "Absolument pas. Notre équipe configure tout pour vous, et l'utilisation se fait directement via l'application WhatsApp que vous connaissez déjà. Pas de nouveau logiciel à apprendre, pas de formation complexe.",
    value: "item-2",
  },
  {
    question: "Combien de temps pour mettre en place la solution ?",
    answer:
      "La mise en place prend entre 24h et 48h selon la complexité de votre activité. Nous configurons tous les scénarios de conversation adaptés à votre métier et personnalisons les réponses pour qu'elles correspondent parfaitement à votre identité.",
    value: "item-3",
  },
  {
    question: "Est-ce que mes clients sauront qu'ils parlent à un robot ?",
    answer: 
      "Nous sommes transparents avec vos clients. L'assistant se présente comme un assistant numérique, mais ses réponses sont si naturelles et pertinentes que l'expérience reste fluide. Pour les questions complexes, l'assistant sait quand vous transférer la conversation.",
    value: "item-4",
  },
  {
    question: "Puis-je personnaliser les réponses automatiques ?",
    answer:
      "Oui, toutes les réponses sont personnalisées selon votre activité, votre style de communication et vos besoins spécifiques. Vous pouvez demander des modifications à tout moment, et notre équipe les implémente sous 24h.",
    value: "item-5",
  },
  {
    question: "Comment mesurer le retour sur investissement ?",
    answer:
      "Vous recevez un tableau de bord mensuel qui montre le nombre de conversations gérées automatiquement, le temps gagné, le taux de conversion des demandes en clients, et d'autres métriques pertinentes pour votre activité.",
    value: "item-6",
  },
];

export function FAQSection() {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Questions{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          fréquentes
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-8">
        D'autres questions ?{" "}
        <a
          href="mailto:contact@dsolution-ia.fr"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contactez-nous directement
        </a>
      </h3>
    </section>
  );
}