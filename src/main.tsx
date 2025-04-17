import React, { useLayoutEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import "./index.css";

// Reset scroll position
if (typeof window !== 'undefined') {
  // Disable browser's automatic scroll restoration
  if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
  }
  
  // Force scroll to top
  window.scrollTo(0, 0);
}

// Wrapper component to reset scroll
const ScrollToTop = ({ children }: { children: React.ReactNode }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return <>{children}</>;
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ScrollToTop>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </ScrollToTop>
  </React.StrictMode>
);
