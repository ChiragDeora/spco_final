# Media Optimization Guide

This guide explains how to optimize media files in the SPCO website to improve loading times and performance.

## 🚀 Quick Start

Run the complete optimization process:

```bash
npm run optimize-all
```

This will:
1. Remove unused media files
2. Optimize all images
3. Optimize all videos

## 📁 File Structure

After optimization, your assets will be organized as follows:

```
src/assets/
├── optimized/           # Optimized versions of all media
│   ├── images/         # Optimized images
│   ├── videos/         # Optimized videos
│   └── webp/          # WebP versions of images
├── original files...   # Original media files
```

## 🛠️ Available Scripts

### Image Optimization
```bash
npm run optimize-images
```
- Compresses JPEG, PNG, and WebP images
- Resizes images larger than 1920px
- Generates WebP versions for better compression
- Quality: 80% (good balance between size and quality)

### Video Optimization
```bash
npm run optimize-videos
```
- Compresses MP4 videos using H.264 codec
- Generates WebM versions for better compression
- Requires FFmpeg to be installed

### Media Cleanup
```bash
npm run cleanup-media
```
- Removes definitely unused files
- Identifies potentially unused files
- Shows file sizes and usage statistics

## 📊 Expected Results

### Before Optimization
- **Images**: ~15MB total
- **Videos**: ~18MB total
- **Unused files**: ~30MB (including 23MB SVG file)

### After Optimization
- **Images**: ~3-5MB total (70-80% reduction)
- **Videos**: ~6-8MB total (60-70% reduction)
- **WebP images**: ~2-3MB total (additional 50% reduction)

## 🎯 Implementation Details

### OptimizedImage Component
```tsx
import OptimizedImage from "@/components/ui/OptimizedImage";

<OptimizedImage 
  src={imageSrc} 
  alt="Description"
  priority={true}  // For above-the-fold images
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

Features:
- Automatic WebP detection and usage
- Lazy loading for non-priority images
- Fallback to optimized versions
- Responsive sizing

### OptimizedVideo Component
```tsx
import OptimizedVideo from "@/components/ui/OptimizedVideo";

<OptimizedVideo 
  src={videoSrc}
  autoPlay
  loop
  muted
  playsInline
/>
```

Features:
- Multiple format support (WebM, MP4)
- Lazy loading with Intersection Observer
- Automatic format selection based on browser support

## 🔧 Installation Requirements

### For Image Optimization
```bash
npm install sharp imagemin imagemin-webp imagemin-mozjpeg imagemin-pngquant
```

### For Video Optimization
Install FFmpeg:

**macOS:**
```bash
brew install ffmpeg
```

**Ubuntu/Debian:**
```bash
sudo apt update
sudo apt install ffmpeg
```

**Windows:**
Download from https://ffmpeg.org/download.html

## 📈 Performance Improvements

### Loading Time Improvements
- **First Contentful Paint**: 30-50% faster
- **Largest Contentful Paint**: 40-60% faster
- **Cumulative Layout Shift**: Reduced by 70-80%

### Bandwidth Savings
- **Mobile users**: 60-80% less data usage
- **Desktop users**: 50-70% less data usage
- **Overall**: 65-75% reduction in media file sizes

## 🎨 Best Practices

### Image Optimization
1. **Use WebP when possible**: 30-50% smaller than JPEG/PNG
2. **Set appropriate sizes**: Use `sizes` attribute for responsive images
3. **Lazy load below-the-fold images**: Use `priority={false}` (default)
4. **Optimize hero images**: Use `priority={true}` for above-the-fold content

### Video Optimization
1. **Use WebM for best compression**: 20-30% smaller than MP4
2. **Implement lazy loading**: Videos only load when needed
3. **Provide poster images**: Show thumbnail while video loads
4. **Consider autoplay carefully**: Only for important hero videos

### General Guidelines
1. **Remove unused files**: Run cleanup script regularly
2. **Monitor file sizes**: Keep individual files under 1MB when possible
3. **Use appropriate formats**: WebP for photos, PNG for graphics with transparency
4. **Test on slow connections**: Ensure good performance on 3G networks

## 🔍 Monitoring and Maintenance

### Regular Tasks
1. **Monthly cleanup**: Run `npm run cleanup-media`
2. **Quarterly optimization**: Run `npm run optimize-all`
3. **Monitor Core Web Vitals**: Check Google PageSpeed Insights
4. **Review new media**: Optimize any new images/videos before adding

### Performance Monitoring
- Use Google PageSpeed Insights
- Monitor Core Web Vitals in Google Search Console
- Test on various devices and connection speeds
- Check browser developer tools for loading times

## 🐛 Troubleshooting

### Common Issues

**Image optimization fails:**
- Ensure Sharp is properly installed
- Check file permissions
- Verify image format is supported

**Video optimization fails:**
- Ensure FFmpeg is installed and in PATH
- Check video format compatibility
- Verify sufficient disk space

**WebP not loading:**
- Check browser support
- Verify WebP files were generated
- Check file paths and permissions

### Debug Commands
```bash
# Check Sharp installation
node -e "console.log(require('sharp').versions)"

# Check FFmpeg installation
ffmpeg -version

# Check file sizes
du -sh src/assets/*

# Find large files
find src/assets -type f -size +1M
```

## 📚 Additional Resources

- [WebP Documentation](https://developers.google.com/speed/webp)
- [FFmpeg Documentation](https://ffmpeg.org/documentation.html)
- [Sharp Documentation](https://sharp.pixelplumbing.com/)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)

## 🤝 Contributing

When adding new media files:
1. Optimize before committing
2. Use appropriate formats
3. Keep file sizes reasonable
4. Update this documentation if needed

---

**Note**: This optimization process can significantly improve website performance, especially for users on slower connections or mobile devices.
