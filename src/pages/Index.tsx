import { lazy, Suspense, useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import { SectionSkeleton } from "@/components/ui/skeleton";
import { MessageCircle } from "lucide-react";

// Lazy load sections below the fold
const DisordersSection = lazy(() => import("@/components/sections/DisordersSection"));
const ServicesSection = lazy(() => import("@/components/sections/ServicesSection"));
const QuotesSection = lazy(() => import("@/components/sections/QuotesSection"));
const TestimonialsSection = lazy(() => import("@/components/sections/TestimonialsSection"));
const BioSection = lazy(() => import("@/components/sections/BioSection"));
const AppointmentSection = lazy(() => import("@/components/sections/AppointmentSection"));
const PartnersSection = lazy(() => import("@/components/sections/PartnersSection"));

const CTA_LINK = "https://api.whatsapp.com/send?phone=5548988020380&text=Ol%C3%A1%20Dr.%20Rodrigo%20Riefel,%0A%0Aestou%20entrando%20em%20contato%20para%20agendar%20uma%20consulta.%0A%0AMe%20chamo";

const Index = () => {
  const [showWhatsapp, setShowWhatsapp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Exibe o botão após rolar 500px (aproximadamente após a Hero)
      setShowWhatsapp(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        
        <Suspense fallback={<SectionSkeleton />}>
          <DisordersSection />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <ServicesSection />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <QuotesSection />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <TestimonialsSection />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <BioSection />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <AppointmentSection />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <PartnersSection />
        </Suspense>
      </main>
      
      {/* Floating WhatsApp Button */}
      <a 
        href={CTA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-50 p-4 bg-[#25D366] text-white rounded-full shadow-2xl transition-all duration-500 hover:scale-110 hover:bg-[#128C7E] ${
          showWhatsapp ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>

      <Footer />
    </>
  );
};

export default Index;