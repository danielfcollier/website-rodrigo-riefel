import { Brain, Leaf, Triangle } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Psiquiatria e Psicoterapia",
    description: "Abordagem integrada para diagnóstico e tratamento de transtornos mentais.",
  },
  {
    icon: Leaf,
    title: "Medicina Integrativa",
    description: "Tratamentos complementares que consideram corpo, mente e espírito.",
  },
  {
    icon: Triangle,
    title: "Terapia e Autoconhecimento",
    description: "Jornada de autodescoberta para uma vida mais plena e consciente.",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-brand">
      <div className="container-section">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/15 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex p-4 bg-brand-complementary rounded-full mb-6">
                <service.icon className="w-10 h-10 text-brand-bold" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary-foreground">
                {service.title}
              </h3>
              <p className="text-primary-foreground/80">
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
