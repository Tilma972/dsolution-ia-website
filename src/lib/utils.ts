import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Fonction pour s'assurer que la page commence au sommet
export function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant" // Utilise "instant" au lieu de "smooth" pour éviter l'animation
  });
}

// Ajoute un événement au chargement de la page
window.addEventListener("load", scrollToTop);
// Également au changement de route si tu utilises un router
