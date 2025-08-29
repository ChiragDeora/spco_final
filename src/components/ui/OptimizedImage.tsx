import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: string;
  sizes?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzY2NzM4NyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+',
  sizes = '100vw',
  onLoad,
  onError,
}) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Generate WebP version of the image path
  const getWebPSrc = (originalSrc: string) => {
    const lastDotIndex = originalSrc.lastIndexOf('.');
    if (lastDotIndex === -1) return originalSrc;
    
    const basePath = originalSrc.substring(0, lastDotIndex);
    const extension = originalSrc.substring(lastDotIndex);
    
    // Check if WebP version exists
    if (extension.toLowerCase() === '.webp') {
      return originalSrc;
    }
    
    return `${basePath}.webp`;
  };

  // Generate optimized version path
  const getOptimizedSrc = (originalSrc: string) => {
    const lastDotIndex = originalSrc.lastIndexOf('.');
    if (lastDotIndex === -1) return originalSrc;
    
    const basePath = originalSrc.substring(0, lastDotIndex);
    const extension = originalSrc.substring(lastDotIndex);
    
    // Check if optimized version exists
    if (basePath.includes('optimized')) {
      return originalSrc;
    }
    
    return `${basePath}-optimized${extension}`;
  };

  useEffect(() => {
    if (!src) return;

    const img = new Image();
    
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
      onLoad?.();
    };
    
    img.onerror = () => {
      // Try optimized version if original fails
      const optimizedSrc = getOptimizedSrc(src);
      if (optimizedSrc !== src) {
        const optimizedImg = new Image();
        optimizedImg.onload = () => {
          setImageSrc(optimizedSrc);
          setIsLoaded(true);
          onLoad?.();
        };
        optimizedImg.onerror = () => {
          setHasError(true);
          onError?.();
        };
        optimizedImg.src = optimizedSrc;
      } else {
        setHasError(true);
        onError?.();
      }
    };
    
    img.src = src;
  }, [src, onLoad, onError]);

  // Check if WebP is supported
  const [webpSupported, setWebpSupported] = useState(false);
  
  useEffect(() => {
    const checkWebPSupport = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    };
    
    setWebpSupported(checkWebPSupport());
  }, []);

  const finalSrc = webpSupported && !hasError ? getWebPSrc(imageSrc) : imageSrc;

  return (
    <img
      src={finalSrc}
      alt={alt}
      className={cn(
        'transition-opacity duration-300',
        isLoaded ? 'opacity-100' : 'opacity-0',
        className
      )}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      sizes={sizes}
      onLoad={() => setIsLoaded(true)}
      onError={() => setHasError(true)}
    />
  );
};

export default OptimizedImage;
