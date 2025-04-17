import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PhoneCall, Mail, MessageSquare } from "lucide-react";

interface ContactMethodProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
}

const contactMethods: ContactMethodProps[] = [
  {
    icon: <PhoneCall className="h-6 w-6 text-primary" />,
    title: "Téléphone",
    value: "01 23 45 67 89",
    href: "tel:0123456789",
  },
  {
    icon: <Mail className="h-6 w-6 text-primary" />,
    title: "Email",
    value: "contact@dsolution-ia.fr",
    href: "mailto:contact@dsolution-ia.fr",
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-primary" />,
    title: "WhatsApp",
    value: "WhatsApp Business",
    href: "https://wa.me/33123456789",
  },
];

export function ContactSection() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [resultMessage, setResultMessage] = useState('');

  // Récupère la clé d'accès depuis les variables d'environnement
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    console.error("Erreur: La variable d'environnement VITE_WEB3FORMS_ACCESS_KEY n'est pas définie.");
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Empêche le rechargement de la page
    setIsSubmitting(true);
    setSubmissionStatus('idle');
    setResultMessage('');

    if (!accessKey) {
      setResultMessage("Erreur de configuration : clé d'accès manquante.");
      setSubmissionStatus('error');
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData(event.target as HTMLFormElement);
    
    // Combine firstName and lastName into a single name field for Web3Forms
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    formData.delete('firstName');
    formData.delete('lastName');
    formData.append('name', `${firstName} ${lastName}`);

    // Ajout de la clé d'accès Web3Forms
    formData.append('access_key', accessKey);

    // Optionnel: Ajouter un sujet à l'email que vous recevrez
    formData.append('subject', `Nouvelle demande de Contact depuis ${window.location.hostname}`);
    // Optionnel: Nom du formulaire pour l'identifier dans Web3Forms
    formData.append('from_name', 'Formulaire Contact D-Solution IA');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        // Rediriger vers la page de remerciement
        navigate('/merci');
      } else {
        console.error('Erreur Web3Forms:', data);
        setResultMessage(`Erreur lors de l'envoi : ${data.message || 'Veuillez réessayer.'}`);
        setSubmissionStatus('error');
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Erreur Fetch:', error);
      setResultMessage('Une erreur réseau est survenue. Veuillez vérifier votre connexion et réessayer.');
      setSubmissionStatus('error');
      setIsSubmitting(false);
    }
    // Nous ne mettons pas setIsSubmitting(false) en cas de succès
    // car la page va être redirigée
  };

  return (
    <section id="contact" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Contactez
        </span>{" "}
        notre équipe
      </h2>
      <p className="text-xl text-muted-foreground mb-8">
        Vous avez des questions ou souhaitez démarrer avec notre solution ? Nous sommes là pour vous aider.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Formulaire de contact */}
        <Card>
          <CardHeader>
            <CardTitle>Envoyez-nous un message</CardTitle>
            <CardDescription>
              Nous vous répondrons dans les 24 heures ouvrées.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form 
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Prénom
                  </label>
                  <Input 
                    id="firstName" 
                    name="firstName" 
                    placeholder="John" 
                    required 
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Nom
                  </label>
                  <Input 
                    id="lastName" 
                    name="lastName" 
                    placeholder="Doe" 
                    required 
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Email
                </label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="john.doe@example.com" 
                  required 
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Votre message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Comment pouvons-nous vous aider ?"
                  className="min-h-[150px]"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              {/* Affichage conditionnel des messages d'erreur */}
              {submissionStatus === 'error' && resultMessage && (
                <p className="text-sm text-red-500">
                  {resultMessage}
                </p>
              )}
              
              <Button 
                type="submit" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Coordonnées et carte */}
        <div className="flex flex-col gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Nos coordonnées</CardTitle>
              <CardDescription>
                Choisissez votre moyen de contact préféré.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactMethods.map((method) => (
                <a
                  key={method.title}
                  href={method.href}
                  className={`flex items-center gap-3 rounded-lg border p-4 transition-colors hover:bg-muted ${method.title === "WhatsApp" ? "animate-gentle-bounce" : ""}`}
                >
                  {method.icon}
                  <div>
                    <h3 className="font-semibold">
                      {method.title}
                      {method.title === "WhatsApp" && (
                        <span className="ml-2 inline-flex items-center">
                          <span className="online-status-dot"></span>
                          <span className="text-xs text-green-600 dark:text-green-400">En ligne</span>
                        </span>
                      )}
                    </h3>
                    <p className="text-sm text-muted-foreground">{method.value}</p>
                  </div>
                </a>
              ))}
            </CardContent>
          </Card>
          
          {/* Horaires */}
          <Card>
            <CardHeader>
              <CardTitle>Horaires d'ouverture</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Lundi - Vendredi</span>
                <span>9h - 18h</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Samedi</span>
                <span>Sur rendez-vous</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Dimanche</span>
                <span>Fermé</span>
              </div>
            </CardContent>
          </Card>
          
          {/* CTA principal */}
          <div className="mt-4">
            <Button className="w-full" asChild>
              <a href="https://dsolutionia.zohobookings.eu" target="_blank" rel="noopener noreferrer">
                Réservez votre démo gratuite
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
