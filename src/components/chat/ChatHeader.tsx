import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MoreVertical } from 'lucide-react';
import type { ChatParticipant } from '../../types/message';

interface ChatHeaderProps {
  participant: ChatParticipant;
}

export default function ChatHeader({ participant }: ChatHeaderProps) {
  return (
    <div className="sticky top-0 z-30 bg-white border-b">
      <div className="h-16 px-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link to="/messages" className="p-2 -ml-2 hover:bg-gray-50 rounded-full">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img
                src={participant.avatar}
                alt={participant.username}
                className="w-10 h-10 rounded-full object-cover"
              />
              {participant.isOnline && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
              )}
            </div>
            
            <div>
              <h2 className="font-medium">{participant.username}</h2>
              <p className="text-xs text-gray-500">
                {participant.isOnline ? 'Online' : 'Offline'}
              </p>
            </div>
          </div>
        </div>

        <button className="p-2 hover:bg-gray-50 rounded-full">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}