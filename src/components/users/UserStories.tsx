import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import UserStory from './UserStory';
import { useAuth } from '../../contexts/AuthContext';

const users = [
  {
    id: '1',
    username: 'aysel.m',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    hasStory: true
  },
  {
    id: '2',
    username: 'cavid_94',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    hasStory: true
  },
  {
    id: '3',
    username: 'leyla.h',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
    hasStory: true
  },
  {
    id: '4',
    username: 'ali_tech',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    hasStory: false
  },
  {
    id: '5',
    username: 'nargiz99',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    hasStory: true
  },
  {
    id: '6',
    username: 'elvin.m',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    hasStory: false
  },
  {
    id: '7',
    username: 'gunel_a',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400',
    hasStory: true
  },
  {
    id: '8',
    username: 'murad.dev',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400',
    hasStory: true
  }
];

export default function UserStories() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { user, setShowAuthSheet } = useAuth();

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const handleStoryClick = () => {
    if (!user) {
      setShowAuthSheet({ isOpen: true, defaultTab: 'login' });
    }
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 mb-6">
      <div className="relative">
        <div 
          ref={scrollContainerRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide py-4"
        >
          {user && (
            <UserStory
              username={user.username}
              avatar={user.avatar}
              isAddStory
              onClick={handleStoryClick}
            />
          )}
          
          {users.map(user => (
            <UserStory
              key={user.id}
              username={user.username}
              avatar={user.avatar}
              hasStory={user.hasStory}
              onClick={handleStoryClick}
            />
          ))}
        </div>

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}