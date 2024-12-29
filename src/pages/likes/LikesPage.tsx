import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import LikesList from './LikesList';
import { mockLikes } from '../../data/mockLikes';

export default function LikesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-0 z-30 bg-white border-b">
        <div className="max-w-2xl mx-auto px-4">
          <div className="h-16 flex items-center space-x-4">
            <Link to="/" className="p-2 -ml-2 hover:bg-gray-50 rounded-full">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="font-semibold">Bəyənmələr</h1>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-4">
        <LikesList likes={mockLikes} />
      </div>
    </div>
  );
}