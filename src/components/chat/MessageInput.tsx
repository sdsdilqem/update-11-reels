import React, { useState } from 'react';
import { Send, Image, Smile } from 'lucide-react';

export default function MessageInput() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Handle message send
      setMessage('');
    }
  };

  return (
    <div className="sticky bottom-0 bg-white border-t px-4 py-3">
      <form onSubmit={handleSubmit} className="flex items-center space-x-2">
        <button
          type="button"
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <Image className="w-5 h-5 text-gray-500" />
        </button>
        
        <div className="flex-1 relative">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Mesajınızı yazın..."
            className="w-full pl-4 pr-10 py-2.5 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
          <button
            type="button"
            className="absolute right-3 top-2.5"
          >
            <Smile className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        <button
          type="submit"
          disabled={!message.trim()}
          className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:hover:bg-blue-500"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
}