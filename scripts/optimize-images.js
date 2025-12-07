import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurações de caminhos
const srcDir = path.join(__dirname, '../src/assets');
const outputDir = path.join(__dirname, '../public/optimized');

// Configurações de tamanhos e qualidade (baseado no Website Turbo)
const sizes = {
  mobile: { width: 768, quality: 65 },
  tablet: { width: 1024, quality: 70 },
  desktop: { width: 1920, quality: 75 }
};

async function optimizeImages() {
  console.log('🖼️  A iniciar otimização de imagens...');

  // Criar diretório de saída se não existir
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Ler arquivos da pasta assets
  try {
    const files = fs.readdirSync(srcDir);

    for (const file of files) {
      const fullPath = path.join(srcDir, file);
      const stat = fs.statSync(fullPath);

      // Processar apenas arquivos (ignorar pastas)
      if (stat.isFile()) {
        const ext = path.extname(file).toLowerCase();
        
        // Verificar se é imagem suportada
        if (['.jpg', '.jpeg', '.png'].includes(ext)) {
          const image = sharp(fullPath);
          const metadata = await image.metadata();
          const baseName = path.basename(file, ext); // Nome sem extensão

          console.log(`➡️  A processar: ${file}`);

          for (const [sizeName, config] of Object.entries(sizes)) {
            // Só redimensiona se a original for maior que o alvo para não perder qualidade
            const shouldResize = metadata.width > config.width;
            const resizeOptions = { withoutEnlargement: true };

            // 1. Gerar versão WebP (Mais leve, moderna)
            await image.clone()
              .resize(shouldResize ? config.width : null, null, resizeOptions)
              .webp({ quality: config.quality, effort: 4 })
              .toFile(path.join(outputDir, `${baseName}-${sizeName}.webp`));
              
            // 2. Gerar versão JPEG (Compatibilidade, otimizada)
            await image.clone()
              .resize(shouldResize ? config.width : null, null, resizeOptions)
              .jpeg({ quality: config.quality, mozjpeg: true })
              .toFile(path.join(outputDir, `${baseName}-${sizeName}.jpg`));
          }
        }
      }
    }
    console.log('✨ Imagens otimizadas com sucesso em public/optimized/');
  } catch (error) {
    console.error('❌ Erro ao otimizar imagens:', error);
    process.exit(1);
  }
}

optimizeImages();