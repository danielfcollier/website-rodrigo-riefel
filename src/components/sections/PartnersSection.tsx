import alkemyIcon from "@/assets/icon_alkhemy_lab.png";
import pathworkIcon from "@/assets/icon_pathwork.png";
import apaeIcon from "@/assets/icon_apae.jpg";
import acmIcon from "@/assets/icon_acm.png";

const partners = [
  { name: "Alkhemy Lab", icon: alkemyIcon },
  { name: "Pathwork", icon: pathworkIcon },
  { name: "APAE", icon: apaeIcon },
  { name: "ACM", icon: acmIcon },
];

const PartnersSection = () => {
  return (
    <section className="section-brand">
      <div className="container-section">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-foreground">
          Instituições e Grupos Parceiros
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="flex flex-col items-center gap-3 p-4 hover:scale-105 transition-transform"
            >
              <div className="w-20 h-20 bg-primary-foreground rounded-lg flex items-center justify-center p-2 shadow-lg">
                <img 
                  src={partner.icon} 
                  alt={partner.name}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <span className="text-primary-foreground font-medium text-sm">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
