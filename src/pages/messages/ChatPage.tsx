import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import ChatHeader from '../../components/chat/ChatHeader';
import MessageBubble from '../../components/chat/MessageBubble';
import MessageInput from '../../components/chat/MessageInput';
import { mockMessages, currentUser, otherUser } from '../../data/mockChatData';

export default function ChatPage() {
  const { id } = useParams();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [mockMessages]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <ChatHeader participant={otherUser} />
      
      <div className="flex-1 overflow-y-auto px-4 py-6">
        {mockMessages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
            isMine={message.senderId === currentUser.id}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <MessageInput />
    </div>
  );
}