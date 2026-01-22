import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Bell, MessageSquare, Search } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const isLoggedIn = true; // Mock state (Enabled for demo)

    const navLinks = [
        { name: 'Find Professionals', href: '/search' },
        { name: 'Messages', href: '/messages' },
        { name: 'How it Works', href: '/how-it-works' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-8">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-xl">
                                P
                            </div>
                            <span className="text-xl font-bold tracking-tight text-gray-900">ProService</span>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={cn(
                                        "text-sm font-medium transition-colors hover:text-blue-600",
                                        location.pathname === link.href ? "text-blue-600" : "text-gray-600"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Right Side Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        {isLoggedIn ? (
                            <>
                                <Button variant="ghost" size="icon" className="relative">
                                    <Bell className="h-5 w-5" />
                                    <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
                                </Button>
                                <Link to="/messages">
                                    <Button variant="ghost" size="icon">
                                        <MessageSquare className="h-5 w-5" />
                                    </Button>
                                </Link>
                                <div className="h-8 w-8 rounded-full bg-gray-200" />
                            </>
                        ) : (
                            <>
                                <Link to="/login">
                                    <Button variant="ghost">Log in</Button>
                                </Link>
                                <Link to="/signup">
                                    <Button>Sign up</Button>
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-gray-600"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-gray-200 bg-white px-4 py-6 space-y-4">
                    <nav className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="text-base font-medium text-gray-600 hover:text-blue-600"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                    <div className="border-t border-gray-100 pt-4 flex flex-col gap-3">
                        {isLoggedIn ? (
                            <p>Logged In Menu Here</p>
                        ) : (
                            <>
                                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                                    <Button variant="secondary" className="w-full">Log in</Button>
                                </Link>
                                <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                                    <Button className="w-full">Sign up</Button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
}
