import QRCode from 'qrcode';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, '../public');

async function generateQRCode() {
  console.log('📱 Gerando QR Code Estático...');

  const websiteUrl = "https://rodrigoriefel.com.br";
  const outputPath = path.join(publicDir, 'qrcode.png');

  // Cores da marca (Brand Bold)
  const colorDark = '#173056'; 
  const colorLight = '#FFFFFF'; // Fundo transparente não é ideal para QR leitores em dark mode, melhor branco.

  try {
    // Garante que a pasta existe
    if (!fs.existsSync(publicDir)){
        fs.mkdirSync(publicDir);
    }

    await QRCode.toFile(outputPath, websiteUrl, {
      width: 1000, // Alta resolução para impressão
      margin: 2,
      color: {
        dark: colorDark,
        light: colorLight
      },
      errorCorrectionLevel: 'H'
    });

    console.log(`✅ QR Code gerado com sucesso em: ${outputPath}`);
  } catch (err) {
    console.error('❌ Erro ao gerar QR Code:', err);
    process.exit(1);
  }
}

generateQRCode();