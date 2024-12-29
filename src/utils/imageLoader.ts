import { useState, useEffect } from 'react';

interface ImageLoaderResult {
  isLoading: boolean;
  error: string | null;
  loadedImages: Set<string>;
}

export const useImagePreloader = (imageUrls: string[]): ImageLoaderResult => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    let mounted = true;
    const loadedUrls = new Set<string>();

    const preloadImage = async (url: string) => {
      try {
        const img = new Image();
        img.src = url;
        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = () => reject(`Failed to load image: ${url}`);
        });
        if (mounted) {
          loadedUrls.add(url);
          setLoadedImages(new Set(loadedUrls));
        }
      } catch (err) {
        console.warn(`Error preloading image ${url}:`, err);
        // Continue loading other images even if one fails
      }
    };

    const preloadAll = async () => {
      try {
        await Promise.all(imageUrls.map(preloadImage));
        if (mounted) {
          setIsLoading(false);
        }
      } catch (err) {
        if (mounted) {
          setError('Some images failed to load');
          setIsLoading(false);
        }
      }
    };

    preloadAll();

    return () => {
      mounted = false;
    };
  }, [imageUrls]);

  return { isLoading, error, loadedImages };
};