import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeaturedBannerProps {
  title: string;
  image: string;
  icon: LucideIcon;
  color: string;
  link: string;
}

export default function FeaturedBanner({
  title,
  image,
  icon: Icon,
  color,
  link,
}: FeaturedBannerProps) {
  // Dokunma olayını durdurmak için handler ekliyoruz
  const handleTouchStart = (e: React.TouchEvent) => {
    e.stopPropagation(); // Event propagation'ı durdur
  };

  return (
    <Link
      to={link}
      className="relative overflow-hidden rounded-[15px] group hover:shadow-lg transition-all duration-300"
      onTouchStart={handleTouchStart} // Touch event handler'ı ekle
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />

      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-28 sm:h-32 object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy" // Lazy loading ekle
      />

      {/* Icon - iOS style */}
      <div className="absolute top-3 left-3 z-20">
        <div
          className={`${color} w-8 h-8 rounded-[15px] shadow-lg backdrop-blur-md flex items-center justify-center`}
        >
          <Icon className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Title */}
      <div className="absolute inset-x-0 bottom-0 z-20 p-4">
        <h3 className="text-lg sm:text-xl font-medium text-white/90 tracking-wide">
          {title}
        </h3>
      </div>
    </Link>
  );
}
