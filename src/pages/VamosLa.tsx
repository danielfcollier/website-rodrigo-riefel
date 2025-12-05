import { Button } from "@/components/ui/button";
import { Youtube, Globe, Music } from "lucide-react";
import profileImage from "@/assets/rodrigo-riefel_profile.jpeg?optimized";

const CTA_LINK = "https://api.whatsapp.com/send?phone=5548988020380&text=Ol%C3%A1%20Dr.%20Rodrigo%20Riefel,%0A%0Aestou%20entrando%20em%20contato%20para%20agendar%20uma%20consulta.%0A%0AMe%20chamo";

const links = [
  {
    label: "Agendar Consulta",
    href: CTA_LINK,
    variant: "whatsapp" as const,
    icon: null,
  },
  {
    label: "Site Oficial",
    href: "/",
    variant: "brand" as const,
    icon: Globe,
  },
  {
    label: "PodSer no Youtube",
    href: "https://www.youtube.com/channel/UCuIqx83JaRv-Fqf-1jTiUnA",
    variant: "brand" as const,
    icon: Youtube,
  },
  {
    label: "PodSer no Spotify",
    href: "https://creators.spotify.com/pod/profile/podserconsciente/",
    variant: "brand" as const,
    icon: Music,
  },
];

const VamosLa = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-bold to-brand flex items-center justify-center p-6">
      <div className="w-full max-w-sm flex flex-col items-center gap-6">
        <div className="relative">
          <img 
            src={profileImage} 
            alt="Dr. Rodrigo Riefel"
            width={128}
            height={128}
            className="w-32 h-32 rounded-full object-cover object-[60%_25%] border-4 border-brand-complementary shadow-2xl"
          />
        </div>

        <div className="text-center">
          <h1 className="text-2xl font-bold text-brand-complementary uppercase">
            RODRIGO RIEFEL
          </h1>
          <p className="text-brand-complementary/70 text-sm uppercase tracking-wider mt-1">
            Psiquiatra
          </p>
        </div>

        <div className="w-full flex flex-col gap-3">
          {links.map((link, index) => (
            <Button 
              key={index}
              variant={link.variant}
              size="lg"
              className="w-full justify-center gap-2"
              asChild
            >
              <a 
                href={link.href} 
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {link.icon && <link.icon className="w-5 h-5" />}
                {link.label}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VamosLa;
