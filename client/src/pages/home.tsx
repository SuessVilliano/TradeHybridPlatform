import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import ServicesSection from "@/components/services-section";
import AIAgentsSection from "@/components/ai-agents-section";
import PricingSection from "@/components/pricing-section";
import THCTokenSection from "@/components/thc-token-section";
import TestimonialsSection from "@/components/testimonials-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import ExitIntentPopup from "@/components/exit-intent-popup";
import { useExitIntent } from "@/hooks/useExitIntent";

export default function Home() {
  const { showExitIntent, handleClosePopup } = useExitIntent();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <AIAgentsSection />
      <PricingSection />
      <THCTokenSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      
      <ExitIntentPopup 
        isVisible={showExitIntent}
        onClose={handleClosePopup}
      />
    </div>
  );
}
