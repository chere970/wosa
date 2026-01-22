import React, { useState } from 'react';
import { ConversationList } from '../components/features/chat/ConversationList';
import { MessageWindow } from '../components/features/chat/MessageWindow';

export function Chat() {
    const [activeConversationId, setActiveConversationId] = useState(1);

    const conversations = [
        { id: 1, name: 'Alex Johnson', lastMessage: 'See you tomorrow at 2 PM!', lastMessageTime: '10:06 AM', unread: false, online: true },
        { id: 2, name: 'Support Team', lastMessage: 'How can we help you?', lastMessageTime: 'Yesterday', unread: true, online: false },
        { id: 3, name: 'Maria Garcia', lastMessage: 'The quote is ready.', lastMessageTime: 'Mon', unread: false, online: false },
    ];

    const activeConversation = conversations.find(c => c.id === activeConversationId);

    return (
        <div className="flex h-[calc(100vh-4rem)] max-w-7xl mx-auto border-x border-gray-200 shadow-sm">
            <ConversationList
                conversations={conversations}
                activeId={activeConversationId}
                onSelect={setActiveConversationId}
            />
            <MessageWindow conversation={activeConversation} />
        </div>
    );
}
