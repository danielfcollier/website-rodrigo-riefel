import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const CTA_LINK = "https://api.whatsapp.com/send?phone=5548988020380&text=Ol%C3%A1%20Dr.%20Rodrigo%20Riefel,%0A%0Aestou%20entrando%20em%20contato%20para%20agendar%20uma%20consulta.%0A%0AMe%20chamo";

const HeroSection = () => {
  return (
    <section 
      id="hero"
      className="relative min-h-[80vh] flex items-center"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, hsl(215 55% 21% / 0.92), hsl(215 39% 38% / 0.85))",
        }}
      />

      <div className="container-section relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-primary-foreground animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-primary-foreground">
              Restaure sua Saúde Mental e Emocional com{" "}
              <span className="text-brand-complementary">menos medicamentos</span>.
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
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

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-brand to-transparent" />
    </section>
  );
};

export default HeroSection;
