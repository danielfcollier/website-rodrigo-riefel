import { Button } from "@/components/ui/button";
import logoOfficial from "@/assets/logo_official.png?optimized";

const CTA_LINK = "https://api.whatsapp.com/send?phone=5548988020380&text=Ol%C3%A1%20Dr.%20Rodrigo%20Riefel,%0A%0Aestou%20entrando%20em%20contato%20para%20agendar%20uma%20consulta.%0A%0AMe%20chamo";

const Header = () => {
  return (
    <header className="bg-brand py-4 sticky top-0 z-50 shadow-md">
      <div className="container-section py-0">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img 
              src={logoOfficial} 
              alt="Logo Dr. Rodrigo Riefel" 
              width={48}
              height={48}
              className="h-12 w-auto"
              loading="eager"
            />
            <span className="text-brand-complementary font-bold text-3xl tracking-wide uppercase">
              RODRIGO RIEFEL
            </span>
          </a>

          <div className="flex items-center gap-6">
            <a 
              href="/sobre" 
              className="text-brand-complementary font-bold text-sm tracking-widest uppercase hover:text-white transition-colors"
            >
              Sobre
            </a>
            
            <Button variant="cta" size="lg" className="hidden md:flex text-lg px-8" asChild>
              <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
                Agendar Consulta
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;