import { lazy, Suspense } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";

// Lazy load sections below the fold
const DisordersSection = lazy(() => import("@/components/sections/DisordersSection"));
const ServicesSection = lazy(() => import("@/components/sections/ServicesSection"));
const QuotesSection = lazy(() => import("@/components/sections/QuotesSection"));
const TestimonialsSection = lazy(() => import("@/components/sections/TestimonialsSection"));
const BioSection = lazy(() => import("@/components/sections/BioSection"));
const AppointmentSection = lazy(() => import("@/components/sections/AppointmentSection"));
const PartnersSection = lazy(() => import("@/components/sections/PartnersSection"));

const SectionLoader = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-brand border-t-transparent rounded-full animate-spin" />
  </div>
);

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        
        <Suspense fallback={<SectionLoader />}>
          <DisordersSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <ServicesSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <QuotesSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <TestimonialsSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <BioSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <AppointmentSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <PartnersSection />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default Index;
