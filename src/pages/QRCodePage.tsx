import QRCode from "react-qr-code";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import logoOfficial from "@/assets/logo_official.png?optimized";

const QRCodePage = () => {
  const websiteUrl = "https://rodrigoriefel.com.br";

  return (
    <div className="min-h-screen bg-brand-bold flex flex-col items-center justify-center p-6 text-white font-sans">
      
      {/* Container Principal */}
      <div className="max-w-sm w-full bg-white/5 border border-brand-complementary/20 backdrop-blur-sm rounded-3xl p-8 flex flex-col items-center shadow-2xl animate-fade-in">
        
        {/* Logo */}
        <div className="mb-8">
           <img 
              src={logoOfficial} 
              alt="Dr. Rodrigo Riefel" 
              className="h-16 w-auto opacity-90"
            />
        </div>

        {/* QR Code Container */}
        <div className="bg-white p-4 rounded-xl shadow-inner mb-6">
          <div className="h-auto w-full max-w-[200px]">
            <QRCode
              id="qrcode-svg"
              size={256}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value={websiteUrl}
              viewBox={`0 0 256 256`}
              fgColor="#173056" 
              bgColor="#FFFFFF"
              level="H" 
            />
          </div>
        </div>

        {/* Textos */}
        <h1 className="text-xl font-bold text-brand-complementary mb-2 text-center uppercase tracking-wide">
          Acesse o Site Oficial
        </h1>
        <p className="text-white/60 text-sm text-center mb-8">
          Aponte a câmera do seu celular para o QR Code acima.
        </p>

        {/* Botões de Ação - Contraste Corrigido */}
        <div className="w-full flex flex-col gap-3">
            <Button 
                className="w-full bg-brand-complementary text-brand-bold hover:bg-white hover:text-brand-bold font-bold shadow-lg transition-all"
                asChild
            >
                <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Abrir no Navegador
                </a>
            </Button>
        </div>
      </div>
      
      <footer className="mt-8 text-white/20 text-xs">
        © {new Date().getFullYear()} Dr. Rodrigo Riefel
      </footer>
    </div>
  );
};

export default QRCodePage;