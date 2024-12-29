import { Reel } from '../types/reel';
import { samplePosts } from './samplePosts';

export const sampleReels: Reel[] = [
  {
    id: '1',
    type: 'video',
    url: 'https://azersoft.org/3.mp4',
    title: 'Mercedes-Benz S-Class 2024',
    username: 'premiumcars',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    likes: 876,
    comments: 54,
    price: 245000,
    product: samplePosts[0]
  },
  {
    id: '1',
    type: 'video',
    url: 'https://azersoft.org/4.mp4',
    thumbnail:'https://azersoft.org/play.svg',
    title: 'Mercedes-Benz S-Class 2024',
    username: 'premiumcars',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    likes: 876,
    comments: 54,
    price: 245000,
    product: samplePosts[0]
  },
  
  {
    id: '2',
    type: 'video',
    url: 'https://azersoft.org/2.mp4',
    title: 'iPhone 15 Pro Max 256GB',
    username: 'techstore',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    likes: 543,
    comments: 32,
    price: 2799,
    product: samplePosts[1]
  },

  {
    id: '3',
    type: 'video',
        thumbnail:'https://azersoft.org/play.svg',

    url: 'https://azersoft.org/1.mp4',
    title: 'iPhone 15 Pro Max 256GB',
    username: 'techstore',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    likes: 543,
    comments: 32,
    price: 2799,
    product: samplePosts[1]
  },

  
  // Add more image reels from samplePosts
  ...samplePosts.slice(2, 6).map(post => ({
    id: post.id.toString(),
    type: 'image' as const,
    url: post.image,
    title: post.title,
    username: post.username,
    avatar: post.avatar,
    likes: post.likes,
    comments: post.comments,
    price: post.price,
    product: post
  }))
];