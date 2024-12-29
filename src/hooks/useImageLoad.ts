import { useRef, useState, useEffect } from 'react';

export function useImageLoad() {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    if (image.complete) {
      setIsLoaded(true);
    }

    const handleLoad = () => setIsLoaded(true);
    image.addEventListener('load', handleLoad);
    
    return () => {
      image.removeEventListener('load', handleLoad);
    };
  }, []);

  return { isLoaded, imageRef };
}