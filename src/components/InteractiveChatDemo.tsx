import React, { useState, useEffect, useRef, useCallback } from 'react';
import { CheckCheck, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface Message {
  sender: 'client' | 'bot';
  text: React.ReactNode;
  timestamp: string;
  delay: number;
}

// Script de conversation pour chaque secteur
const chatScripts: Record<string, Message[]> = {
  // Garage Automobile
  garage: [
    { sender: 'client', text: "Bonjour, devis courroie distrib pour Citroën C4 1.6 HDi 2018 svp ?", timestamp: "19:32", delay: 1000 },
    { sender: 'bot', text: <>Bonsoir ! Bien sûr. Pour un devis précis pour votre C4 HDi 2018, pouvez-vous me donner votre immatriculation (AA-123-BB) ? Merci ! <span role="img" aria-label="moon">🌙</span></>, timestamp: "19:32", delay: 1500 },
    { sender: 'client', text: "AA-123-BB", timestamp: "19:33", delay: 2500 },
    { sender: 'bot', text: <>Parfait, véhicule identifié (C4 1.6 HDi 120ch). Calcul du devis en cours... <span role="img" aria-label="timer">⏱️</span></>, timestamp: "19:33", delay: 1500 },
    { sender: 'bot', text: <>✅ <strong>Devis Remplacement Courroie Distribution :</strong><br/>- Kit Pièces : 149€<br/>- Main d'œuvre : 210€<br/>- <strong>TOTAL : 359€ TTC</strong><br/><i>(Pompe à eau vérifiée)</i></>, timestamp: "19:33", delay: 3500 },
    { sender: 'bot', text: "Prochaines disponibilités : Mercredi matin ou Vendredi après-midi. Souhaitez-vous réserver un créneau ou recevoir le devis par email ?", timestamp: "19:33", delay: 1500 },
    { sender: 'client', text: "Vendredi aprem svp. Et oui pour l'email : client@email.com", timestamp: "19:34", delay: 3000 },
    { sender: 'bot', text: <>👍 C'est noté ! <strong>RDV confirmé pour Vendredi à 14h00</strong>. Le devis est envoyé à client@email.com. Vous recevrez un rappel la veille. Merci et bonne soirée !</>, timestamp: "19:34", delay: 2000 },
  ],
  
  // Maçon
  macon: [
    { sender: 'client', text: "Bonjour, je voudrais un devis pour un mur de clôture d'environ 15m. C'est possible ?", timestamp: "14:15", delay: 1000 },
    { sender: 'bot', text: <>Bonjour ! Bien sûr, je peux vous aider avec ce devis. Pourriez-vous me préciser la hauteur souhaitée pour ce mur de clôture ? <span role="img" aria-label="brick">🧱</span></>, timestamp: "14:15", delay: 1500 },
    { sender: 'client', text: "Je pensais à environ 1m80 de hauteur", timestamp: "14:17", delay: 2500 },
    { sender: 'bot', text: <>Merci pour cette précision. Souhaitez-vous un mur en parpaings enduit, en briques ou un autre matériau ? <span role="img" aria-label="thinking">🤔</span></>, timestamp: "14:17", delay: 1800 },
    { sender: 'client', text: "Parpaings enduit ce serait parfait", timestamp: "14:18", delay: 2000 },
    { sender: 'bot', text: <>D'accord, je prépare votre estimation pour un mur en parpaings enduit de 15m x 1m80... <span role="img" aria-label="calculations">🧮</span></>, timestamp: "14:18", delay: 2000 },
    { sender: 'bot', text: <>✅ <strong>Devis Mur de Clôture (parpaings enduits) :</strong><br/>- Matériaux : 1350€<br/>- Main d'œuvre : 2250€<br/>- <strong>TOTAL : 3600€ TTC</strong><br/><i>(Fondations incluses)</i></>, timestamp: "14:20", delay: 3500 },
    { sender: 'bot', text: "Ce devis est valable 1 mois. Souhaitez-vous que je vous envoie ce devis détaillé par email ou préférez-vous une visite sur site pour affiner l'estimation ?", timestamp: "14:20", delay: 1800 },
    { sender: 'client', text: "Une visite serait mieux, je suis disponible jeudi ou vendredi", timestamp: "14:21", delay: 2500 },
    { sender: 'bot', text: <>👍 Parfait ! <strong>Je vous propose un RDV jeudi à 14h30</strong>. Pourriez-vous me confirmer votre adresse ? Je vous demanderai une pièce d'identité et un document justificatif pour certifier être le propriétaire du terrain.</>, timestamp: "14:22", delay: 2000 },
  ],
  
  // Boulangerie
  boulangerie: [
    { sender: 'client', text: "Bonjour, est-ce que je peux commander 3 baguettes tradition et 2 pains au chocolat pour demain ?", timestamp: "18:47", delay: 1000 },
    { sender: 'bot', text: <>Bonsoir ! Bien sûr, je note votre commande : 3 baguettes tradition et 2 pains au chocolat. Pour quelle heure souhaitez-vous les récupérer demain ? <span role="img" aria-label="bread">🥖</span></>, timestamp: "18:47", delay: 1500 },
    { sender: 'client', text: "Vers 10h ce serait possible ?", timestamp: "18:48", delay: 2000 },
    { sender: 'bot', text: <>Parfait ! Votre commande sera prête pour 10h. Souhaitez-vous ajouter autre chose ? <span role="img" aria-label="croissant">🥐</span></>, timestamp: "18:48", delay: 1800 },
    { sender: 'client', text: "J'hésitais pour une tarte... Qu'est-ce que vous avez demain ?", timestamp: "18:49", delay: 2500 },
    { sender: 'bot', text: <>Demain, nous proposons :<br/>- Tarte aux pommes<br/>- Tarte aux fraises<br/>- Tarte citron meringuée<br/>Les tartes sont disponibles en format 4 personnes (13€) ou 6 personnes (18€).</>, timestamp: "18:50", delay: 2500 },
    { sender: 'client', text: "Super ! Ajoutez une tarte aux fraises format 4 personnes", timestamp: "18:51", delay: 2200 },
    { sender: 'bot', text: <>✅ <strong>Commande confirmée pour demain 10h :</strong><br/>- 3 baguettes tradition (3,90€)<br/>- 2 pains au chocolat (2,40€)<br/>- 1 tarte aux fraises 4p (13€)<br/>- <strong>TOTAL : 19,30€</strong></>, timestamp: "18:51", delay: 2500 },
    { sender: 'bot', text: <>Votre commande est enregistrée sous le nom "Client WhatsApp". Vous pouvez la modifier jusqu'à 19h aujourd'hui. <span role="img" aria-label="check">✅</span></>, timestamp: "18:51", delay: 1500 },
    { sender: 'client', text: "Parfait merci beaucoup !", timestamp: "18:52", delay: 1500 },
    { sender: 'bot', text: <>Avec plaisir ! À demain 10h pour votre commande. Bonne soirée ! <span role="img" aria-label="wave">👋</span></>, timestamp: "18:52", delay: 1800 },
  ],
  
  // Électricien
  electricien: [
    { sender: 'client', text: "Bonjour, j'ai un problème urgent : mon four a fait sauter le disjoncteur et maintenant plus rien ne fonctionne dans la cuisine", timestamp: "08:23", delay: 1000 },
    { sender: 'bot', text: <>Bonjour ! Je comprends l'urgence. Pour mieux évaluer la situation, pourriez-vous vérifier si seul le disjoncteur de la cuisine a sauté, ou si c'est le disjoncteur principal ? <span role="img" aria-label="electricity">⚡</span></>, timestamp: "08:24", delay: 1800 },
    { sender: 'client', text: "C'est juste celui de la cuisine je crois, les autres pièces ont de l'électricité", timestamp: "08:25", delay: 2200 },
    { sender: 'bot', text: <>D'accord. Avez-vous essayé de remettre le disjoncteur de la cuisine ? Si oui, que s'est-il passé ? <span role="img" aria-label="thinking">🤔</span></>, timestamp: "08:25", delay: 1500 },
    { sender: 'client', text: "Oui j'ai essayé mais il saute à nouveau dès que je le remonte", timestamp: "08:26", delay: 2500 },
    { sender: 'bot', text: <>C'est probablement un court-circuit. Pour votre sécurité, laissez le disjoncteur baissé. Nous devons intervenir rapidement. <span role="img" aria-label="warning">⚠️</span><br/><br/>Quelle est votre adresse ? Nous avons un technicien disponible qui pourrait passer ce matin.</>, timestamp: "08:27", delay: 2800 },
    { sender: 'client', text: "12 rue des Lilas, Appartement 4B, 3ème étage. C'est possible ce matin ? Je dois absolument utiliser ma cuisine aujourd'hui", timestamp: "08:28", delay: 3000 },
    { sender: 'bot', text: <>✅ <strong>Intervention d'urgence confirmée :</strong><br/>Notre technicien Jean-Michel pourra être chez vous entre 10h et 11h ce matin.<br/><br/>Tarif déplacement urgence : 49€<br/>+ Diagnostic et petite réparation : à partir de 65€<br/><i>(Devis gratuit si travaux plus importants)</i></>, timestamp: "08:29", delay: 3000 },
    { sender: 'bot', text: <>Pouvez-vous confirmer ce créneau ? Notre technicien vous appellera 15 min avant d'arriver. <span role="img" aria-label="clock">🕙</span></>, timestamp: "08:29", delay: 1500 },
    { sender: 'client', text: "Oui c'est parfait, je serai là. Merci beaucoup pour cette réactivité !", timestamp: "08:30", delay: 2200 },
    { sender: 'bot', text: <>Nous vous confirmons l'intervention de Jean-Michel entre 10h et 11h. N'hésitez pas à nous contacter si vous avez d'autres questions. Bonne journée ! <span role="img" aria-label="toolbox">🧰</span></>, timestamp: "08:30", delay: 2000 },
  ],
  
  // Salon de coiffure
  coiffeur: [
    { sender: 'client', text: "Bonjour, est-ce possible d'avoir un RDV pour une coupe femme avec balayage ce samedi ?", timestamp: "15:30", delay: 1000 },
    { sender: 'bot', text: <>Bonjour ! Je vérifie les disponibilités pour ce samedi... <span role="img" aria-label="scissors">✂️</span></>, timestamp: "15:30", delay: 1500 },
    { sender: 'bot', text: "Pour une coupe femme avec balayage (durée environ 2h), nous avons les créneaux suivants ce samedi : 10h, 14h30 ou 16h45. Lequel vous conviendrait ?", timestamp: "15:31", delay: 2500 },
    { sender: 'client', text: "14h30 serait parfait !", timestamp: "15:32", delay: 2000 },
    { sender: 'bot', text: <>Très bien ! Pour confirmer votre RDV, pourriez-vous m'indiquer :<br/>- Votre nom<br/>- Votre téléphone<br/>- Si c'est votre première visite chez nous</>, timestamp: "15:33", delay: 2000 },
    { sender: 'client', text: "Sophie Durand, 06 12 34 56 78, et oui c'est ma première fois", timestamp: "15:34", delay: 2500 },
    { sender: 'bot', text: <>Merci Sophie ! Pour votre information, voici nos tarifs :<br/>- Coupe femme : 32€<br/>- Balayage à partir de : 65€<br/><br/>Le tarif final sera confirmé par votre coiffeuse selon la longueur et la densité de vos cheveux.</>, timestamp: "15:35", delay: 3000 },
    { sender: 'bot', text: <>✅ <strong>RDV confirmé :</strong><br/>Samedi à 14h30<br/>Coupe femme + balayage<br/>Durée approximative : 2h<br/>Avec Marie-Claude, notre spécialiste coloration</>, timestamp: "15:35", delay: 2500 },
    { sender: 'bot', text: <>Un SMS de rappel vous sera envoyé la veille. En cas d'empêchement, merci de nous prévenir au moins 24h à l'avance. <span role="img" aria-label="calendar">📅</span></>, timestamp: "15:36", delay: 1800 },
    { sender: 'client', text: "Super, merci beaucoup ! À samedi !", timestamp: "15:37", delay: 1800 },
    { sender: 'bot', text: <>Nous vous remercions pour votre réservation Sophie ! Nous sommes impatients de vous accueillir samedi. N'hésitez pas si vous avez des questions d'ici là. <span role="img" aria-label="sparkles">✨</span></>, timestamp: "15:37", delay: 2000 },
  ],
  
  // Traiteur
  traiteur: [
    { sender: 'client', text: "Bonjour, j'organise un anniversaire pour 25 personnes dans 2 semaines. Pourriez-vous me proposer un buffet ?", timestamp: "11:20", delay: 1000 },
    { sender: 'bot', text: <>Bonjour ! Bien sûr, nous serions ravis de vous accompagner pour cet anniversaire. <span role="img" aria-label="party">🎉</span><br/><br/>Pour mieux cibler nos propositions, pourriez-vous préciser :<br/>1. La date exacte de l'événement<br/>2. L'âge de la personne fêtée<br/>3. Si vous souhaitez un buffet froid, chaud ou mixte ?</>, timestamp: "11:21", delay: 2800 },
    { sender: 'client', text: "C'est pour le 28 mai, c'est un anniversaire pour mes 40 ans, et je préférerais un buffet mixte", timestamp: "11:23", delay: 3000 },
    { sender: 'bot', text: <>Merci pour ces précisions ! Pour un événement le 28 mai (dans 14 jours), nous avons bien de la disponibilité. <span role="img" aria-label="check">✅</span><br/><br/>Y a-t-il des restrictions alimentaires ou allergies à prendre en compte parmi vos invités ?</>, timestamp: "11:24", delay: 2500 },
    { sender: 'client', text: "Oui, 2 personnes sont végétariennes et une est allergique aux fruits de mer", timestamp: "11:25", delay: 2500 },
    { sender: 'bot', text: <>Nous en prenons note. <span role="img" aria-label="notepad">📝</span><br/><br/>Voici notre proposition de buffet mixte pour 25 personnes, incluant des options végétariennes et sans fruits de mer :</>, timestamp: "11:26", delay: 2000 },
    { sender: 'bot', text: <>✅ <strong>Proposition de Buffet Anniversaire 40 ans :</strong><br/><br/>🥗 <u>Buffet froid</u> :<br/>- Plateau de charcuteries fines<br/>- Salades composées (dont végétariennes)<br/>- Wraps variés et mini-sandwichs<br/>- Plateau de fromages affinés<br/><br/>🍲 <u>Buffet chaud</u> :<br/>- Mini-quiches et feuilletés<br/>- Brochettes de volaille marinées<br/>- Risotto aux légumes (option végétarienne)<br/><br/>🍰 <u>Desserts</u> :<br/>- Assortiment de mignardises<br/>- Gâteau d'anniversaire personnalisé<br/><br/><strong>Prix estimé</strong> : 28€/personne (soit 700€)<br/><i>Service, livraison et installation inclus</i></>, timestamp: "11:28", delay: 5000 },
    { sender: 'bot', text: "Cette proposition vous convient-elle ? Nous pouvons l'ajuster selon vos préférences et votre budget.", timestamp: "11:28", delay: 1500 },
    { sender: 'client', text: "Ça me semble parfait ! Est-ce que je peux avoir des photos de vos présentations pour me faire une idée ?", timestamp: "11:30", delay: 2800 },
    { sender: 'bot', text: <>Bien sûr ! Je vous envoie quelques photos de nos buffets mixtes similaires à celui proposé... [Photos]<br/><br/>Pour réserver cette prestation, nous demandons un acompte de 30% (210€). Souhaitez-vous que je prépare un devis officiel ?</>, timestamp: "11:31", delay: 2500 },
    { sender: 'client', text: "Oui, merci ! Vous pouvez m'envoyer le devis par email : client@email.com", timestamp: "11:32", delay: 2200 },
    { sender: 'bot', text: <>Parfait ! Je vous prépare ce devis et vous l'envoie par email d'ici 1 heure. N'hésitez pas si vous avez d'autres questions. Nous serons ravis de contribuer à la réussite de votre anniversaire ! <span role="img" aria-label="birthday">🎂</span></>, timestamp: "11:33", delay: 2000 },
  ]
};

export function InteractiveChatDemo({ sectorId = 'garage' }: { sectorId: string }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [autoScroll, setAutoScroll] = useState(true);

  // Déterminer quel script utiliser en fonction du secteur sélectionné
  const currentScript = chatScripts[sectorId] || chatScripts['garage']; // Fallback sur garage si secteur non trouvé
  
  // Fonction pour démarrer/redémarrer la simulation
  const startSimulation = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setMessages([]);
    setCurrentMessageIndex(0);
    setIsComplete(false);
    setAutoScroll(true);
  }, []);

  // Démarrer la simulation au chargement ou quand le secteur change
  useEffect(() => {
    startSimulation();
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [sectorId, startSimulation]); // Dépendance ajoutée: sectorId pour redémarrer quand le secteur change

  // Afficher les messages progressivement
  useEffect(() => {
    if (currentMessageIndex < currentScript.length) {
      setIsComplete(false);
      
      timeoutRef.current = setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, currentScript[currentMessageIndex]]);
        setCurrentMessageIndex(prevIndex => prevIndex + 1);
      }, currentScript[currentMessageIndex].delay);
      
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    } else {
      setIsComplete(true);
      timeoutRef.current = null;
    }
  }, [currentMessageIndex, currentScript]);

  // Gérer le défilement automatique
  useEffect(() => {
    if (autoScroll && chatContainerRef.current && messages.length > 0) {
      const container = chatContainerRef.current;
      container.scrollTop = container.scrollHeight;
    }
  }, [messages, autoScroll]);

  // Désactiver le défilement auto si l'utilisateur scrolle manuellement
  const handleScroll = () => {
    if (chatContainerRef.current) {
      const container = chatContainerRef.current;
      const isScrolledToBottom = 
        Math.abs(container.scrollHeight - container.scrollTop - container.clientHeight) < 10;
      
      setAutoScroll(isScrolledToBottom);
    }
  };

  // En-tête personnalisé selon le secteur
  const headerTitle = () => {
    switch(sectorId) {
      case 'macon': return 'Martin Maçonnerie (Chatbot)';
      case 'boulangerie': return 'Boulangerie Douceurs (Chatbot)';
      case 'electricien': return 'Électricité Express (Chatbot)';
      case 'coiffeur': return 'Salon Glamour (Chatbot)';
      case 'traiteur': return 'Délices Traiteur (Chatbot)';
      case 'garage': return 'Garage Auto Pro (Chatbot)';
      default: return 'Service Client (Chatbot)';
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden shadow-xl">
      {/* Header personnalisé selon le secteur */}
      <div className="h-14 bg-muted flex items-center justify-between px-4 border-b">
        <span className="text-foreground font-medium">{headerTitle()}</span>
        {isComplete && (
          <Button variant="ghost" size="icon" onClick={startSimulation} aria-label="Rejouer la simulation">
            <RotateCcw className="h-5 w-5 text-muted-foreground hover:text-primary" />
          </Button>
        )}
      </div>
      
      {/* Zone de messages avec hauteur responsive */}
      <div 
        ref={chatContainerRef}
        className="p-4 space-y-3 h-[50vh] min-h-[300px] max-h-[400px] overflow-y-auto bg-background/50"
        onScroll={handleScroll}
      >
        <div className="relative space-y-3">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === 'client' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-3 rounded-xl ${
                msg.sender === 'client'
                  ? 'bg-primary text-primary-foreground rounded-br-none'
                  : 'bg-muted text-foreground rounded-bl-none'
              }`}>
                <div className="text-sm sm:text-base">{msg.text}</div>
                <div className="flex items-center justify-end mt-1">
                  <span className={`text-xs ${msg.sender === 'client' ? 'opacity-80' : 'text-muted-foreground'}`}>
                    {msg.timestamp}
                  </span>
                  {msg.sender === 'client' && (
                    <CheckCheck className={`h-4 w-4 ml-1 ${msg.sender === 'client' ? 'opacity-80' : 'text-muted-foreground'}`} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Barre de saisie */}
      <div className="h-12 bg-muted flex items-center px-4 border-t">
        <p className="text-sm text-muted-foreground italic">
          {isComplete ? "Fin de la simulation." : "Simulation en cours..."}
        </p>
      </div>
    </Card>
  );
}
