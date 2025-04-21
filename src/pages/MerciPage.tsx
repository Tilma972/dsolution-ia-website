import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function MerciPage() {
  return (
    <>
      <Helmet>
        <title>Merci pour votre message - D-Solution IA</title>
        <meta name="description" content="Votre demande a bien été reçue. Notre équipe vous répondra dans les plus brefs délais concernant nos solutions d'automatisation WhatsApp." />
      </Helmet>
    <div className="bg-dark-bg min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Merci pour votre <span className="text-primary">message</span> !
        </h1>
        <p className="text-subtle-text text-xl mb-8 max-w-2xl mx-auto">
          Nous avons bien reçu votre demande et nous vous répondrons dans les plus brefs délais.
        </p>
        <Link 
          to="/" 
          className="inline-block bg-primary hover:bg-secondary transition-colors text-dark-bg font-bold py-3 px-6 rounded-md"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
    </>
  );
}
