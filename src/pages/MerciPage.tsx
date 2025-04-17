import { Link } from 'react-router-dom';

export default function MerciPage() {
  return (
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
  );
}
