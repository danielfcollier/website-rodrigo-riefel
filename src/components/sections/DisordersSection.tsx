import { HeartPulse, Puzzle, Pill, Compass } from "lucide-react";

const disorders = [
  {
    icon: HeartPulse,
    title: "Aflições e Distúrbios",
    description: "Tratamento especializado para ansiedade, depressão e outros transtornos.",
  },
  {
    icon: Puzzle,
    title: "Emoções em Conflito",
    description: "Apoio para lidar com conflitos emocionais e relacionamentos difíceis.",
  },
  {
    icon: Pill,
    title: "Exagero em Medicamentos",
    description: "Revisão e otimização do uso de medicamentos psiquiátricos.",
  },
  {
    icon: Compass,
    title: "Falta de Direcionamento",
    description: "Orientação para encontrar propósito e clareza na vida.",
  },
];

const DisordersSection = () => {
  return (
    <section id="transtornos" className="section-white">
      <div className="container-section">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-brand-bold">
          Transtornos À Saúde Mental e Emocional
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {disorders.map((item, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-6 bg-brand/10 rounded-lg hover:bg-brand/15 transition-colors"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-3 bg-brand-complementary rounded-lg">
                <item.icon className="w-8 h-8 text-brand-bold" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-brand-bold">
                  {item.title}
                </h3>
                <p className="text-foreground/80">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <blockquote className="max-w-3xl mx-auto text-center">
          <p className="quote-text text-foreground/90 text-center">
            "O foco é o tratamento da pessoa e não da doença. Isso direciona uma busca 
            para as causas mais profundas dos sintomas e ajuda na verdadeira superação dos distúrbios."
          </p>
        </blockquote>
      </div>
    </section>
  );
};

export default DisordersSection;
