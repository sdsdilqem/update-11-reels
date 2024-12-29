import React from 'react';
import { Plus } from 'lucide-react';

interface UserStoryProps {
  username: string;
  avatar: string;
  isAddStory?: boolean;
  hasStory?: boolean;
  onClick?: () => void;
}

export default function UserStory({ username, avatar, isAddStory, hasStory, onClick }: UserStoryProps) {
  return (
    <button 
      onClick={onClick}
      className="flex flex-col items-center space-y-1 min-w-[72px]"
    >
      <div className={`
        relative w-14 h-14 rounded-full 
        ${hasStory ? 'p-[2px] bg-gradient-to-tr from-blue-500 to-purple-500' : ''}
      `}>
        {isAddStory ? (
          <div className="relative w-full h-full">
            <img 
              src={avatar} 
              alt={username}
              className="w-full h-full rounded-full object-cover border-2 border-white"
            />
            <div className="absolute -right-1 -bottom-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
              <Plus className="w-3 h-3 text-white" />
            </div>
          </div>
        ) : (
          <img 
            src={avatar} 
            alt={username}
            className={`
              w-full h-full rounded-full object-cover
              ${hasStory ? 'border-2 border-white' : 'border border-gray-200'}
            `}
          />
        )}
      </div>
      <span className="text-xs truncate w-16 text-center">
        {isAddStory ? 'Paylaş' : username}
      </span>
    </button>
  );
}