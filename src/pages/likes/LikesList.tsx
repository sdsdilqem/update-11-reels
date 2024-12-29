import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import type { Like } from '../../types/like';

interface LikesListProps {
  likes: Like[];
}

export default function LikesList({ likes }: LikesListProps) {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      {likes.map((like) => (
        <div
          key={like.id}
          className="flex items-start space-x-4 p-4 bg-white rounded-xl border border-gray-100"
          onClick={() => navigate(`/product/${like.productId}`)}
        >
          <img
            src={like.userAvatar}
            alt={like.username}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm">
              <span className="font-medium">{like.username}</span>{' '}
              məhsulunuzu bəyəndi
            </p>
            <span className="text-xs text-gray-500">
              {formatDistanceToNow(new Date(like.timestamp), { addSuffix: true })}
            </span>
          </div>
          <img
            src={like.productImage}
            alt="Product"
            className="w-16 h-16 rounded-lg object-cover"
          />
        </div>
      ))}
    </div>
  );
}