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
    question: "Quelle est la différence entre D-Solution IA et un simple chatbot sur mon site web ?",
    answer: "La différence principale est le canal : WhatsApp est plus direct, mobile, avec des taux de réponse bien plus élevés. De plus, notre solution va au-delà d'un chatbot basique en utilisant l'IA pour comprendre les demandes et automatiser des processus métiers complets (qualification, devis, suivi) via l'API officielle WhatsApp Business.",
    value: "item-1",
  },
  {
    question: "Dois-je changer mon numéro de téléphone pour utiliser ce service ?",
    answer: "Oui, pour bénéficier de l'automatisation avancée via l'API WhatsApp Business officielle, un numéro de téléphone (fixe ou mobile) qui n'est pas déjà lié à un compte WhatsApp personnel ou Business App est nécessaire. Nous vous accompagnons entièrement pour choisir et configurer ce numéro lors du setup, c'est inclus dans nos frais de mise en place.",
    value: "item-2",
  },
  {
    question: "Suis-je obligé d'avoir un site web ?",
    answer: "Techniquement, non. Notre solution WhatsApp fonctionne indépendamment. Cependant, nous recommandons fortement d'avoir au moins une page web simple pour renforcer votre crédibilité et permettre à vos clients de trouver facilement comment démarrer une conversation WhatsApp avec vous (via QR code ou lien).",
    value: "item-3",
  },
  {
    question: "Comment mes clients entrent-ils en contact avec mon assistant WhatsApp ?",
    answer: "C'est très simple ! Nous vous fournissons un QR Code unique et un lien direct `wa.me/...`. Vous pouvez les partager sur vos supports existants : site web, cartes de visite, flyers, email, réseaux sociaux, etc. Un scan ou un clic suffit pour démarrer la conversation.",
    value: "item-4",
  },
  {
    question: "Les tarifs incluent-ils les coûts des messages WhatsApp ?",
    answer: "Oui, nos plans Essentiel (500/mois) et Pro (1200/mois) incluent un volume défini de 'conversations' WhatsApp officielles (sessions de 24h). Cela couvre la majorité des besoins. Au-delà, un tarif transparent par conversation supplémentaire s'applique, conformément à la tarification de l'API WhatsApp Business.",
    value: "item-5",
  },
  {
    question: "Faut-il des compétences techniques pour utiliser D-Solution IA ?",
    answer: "Absolument aucune. Nous nous occupons de toute la configuration technique. Pour vous, tout se passe via l'application WhatsApp que vous utilisez déjà au quotidien. C'est conçu pour être simple et intuitif.",
    value: "item-6",
  },
  {
    question: "Combien de temps faut-il pour être opérationnel ?",
    answer: "La mise en place est rapide. Après notre session de configuration accompagnée (environ 1 heure, incluse dans le setup), votre solution d'automatisation est prête à fonctionner immédiatement.",
    value: "item-7",
  },
  {
    question: "À quoi servent les frais de setup de 599€ ?",
    answer: "Ces frais uniques couvrent l'audit initial de vos besoins, l'accompagnement complet pour obtenir et vérifier votre compte WhatsApp Business API officiel, la configuration personnalisée de vos scénarios d'automatisation et de l'IA dans nos systèmes, ainsi que votre formation initiale à l'utilisation.",
    value: "item-8",
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
