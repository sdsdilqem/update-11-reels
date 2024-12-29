import React from 'react';
import PostGrid from './PostGrid';
import CategoriesBar from './categories/CategoriesBar';
import UserList from './users/UserList';
import RegistrationPrompt from './auth/RegistrationPrompt';
import FeaturedBanners from './banners/FeaturedBanners';
import { useAuth } from '../contexts/AuthContext';
import { samplePosts } from '../data/samplePosts';

export default function Feed() {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <div className="mx-auto py-4">
        <div className="space-y-3">
          <div className="px-1 sm:px-4 lg:px-6">
            <div className="max-w-7xl mx-auto">
              <UserList />
            </div>
          </div>
          
          <div className="px-1 sm:px-4 lg:px-6">
            <div className="max-w-7xl mx-auto">
              <CategoriesBar />
            </div>
          </div>

          <div className="px-1 sm:px-4 lg:px-6">
            <div className="max-w-7xl mx-auto">
              <FeaturedBanners />
            </div>
          </div>
        </div>

        <div className="mt-6 px-1 sm:px-4 lg:px-6">
          <div className="max-w-7xl mx-auto">
            <PostGrid posts={samplePosts} />
          </div>
        </div>
      </div>
      
      {!isAuthenticated && <RegistrationPrompt />}
    </>
  );
}