import React from 'react';
import { format } from 'date-fns';
import { Check, CheckCheck } from 'lucide-react';
import type { Message } from '../../types/message';

interface MessageBubbleProps {
  message: Message;
  isMine: boolean;
}

export default function MessageBubble({ message, isMine }: MessageBubbleProps) {
  return (
    <div className={`flex ${isMine ? 'justify-end' : 'justify-start'} mb-3`}>
      <div
        className={`
          max-w-[75%] rounded-2xl px-4 py-2
          ${isMine ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-900'}
        `}
      >
        <p className="text-sm">{message.text}</p>
        <div className={`flex items-center justify-end space-x-1 mt-1 ${isMine ? 'text-white/80' : 'text-gray-500'}`}>
          <span className="text-[10px]">
            {format(new Date(message.timestamp), 'HH:mm')}
          </span>
          {isMine && message.status && (
            <>
              {message.status === 'sent' && <Check className="w-3 h-3" />}
              {message.status === 'delivered' && <CheckCheck className="w-3 h-3" />}
              {message.status === 'read' && <CheckCheck className="w-3 h-3 text-blue-300" />}
            </>
          )}
        </div>
      </div>
    </div>
  );
}