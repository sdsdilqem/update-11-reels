import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProfileForm from './components/ProfileForm';
import AvatarUpload from './components/AvatarUpload';
import { useProfileSettings } from './hooks/useProfileSettings';

export default function ProfilePage() {
  const { user, isLoading, handleSave } = useProfileSettings();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 z-30 bg-white border-b">
        <div className="max-w-2xl mx-auto px-4">
          <div className="h-16 flex items-center space-x-4">
            <Link to="/settings" className="p-2 -ml-2 hover:bg-gray-50 rounded-full">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="font-semibold">Profil məlumatları</h1>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6">
        <div className="bg-white rounded-xl p-6">
          <AvatarUpload 
            currentAvatar={user?.avatar} 
            onAvatarChange={() => {}} 
          />
          <ProfileForm 
            user={user}
            isLoading={isLoading}
            onSubmit={handleSave}
          />
        </div>
      </div>
    </div>
  );
}