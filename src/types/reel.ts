import { Post } from './post';

export interface Reel {
  id: string;
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
  title: string;
  username: string;
  avatar: string;
  likes: number;
  comments: number;
  price: number;
  product: Post;
}