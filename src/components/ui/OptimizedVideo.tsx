import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedVideoProps {
  src: string;
  className?: string;
  width?: number;
  height?: number;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  controls?: boolean;
  poster?: string;
  preload?: 'none' | 'metadata' | 'auto';
  style?: React.CSSProperties;
  onLoad?: () => void;
  onError?: () => void;
  onPlay?: () => void;
  onPause?: () => void;
  onEnded?: () => void;
}

const OptimizedVideo: React.FC<OptimizedVideoProps> = ({
  src,
  className,
  width,
  height,
  autoPlay = false,
  loop = false,
  muted = true,
  playsInline = true,
  controls = false,
  poster,
  preload = 'metadata',
  style,
  onLoad,
  onError,
  onPlay,
  onPause,
  onEnded,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);

  // Generate optimized video paths
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

  const getWebMSrc = (originalSrc: string) => {
    const lastDotIndex = originalSrc.lastIndexOf('.');
    if (lastDotIndex === -1) return originalSrc;
    
    const basePath = originalSrc.substring(0, lastDotIndex);
    const extension = originalSrc.substring(lastDotIndex);
    
    // Check if WebM version exists
    if (extension.toLowerCase() === '.webm') {
      return originalSrc;
    }
    
    return `${basePath}.webm`;
  };

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.1,
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoadedData = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    onError?.();
  };

  const optimizedSrc = getOptimizedSrc(src);
  const webmSrc = getWebMSrc(src);

  return (
    <video
      ref={videoRef}
      className={cn(
        'transition-opacity duration-300',
        isLoaded ? 'opacity-100' : 'opacity-0',
        className
      )}
      width={width}
      height={height}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      controls={controls}
      poster={poster}
      preload={isIntersecting ? preload : 'none'}
      style={style}
      onLoadedData={handleLoadedData}
      onError={handleError}
      onPlay={onPlay}
      onPause={onPause}
      onEnded={onEnded}
    >
      {/* WebM format for better compression */}
      <source src={webmSrc} type="video/webm" />
      {/* Optimized MP4 as fallback */}
      <source src={optimizedSrc} type="video/mp4" />
      {/* Original as final fallback */}
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default OptimizedVideo;
