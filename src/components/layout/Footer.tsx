import { Instagram } from "lucide-react";
import logoOfficial from "@/assets/logo_official.png";

const Footer = () => {
  return (
    <footer className="bg-brand text-primary-foreground py-12">
      <div className="container-section py-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-3">
              <img 
                src={logoOfficial} 
                alt="Logo Dr. Rodrigo Riefel" 
                className="h-10 w-auto"
                loading="lazy"
              />
              <div className="flex flex-col">
                <span className="font-bold text-2xl tracking-wide uppercase text-brand-complementary">
                  RODRIGO RIEFEL
                </span>
                <span className="text-sm text-brand-complementary uppercase tracking-wider">
                  CRM-SC 11.260 | RQE 11.922
                </span>
              </div>
            </div>
          </div>

          <nav className="flex items-center gap-6 text-sm">
            <a href="/sobre" className="hover:text-brand-complementary transition-colors">
              Sobre
            </a>
            <a href="/contato" className="hover:text-brand-complementary transition-colors">
              Contato
            </a>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 flex flex-col items-center gap-4">
          <a 
            href="https://www.instagram.com/rodrigo.riefel" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary-foreground hover:text-brand-complementary transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a 
            href="https://websiteturbo.com.br" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          >
            Desenvolvido por Website Turbo
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
