import React from 'react';
import { Search, MapPin, ArrowRight, Zap, Scissors, Droplets, Hammer, Home as HomeIcon, Dumbbell, Camera, Settings, Star, ShieldCheck, Users } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { motion } from 'framer-motion';

export function Home() {
    const categories = [
        { name: 'Electrician', icon: <Zap className="h-6 w-6" />, color: 'bg-yellow-50 text-yellow-600' },
        { name: 'Barber', icon: <Scissors className="h-6 w-6" />, color: 'bg-blue-50 text-blue-600' },
        { name: 'Plumber', icon: <Droplets className="h-6 w-6" />, color: 'bg-cyan-50 text-cyan-600' },
        { name: 'Carpenter', icon: <Hammer className="h-6 w-6" />, color: 'bg-orange-50 text-orange-600' },
        { name: 'Cleaning', icon: <HomeIcon className="h-6 w-6" />, color: 'bg-green-50 text-green-600' },
        { name: 'Fitness', icon: <Dumbbell className="h-6 w-6" />, color: 'bg-red-50 text-red-600' },
        { name: 'Photography', icon: <Camera className="h-6 w-6" />, color: 'bg-purple-50 text-purple-600' },
        { name: 'Mechanic', icon: <Settings className="h-6 w-6" />, color: 'bg-slate-50 text-slate-600' },
    ];

    return (
        <div className="flex flex-col bg-white">
            {/* Hero Section */}
            <section className="relative pt-20 pb-28 lg:pt-32 lg:pb-40 overflow-hidden bg-white">
                <div className="container mx-auto px-4 relative z-10 max-w-7xl">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 text-center lg:text-left space-y-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-bold"
                            >
                                <Star className="h-4 w-4 fill-current" />
                                <span>#1 Marketplace for Local Pros</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-5xl md:text-7xl font-black tracking-tight text-gray-900 leading-[1.1]"
                            >
                                Hire the best <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">professionals</span> <br />
                                for any task.
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium"
                            >
                                Connect with verified local experts in minutes. From electricians to personal trainers, we've got you covered.
                            </motion.p>

                            {/* Search Bar */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="bg-white p-3 rounded-3xl shadow-2xl shadow-blue-900/10 border border-gray-100 flex flex-col md:flex-row gap-3 max-w-2xl lg:max-w-none"
                            >
                                <div className="flex-1 relative group">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5 transition-colors group-focus-within:text-blue-500" />
                                    <input
                                        type="text"
                                        placeholder="Try 'Electrician' or 'Barber'..."
                                        className="w-full h-14 pl-12 pr-4 outline-none text-gray-900 font-medium placeholder:text-gray-400 rounded-2xl bg-gray-50/50 focus:bg-white transition-colors border border-transparent focus:border-blue-100"
                                    />
                                </div>
                                <div className="hidden md:block h-14 w-px bg-gray-100" />
                                <div className="flex-1 relative group">
                                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5 transition-colors group-focus-within:text-blue-500" />
                                    <input
                                        type="text"
                                        placeholder="Your location..."
                                        className="w-full h-14 pl-12 pr-4 outline-none text-gray-900 font-medium placeholder:text-gray-400 rounded-2xl bg-gray-50/50 focus:bg-white transition-colors border border-transparent focus:border-blue-100"
                                    />
                                </div>
                                <Button size="lg" className="rounded-2xl h-14 px-10 text-lg font-bold shadow-xl shadow-blue-200 active:scale-95 transition-transform">
                                    Find Help
                                </Button>
                            </motion.div>

                            <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden ring-2 ring-blue-50">
                                            <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-sm text-gray-500 font-medium italic">
                                    Joined by <span className="text-gray-900 font-bold">12,000+</span> professionals this month
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 hidden lg:block relative">
                            <div className="relative z-10 w-full aspect-square rounded-[3rem] bg-gradient-to-br from-blue-50 to-indigo-50 border border-white p-8">
                                <div className="absolute top-12 -left-8 bg-white p-4 rounded-2xl shadow-xl border border-blue-50 animate-bounce duration-[3000ms]">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                                            <ShieldCheck className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-gray-400 uppercase">Verified</p>
                                            <p className="text-sm font-bold text-gray-900">License Checked</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute bottom-20 -right-8 bg-white p-6 rounded-3xl shadow-2xl border border-indigo-50">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center gap-4">
                                            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">AJ</div>
                                            <div>
                                                <p className="font-black text-gray-900">Alex Johnson</p>
                                                <p className="text-xs text-gray-500 font-bold">Electrician • 4.9 ★</p>
                                            </div>
                                        </div>
                                        <Button size="sm" className="w-full rounded-xl">Hire Again</Button>
                                    </div>
                                </div>

                                <div className="w-full h-full rounded-[2.5rem] bg-indigo-600/5 backdrop-blur-sm border-2 border-white/50 flex items-center justify-center overflow-hidden">
                                    <Users className="h-40 w-40 text-blue-600/20" />
                                </div>
                            </div>

                            {/* Background Ornaments */}
                            <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-60 mix-blend-multiply" />
                            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-60 mix-blend-multiply" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6">
                        <div className="text-center md:text-left space-y-2">
                            <h2 className="text-3xl font-black text-gray-900">Popular Services</h2>
                            <p className="text-gray-500 font-medium">Explore the best professionals in your neighborhood</p>
                        </div>
                        <Button variant="outline" className="rounded-xl border-gray-200 font-bold hover:bg-white hover:shadow-md transition-all gap-2">
                            Explore All Categories <ArrowRight className="h-4 w-4" />
                        </Button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                        {categories.map((cat, idx) => (
                            <motion.div
                                key={cat.name}
                                whileHover={{ y: -8 }}
                                className="group cursor-pointer"
                            >
                                <Card className="h-full border-none shadow-sm hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden bg-white">
                                    <CardContent className="p-8 flex flex-col items-center justify-center text-center gap-6">
                                        <div className={cn("h-16 w-16 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300", cat.color)}>
                                            {cat.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-black text-gray-900 text-lg mb-1 group-hover:text-blue-600 transition-colors">{cat.name}</h3>
                                            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">150+ Pros</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="py-24 border-y border-gray-100">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div className="space-y-4">
                            <div className="h-16 w-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mx-auto shadow-lg shadow-blue-200">
                                <ShieldCheck className="h-8 w-8" />
                            </div>
                            <h4 className="text-xl font-black text-gray-900">Secure Payments</h4>
                            <p className="text-gray-500 leading-relaxed font-medium">Money is held safely and only released when you're 100% satisfied.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="h-16 w-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mx-auto shadow-lg shadow-blue-200">
                                <Users className="h-8 w-8" />
                            </div>
                            <h4 className="text-xl font-black text-gray-900">Verified Pros</h4>
                            <p className="text-gray-500 leading-relaxed font-medium">We background check and verify licenses for every professional on our platform.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="h-16 w-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mx-auto shadow-lg shadow-blue-200">
                                <MessageSquare className="h-8 w-8" />
                            </div>
                            <h4 className="text-xl font-black text-gray-900">Instant Chat</h4>
                            <p className="text-gray-500 leading-relaxed font-medium">Connect directly with professionals and get quotes in minutes.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
