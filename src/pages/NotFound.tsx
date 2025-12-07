import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Map } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-brand-bold text-white p-6 font-sans text-center relative overflow-hidden">
      
      {/* Elemento Decorativo de Fundo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-complementary/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      
      <div className="relative z-10 max-w-md w-full flex flex-col items-center animate-fade-in">
        
        {/* Ícone Temático */}
        <div className="mb-8 p-6 bg-white/5 rounded-full border border-white/10 shadow-2xl backdrop-blur-sm">
            <Map className="w-16 h-16 text-brand-complementary" />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-brand-complementary mb-2 font-serif opacity-90">
          404
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
          Página não encontrada
        </h2>
        
        <p className="text-white/70 mb-10 text-lg leading-relaxed">
          Parece que nos desviámos do caminho. A página que procura não existe ou foi movida.
        </p>

        <Button 
          variant="default"
          size="lg"
          className="bg-brand-complementary text-brand-bold hover:bg-white hover:text-brand-bold font-bold shadow-lg transition-all gap-2 px-8 py-6 text-lg rounded-xl"
          asChild
        >
          <a href="/">
            <Home className="w-5 h-5" />
            Voltar ao Início
          </a>
        </Button>
      </div>

      <div className="absolute bottom-8 text-white/10 text-xs font-mono">
        Rota: {location.pathname}
      </div>
    </div>
  );
};

export default NotFound;