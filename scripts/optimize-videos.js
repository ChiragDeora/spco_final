import { exec } from 'child_process';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { promisify } from 'util';

const execAsync = promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, '../src/assets');
const optimizedDir = path.join(__dirname, '../src/assets/optimized');

// Create optimized directory if it doesn't exist
await fs.mkdir(optimizedDir, { recursive: true });

// Video optimization settings
const videoSettings = {
  webm: {
    codec: 'libvpx-vp9',
    quality: '30',
    crf: '30',
    preset: 'medium'
  },
  mp4: {
    codec: 'libx264',
    quality: '23',
    preset: 'medium',
    profile: 'main'
  }
};

// Check if FFmpeg is installed
async function checkFFmpeg() {
  try {
    await execAsync('ffmpeg -version');
    return true;
  } catch (error) {
    console.error('❌ FFmpeg is not installed. Please install FFmpeg to optimize videos.');
    console.log('Installation instructions:');
    console.log('  macOS: brew install ffmpeg');
    console.log('  Ubuntu: sudo apt install ffmpeg');
    console.log('  Windows: Download from https://ffmpeg.org/download.html');
    return false;
  }
}

// Get all video files
async function getVideoFiles(dir) {
  const files = await fs.readdir(dir);
  return files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.mp4', '.avi', '.mov', '.wmv', '.flv', '.webm'].includes(ext);
  });
}

// Optimize a single video
async function optimizeVideo(inputPath, outputPath, format) {
  try {
    const settings = format === 'webm' ? videoSettings.webm : videoSettings.mp4;
    
    let command;
    if (format === 'webm') {
      command = `ffmpeg -i "${inputPath}" -c:v ${settings.codec} -crf ${settings.crf} -preset ${settings.preset} -b:v 0 -c:a libopus -b:a 128k "${outputPath}" -y`;
    } else {
      command = `ffmpeg -i "${inputPath}" -c:v ${settings.codec} -crf ${settings.quality} -preset ${settings.preset} -profile:v ${settings.profile} -c:a aac -b:a 128k "${outputPath}" -y`;
    }
    
    await execAsync(command);
    
    const originalSize = (await fs.stat(inputPath)).size;
    const optimizedSize = (await fs.stat(outputPath)).size;
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ ${path.basename(inputPath)}: ${(originalSize / 1024 / 1024).toFixed(1)}MB → ${(optimizedSize / 1024 / 1024).toFixed(1)}MB (${savings}% smaller)`);
    
    return { originalSize, optimizedSize, savings };
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
    return null;
  }
}

// Generate multiple formats
async function generateMultipleFormats(inputPath, nameWithoutExt) {
  const results = [];
  
  // Generate optimized MP4
  const mp4Path = path.join(optimizedDir, `${nameWithoutExt}-optimized.mp4`);
  const mp4Result = await optimizeVideo(inputPath, mp4Path, 'mp4');
  if (mp4Result) results.push({ format: 'mp4', ...mp4Result });
  
  // Generate WebM for better compression
  const webmPath = path.join(optimizedDir, `${nameWithoutExt}.webm`);
  const webmResult = await optimizeVideo(inputPath, webmPath, 'webm');
  if (webmResult) results.push({ format: 'webm', ...webmResult });
  
  return results;
}

// Main optimization function
async function optimizeVideos() {
  console.log('🚀 Starting video optimization...\n');
  
  const ffmpegAvailable = await checkFFmpeg();
  if (!ffmpegAvailable) {
    return;
  }
  
  const videoFiles = await getVideoFiles(assetsDir);
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  
  for (const file of videoFiles) {
    const inputPath = path.join(assetsDir, file);
    const ext = path.extname(file).toLowerCase();
    const nameWithoutExt = path.basename(file, ext);
    
    // Skip if already optimized
    if (file.includes('optimized')) {
      continue;
    }
    
    console.log(`Processing: ${file}`);
    const results = await generateMultipleFormats(inputPath, nameWithoutExt);
    
    for (const result of results) {
      totalOriginalSize += result.originalSize;
      totalOptimizedSize += result.optimizedSize;
    }
    
    console.log('');
  }
  
  console.log('📊 Video Optimization Summary:');
  console.log(`Original size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Optimized size: ${(totalOptimizedSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Total savings: ${((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1)}%`);
  
  console.log('\n✨ Video optimization complete!');
  console.log('Optimized videos are saved in src/assets/optimized/');
  console.log('\n💡 Usage tips:');
  console.log('- Use WebM format for best compression');
  console.log('- Use MP4 format for maximum compatibility');
  console.log('- Consider implementing lazy loading for videos');
}

// Run optimization
optimizeVideos().catch(console.error);
