import { Order } from '../types/order';

export const mockOrders: Order[] = [
  {
    id: '1',
    fullName: 'Aysel Məmmədova',
    phone: '050 555 55 55',
    address: 'Bakı şəhəri, Nərimanov rayonu',
    productId: '1',
    productTitle: 'iPhone 13 Pro',
    productImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
    price: 1999,
    status: 'CONFIRMED',
    createdAt: '2024-03-10T08:00:00'
  },
  {
    id: '2',
    fullName: 'Cavid Əliyev',
    phone: '055 444 44 44',
    address: 'Bakı şəhəri, Yasamal rayonu',
    productId: '2',
    productTitle: 'MacBook Air M2',
    productImage: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400',
    price: 2499,
    status: 'PENDING',
    createdAt: '2024-03-09T14:20:00'
  }
];