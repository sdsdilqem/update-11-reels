import React from 'react';
import { Search, PlusCircle, User, Bell, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import SearchSheet from './search/SearchSheet';
import AuthSheet from './auth/AuthSheet';
import NotificationsSheet from './notifications/NotificationsSheet';
import ProfileSheet from './profile/ProfileSheet';
import CreatePostSheet from './create-post/CreatePostSheet';

export default function Navbar() {
  const { isAuthenticated, showAuthSheet, setShowAuthSheet } = useAuth();
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = React.useState(false);
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);
  const [isCreatePostOpen, setIsCreatePostOpen] = React.useState(false);

  return (
    <>
      <nav className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-40">
        <div className="max-w-[2000px] mx-auto px-1 sm:px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Link
                to="/"
                className="flex-shrink-0 p-2 hover:bg-gray-50/80 rounded-lg transition-colors"
              >
                <Home className="w-6 h-6 text-gray-600" />
              </Link>
              <div className="w-px h-6 bg-gray-200"></div>
              <Link
                to="/reels"
                className="p-2 hover:bg-gray-50/80 rounded-lg transition-colors"
              >
                <img
                  src="https://azersoft.org/play.svg"
                  alt="Reels"
                  className="w-6 h-6 animate-pulse"
                />
              </Link>
            </div>

            <div className="flex-1 max-w-md mx-4">
              <button
                className="w-full relative"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-600" />
                <div className="w-full pl-10 pr-4 py-2 bg-gray-50/80 backdrop-blur-sm rounded-lg text-left text-gray-400">
                  Axtarış...
                </div>
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <button
                className="p-2 hover:bg-gray-50/80 rounded-lg transition-colors"
                onClick={() => setIsCreatePostOpen(true)}
              >
                <PlusCircle className="w-6 h-6 text-gray-600" />
              </button>

              <button
                className="p-2 hover:bg-gray-50/80 rounded-lg transition-colors relative"
                onClick={() => setIsNotificationsOpen(true)}
              >
                <Bell className="w-6 h-6 text-gray-600" />
                <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-[rgb(80,201,158)] rounded-full animate-pulse" />
              </button>

              {isAuthenticated ? (
                <button
                  className="p-2 hover:bg-gray-50/80 rounded-lg transition-colors"
                  onClick={() => setIsProfileOpen(true)}
                >
                  <User className="w-6 h-6 text-gray-600" />
                </button>
              ) : (
                <button
                  className="p-2 hover:bg-gray-50/80 rounded-lg transition-colors"
                  onClick={() =>
                    setShowAuthSheet({ isOpen: true, defaultTab: 'login' })
                  }
                >
                  <User className="w-6 h-6 text-gray-600" />
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      <SearchSheet
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <AuthSheet
        isOpen={showAuthSheet.isOpen}
        onClose={() => setShowAuthSheet({ isOpen: false, defaultTab: 'login' })}
      />

      <NotificationsSheet
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
      />

      <ProfileSheet
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />

      <CreatePostSheet
        isOpen={isCreatePostOpen}
        onClose={() => setIsCreatePostOpen(false)}
      />
    </>
  );
}