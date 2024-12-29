export type OrderStatus = 'PENDING' | 'CONFIRMED' | 'DELIVERED' | 'CANCELLED';

export interface Order {
  id: string;
  fullName: string;
  phone: string;
  address: string;
  productId: string;
  productTitle: string;
  productImage: string;
  price: number;
  status: OrderStatus;
  createdAt: string;
}