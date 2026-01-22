import React from 'react';
import { Navbar } from './Navbar';

export function Layout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
            <Navbar />
            <main className="flex-1">
                {children}
            </main>
            <footer className="bg-white border-t border-gray-200 py-12">
                <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} ProService Marketplace. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
