import { Brain, Leaf, UserCheck } from "lucide-react"; // Troquei Triangle por UserCheck (mais semântico para terapia)

const services = [
  {
    icon: Brain,
    title: "Psiquiatria e Psicoterapia",
    description: "Diagnóstico preciso e tratamento humanizado para transtornos mentais, focando na raiz do problema.",
  },
  {
    icon: Leaf,
    title: "Medicina Integrativa",
    description: "Uma abordagem que une a medicina tradicional a práticas complementares para equilibrar corpo e mente.",
  },
  {
    icon: UserCheck,
    title: "Terapia e Autoconhecimento",
    description: "Jornada guiada para o fortalecimento emocional, superação de traumas e desenvolvimento pessoal.",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-brand relative overflow-hidden">
      {/* Elemento de fundo decorativo opcional */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-complementary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container-section relative z-10">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-complementary/30 transition-all duration-300 hover:-translate-y-2 shadow-lg backdrop-blur-sm"
            >
              <div className="inline-flex p-4 bg-gradient-to-br from-brand-complementary to-brand-complementary/70 rounded-2xl mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-brand-bold" />
              </div>
              
              <h3 className="text-xl font-bold text-brand-complementary mb-3 group-hover:text-white transition-colors">
                {service.title}
              </h3>
              
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;