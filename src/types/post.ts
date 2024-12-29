export interface Post {
  id: number;
  image: string;
  title: string;
  price: number;
  username: string;
  avatar: string;
  likes: number;
  comments: number;
  isSponsored?: boolean;
}

export interface PostFormData {
  title: string;
  description: string;
  category: string;
  price: string;
  images: string[];
  phone: string;
  sellerName: string;
}