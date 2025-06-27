# OCR Preprocessing Example

This example demonstrates image preprocessing techniques to improve OCR accuracy for historical documents.

## 🎯 Purpose

Historical documents often have:
- Age-related discoloration
- Uneven lighting
- Skewed text
- Low contrast

This example shows how to preprocess images to improve OCR results.

## 📋 Prerequisites

- Node.js 18+
- Sharp (image processing library)

## 🚀 Usage

```bash
# Install dependencies
npm install

# Run preprocessing
npm start

# Process specific image
npm run process -- path/to/image.jpg
```

## 🔧 Techniques Demonstrated

1. **Grayscale Conversion** - Simplifies processing
2. **Contrast Enhancement** - Improves text visibility
3. **Noise Reduction** - Removes artifacts
4. **Deskewing** - Straightens tilted text
5. **Binarization** - Converts to black/white

## 📊 Example Results

| Original | Preprocessed | OCR Improvement |
|----------|--------------|-----------------|
| ![Original](data/sample-original.jpg) | ![Processed](output/sample-processed.jpg) | 65% → 92% accuracy |

## 🔄 Pipeline

```
Input Image
    ↓
Grayscale Conversion
    ↓
Noise Reduction
    ↓
Contrast Enhancement
    ↓
Deskewing
    ↓
Binarization
    ↓
OCR-Ready Image
```

## 📁 Project Structure

```
ocr-preprocessing/
├── src/
│   ├── index.js        # Main preprocessing pipeline
│   ├── filters.js      # Image filters
│   └── utils.js        # Helper functions
├── data/
│   └── sample.jpg      # Sample historical document
└── output/
    └── .gitkeep        # Processed images go here
```

## 🔍 Next Steps

- Try with your own historical documents
- Adjust threshold values for your document types
- Combine with Tesseract for full OCR pipeline
- See our [manuscript digitization template](../../templates/manuscript-digitization) for a complete workflow

## 📚 Resources

- [Sharp Documentation](https://sharp.pixelplumbing.com/)
- [OCR Best Practices](../../docs/guides/ocr-best-practices.md)
- [History as Code Platform](https://historyascode.com)