import React from 'react';
import { Shield, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

interface UserCardProps {
  username: string;
  avatar: string;
  isVerified?: boolean;
}

export default function UserCard({ username, avatar, isVerified }: UserCardProps) {
  const { setShowAuthSheet } = useAuth();

  const handleMessageClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation(); // Event propagation'ı durdur
    setShowAuthSheet({ isOpen: true, defaultTab: 'login' });
  };

  // Touch event handler'ı ekle
  const handleTouchStart = (e: React.TouchEvent) => {
    e.stopPropagation();
  };

  return (
    <Link 
      to={`/seller/${username}`}
      className="block min-w-[100px] group"
      onTouchStart={handleTouchStart}
    >
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-2 transition-shadow hover:shadow-md">
        <div className="relative">
          <img 
            src={avatar} 
            alt={username}
            className="w-full aspect-square rounded-lg object-cover"
            loading="lazy"
          />
          <button
            onClick={handleMessageClick}
            onTouchStart={handleMessageClick}
            className="absolute bottom-1.5 right-1.5 w-6 h-6 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5 text-gray-700" />
          </button>
        </div>
        <div className="flex items-center space-x-1 mt-1.5">
          <span className="text-xs font-medium truncate">{username}</span>
          {isVerified && <Shield className="w-3 h-3 text-blue-500" />}
        </div>
      </div>
    </Link>
  );
}