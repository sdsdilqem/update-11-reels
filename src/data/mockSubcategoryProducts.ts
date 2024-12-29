import { Post } from '../types/post';

export const mockSubcategoryProducts: Record<string, Post[]> = {
  'Avtomobillər': [
    {
      id: 101,
      image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800',
      title: 'Mercedes-Benz S 500 4MATIC Long, 2023',
      price: 185000,
      username: 'premiumcars',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      likes: 234,
      comments: 18,
      isSponsored: true
    },
    {
      id: 102,
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800',
      title: 'BMW M4 Competition, 2023',
      price: 98000,
      username: 'cardealer',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      likes: 156,
      comments: 24
    },
    {
      id: 103,
      image: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=800',
      title: 'Mercedes-Benz E 200 AMG Line, 2024',
      price: 92000,
      username: 'autohaus',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
      likes: 189,
      comments: 27
    },
    {
      id: 104,
      image: 'https://images.unsplash.com/photo-1617814076764-11459fcc4f3c?w=800',
      title: 'Lexus LX 600 F Sport, 2024',
      price: 165000,
      username: 'luxurycars',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      likes: 278,
      comments: 32,
      isSponsored: true
    },
    {
      id: 105,
      image: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800',
      title: 'BMW X7 M50i, 2023',
      price: 143000,
      username: 'bmwdealer',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400',
      likes: 167,
      comments: 21
    },
    {
      id: 106,
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800',
      title: 'Porsche Cayenne Turbo GT, 2024',
      price: 225000,
      username: 'porschecenter',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400',
      likes: 312,
      comments: 45,
      isSponsored: true
    }
  ],
  // ... rest of the categories remain unchanged
};