import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Preprocess image for OCR
 * @param {string} inputPath - Path to input image
 * @param {string} outputPath - Path to save processed image
 */
async function preprocessImage(inputPath, outputPath) {
  try {
    console.log(`Processing: ${inputPath}`);
    
    await sharp(inputPath)
      // Convert to grayscale
      .grayscale()
      
      // Enhance contrast
      .normalize()
      
      // Remove noise
      .median(3)
      
      // Sharpen text
      .sharpen()
      
      // Convert to black and white
      .threshold(128)
      
      // Save result
      .toFile(outputPath);
      
    console.log(`✓ Saved to: ${outputPath}`);
    
    // Get file info
    const stats = await sharp(outputPath).metadata();
    console.log(`  Dimensions: ${stats.width}x${stats.height}`);
    console.log(`  Format: ${stats.format}`);
    
  } catch (error) {
    console.error('Error processing image:', error.message);
  }
}

/**
 * Process all images in data directory
 */
async function processAll() {
  const dataDir = path.join(__dirname, '..', 'data');
  const outputDir = path.join(__dirname, '..', 'output');
  
  // Ensure output directory exists
  await fs.mkdir(outputDir, { recursive: true });
  
  // Get all image files
  const files = await fs.readdir(dataDir);
  const imageFiles = files.filter(f => 
    /\.(jpg|jpeg|png|tiff|bmp)$/i.test(f)
  );
  
  if (imageFiles.length === 0) {
    console.log('No images found in data directory');
    console.log('Add images to:', dataDir);
    return;
  }
  
  console.log(`Found ${imageFiles.length} images to process\n`);
  
  // Process each image
  for (const file of imageFiles) {
    const inputPath = path.join(dataDir, file);
    const outputPath = path.join(outputDir, `processed-${file}`);
    await preprocessImage(inputPath, outputPath);
  }
  
  console.log('\n✅ Processing complete!');
}

// Handle command line arguments
const args = process.argv.slice(2);
if (args.length > 0) {
  // Process specific file
  const inputPath = args[0];
  const outputPath = args[1] || `processed-${path.basename(inputPath)}`;
  preprocessImage(inputPath, outputPath);
} else {
  // Process all files in data directory
  processAll();
}