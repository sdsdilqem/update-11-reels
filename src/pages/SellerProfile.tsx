import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, Star, Shield, Package, Clock, Heart,
  MessageCircle, UserPlus, MapPin, Calendar
} from 'lucide-react';
import { samplePosts } from '../data/samplePosts';
import PostGrid from '../components/PostGrid';
import { useAuth } from '../contexts/AuthContext';

export default function SellerProfile() {
  const { username } = useParams();
  const { setShowAuthSheet } = useAuth();
  const [isFollowing, setIsFollowing] = useState(false);
  const sellerPosts = samplePosts.filter(post => post.username === username);
  
  const seller = {
    username: username,
    avatar: sellerPosts[0]?.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    joinDate: 'Mart 2023',
    location: 'Bakı, Azərbaycan',
    bio: 'Texnologiya həvəskarı və keyfiyyətli məhsulların satıcısı',
    rating: 4.8,
    totalSales: 45,
    totalLikes: sellerPosts.reduce((sum, post) => sum + post.likes, 0),
    responseTime: '~2 saat',
    verificationLevel: 'VERIFIED',
    followers: 1234
  };

  const handleActionClick = (action: 'follow' | 'message') => {
    if (action === 'follow') {
      setIsFollowing(!isFollowing);
    } else {
      setShowAuthSheet({ isOpen: true, defaultTab: 'login' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white sticky top-0 z-30 border-b">
        <div className="max-w-2xl mx-auto px-4">
          <div className="h-14 flex items-center space-x-4">
            <Link to="/" className="p-2 -ml-2 hover:bg-gray-50 rounded-full">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="font-semibold">Satıcı profili</h1>
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="bg-white border-b">
        <div className="max-w-2xl mx-auto px-4 py-6">
          <div className="flex items-start space-x-4">
            <img
              src={seller.avatar}
              alt={seller.username}
              className="w-20 h-20 rounded-2xl object-cover ring-4 ring-gray-50"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                <h2 className="text-xl font-bold">{seller.username}</h2>
                {seller.verificationLevel === 'VERIFIED' && (
                  <Shield className="w-5 h-5 text-blue-500" />
                )}
              </div>
              
              <div className="flex items-center space-x-2 mt-1">
                <div className="flex items-center bg-yellow-50 text-yellow-700 px-2 py-0.5 rounded-full">
                  <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{seller.rating}</span>
                </div>
                <span className="text-sm text-gray-500">{seller.followers} izləyici</span>
              </div>

              <div className="flex flex-wrap gap-3 mt-3 text-sm text-gray-600">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{seller.location}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{seller.joinDate}</span>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-4 text-gray-600">{seller.bio}</p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-gray-50 p-3 rounded-xl text-center">
              <p className="text-2xl font-bold text-gray-900">{seller.totalSales}</p>
              <p className="text-xs text-gray-600 mt-1">Satış</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-xl text-center">
              <p className="text-2xl font-bold text-gray-900">{seller.totalLikes}</p>
              <p className="text-xs text-gray-600 mt-1">Bəyənmə</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-xl text-center">
              <p className="text-2xl font-bold text-gray-900">{seller.responseTime}</p>
              <p className="text-xs text-gray-600 mt-1">Cavab müddəti</p>
            </div>
          </div>
        </div>
      </div>

      {/* Active Listings */}
      <div className="max-w-2xl mx-auto px-4 py-6">
        <h3 className="font-bold text-lg mb-4">Aktiv elanlar</h3>
        <PostGrid posts={sellerPosts} />
      </div>

      {/* Sticky Action Buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t px-4 py-3">
        <div className="max-w-2xl mx-auto flex space-x-3">
          <button
            onClick={() => handleActionClick('follow')}
            className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl font-medium transition-all ${
              isFollowing
                ? 'bg-gray-100 text-gray-700'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            {isFollowing ? (
              <>
                <UserPlus className="w-5 h-5" />
                <span>İzləyirsən</span>
              </>
            ) : (
              <>
                <UserPlus className="w-5 h-5" />
                <span>İzlə</span>
              </>
            )}
          </button>
          
          <button
            onClick={() => handleActionClick('message')}
            className="flex-1 flex items-center justify-center space-x-2 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Mesaj göndər</span>
          </button>
        </div>
      </div>
    </div>
  );
}