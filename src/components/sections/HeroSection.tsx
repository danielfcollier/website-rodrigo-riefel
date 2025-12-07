import { Button } from "@/components/ui/button";

const CTA_LINK = "https://api.whatsapp.com/send?phone=5548988020380&text=Ol%C3%A1%20Dr.%20Rodrigo%20Riefel,%0A%0Aestou%20entrando%20em%20contato%20para%20agendar%20uma%20consulta.%0A%0AMe%20chamo";

const HeroSection = () => {
  return (
    <section 
      id="hero"
      className="relative min-h-[80vh] flex items-center"
    >
      {/* OTIMIZAÇÃO LCP: Picture Tag para Imagens Responsivas */}
      <picture className="absolute inset-0 w-full h-full">
        {/* Mobile WebP */}
        <source srcSet="/optimized/hero-bg-mobile.webp" media="(max-width: 640px)" type="image/webp" />
        {/* Tablet WebP */}
        <source srcSet="/optimized/hero-bg-tablet.webp" media="(max-width: 1024px)" type="image/webp" />
        {/* Desktop WebP */}
        <source srcSet="/optimized/hero-bg-desktop.webp" type="image/webp" />
        
        {/* Fallback JPEG */}
        <img 
          src="/optimized/hero-bg-desktop.jpg"
          alt="Consultório Dr. Rodrigo Riefel"
          fetchPriority="high" // Prioridade máxima para o navegador
          className="w-full h-full object-cover"
        />
      </picture>

      <div className="container-section relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            className="text-primary-foreground animate-fade-in p-8 md:p-10 rounded-xl max-w-2xl bg-gradient-to-br from-[#173056]/95 to-[#3B5986]/90 backdrop-blur-sm border border-white/10"
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6 text-white">
              Restaure sua Saúde Mental e Emocional com{" "}
              <span className="text-brand-complementary">menos medicamentos</span>.
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
              Referência entre Pacientes e Profissionais de Saúde no Tratamento Psicoemocional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
                  Agendar Consulta
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#transtornos">
                  Saiba mais
                </a>
              </Button>
            </div>
          </div>
          <div className="hidden md:block" />
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-brand to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;