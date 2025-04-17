import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { HeroCards } from "@/components/HeroCards";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";

export function HeroSection() {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        {/* Badge optionnel */}
        <Badge variant="outline" className="text-sm py-2">
          <span className="mr-2 text-primary">
            <Badge>Nouveau</Badge>
          </span>
          <span>Solution d'automatisation WhatsApp</span>
        </Badge>

        {/* Titre principal avec gradient comme dans le template */}
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-primary to-primary/60 text-transparent bg-clip-text">
              Automatisation simple
            </span>{" "}
            pour{" "}
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              artisans, pros libéraux et TPE
            </span>
          </h1>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Moins de tâches. Plus de clients. 100% via WhatsApp. Zéro logiciel compliqué.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <WhatsAppCTA 
            phoneNumber="33612345678"
            message="Bonjour, je suis intéressé(e) par votre solution d'automatisation WhatsApp et j'aimerais en savoir plus."
            className="w-full md:w-1/3 group bg-green-500 hover:bg-green-600"
            label="Discuter sur WhatsApp"
            customIcon={
              <>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 448 512" 
                  className="h-7 w-7 fill-white mr-2"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.8 0-65.7-10.1-94.2-29.2l-6.7-4-69.8 18.3L72 359.2l-4.5-7c-18.9-29.7-29.9-65.4-29.9-102.1 0-108.5 88.2-196.6 196.6-196.6 53 0 102.8 20.8 138.9 57.2 36.2 36.2 57.2 86 57.2 138.9-.1 108.5-88.3 196.6-196.7 196.6zm101.7-164.7c-3.9-2-23.1-11.4-26.7-12.7-3.6-1.3-6.3-2-9 2-2.6 4-10.1 12.7-12.4 15.3-2.2 2.6-4.5 2.9-8.3 1s-16.4-6-31.2-19.2c-11.9-10.6-20.1-23.7-22.5-27.9s-.3-6.3 1.9-8.3c1.9-1.7 4.1-4.5 6.2-6.7 2-2.2 2.6-3.9 3.9-6.6 1.3-2.6 0-5-1-7s-9-21.6-12.3-29.5c-3.2-7.8-6.4-6.7-9-6.7-2.6 0-5.5-.3-8.3-.3s-6.3.9-9.7 4.4c-3.3 3.4-12.9 12.6-12.9 30.6 0 18 13.2 35.4 15 37.8 1.8 2.4 26.1 39.6 63.1 55.7 8.9 3.8 16.7 6 22.4 7.7 5.8 1.7 11.1 1.5 15.3 1 4.5-.5 14.1-5.8 16.1-11.4 2-5.6 2-10.4 1.4-11.4-.6-1-3.2-2-7.1-4z"/>
                </svg>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </>
            }
            trackingId="hero_section"
          />
        </div>
      </div>

      {/* Hero cards section - maintenant visible sur tous les écrans */}
      <div className="z-10 w-full lg:w-auto">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow hidden lg:block"></div>
    </section>
  );
}
