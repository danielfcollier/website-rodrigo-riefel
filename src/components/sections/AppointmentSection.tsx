import { Button } from "@/components/ui/button";
import { MapPin, Clock, MessageCircle, HeartHandshake } from "lucide-react";

const CTA_LINK = "https://api.whatsapp.com/send?phone=5548988020380&text=Ol%C3%A1%20Dr.%20Rodrigo%20Riefel,%0A%0Aestou%20entrando%20em%20contato%20para%20agendar%20uma%20consulta.%0A%0AMe%20chamo";
const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5548988020380&text=Ol%C3%A1%20Dr.%20Rodrigo%20Riefel,%0A%0Atenho%20uma%20d%C3%BAvida";

const AppointmentSection = () => {
  return (
    <section className="section-brand">
      <div className="container-section">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-foreground">
          Agendamento de Consultas
        </h2>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          {/* Left column - 3 items on desktop, all items stacked on mobile */}
          <div className="flex flex-col gap-4 md:gap-6 items-center md:items-start">
            <div className="flex items-center gap-3 md:gap-4 w-full max-w-xs">
              <div className="p-3 bg-primary-foreground/10 rounded-lg flex-shrink-0">
                <MapPin className="w-6 h-6 text-brand-complementary" />
              </div>
              <div>
                <p className="font-semibold text-primary-foreground text-sm md:text-base">Online para todo o Brasil</p>
                <p className="text-primary-foreground/80 text-sm md:text-base">Presencial em Florianópolis</p>
              </div>
            </div>

            <div className="flex items-center gap-3 md:gap-4 w-full max-w-xs">
              <div className="p-3 bg-primary-foreground/10 rounded-lg flex-shrink-0">
                <Clock className="w-6 h-6 text-brand-complementary" />
              </div>
              <p className="font-semibold text-primary-foreground text-sm md:text-base">Consultas de 1 hora</p>
            </div>

            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 md:gap-4 group w-full max-w-xs"
            >
              <div className="p-3 bg-whatsapp/20 rounded-lg group-hover:bg-whatsapp/30 transition-colors flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-whatsapp" />
              </div>
              <p className="font-semibold text-whatsapp group-hover:underline text-sm md:text-base">
                Dúvidas? Entre em contato
              </p>
            </a>

            {/* 4th item - shows in mobile column only */}
            <div className="flex items-center gap-3 md:gap-4 md:hidden w-full max-w-xs">
              <div className="p-3 bg-primary-foreground/10 rounded-lg flex-shrink-0">
                <HeartHandshake className="w-6 h-6 text-brand-complementary" />
              </div>
              <div>
                <p className="font-semibold text-primary-foreground text-sm md:text-base">Consultas Particulares</p>
                <p className="text-primary-foreground/80 text-sm md:text-base">Não aceita Planos de Saúde</p>
              </div>
            </div>

            {/* CTA - shows only on mobile */}
            <Button variant="cta" size="xl" className="md:hidden w-full max-w-xs mt-4 text-lg" asChild>
              <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
                Agendar Consulta
              </a>
            </Button>
          </div>

          {/* Right column - 1 item + CTA on desktop only */}
          <div className="hidden md:flex flex-col items-center justify-start gap-6">
            <div className="flex items-center gap-4 w-full max-w-xs">
              <div className="p-3 bg-primary-foreground/10 rounded-lg flex-shrink-0">
                <HeartHandshake className="w-6 h-6 text-brand-complementary" />
              </div>
              <div>
                <p className="font-semibold text-primary-foreground">Consultas Particulares</p>
                <p className="text-primary-foreground/80">Não aceita Planos de Saúde</p>
              </div>
            </div>
            <Button variant="cta" size="xl" className="w-full max-w-xs text-lg" asChild>
              <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
                Agendar Consulta
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
