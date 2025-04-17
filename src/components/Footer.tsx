import { Link } from "react-router-dom";
import { LogoIcon } from "./Icons";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <Link
            to="/"
            className="font-bold text-xl flex"
          >
            <LogoIcon />
            D-Solution IA
          </Link>
          <p className="text-muted-foreground mt-4">
            Automatisation simple pour artisans, pros libéraux et TPE.
            Moins de tâches, plus de clients via WhatsApp.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Liens rapides</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#benefits"
              className="opacity-60 hover:opacity-100"
            >
              Avantages
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#demos"
              className="opacity-60 hover:opacity-100"
            >
              Démos
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#pricing"
              className="opacity-60 hover:opacity-100"
            >
              Tarifs
            </a>
          </div>
          
          <div>
            <a
              rel="noreferrer noopener"
              href="#faq"
              className="opacity-60 hover:opacity-100"
            >
              FAQ
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Légal</h3>
          <div>
            <Link
              to="/mentions-legales"
              className="opacity-60 hover:opacity-100"
            >
              Mentions légales
            </Link>
          </div>

          <div>
            <Link
              to="/politique-confidentialite"
              className="opacity-60 hover:opacity-100"
            >
              Politique de confidentialité
            </Link>
          </div>

          <div>
            <Link
              to="/conditions-garantie"
              className="opacity-60 hover:opacity-100"
            >
              Conditions de garantie
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Contact</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="mailto:contact@dsolution-ia.fr"
              className="opacity-60 hover:opacity-100"
            >
              Email
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://dsolutionia.zohobookings.eu"
              target="_blank"
              className="opacity-60 hover:opacity-100"
            >
              Réserver une démo
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; {currentYear} D-Solution IA. Tous droits réservés.
        </h3>
      </section>
    </footer>
  );
};
