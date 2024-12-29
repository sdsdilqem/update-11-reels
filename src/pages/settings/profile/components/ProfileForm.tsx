import React from 'react';
import { User } from '../../../../types/user';
import FormInput from './FormInput';

interface ProfileFormProps {
  user: User | null;
  isLoading: boolean;
  onSubmit: (data: Partial<User>) => void;
}

export default function ProfileForm({ user, isLoading, onSubmit }: ProfileFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    onSubmit({
      username: formData.get('username') as string,
      email: formData.get('email') as string,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-6">
      <FormInput
        label="İstifadəçi adı"
        name="username"
        defaultValue={user?.username}
        required
      />
      
      <FormInput
        label="Email"
        name="email"
        type="email"
        defaultValue={user?.email}
        required
      />
      
      <FormInput
        label="Telefon"
        name="phone"
        type="tel"
        placeholder="0XX XXX XX XX"
      />

      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors disabled:opacity-50"
      >
        {isLoading ? 'Yenilənir...' : 'Yadda saxla'}
      </button>
    </form>
  );
}