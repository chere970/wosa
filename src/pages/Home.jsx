import React from 'react';
import { Search, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card, CardContent } from '../components/ui/Card';

export function Home() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center space-y-8">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                            Find the perfect <span className="text-blue-600">professional</span> for your local needs.
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                            Connect with top-rated barbers, electricians, plumbers, and more in your area. Safe, simple, and secure.
                        </p>

                        {/* Search Bar */}
                        <div className="bg-white p-2 rounded-2xl shadow-lg border border-gray-100 flex flex-col md:flex-row gap-2 max-w-2xl mx-auto">
                            <div className="flex-1 relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                                <input
                                    type="text"
                                    placeholder="What service do you need?"
                                    className="w-full h-12 pl-10 pr-4 outline-none text-gray-900 placeholder:text-gray-400 rounded-xl"
                                />
                            </div>
                            <div className="h-px md:h-12 w-full md:w-px bg-gray-200" />
                            <div className="flex-1 relative">
                                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                                <input
                                    type="text"
                                    placeholder="Zip code or City"
                                    className="w-full h-12 pl-10 pr-4 outline-none text-gray-900 placeholder:text-gray-400 rounded-xl"
                                />
                            </div>
                            <Button size="lg" className="rounded-xl w-full md:w-auto">
                                Search
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Abstract Background Shapes */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-50 rounded-full blur-3xl opacity-50" />
            </section>

            {/* Categories Grid */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-end mb-10">
                        <h2 className="text-2xl font-bold text-gray-900">Popular Services</h2>
                        <Button variant="ghost" className="text-blue-600 gap-1">View all <ArrowRight className="h-4 w-4" /></Button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {['Electrician', 'Barber', 'Plumber', 'Carpenter', 'House Cleaning', 'Personal Trainer', 'Photographer', 'Mechanic'].map((cat) => (
                            <Card key={cat} className="hover:shadow-md transition-shadow cursor-pointer border-none shadow-sm">
                                <CardContent className="p-6 flex flex-col items-center justify-center text-center gap-4">
                                    <div className="h-12 w-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                                        {/* Placeholder Icon */}
                                        <Search className="h-6 w-6" />
                                    </div>
                                    <h3 className="font-medium text-gray-900">{cat}</h3>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
