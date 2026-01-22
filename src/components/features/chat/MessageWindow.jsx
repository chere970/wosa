import React, { useState, useRef, useEffect } from 'react';
import { Send, Paperclip, MoreVertical, Phone, Video } from 'lucide-react';
import { Button } from '../../ui/Button';
import { Input } from '../../ui/Input';
import { cn } from '../../../lib/utils';

export function MessageWindow({ conversation }) {
    const [newMessage, setNewMessage] = useState('');
    const messagesEndRef = useRef(null);

    // Mock messages (in real app, fetched based on conversation.id)
    const [messages, setMessages] = useState([
        { id: 1, sender: 'them', text: 'Hi! I saw your request for an electrician.', time: '10:00 AM' },
        { id: 2, sender: 'me', text: 'Yes, I need help with my panel.', time: '10:05 AM' },
        { id: 3, sender: 'them', text: 'I can stop by tomorrow at 2 PM. Does that work?', time: '10:06 AM' },
    ]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!newMessage.trim()) return;

        setMessages([...messages, {
            id: messages.length + 1,
            sender: 'me',
            text: newMessage,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
        setNewMessage('');
    };

    if (!conversation) {
        return (
            <div className="flex-1 flex items-center justify-center bg-gray-50 text-gray-400">
                <p>Select a conversation to start messaging</p>
            </div>
        );
    }

    return (
        <div className="flex-1 flex flex-col h-full bg-white">
            {/* Header */}
            <div className="h-16 px-6 border-b border-gray-200 flex items-center justify-between flex-shrink-0">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500">
                        {conversation.name.charAt(0)}
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900">{conversation.name}</h3>
                        <p className="text-xs text-green-600 flex items-center gap-1">
                            <span className="h-2 w-2 rounded-full bg-green-600" /> Online
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon"><Phone className="h-5 w-5 text-gray-500" /></Button>
                    <Button variant="ghost" size="icon"><Video className="h-5 w-5 text-gray-500" /></Button>
                    <Button variant="ghost" size="icon"><MoreVertical className="h-5 w-5 text-gray-500" /></Button>
                </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={cn(
                            "flex flex-col max-w-[70%]",
                            msg.sender === 'me' ? "ml-auto items-end" : "items-start"
                        )}
                    >
                        <div
                            className={cn(
                                "px-4 py-2 rounded-2xl text-sm",
                                msg.sender === 'me'
                                    ? "bg-blue-600 text-white rounded-br-none"
                                    : "bg-white border border-gray-200 text-gray-900 rounded-bl-none shadow-sm"
                            )}
                        >
                            {msg.text}
                        </div>
                        <span className="text-[10px] text-gray-400 mt-1 px-1">
                            {msg.time}
                        </span>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-200 flex-shrink-0">
                <form onSubmit={handleSend} className="flex gap-2">
                    <Button variant="ghost" size="icon" type="button" className="text-gray-400 hover:text-gray-600">
                        <Paperclip className="h-5 w-5" />
                    </Button>
                    <Input
                        className="flex-1 rounded-full bg-gray-100 border-none focus:bg-white transition-colors"
                        placeholder="Type a message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <Button type="submit" size="icon" className="rounded-full h-10 w-10">
                        <Send className="h-4 w-4" />
                    </Button>
                </form>
            </div>
        </div>
    );
}
