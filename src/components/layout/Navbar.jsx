import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Bell, MessageSquare, Search, ChevronDown, User, Settings, LogOut } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const location = useLocation();
    const isLoggedIn = true; // Mock state (Enabled for demo)

    const navLinks = [
        { name: 'Find Professionals', href: '/search' },
        { name: 'Messages', href: '/messages' },
        { name: 'How it Works', href: '/how-it-works' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-sm shadow-sm shadow-black/[0.02]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-10">
                        <Link to="/" className="flex items-center gap-2.5 group transition-transform hover:scale-[1.02] active:scale-[0.98]">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white font-black text-xl shadow-lg shadow-blue-200">
                                P
                            </div>
                            <span className="text-xl font-black tracking-tight text-gray-900">
                                Pro<span className="text-blue-600 font-black">Service</span>
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={cn(
                                        "relative px-4 py-2 text-sm font-semibold transition-all hover:text-blue-600 rounded-lg",
                                        location.pathname === link.href
                                            ? "text-blue-600 bg-blue-50/50"
                                            : "text-gray-500 hover:bg-gray-50"
                                    )}
                                >
                                    {link.name}
                                    {location.pathname === link.href && (
                                        <motion.div
                                            layoutId="nav-active"
                                            className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600 rounded-full"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Right Side Actions */}
                    <div className="hidden md:flex items-center gap-3">
                        {isLoggedIn ? (
                            <div className="flex items-center gap-2">
                                <Button variant="ghost" size="icon" className="relative hover:bg-gray-50 text-gray-500 hover:text-gray-900 group">
                                    <Bell className="h-5 w-5 transition-transform group-hover:rotate-12" />
                                    <span className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white animate-pulse" />
                                </Button>

                                <Link to="/messages">
                                    <Button variant="ghost" size="icon" className="relative hover:bg-gray-50 text-gray-500 hover:text-gray-900 group">
                                        <MessageSquare className="h-5 w-5 transition-transform group-hover:scale-110" />
                                        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white shadow-sm">
                                            3
                                        </span>
                                    </Button>
                                </Link>

                                <div className="h-8 w-px bg-gray-100 mx-2" />

                                <div className="relative">
                                    <button
                                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                                        className="flex items-center gap-2 pl-1 pr-2 py-1 rounded-full hover:bg-gray-50 transition-colors"
                                    >
                                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs ring-2 ring-white">
                                            JD
                                        </div>
                                        <ChevronDown className={cn("h-4 w-4 text-gray-400 transition-transform", isProfileOpen && "rotate-180")} />
                                    </button>

                                    <AnimatePresence>
                                        {isProfileOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                className="absolute right-0 mt-3 w-56 rounded-2xl border border-gray-100 bg-white p-2 shadow-xl shadow-black/5 ring-1 ring-black/5"
                                            >
                                                <div className="px-3 py-2 border-b border-gray-50 mb-1">
                                                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Account</p>
                                                    <p className="text-sm font-bold text-gray-900 truncate">John Davis</p>
                                                </div>
                                                <button className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                                                    <User className="h-4 w-4 text-gray-400" /> View Profile
                                                </button>
                                                <button className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                                                    <Settings className="h-4 w-4 text-gray-400" /> Settings
                                                </button>
                                                <div className="h-px bg-gray-50 my-1" />
                                                <button className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors">
                                                    <LogOut className="h-4 w-4" /> Log out
                                                </button>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center gap-3">
                                <Link to="/login">
                                    <Button variant="ghost" className="font-semibold">Log in</Button>
                                </Link>
                                <Link to="/signup">
                                    <Button className="font-bold shadow-lg shadow-blue-100">Sign up</Button>
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-gray-50 bg-white px-4 py-8 space-y-6 overflow-hidden"
                    >
                        <nav className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={cn(
                                        "px-4 py-3 text-lg font-bold rounded-xl transition-all",
                                        location.pathname === link.href
                                            ? "text-blue-600 bg-blue-50"
                                            : "text-gray-600 hover:bg-gray-50"
                                    )}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                        <div className="pt-6 border-t border-gray-50 flex flex-col gap-3">
                            {isLoggedIn ? (
                                <Button variant="outline" className="w-full justify-start gap-3 h-14 rounded-2xl">
                                    <User className="h-5 w-5" /> My Profile
                                </Button>
                            ) : (
                                <>
                                    <Link to="/login" className="w-full" onClick={() => setIsMenuOpen(false)}>
                                        <Button variant="secondary" className="w-full h-14 rounded-2xl">Log in</Button>
                                    </Link>
                                    <Link to="/signup" className="w-full" onClick={() => setIsMenuOpen(false)}>
                                        <Button className="w-full h-14 rounded-2xl font-bold">Sign up</Button>
                                    </Link>
                                </>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
