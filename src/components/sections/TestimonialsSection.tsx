import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import adrianaImage from "@/assets/testimonial_adriana.jpg";
import jackieImage from "@/assets/testimonial_jackie.png";

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
    image: jackieImage,
    quote: "É uma das pessoas mais incríveis que conheço: íntegro, sábio e compassivo - dedicado ao bem maior de todos que o procuram. Ele é parte do seleto grupo de profissionais 'guardiões do conhecimento' a quem confio nosso trabalho alquímico e terapêutico.",
  },
];

const TestimonialsSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="section-brand">
      <div className="container-section">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-primary-foreground/10 rounded-xl p-6 md:p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-brand-complementary"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-semibold text-lg text-primary-foreground">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-primary-foreground/70">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Mobile: Collapsible */}
              <div className="md:hidden">
                <button 
                  onClick={() => toggleExpand(index)}
                  className="flex items-center gap-2 text-brand-complementary font-medium mb-2"
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
                  <blockquote className="quote-text text-primary-foreground/80 animate-fade-in">
                    "{testimonial.quote}"
                  </blockquote>
                )}
              </div>

              {/* Desktop: Always visible */}
              <blockquote className="hidden md:block quote-text text-primary-foreground/80">
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
