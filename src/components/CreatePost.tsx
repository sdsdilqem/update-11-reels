import React, { useState } from 'react';
import { ImagePlus, DollarSign, Tag } from 'lucide-react';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover"
        />
        <input
          type="text"
          placeholder="What are you selling today?"
          className="flex-1 bg-gray-50 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-100"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="flex-1 relative">
          <DollarSign className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Price"
            className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        
        <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
          <ImagePlus className="w-5 h-5 text-gray-500" />
        </button>
        
        <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
          <Tag className="w-5 h-5 text-gray-500" />
        </button>
        
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          Post
        </button>
      </div>
    </div>
  );
}