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

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-6 flex flex-col items-center md:items-start">
            <div className="flex flex-col items-center text-center gap-2">
              <div className="p-3 bg-primary-foreground/10 rounded-lg">
                <MapPin className="w-6 h-6 text-brand-complementary" />
              </div>
              <div>
                <p className="font-semibold text-primary-foreground">Online para todo o Brasil</p>
                <p className="text-primary-foreground/80">Presencial em Florianópolis</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center gap-2">
              <div className="p-3 bg-primary-foreground/10 rounded-lg">
                <Clock className="w-6 h-6 text-brand-complementary" />
              </div>
              <div>
                <p className="font-semibold text-primary-foreground">Consultas de 1 hora</p>
              </div>
            </div>

            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center gap-2 group"
            >
              <div className="p-3 bg-whatsapp/20 rounded-lg group-hover:bg-whatsapp/30 transition-colors">
                <MessageCircle className="w-6 h-6 text-whatsapp" />
              </div>
              <div>
                <p className="font-semibold text-whatsapp group-hover:underline">
                  Dúvidas? Entre em contato
                </p>
              </div>
            </a>
          </div>

          <div className="space-y-6 flex flex-col items-center">
            <div className="flex flex-col items-center text-center gap-2 mb-4">
              <div className="p-3 bg-primary-foreground/10 rounded-lg">
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
