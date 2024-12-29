import React from 'react';
import { Shirt, Smartphone, Car, Home, Laptop } from 'lucide-react';
import FeaturedBanner from './FeaturedBanner';
import ScrollContainer from '../common/ScrollContainer';

export default function FeaturedBanners() {
  // Touch event handler'ı ekle
  const handleTouchStart = (e: React.TouchEvent) => {
    e.stopPropagation(); // Event propagation'ı durdur
  };

  const banners = [
    {
      title: 'Yeni Kolleksiya',
      image:
        'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800',
      icon: Shirt,
      color: 'bg-purple-500/85',
      link: '/category/geyim',
    },
    {
      title: 'Premium Elektronika',
      image:
        'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=800',
      icon: Smartphone,
      color: 'bg-blue-500/85',
      link: '/category/elektronika',
    },
    {
      title: 'Lüks Avtomobillər',
      image:
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800',
      icon: Car,
      color: 'bg-red-500/85',
      link: '/category/avtomobiller',
    },
    {
      title: 'Premium Əmlak',
      image:
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
      icon: Home,
      color: 'bg-green-500/85',
      link: '/category/emlak',
    },
    {
      title: 'Gaming Laptoplar',
      image:
        'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=800',
      icon: Laptop,
      color: 'bg-amber-500/85',
      link: '/category/laptoplar',
    },
  ];

  return (
    <ScrollContainer
      className="flex gap-[5px] sm:gap-3 pb-1"
      onTouchStart={handleTouchStart} // Touch event handler'ı ekle
    >
      {banners.map((banner) => (
        <div
          key={banner.title}
          className="flex-none w-[calc(100vw-32px)] sm:w-[300px]"
        >
          <FeaturedBanner {...banner} />
        </div>
      ))}
    </ScrollContainer>
  );
}
