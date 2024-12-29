import React, { useState } from 'react';
import { Phone, ShoppingBag, Bookmark } from 'lucide-react';
import type { Post } from '../../../types/post';
import ContactSheet from '../../../components/ContactSheet';
import OrderSheet from '../../../components/order/OrderSheet';
import CommentsSheet from '../../../components/CommentsSheet';
import { sampleComments } from '../../../data/sampleComments';

interface ProductActionsProps {
  product: Post;
  onContactClick: () => void;
  onOrderClick: () => void;
  isContactOpen: boolean;
  isOrderOpen: boolean;
  isCommentsOpen: boolean;
  onCloseSheets: () => void;
}

export default function ProductActions({
  product,
  onContactClick,
  onOrderClick,
  isContactOpen,
  isOrderOpen,
  isCommentsOpen,
  onCloseSheets
}: ProductActionsProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <>
      {/* Action Buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t px-4 py-3 lg:relative lg:bottom-auto lg:left-auto lg:right-auto lg:bg-transparent lg:border-t-0 lg:px-0 lg:py-0 lg:mt-6">
        <div className="flex space-x-3 max-w-2xl mx-auto">
          <button
            onClick={onContactClick}
            className="flex-1 px-4 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
          >
            <Phone className="w-5 h-5" />
            <span>Əlaqə</span>
          </button>
          <button
            onClick={onOrderClick}
            className="flex-1 px-4 py-3 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-colors flex items-center justify-center space-x-2"
          >
            <ShoppingBag className="w-5 h-5" />
            <span>Sifariş et.</span>
          </button>
          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={`px-4 py-3 border border-emerald-200 rounded-xl hover:bg-gray-50 transition-colors ${
              isBookmarked ? 'text-emerald-500' : 'text-gray-700'
            }`}
          >
            <Bookmark className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Bottom Sheets */}
      <ContactSheet
        isOpen={isContactOpen}
        onClose={onCloseSheets}
        username={product.username}
        avatar={product.avatar}
      />

      <OrderSheet
        isOpen={isOrderOpen}
        onClose={onCloseSheets}
        productTitle={product.title}
        productPrice={product.price}
      />

      <CommentsSheet
        isOpen={isCommentsOpen}
        onClose={onCloseSheets}
        comments={sampleComments}
      />
    </>
  );
}