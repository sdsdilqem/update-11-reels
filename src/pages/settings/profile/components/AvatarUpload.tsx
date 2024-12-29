import React from 'react';
import { Camera } from 'lucide-react';

interface AvatarUploadProps {
  currentAvatar?: string;
  onAvatarChange: (file: File) => void;
}

export default function AvatarUpload({ currentAvatar, onAvatarChange }: AvatarUploadProps) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onAvatarChange(file);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <img
          src={currentAvatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400'}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover"
        />
        <label className="absolute bottom-0 right-0 p-2 bg-blue-500 rounded-full cursor-pointer hover:bg-blue-600 transition-colors">
          <Camera className="w-4 h-4 text-white" />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      </div>
      <p className="text-sm text-gray-500 mt-2">Profil şəkli</p>
    </div>
  );
}