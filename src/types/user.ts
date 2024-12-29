export interface User {
  id: string;
  username: string;
  email: string;
  avatar: string;
  verificationLevel: 'BASIC' | 'VERIFIED' | 'PREMIUM';
  rating: number;
  successfulSales: number;
  joinDate: Date;
  trustScore: number;
  specializations: string[];
}