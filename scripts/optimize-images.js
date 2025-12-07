import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, '../src/assets');
const outputDir = path.join(__dirname, '../public/optimized');

// Configurações refinadas para máxima performance
const sizes = {
  thumbnail: { width: 150, quality: 80 }, 
  mobile: { width: 640, quality: 60 },    // Qualidade reduzida para economizar bytes no 4G
  tablet: { width: 1024, quality: 75 },
  desktop: { width: 1920, quality: 75 }
};

async function optimizeImages() {
  console.log('🖼️  A iniciar otimização de imagens (Modo Performance)...');

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  try {
    const files = fs.readdirSync(srcDir);

    for (const file of files) {
      const fullPath = path.join(srcDir, file);
      const stat = fs.statSync(fullPath);

      if (stat.isFile()) {
        const ext = path.extname(file).toLowerCase();
        
        if (['.jpg', '.jpeg', '.png'].includes(ext)) {
          const image = sharp(fullPath);
          const metadata = await image.metadata();
          const baseName = path.basename(file, ext);

          console.log(`➡️  A processar: ${file}`);

          for (const [sizeName, config] of Object.entries(sizes)) {
            const shouldResize = sizeName === 'thumbnail' || (metadata.width > config.width);
            const resizeOptions = { withoutEnlargement: sizeName !== 'thumbnail' };

            if (shouldResize) {
                // WebP com 'effort: 6' (Compressão máxima)
                await image.clone()
                .resize(config.width, null, resizeOptions)
                .webp({ quality: config.quality, effort: 6, smartSubsample: true }) 
                .toFile(path.join(outputDir, `${baseName}-${sizeName}.webp`));
                
                // JPEG otimizado
                await image.clone()
                .resize(config.width, null, resizeOptions)
                .jpeg({ quality: config.quality, mozjpeg: true })
                .toFile(path.join(outputDir, `${baseName}-${sizeName}.jpg`));
            }
          }
        }
      }
    }
    console.log('✨ Imagens otimizadas com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao otimizar imagens:', error);
    process.exit(1);
  }
}

optimizeImages();