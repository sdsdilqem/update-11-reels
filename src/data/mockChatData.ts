import { Message, ChatParticipant } from '../types/message';

export const currentUser: ChatParticipant = {
  id: 'user1',
  username: 'me',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
  isOnline: true
};

export const otherUser: ChatParticipant = {
  id: 'user2',
  username: 'aysel.m',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
  isOnline: true
};

export const mockMessages: Message[] = [
  {
    id: '1',
    senderId: 'user2',
    text: 'Salam, məhsul hələ satılıb?',
    timestamp: '2024-03-10T10:30:00',
    status: 'read'
  },
  {
    id: '2',
    senderId: 'user1',
    text: 'Salam, xeyr satılmayıb',
    timestamp: '2024-03-10T10:31:00',
    status: 'read'
  },
  {
    id: '3',
    senderId: 'user2',
    text: 'Qiymətdə endirim mümkündür?',
    timestamp: '2024-03-10T10:32:00',
    status: 'read'
  },
  {
    id: '4',
    senderId: 'user1',
    text: 'Təəssüf ki, qiymət sabitdir',
    timestamp: '2024-03-10T10:33:00',
    status: 'delivered'
  },
  {
    id: '5',
    senderId: 'user2',
    text: 'Başa düşdüm, təşəkkürlər',
    timestamp: '2024-03-10T10:34:00',
    status: 'read'
  }
];