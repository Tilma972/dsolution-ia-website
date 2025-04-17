import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Newsletter() {
  return (
    <section id="newsletter">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          Restez{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            informé
          </span>
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
          Recevez nos conseils et astuces d'automatisation pour votre secteur d'activité.
        </p>

        <form
          name="newsletter"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
        >
          {/* Champs cachés pour Netlify */}
          <input type="hidden" name="form-name" value="newsletter" />
          
          {/* Champ honeypot anti-spam */}
          <div className="hidden">
            <label>
              Ne pas remplir : <input name="bot-field" />
            </label>
          </div>
          
          <Input
            name="email"
            placeholder="contact@dsolution-ia.com"
            className="bg-muted/50 dark:bg-muted/80"
            aria-label="email"
            type="email"
            required
          />
          <Button type="submit">S'abonner</Button>
        </form>
        
        <p className="text-sm text-muted-foreground text-center mt-4">
          Nous respectons votre vie privée. Vous pouvez vous désabonner à tout moment.
        </p>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
}