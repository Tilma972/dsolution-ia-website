// Type declarations for global window object
// This adds support for Google Analytics gtag function
interface Window {
  gtag?: (...args: any[]) => void;
}
