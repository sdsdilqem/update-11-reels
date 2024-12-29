import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import type { Chat } from '../../types/chat';

interface MessageListProps {
  chats: Chat[];
}

export default function MessageList({ chats }: MessageListProps) {
  const navigate = useNavigate();

  return (
    <div className="space-y-2">
      {chats.map((chat) => (
        <button
          key={chat.id}
          className="w-full flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-xl transition-colors"
          onClick={() => navigate(`/messages/${chat.id}`)}
        >
          <img
            src={chat.avatar}
            alt={chat.username}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex-1 min-w-0 text-left">
            <div className="flex items-center justify-between mb-1">
              <span className="font-medium">{chat.username}</span>
              <span className="text-xs text-gray-500">
                {formatDistanceToNow(new Date(chat.lastMessage.timestamp), { addSuffix: true })}
              </span>
            </div>
            <p className="text-sm text-gray-600 truncate">{chat.lastMessage.text}</p>
          </div>
        </button>
      ))}
    </div>
  );
}