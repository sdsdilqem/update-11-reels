import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, MessageCircle, ShoppingBag, Share2, 
  Layout, ShoppingCart, Percent, TrendingUp 
} from 'lucide-react';
import UserCard from './UserCard';
import ScrollContainer from '../common/ScrollContainer';
import { users } from '../../data/users';

export default function UserList() {
  const handleTouchStart = (e: React.TouchEvent) => {
    e.stopPropagation();
  };

  const banners = [
    {
      title: 'Reels',
      to: '/reels',
      icon: <div className="grid grid-cols-2 gap-1.5">
        <div className="w-7 h-7 bg-white/10 rounded-lg flex items-center justify-center">
          <Heart className="w-3.5 h-3.5 text-white" />
        </div>
        <div className="w-7 h-7 bg-white/10 rounded-lg flex items-center justify-center">
          <MessageCircle className="w-3.5 h-3.5 text-white" />
        </div>
        <div className="w-7 h-7 bg-white/10 rounded-lg flex items-center justify-center">
          <ShoppingBag className="w-3.5 h-3.5 text-white" />
        </div>
        <div className="w-7 h-7 bg-white/10 rounded-lg flex items-center justify-center">
          <Share2 className="w-3.5 h-3.5 text-white" />
        </div>
      </div>,
      gradient: 'from-emerald-500 to-emerald-500',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
      overlayOpacity: '40',
      attention: {
        gradient: 'from-pink-500 to-rose-500'
      }
    },
    {
      title: 'Trendler',
      to: '/trend',
      icon: <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center">
        <TrendingUp className="w-7 h-7 text-white" />
      </div>,
      gradient: 'from-blue-500 to-indigo-500',
      image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=400',
      overlayOpacity: '30',
      attention: {
        gradient: 'from-amber-500 to-orange-500'
      }
    },
    {
      title: 'Markalar',
      to: '/brands',
      icon: <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center">
        <ShoppingCart className="w-7 h-7 text-white" />
      </div>,
      gradient: 'from-emerald-500 to-teal-500',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400',
      overlayOpacity: '35'
    },
    {
      title: 'Endirimlər',
      to: '/discounts',
      icon: <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center">
        <Percent className="w-7 h-7 text-white" />
      </div>,
      gradient: 'from-rose-500 to-orange-500',
      image: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=400',
      overlayOpacity: '35'
    }
  ];

  return (
    <div className="relative" onTouchStart={handleTouchStart}>
      <ScrollContainer className="flex gap-2 pb-1">
        {/* Special Banners */}
        {banners.map((banner) => (
          <Link 
            key={banner.title}
            to={banner.to}
            className="block min-w-[110px]"
            onTouchStart={handleTouchStart}
          >
            <div className={`relative bg-gradient-to-br ${banner.gradient} rounded-xl shadow-sm p-2 h-full overflow-hidden`}>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                {/* Background Image with Gradient Overlay */}
                <div className="absolute inset-0">
                  <img 
                    src={banner.image}
                    alt={banner.title}
                    className="w-full h-full object-cover brightness-90 group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/${banner.overlayOpacity} to-transparent`} />
                </div>
                
                {/* Icon Container */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="transform group-hover:scale-105 transition-transform duration-300">
                    {banner.icon}
                  </div>
                </div>

                {/* Attention Indicator */}
                {banner.attention && (
                  <div className={`absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-gradient-to-br ${banner.attention.gradient} animate-[pulse_1s_ease-in-out_infinite]`} />
                )}
              </div>
              
              {/* Title */}
              <div className="flex items-center justify-center mt-1.5">
                <span className="text-xs font-medium text-white/90">{banner.title}</span>
              </div>
            </div>
          </Link>
        ))}

        {/* User Cards */}
        {users.map(user => (
          <UserCard
            key={user.id}
            username={user.username}
            avatar={user.avatar}
            isVerified={user.isVerified}
          />
        ))}
      </ScrollContainer>
    </div>
  );
}