export interface Message {
  id: string;
  text: string;
  senderId: string;
  timestamp: string;
  status?: 'sent' | 'delivered' | 'read';
}

export interface ChatParticipant {
  id: string;
  username: string;
  avatar: string;
  isOnline: boolean;
}