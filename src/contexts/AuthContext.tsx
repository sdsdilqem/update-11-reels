import React, { createContext, useContext, useState } from 'react';
import type { User } from '../types/user';

interface AuthSheetState {
  isOpen: boolean;
  defaultTab: 'login' | 'register';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  showAuthSheet: AuthSheetState;
  setShowAuthSheet: (state: AuthSheetState) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [showAuthSheet, setShowAuthSheet] = useState<AuthSheetState>({
    isOpen: false,
    defaultTab: 'login'
  });

  const login = async (email: string, password: string) => {
    // TODO: Implement actual login logic
    const mockUser: User = {
      id: '1',
      username: 'demo_user',
      email: email,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      verificationLevel: 'BASIC',
      rating: 4.5,
      successfulSales: 12,
      joinDate: new Date(),
      trustScore: 85,
      specializations: ['Electronics', 'Fashion']
    };
    setUser(mockUser);
    setShowAuthSheet({ isOpen: false, defaultTab: 'login' });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        login, 
        logout, 
        isAuthenticated: !!user,
        showAuthSheet,
        setShowAuthSheet
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};