export interface Message {
  id: string;
  text: string;
  timestamp: string;
  senderId: string;
}

export interface Chat {
  id: string;
  username: string;
  avatar: string;
  lastMessage: Message;
  unreadCount: number;
}