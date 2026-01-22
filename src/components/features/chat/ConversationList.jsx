import React from 'react';
import { cn } from '../../../lib/utils'; // Adjust path if needed

export function ConversationList({ conversations, activeId, onSelect }) {
    return (
        <div className="flex flex-col h-full bg-white border-r border-gray-200 w-80 flex-shrink-0">
            <div className="p-4 border-b border-gray-200">
                <h2 className="font-bold text-lg text-gray-900">Messages</h2>
            </div>
            <div className="flex-1 overflow-y-auto">
                {conversations.map((conv) => (
                    <div
                        key={conv.id}
                        onClick={() => onSelect(conv.id)}
                        className={cn(
                            "p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors",
                            activeId === conv.id && "bg-blue-50 hover:bg-blue-50"
                        )}
                    >
                        <div className="flex items-start gap-3">
                            <div className="relative">
                                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-500">
                                    {conv.name.charAt(0)}
                                </div>
                                {conv.online && (
                                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white" />
                                )}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="font-medium text-gray-900 truncate">{conv.name}</h3>
                                    <span className="text-xs text-gray-400">{conv.lastMessageTime}</span>
                                </div>
                                <p className={cn(
                                    "text-sm truncate",
                                    conv.unread ? "text-gray-900 font-semibold" : "text-gray-500"
                                )}>
                                    {conv.lastMessage}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
