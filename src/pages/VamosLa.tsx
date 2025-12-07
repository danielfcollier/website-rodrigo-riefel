import { Button } from "@/components/ui/button";
import { Youtube, Globe, Music, MessageCircle } from "lucide-react";
import profileImage from "@/assets/rodrigo-riefel_profile.jpeg?optimized";

const CTA_LINK = "https://api.whatsapp.com/send?phone=5548988020380&text=Ol%C3%A1%20Dr.%20Rodrigo%20Riefel,%0A%0Aestou%20entrando%20em%20contato%20para%20agendar%20uma%20consulta.%0A%0AMe%20chamo";
const INSTAGRAM_LINK = "https://www.instagram.com/rodrigo.riefel";

const links = [
  {
    label: "Agendar Consulta",
    sublabel: "Falar no WhatsApp",
    href: CTA_LINK,
    type: "whatsapp", // Tipo especial para estilização
    icon: MessageCircle,
  },
  {
    label: "Visitar Site Oficial",
    href: "/",
    type: "default",
    icon: Globe,
  },
  {
    label: "Canal PodSer (YouTube)",
    href: "https://www.youtube.com/channel/UCuIqx83JaRv-Fqf-1jTiUnA",
    type: "default",
    icon: Youtube,
  },
  {
    label: "PodSer no Spotify",
    href: "https://creators.spotify.com/pod/profile/podserconsciente/",
    type: "default",
    icon: Music,
  },
];

const VamosLa = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-bold to-brand text-white flex flex-col font-sans">
      
      <main className="flex-1 container max-w-md mx-auto px-6 py-12 flex flex-col items-center animate-fade-in">
        
        {/* Avatar */}
        <div className="mb-8 relative group cursor-pointer">
          <div className="absolute inset-0 bg-brand-complementary blur-2xl opacity-20 group-hover:opacity-30 transition-opacity rounded-full duration-500"></div>
          <div className="w-32 h-32 rounded-full border-4 border-brand-complementary/30 p-1 relative z-10 shadow-2xl overflow-hidden bg-brand-bold">
            <img 
              src={profileImage} 
              alt="Dr. Rodrigo Riefel"
              className="w-full h-full rounded-full object-cover object-[60%_25%] hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Cabeçalho */}
        <div className="text-center mb-10 space-y-2">
          <h1 className="text-3xl font-bold text-brand-complementary tracking-tight">
            Dr. Rodrigo Riefel
          </h1>
          <p className="text-brand-complementary/80 text-sm font-medium tracking-widest uppercase border-b border-brand-complementary/20 pb-4 inline-block px-8">
            Psiquiatra | Medicina Integrativa
          </p>
        </div>

        {/* Lista de Botões */}
        <div className="w-full flex flex-col gap-4 mb-12">
          {links.map((link, index) => (
            <Button
              key={index}
              asChild
              className={`w-full h-auto py-4 px-6 text-base font-medium rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg flex items-center justify-between group ${
                link.type === "whatsapp"
                  ? "bg-[#25D366] hover:bg-[#128C7E] text-white border-transparent shadow-[0_0_15px_rgba(37,211,102,0.4)]" // Estilo WhatsApp Puro
                  : "bg-black/20 text-white hover:bg-black/30 border border-white/5 backdrop-blur-sm"
              }`}
            >
              <a 
                href={link.href} 
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <div className="flex flex-col items-start text-left">
                  <span className={link.type === "whatsapp" ? "font-bold text-lg" : "font-medium"}>
                    {link.label}
                  </span>
                  {link.sublabel && (
                    <span className="text-xs opacity-90 font-normal">{link.sublabel}</span>
                  )}
                </div>
                
                {link.icon && (
                  <link.icon className={`w-6 h-6 transition-transform duration-300 ${
                    link.type === "whatsapp" ? "text-white" : "text-brand-complementary"
                  }`} />
                )}
              </a>
            </Button>
          ))}
        </div>

        {/* Rodapé Social */}
        <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-6">
                {/* Link do Instagram Atualizado */}
                <SocialLink href={INSTAGRAM_LINK} icon={Globe} label="Instagram" />
                <SocialLink href={CTA_LINK} icon={MessageCircle} label="WhatsApp" />
            </div>
        </div>

      </main>
      
      <footer className="py-6 text-center text-[10px] text-white/20">
        <p>© {new Date().getFullYear()} Dr. Rodrigo Riefel. CRM-SC 11.260</p>
      </footer>
    </div>
  );
};

const SocialLink = ({ href, icon: Icon, label }: { href: string, icon: any, label: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-brand-complementary hover:scale-110 transition-all border border-white/5 text-white/70"
    aria-label={label}
  >
    <Icon className="w-5 h-5" />
  </a>
);

export default VamosLa;