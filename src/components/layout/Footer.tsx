import { Instagram } from "lucide-react";
import logoOfficial from "@/assets/logo_official.png?optimized";

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
                width={40}
                height={40}
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

          <nav className="flex items-center gap-6 text-sm text-brand-complementary">
            <a href="/sobre" className="hover:opacity-80 transition-opacity">
              Sobre
            </a>
            <a href="/contato" className="hover:opacity-80 transition-opacity">
              Contato
            </a>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-brand-complementary/20 flex flex-col items-center gap-4">
          <a 
            href="https://www.instagram.com/rodrigo.riefel" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-brand-complementary hover:opacity-80 transition-opacity"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a 
            href="https://websiteturbo.com.br" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-brand-complementary/60 hover:text-brand-complementary transition-colors"
          >
            Desenvolvido por Website Turbo
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
