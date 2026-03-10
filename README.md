# D-Solution IA — Site vitrine

Site web de **D-Solution IA**, une solution d'automatisation WhatsApp pensée pour les artisans, professionnels libéraux et TPE.

> Moins de tâches. Plus de clients. 100% via WhatsApp. Zéro logiciel compliqué.

## Stack technique

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) — bundler ultra-rapide
- [Tailwind CSS](https://tailwindcss.com/) — styles utilitaires
- [Shadcn/UI](https://ui.shadcn.com/) — composants accessibles (Radix UI)
- [Framer Motion](https://www.framer.com/motion/) — animations
- [React Router v7](https://reactrouter.com/) — routing SPA
- [Recharts](https://recharts.org/) — graphiques analytics

## Sections de la page d'accueil

- [x] Navbar (desktop + mobile avec sidebar)
- [x] Hero — accroche principale avec CTA WhatsApp
- [x] Avantages (Benefits)
- [x] Démonstration interactive du chatbot
- [x] Tarifs (Pricing)
- [x] FAQ
- [x] Newsletter
- [x] Contact
- [x] Footer

## Pages

| Route | Description |
|-------|-------------|
| `/` | Page d'accueil |
| `/merci` | Page de confirmation après contact |
| `/mentions-legales` | Mentions légales |
| `/politique-confidentialite` | Politique de confidentialité |
| `/conditions-garantie` | Conditions de garantie |
| `/admin/whatsapp-stats` | Dashboard analytics WhatsApp (admin) |

## Fonctionnalités

- [x] Design entièrement responsive
- [x] Mode sombre / clair
- [x] CTA WhatsApp flottant avec tracking
- [x] Analytics WhatsApp (suivi des clics par section)
- [x] Animations au scroll (Framer Motion)
- [x] Schémas SEO structurés (FAQ, Service, LocalBusiness)
- [x] Sitemap & robots.txt

## Installation

1. Cloner le dépôt :

```bash
git clone <url-du-repo>
cd dsolution-ia-website
```

2. Installer les dépendances :

```bash
npm install
```

3. Lancer le serveur de développement :

```bash
npm run dev
```

4. Construire pour la production :

```bash
npm run build
```

5. Prévisualiser le build :

```bash
npm run preview
```

## Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Démarre le serveur de développement |
| `npm run build` | Compile TypeScript + bundle pour la production |
| `npm run preview` | Prévisualise le build de production |
| `npm run lint` | Analyse statique ESLint |

## Déploiement

Le projet est configuré pour [Vercel](https://vercel.com/) (`vercel.json` inclus).

## Licence

MIT
