import { Quote } from "lucide-react";
import testimonialAdriana from "@/assets/testimonial_adriana.jpg?optimized";
import testimonialJackie from "@/assets/testimonial_jackie.png"; // Importação da imagem da Jackie

const testimonials = [
  {
    name: "Adriana Casarotto",
    role: "Psicóloga Sênior",
    image: testimonialAdriana,
    text: "Maravilhoso contar com um Psiquiatra humanizado para encaminhamento de clientes, amigos e familiares. Profissional atualizado, cuidadoso e disponível.",
  },
  {
    name: "Jackie Yue", // Nome provisório
    role: "Sócia-Presidente, Alkhemy Lab", // Cargo provisório
    image: testimonialJackie,
    text: "Espaço para o depoimento da Jackie. Aqui você pode descrever a experiência dela com o Dr. Rodrigo, focando nos resultados e no atendimento humanizado.",
  }
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="section-brand relative overflow-hidden">
      {/* Background Decorativo Suave */}
      <div className="absolute top-0 left-0 w-full h-full bg-brand-bold/50 pointer-events-none" />
      
      <div className="container-section relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-complementary">
            Depoimentos
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            O reconhecimento de quem confia no nosso trabalho.
          </p>
        </div>

        {/* Grid ajustado para 2 colunas centralizadas */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((item, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="mb-6 relative">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-brand-complementary p-1">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    width={80}
                    height={80}
                    className="w-full h-full rounded-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-brand-complementary text-brand-bold p-1.5 rounded-full">
                  <Quote className="w-3 h-3 fill-current" />
                </div>
              </div>
              
              <p className="text-white/90 italic mb-6 text-sm leading-relaxed">
                "{item.text}"
              </p>
              
              <div>
                <h4 className="font-bold text-brand-complementary">{item.name}</h4>
                <p className="text-xs text-white/50 uppercase tracking-wider mt-1">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;