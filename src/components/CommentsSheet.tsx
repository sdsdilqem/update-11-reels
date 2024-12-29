import React from 'react';
import BottomSheet from './common/BottomSheet';

interface Comment {
  id: number;
  username: string;
  avatar: string;
  text: string;
  timestamp: string;
}

interface CommentsSheetProps {
  isOpen: boolean;
  onClose: () => void;
  comments: Comment[];
}

export default function CommentsSheet({ isOpen, onClose, comments }: CommentsSheetProps) {
  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Comments</h3>
        <p className="text-sm text-gray-500">{comments.length} comments</p>
      </div>

      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="flex space-x-3">
            <img
              src={comment.avatar}
              alt={comment.username}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <div className="bg-gray-50 rounded-2xl px-4 py-2">
                <p className="font-medium text-sm">{comment.username}</p>
                <p className="text-gray-600">{comment.text}</p>
              </div>
              <p className="text-xs text-gray-500 mt-1">{comment.timestamp}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center space-x-3">
        <input
          type="text"
          placeholder="Add a comment..."
          className="flex-1 bg-gray-50 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-100"
        />
        <button className="text-blue-500 font-medium">Post</button>
      </div>
    </BottomSheet>
  );
}