import React from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import MessageList from './MessageList';
import { mockChats } from '../../data/mockMessages';

export default function MessagesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-0 z-30 bg-white border-b">
        <div className="max-w-2xl mx-auto px-4">
          <div className="h-16 flex items-center space-x-4">
            <Link to="/" className="p-2 -ml-2 hover:bg-gray-50 rounded-full">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="font-semibold">Mesajlar</h1>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-4">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Mesajlarda axtar..."
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <MessageList chats={mockChats} />
      </div>
    </div>
  );
}