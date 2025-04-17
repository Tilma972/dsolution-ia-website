import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TestimonialProps {
  image: string;
  name: string;
  title: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "/images/client-paul.jpg",
    name: "Paul M.",
    title: "Maçon",
    comment: "Incroyable, j'économise facile 2h par jour sur les devis et la paperasse. L'IA répond direct aux clients, c'est bluffant.",
  },
  {
    image: "/images/client-sophie.jpg",
    name: "Sophie L.",
    title: "Boulangère",
    comment: "Mes clients adorent pouvoir commander et poser des questions via WhatsApp à toute heure. Ça a vraiment boosté mes ventes additionnelles.",
  },
  {
    image: "https://i.pravatar.cc/150?img=60",
    name: "Christophe Tanguy",
    title: "@artisan_electricien",
    comment: "Incroyable gain de temps ! Les réponses automatiques ont réduit mes déplacements inutiles de 40%",
  },
  {
    image: "https://i.pravatar.cc/150?img=28",
    name: "Marie C.",
    title: "Coiffeuse",
    comment: "Les no-shows ont baissé de 40% grâce aux rappels automatiques. Le suivi client est impeccable sans que j'aie à y penser !",
  },
];

export function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState(0); // 0: initial, 1: next, -1: prev
  const [isMobile, setIsMobile] = useState(false);

  // Vérifier si on est sur mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Vérifier au chargement
    checkIfMobile();
    
    // Vérifier au redimensionnement
    window.addEventListener('resize', checkIfMobile);
    
    // Nettoyer
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentTestimonial((prev) => {
      const nextIndex = prev + newDirection;
      if (nextIndex < 0) {
        return testimonials.length - 1;
      } else if (nextIndex >= testimonials.length) {
        return 0;
      }
      return nextIndex;
    });
  };

  const nextTestimonial = () => {
    paginate(1);
  };

  const prevTestimonial = () => {
    paginate(-1);
  };

  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Ils utilisent déjà
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}D-Solution IA{" "}
        </span>
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Découvrez les retours d'expérience de nos clients satisfaits.
      </p>

      {isMobile ? (
        /* Version mobile - Carrousel */
        <div className="relative">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentTestimonial}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="max-w-md mx-auto mb-8" // Move className here
              style={{ position: 'absolute', left: 0, right: 0 }} // Keep element in layout flow during animation
            >
              <Card className="overflow-hidden"> {/* Remove max-w-md mx-auto mb-8 from here */}
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Avatar>
                <AvatarImage
                  alt={testimonials[currentTestimonial].name}
                  src={testimonials[currentTestimonial].image}
                />
                <AvatarFallback>{testimonials[currentTestimonial].name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
              </Avatar>

              <div className="flex flex-col">
                <CardTitle className="text-lg">{testimonials[currentTestimonial].name}</CardTitle>
                <CardDescription>{testimonials[currentTestimonial].title}</CardDescription>
              </div>
            </CardHeader>

                <CardContent>"{testimonials[currentTestimonial].comment}"</CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
          {/* Placeholder to maintain height during animation */}
          <div className="max-w-md mx-auto mb-8 invisible">
             <Card className="overflow-hidden">
               <CardHeader className="flex flex-row items-center gap-4 pb-2">
                 <Avatar>
                   <AvatarImage alt="" src="" />
                   <AvatarFallback>XX</AvatarFallback>
                 </Avatar>
                 <div className="flex flex-col">
                   <CardTitle className="text-lg">Placeholder Name</CardTitle>
                   <CardDescription>Placeholder Title</CardDescription>
                 </div>
               </CardHeader>
               <CardContent>Placeholder comment to maintain height.</CardContent>
             </Card>
          </div>
          
          {/* Contrôles du carrousel */}
          <div className="flex justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <span 
                  key={index} 
                  className={`block w-2 h-2 rounded-full ${index === currentTestimonial ? 'bg-primary' : 'bg-muted'}`}
                  onClick={() => setCurrentTestimonial(index)}
                ></span>
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ) : (
        /* Version desktop - Grille */
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map(
            ({ image, name, title, comment }: TestimonialProps, index) => (
              <Card
                key={index}
                className="max-w-md overflow-hidden"
              >
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Avatar>
                    <AvatarImage
                      alt={name}
                      src={image}
                    />
                    <AvatarFallback>{name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                  </Avatar>

                  <div className="flex flex-col">
                    <CardTitle className="text-lg">{name}</CardTitle>
                    <CardDescription>{title}</CardDescription>
                  </div>
                </CardHeader>

                <CardContent>"{comment}"</CardContent>
              </Card>
            )
          )}
        </div>
      )}
      
      {/* Badge Garantie */}
      <div className="text-center mt-16">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/30 px-4 py-2 rounded-full text-sm font-medium">
          <Check className="h-4 w-4" />
          <span>Satisfait ou remboursé sur votre 1er mois</span>
        </div>
      </div>
    </section>
  );
}

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 300 : -300, // Start off-screen
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0, // Slide to center
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 300 : -300, // Slide off-screen
      opacity: 0
    };
  }
};
