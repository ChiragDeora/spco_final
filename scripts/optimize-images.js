import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, '../src/assets');
const optimizedDir = path.join(__dirname, '../src/assets/optimized');

// Create optimized directory if it doesn't exist
await fs.mkdir(optimizedDir, { recursive: true });

// Image optimization settings
const optimizationSettings = {
  jpeg: {
    quality: 80,
    progressive: true,
    mozjpeg: true
  },
  png: {
    quality: 80,
    compressionLevel: 9
  },
  webp: {
    quality: 80,
    effort: 6
  }
};

// Get all image files
async function getImageFiles(dir) {
  const files = await fs.readdir(dir);
  return files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
  });
}

// Optimize a single image
async function optimizeImage(inputPath, outputPath, format) {
  try {
    let sharpInstance = sharp(inputPath);
    
    // Resize if image is too large (max 1920px width/height)
    const metadata = await sharpInstance.metadata();
    if (metadata.width > 1920 || metadata.height > 1920) {
      sharpInstance = sharpInstance.resize(1920, 1920, {
        fit: 'inside',
        withoutEnlargement: true
      });
    }
    
    // Apply format-specific optimizations
    switch (format) {
      case 'jpeg':
        sharpInstance = sharpInstance.jpeg(optimizationSettings.jpeg);
        break;
      case 'png':
        sharpInstance = sharpInstance.png(optimizationSettings.png);
        break;
      case 'webp':
        sharpInstance = sharpInstance.webp(optimizationSettings.webp);
        break;
    }
    
    await sharpInstance.toFile(outputPath);
    
    const originalSize = (await fs.stat(inputPath)).size;
    const optimizedSize = (await fs.stat(outputPath)).size;
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ ${path.basename(inputPath)}: ${(originalSize / 1024).toFixed(1)}KB → ${(optimizedSize / 1024).toFixed(1)}KB (${savings}% smaller)`);
    
    return { originalSize, optimizedSize, savings };
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
    return null;
  }
}

// Generate WebP versions
async function generateWebP(inputPath, outputPath) {
  try {
    const sharpInstance = sharp(inputPath);
    const metadata = await sharpInstance.metadata();
    
    if (metadata.width > 1920 || metadata.height > 1920) {
      sharpInstance.resize(1920, 1920, {
        fit: 'inside',
        withoutEnlargement: true
      });
    }
    
    await sharpInstance.webp(optimizationSettings.webp).toFile(outputPath);
    
    const originalSize = (await fs.stat(inputPath)).size;
    const webpSize = (await fs.stat(outputPath)).size;
    const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ ${path.basename(inputPath)} → WebP: ${(originalSize / 1024).toFixed(1)}KB → ${(webpSize / 1024).toFixed(1)}KB (${savings}% smaller)`);
    
    return { originalSize, webpSize, savings };
  } catch (error) {
    console.error(`❌ Error generating WebP for ${inputPath}:`, error.message);
    return null;
  }
}

// Main optimization function
async function optimizeImages() {
  console.log('🚀 Starting image optimization...\n');
  
  const imageFiles = await getImageFiles(assetsDir);
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  let totalWebPSize = 0;
  
  for (const file of imageFiles) {
    const inputPath = path.join(assetsDir, file);
    const ext = path.extname(file).toLowerCase();
    const nameWithoutExt = path.basename(file, ext);
    
    // Skip if already optimized
    if (file.includes('optimized') || file.includes('webp')) {
      continue;
    }
    
    // Determine format
    let format = 'jpeg';
    if (ext === '.png') format = 'png';
    else if (ext === '.webp') format = 'webp';
    
    // Optimize original format
    const optimizedPath = path.join(optimizedDir, `${nameWithoutExt}-optimized${ext}`);
    const result = await optimizeImage(inputPath, optimizedPath, format);
    
    if (result) {
      totalOriginalSize += result.originalSize;
      totalOptimizedSize += result.optimizedSize;
    }
    
    // Generate WebP version (except for already WebP files)
    if (ext !== '.webp') {
      const webpPath = path.join(optimizedDir, `${nameWithoutExt}.webp`);
      const webpResult = await generateWebP(inputPath, webpPath);
      
      if (webpResult) {
        totalWebPSize += webpResult.webpSize;
      }
    }
  }
  
  console.log('\n📊 Optimization Summary:');
  console.log(`Original size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Optimized size: ${(totalOptimizedSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`WebP size: ${(totalWebPSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Total savings: ${((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1)}%`);
  console.log(`WebP savings: ${((totalOriginalSize - totalWebPSize) / totalOriginalSize * 100).toFixed(1)}%`);
  
  console.log('\n✨ Image optimization complete!');
  console.log('Optimized images are saved in src/assets/optimized/');
}

// Run optimization
optimizeImages().catch(console.error);
