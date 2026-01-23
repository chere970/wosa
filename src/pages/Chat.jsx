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
        <div className="bg-gray-50 h-[calc(100vh-4rem)] overflow-hidden">
            <div className="max-w-[1600px] h-full mx-auto flex shadow-sm">
                <ConversationList
                    conversations={conversations}
                    activeId={activeConversationId}
                    onSelect={setActiveConversationId}
                />
                <MessageWindow conversation={activeConversation} />
            </div>
        </div>
    );
}
