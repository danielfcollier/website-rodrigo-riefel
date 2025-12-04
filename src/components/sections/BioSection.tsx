import { Brain, Compass, Stethoscope } from "lucide-react";
import profileImage from "@/assets/rodrigo-riefel_profile.jpeg";

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
    <section className="section-white">
      <div className="container-section">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center">
            <div className="relative inline-block">
              <img 
                src={profileImage} 
                alt="Dr. Rodrigo Riefel"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover object-[75%_top] border-4 border-brand-complementary shadow-2xl mx-auto"
                loading="lazy"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mt-8 text-brand uppercase">
              DR. RODRIGO RIEFEL
            </h2>
            <p className="text-brand uppercase tracking-wider mt-2">
              CRM-SC 11.260 | RQE 11.922
            </p>
          </div>

          <div className="space-y-6">
            {credentials.map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-4 bg-brand/10 rounded-lg"
              >
                <div className="p-3 bg-brand-complementary rounded-lg">
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
