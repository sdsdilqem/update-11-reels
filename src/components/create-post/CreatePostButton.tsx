import React, { useState } from 'react';
import { ImagePlus } from 'lucide-react';
import CreatePostSheet from './CreatePostSheet';

export default function CreatePostButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
      <button
        onClick={() => setIsOpen(true)}
        className="w-full flex items-center bg-gray-50 text-gray-500 rounded-lg px-4 py-3 hover:bg-gray-100 transition-colors group"
      >
        <span>Nə satırsınız?</span>
        <div className="ml-auto">
          <ImagePlus className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
        </div>
      </button>

      <CreatePostSheet isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}