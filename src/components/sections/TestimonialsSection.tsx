import { useState } from "react";
import { ChevronDown, ChevronUp, User } from "lucide-react";
import adrianaImage from "@/assets/testimonial_adriana.jpg";

const testimonials = [
  {
    name: "Adriana Casaroto",
    role: "Psicóloga Sênior e Helper pelo Pathwork",
    image: adrianaImage,
    quote: "Maravilhoso contar com um Psiquiatra humanizado para encaminhamento de clientes, amigos e familiares. Profissional atualizado, cuidadoso e disponível. O recomendo há mais de 14 anos, sólida parceria e confiança.",
  },
  {
    name: "Jackie Yue",
    role: "Sócia-Presidente, Alkhemy Lab",
    image: null,
    quote: "É uma das pessoas mais incríveis que conheço: íntegro, sábio e compassivo - dedicado ao bem maior de todos que o procuram. Ele é parte do seleto grupo de profissionais 'guardiões do conhecimento' a quem confio nosso trabalho alquímico e terapêutico.",
  },
];

const TestimonialsSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="section-white">
      <div className="container-section">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-brand-bold">
          Recomendações
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-brand-complementary/20 rounded-xl p-6 md:p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                {testimonial.image ? (
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-brand"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-brand/20 flex items-center justify-center border-2 border-brand">
                    <User className="w-8 h-8 text-brand" />
                  </div>
                )}
                <div>
                  <h3 className="font-semibold text-lg text-brand-bold">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Mobile: Collapsible */}
              <div className="md:hidden">
                <button 
                  onClick={() => toggleExpand(index)}
                  className="flex items-center gap-2 text-brand font-medium mb-2"
                >
                  {expandedIndex === index ? (
                    <>
                      <ChevronUp className="w-4 h-4" />
                      Ocultar depoimento
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4" />
                      Ver depoimento
                    </>
                  )}
                </button>
                {expandedIndex === index && (
                  <blockquote className="quote-text text-foreground/80 animate-fade-in">
                    "{testimonial.quote}"
                  </blockquote>
                )}
              </div>

              {/* Desktop: Always visible */}
              <blockquote className="hidden md:block quote-text text-foreground/80">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
