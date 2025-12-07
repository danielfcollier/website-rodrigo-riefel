import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import VamosLa from "./pages/VamosLa";
import QRCodePage from "./pages/QRCodePage";
import NotFound from "./pages/NotFound";
import Contato from "./pages/Contato"; // Se existir, mantenha. Se não, remova esta linha.

const App = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/sobre" element={<Sobre />} />
    <Route path="/vamos-la" element={<VamosLa />} />
    <Route path="/qrcode" element={<QRCodePage />} />
    <Route path="/contato" element={<Contato />} /> {/* Remova se não tiver a página Contato */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;