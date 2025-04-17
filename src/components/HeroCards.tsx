import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Check, Clock } from "lucide-react";

// Version accordéon pour mobile
export const HeroCardsAccordion = () => {
  return (
    <div className="lg:hidden w-full mt-8">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="testimonial" className="border-b">
          <AccordionTrigger className="hover:no-underline">
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage alt="Photo de profil" src="https://i.pravatar.cc/150?img=28" />
                <AvatarFallback>CT</AvatarFallback>
              </Avatar>
              <span className="font-medium">Témoignage client</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage alt="Photo de profil" src="https://i.pravatar.cc/150?img=28" />
                  <AvatarFallback>CT</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Christophe Tanguy</p>
                  <p className="text-sm text-muted-foreground">@artisan_electricien</p>
                </div>
              </div>
              <p className="text-muted-foreground">"Incroyable gain de temps ! Les réponses automatiques ont réduit mes déplacements inutiles de 40%"</p>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="stats" className="border-b">
          <AccordionTrigger className="hover:no-underline">
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold">+35%</span>
              <span className="font-medium">Conversion de demandes</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              <p className="text-xl font-bold text-center text-primary">+35%</p>
              <p className="text-center text-muted-foreground">
                En moyenne, nos clients convertissent 35% de demandes en plus grâce à nos réponses instantanées 24/7
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="pricing" className="border-b">
          <AccordionTrigger className="hover:no-underline">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-xs text-primary">Le plus populaire</Badge>
              <span className="font-medium">WhatsApp Pro</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-lg">WhatsApp Pro</h3>
                  <Badge variant="secondary" className="text-xs text-primary">Le plus populaire</Badge>
                </div>
                <div className="mt-1">
                  <span className="text-2xl font-bold">199€</span>
                  <span className="text-muted-foreground"> /mois</span>
                </div>
                <p className="text-muted-foreground mt-1">
                  Automatisation complète de vos réponses et qualifications clients
                </p>
              </div>
              
              <Button className="w-full">Découvrir</Button>
              
              <div className="pt-2 space-y-2">
                {["Chatbot IA personnalisé", "Qualification clients", "IA pour génération devis/factures"].map(
                  (benefit: string) => (
                    <div key={benefit} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="ml-2">{benefit}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="benefit" className="border-b">
          <AccordionTrigger className="hover:no-underline">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-medium">Gain de temps immédiat</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <h3 className="font-bold">Gain de temps immédiat</h3>
              <p className="text-muted-foreground">
                Nos clients gagnent en moyenne 12h par semaine grâce à l'automatisation de leurs tâches répétitives.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

// Version desktop originale
export const HeroCards = () => {
  return (
    <>
      {/* Version accordéon pour mobile */}
      <HeroCardsAccordion />
      
      {/* Version desktop avec positionnement absolu */}
      <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
        <div className="shadow hidden lg:block"></div>
        
        {/* Témoignage d'un client */}
        <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:drop-shadow-2xl">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <Avatar>
              <AvatarImage alt="Photo de profil" src="https://i.pravatar.cc/150?img=28" />
              <AvatarFallback>CT</AvatarFallback>
            </Avatar>

            <div className="flex flex-col">
              <CardTitle className="text-lg">Christophe Tanguy</CardTitle>
              <CardDescription>@artisan_electricien</CardDescription>
            </div>
          </CardHeader>

          <CardContent>"Incroyable gain de temps ! Les réponses automatiques ont réduit mes déplacements inutiles de 40%"</CardContent>
        </Card>

        {/* Statistique de résultat */}
        <Card className="absolute right-[20px] top-4 w-80 drop-shadow-xl shadow-black/10 dark:shadow-white/10 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:drop-shadow-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-center text-2xl">+35%</CardTitle>
            <CardDescription className="text-center font-normal text-primary">
              Conversion de demandes
            </CardDescription>
          </CardHeader>

          <CardContent className="text-center pb-2">
            <p>
              En moyenne, nos clients convertissent 35% de demandes en plus grâce à nos réponses instantanées 24/7
            </p>
          </CardContent>
        </Card>

        {/* Fonctionnalité clé */}
        <Card className="absolute top-[150px] left-[50px] w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:drop-shadow-2xl border border-primary">
          <CardHeader>
            <CardTitle className="flex item-center justify-between">
              WhatsApp Pro
              <Badge
                variant="secondary"
                className="text-sm text-primary animate-slow-pulse-glow"
              >
                Le plus populaire
              </Badge>
            </CardTitle>
            <div>
              <span className="text-3xl font-bold">199€</span>
              <span className="text-muted-foreground"> /mois</span>
            </div>

            <CardDescription>
              Automatisation complète de vos réponses et qualifications clients
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Button className="w-full">Découvrir</Button>
          </CardContent>

          <hr className="w-4/5 m-auto mb-4" />

          <CardFooter className="flex">
            <div className="space-y-4">
              {["Chatbot IA personnalisé", "Qualification clients", "IA pour génération devis/factures"].map(
                (benefit: string) => (
                  <span
                    key={benefit}
                    className="flex"
                  >
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                )
              )}
            </div>
          </CardFooter>
        </Card>

        {/* Bénéfice clé */}
        <Card className="absolute w-[350px] -right-[10px] bottom-[35px] drop-shadow-xl shadow-black/10 dark:shadow-white/10 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:drop-shadow-2xl">
          <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
            <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle>Gain de temps immédiat</CardTitle>
              <CardDescription className="text-md mt-2">
                Nos clients gagnent en moyenne 12h par semaine grâce à l'automatisation de leurs tâches répétitives.
              </CardDescription>
            </div>
          </CardHeader>
        </Card>
      </div>
    </>
  );
};
