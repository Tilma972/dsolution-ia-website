import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/Hero";
import { BenefitsSection } from "./components/BenefitsSection";
import { DemoSection } from "./components/DemoSection";
import { Pricing } from "./components/Pricing";
import { FAQSection } from "./components/FAQ";
import { Newsletter } from "./components/Newsletter";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { FloatingWhatsAppCTA } from "./components/WhatsAppCTA";
import AnimatedSection from "./components/AnimatedSection";
import MerciPage from "./pages/MerciPage";
import MentionsLegalesPage from "./pages/MentionsLegalesPage";
import PolitiqueConfidentialitePage from "./pages/PolitiqueConfidentialitePage";
import ConditionsGarantiePage from "./pages/ConditionsGarantiePage";
import WhatsAppStatsPage from "./pages/admin/WhatsAppStats";
import "./App.css";

// HomePage component for the main landing page
const HomePage = () => {
  return (
    <>
      <AnimatedSection isFirst={true}>
        <HeroSection />
      </AnimatedSection>
      <AnimatedSection delay={0.05}>
        <BenefitsSection />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <DemoSection />
      </AnimatedSection>
      <AnimatedSection delay={0.15}>
        <Pricing />
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <FAQSection />
      </AnimatedSection>
      <AnimatedSection delay={0.25}>
        <Newsletter />
      </AnimatedSection>
      <AnimatedSection delay={0.3}>
        <ContactSection />
      </AnimatedSection>
    </>
  );
};

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/merci" element={<MerciPage />} />
        <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
        <Route path="/politique-confidentialite" element={<PolitiqueConfidentialitePage />} />
        <Route path="/conditions-garantie" element={<ConditionsGarantiePage />} />
        <Route path="/admin/whatsapp-stats" element={<WhatsAppStatsPage />} />
      </Routes>
      <Footer />
      <FloatingWhatsAppCTA 
        phoneNumber="33612345678"
        message="Bonjour, je vous contacte depuis votre site web et j'aimerais en savoir plus sur vos solutions d'automatisation WhatsApp."
        trackingId="floating_cta"
      />
    </>
  );
}

export default App;
