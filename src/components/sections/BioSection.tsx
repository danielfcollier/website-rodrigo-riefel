import { Brain, Compass, Stethoscope } from "lucide-react";

const credentials = [
  {
    icon: Brain,
    title: "Médico, Psiquiatra e Psicoterapeuta",
  },
  {
    icon: Compass,
    title: "Terapeuta Especialista em Autoconhecimento",
  },
  {
    icon: Stethoscope,
    title: "Referência em Abordagens Integrativas",
  },
];

const BioSection = () => {
  return (
    <section className="section-white bg-slate-50">
      <div className="container-section">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center">
            <div className="relative inline-block">
              {/* OTIMIZAÇÃO: Imagem Responsiva */}
              <picture>
                <source srcSet="/optimized/rodrigo-riefel_profile-mobile.webp" media="(max-width: 640px)" type="image/webp" />
                <source srcSet="/optimized/rodrigo-riefel_profile-tablet.webp" type="image/webp" />
                <img 
                  src="/optimized/rodrigo-riefel_profile-tablet.jpg" 
                  alt="Dr. Rodrigo Riefel - Psiquiatra"
                  width={320}
                  height={320}
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover object-[60%_25%] border-4 border-brand-complementary shadow-2xl mx-auto"
                  loading="lazy"
                />
              </picture>
            </div>
            
            {/* Melhor Contraste */}
            <h2 className="text-3xl md:text-4xl font-bold mt-8 text-brand-bold uppercase tracking-wide">
              DR. RODRIGO RIEFEL
            </h2>
            <p className="text-brand-bold/80 font-semibold uppercase tracking-wider mt-2">
              CRM-SC 11.260 | RQE 11.922
            </p>
          </div>

          <div className="space-y-6">
            {credentials.map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-5 bg-white border border-brand/10 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-3 bg-brand-complementary/20 rounded-lg shrink-0">
                  <item.icon className="w-6 h-6 text-brand-bold" />
                </div>
                <span className="text-lg text-brand-bold font-medium">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;  