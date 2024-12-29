import React from 'react';
import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="relative mb-8">
      <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
      <input
        type="text"
        placeholder="Sualınızı yazın..."
        className="w-full pl-12 pr-4 py-3 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-100"
      />
    </div>
  );
}