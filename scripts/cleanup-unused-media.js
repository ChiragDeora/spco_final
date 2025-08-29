import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, '../src/assets');
const srcDir = path.join(__dirname, '../src');

// Files that are definitely unused (based on analysis)
const definitelyUnused = [
  'aboutus.svg', // 23MB file!
  'SVG Arrows from Chirag.svg', // 4MB file
  'heroVideo.MP4', // Duplicate of Home_video.mp4
  'hero_video.MP4', // Another duplicate
  'ntn-notused.svg', // Clearly marked as unused
  'FC2BF4C3-8E7B-4042-9E67-7C3F47CD0BBA_4_5005_c.jpeg', // Random file
];

// Get all files in assets directory
async function getAllAssets() {
  const files = await fs.readdir(assetsDir);
  return files.filter(file => {
    const stat = fs.statSync(path.join(assetsDir, file));
    return stat.isFile();
  });
}

// Search for file usage in source code
async function findFileUsage(fileName) {
  try {
    const { stdout } = await execAsync(`grep -r "${fileName}" ${srcDir} --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" || true`);
    return stdout.trim().split('\n').filter(line => line.length > 0);
  } catch (error) {
    return [];
  }
}

// Get file size in MB
function getFileSizeMB(filePath) {
  const stats = fs.statSync(filePath);
  return (stats.size / 1024 / 1024).toFixed(2);
}

// Main cleanup function
async function cleanupUnusedMedia() {
  console.log('🧹 Starting media cleanup...\n');
  
  const allAssets = await getAllAssets();
  let totalSizeSaved = 0;
  let filesRemoved = 0;
  
  console.log('📋 Analyzing all media files...\n');
  
  for (const file of allAssets) {
    const filePath = path.join(assetsDir, file);
    const fileSize = getFileSizeMB(filePath);
    
    // Check if file is definitely unused
    if (definitelyUnused.includes(file)) {
      console.log(`🗑️  Removing definitely unused file: ${file} (${fileSize}MB)`);
      try {
        await fs.unlink(filePath);
        totalSizeSaved += parseFloat(fileSize);
        filesRemoved++;
      } catch (error) {
        console.error(`❌ Error removing ${file}:`, error.message);
      }
      continue;
    }
    
    // Search for usage in source code
    const usage = await findFileUsage(file);
    
    if (usage.length === 0) {
      console.log(`⚠️  Potentially unused: ${file} (${fileSize}MB)`);
      console.log('   No references found in source code');
      
      // Ask user if they want to remove it
      console.log('   Consider removing if not needed\n');
    } else {
      console.log(`✅ Used: ${file} (${fileSize}MB)`);
      console.log(`   References: ${usage.length}\n`);
    }
  }
  
  console.log('📊 Cleanup Summary:');
  console.log(`Files removed: ${filesRemoved}`);
  console.log(`Total size saved: ${totalSizeSaved.toFixed(2)}MB`);
  
  if (filesRemoved > 0) {
    console.log('\n✨ Cleanup complete!');
  } else {
    console.log('\n✨ No files were removed.');
  }
  
  console.log('\n💡 Recommendations:');
  console.log('- Review the "potentially unused" files above');
  console.log('- Consider compressing large images');
  console.log('- Use WebP format for better compression');
  console.log('- Implement lazy loading for images and videos');
}

// Run cleanup
cleanupUnusedMedia().catch(console.error);
