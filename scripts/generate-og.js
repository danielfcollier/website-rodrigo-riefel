import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Caminhos
const publicDir = path.join(__dirname, '../public');
const assetsDir = path.join(__dirname, '../src/assets');
const logoPath = path.join(assetsDir, 'logo_official.png');
const outputPath = path.join(publicDir, 'og-image.jpg');

// Cores da Marca
const COLORS = {
  brandBold: '#173056',
  brand: '#3B5986',
  brandComplementary: '#E5DBB9',
  white: '#FFFFFF'
};

async function generateOgImage() {
  console.log('🎨 A gerar OG Image com Logo e Identidade Visual...');

  const width = 1200;
  const height = 630;

  // 1. Fundo com Gradiente da Marca
  const svgBackground = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:${COLORS.brandBold};stop-opacity:1" />
        <stop offset="100%" style="stop-color:${COLORS.brand};stop-opacity:1" />
      </linearGradient>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${COLORS.brandComplementary}" stroke-width="1" opacity="0.05"/>
      </pattern>
    </defs>
    <rect width="${width}" height="${height}" fill="url(#grad)" />
    <rect width="${width}" height="${height}" fill="url(#grid)" />
  </svg>
  `;

  // 2. Texto (Título e Subtítulo)
  // CORREÇÃO: O símbolo '&' foi alterado para '&amp;'
  const svgText = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <style>
      .title { fill: ${COLORS.brandComplementary}; font-family: 'Nunito Sans', sans-serif; font-weight: 800; font-size: 64px; text-transform: uppercase; letter-spacing: 0.05em; }
      .subtitle { fill: ${COLORS.white}; font-family: 'Nunito Sans', sans-serif; font-weight: 400; font-size: 32px; letter-spacing: 0.1em; opacity: 0.9; }
      .crm { fill: ${COLORS.brandComplementary}; font-family: 'Nunito Sans', sans-serif; font-size: 24px; opacity: 0.6; }
    </style>
    
    <text x="50%" y="62%" text-anchor="middle" class="title">
      Dr. Rodrigo Riefel
    </text>
    
    <text x="50%" y="72%" text-anchor="middle" class="subtitle">
      Psiquiatria &amp; Medicina Integrativa
    </text>

    <text x="50%" y="90%" text-anchor="middle" class="crm">
      CRM-SC 11.260 | RQE 11.922
    </text>
  </svg>
  `;

  try {
    if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);

    let compositeInput = [];
    
    const backgroundBuffer = Buffer.from(svgBackground);

    if (fs.existsSync(logoPath)) {
      const resizedLogo = await sharp(logoPath)
        .resize(250, null, { fit: 'contain' })
        .toBuffer();
      
      compositeInput.push({
        input: resizedLogo,
        top: 80,
        left: Math.floor((width - 250) / 2)
      });
    } else {
      console.warn('⚠️ Logo não encontrado em:', logoPath);
    }

    compositeInput.push({
      input: Buffer.from(svgText),
      top: 0,
      left: 0
    });

    await sharp(backgroundBuffer)
      .composite(compositeInput)
      .jpeg({ quality: 90, mozjpeg: true })
      .toFile(outputPath);

    console.log('✅ OG Image gerada com sucesso em: public/og-image.jpg');

  } catch (error) {
    console.error('❌ Erro ao gerar OG Image:', error);
    process.exit(1);
  }
}

generateOgImage();