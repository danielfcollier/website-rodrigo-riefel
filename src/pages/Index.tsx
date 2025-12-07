import { lazy, Suspense } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import { SectionSkeleton } from "@/components/ui/skeleton"; // Importação Crítica

// Lazy load das seções
const DisordersSection = lazy(() => import("@/components/sections/DisordersSection"));
const ServicesSection = lazy(() => import("@/components/sections/ServicesSection"));
const QuotesSection = lazy(() => import("@/components/sections/QuotesSection"));
const TestimonialsSection = lazy(() => import("@/components/sections/TestimonialsSection"));
const BioSection = lazy(() => import("@/components/sections/BioSection"));
const AppointmentSection = lazy(() => import("@/components/sections/AppointmentSection"));
const PartnersSection = lazy(() => import("@/components/sections/PartnersSection"));

const Index = () => {
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
      <Footer />
    </>
  );
};

export default Index;