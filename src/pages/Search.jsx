import React, { useState } from 'react';
import { Search as SearchIcon, MapPin, Filter, Star } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card, CardContent } from '../components/ui/Card';
import { Link } from 'react-router-dom';

export function SearchPage() {
    const [searchTerm, setSearchTerm] = useState('');

    // Mock data
    const professionals = [
        { id: 1, name: "Alex Johnson", role: "Master Electrician", location: "San Francisco", rating: 4.9, reviews: 124, price: 80, image: null },
        { id: 2, name: "Maria Garcia", role: "Professional Cleaner", location: "Oakland", rating: 4.8, reviews: 89, price: 45, image: null },
        { id: 3, name: "David Kim", role: "Plumber", location: "San Mateo", rating: 4.7, reviews: 56, price: 95, image: null },
        { id: 4, name: "Sarah Wilson", role: "Personal Trainer", location: "San Francisco", rating: 5.0, reviews: 32, price: 60, image: null },
        { id: 5, name: "Mike Chen", role: "Carpenter", location: "Berkeley", rating: 4.6, reviews: 210, price: 75, image: null },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Search Header */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                        placeholder="Search for professionals (e.g. Electrician)"
                        className="pl-10 h-12 text-lg"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="relative w-full md:w-64">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input placeholder="Location" className="pl-10 h-12 text-lg" />
                </div>
                <Button size="lg" className="h-12 px-8">Search</Button>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Filters Sidebar */}
                <div className="w-full lg:w-64 space-y-6 hidden lg:block">
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <Filter className="h-4 w-4" /> Filters
                        </h3>

                        <div className="space-y-4">
                            <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                                <h4 className="font-medium text-sm mb-3">Hourly Rate</h4>
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm text-gray-600">
                                        <input type="checkbox" className="rounded text-blue-600" /> &lt; $50/hr
                                    </label>
                                    <label className="flex items-center gap-2 text-sm text-gray-600">
                                        <input type="checkbox" className="rounded text-blue-600" /> $50 - $100/hr
                                    </label>
                                    <label className="flex items-center gap-2 text-sm text-gray-600">
                                        <input type="checkbox" className="rounded text-blue-600" /> $100+/hr
                                    </label>
                                </div>
                            </div>

                            <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                                <h4 className="font-medium text-sm mb-3">Rating</h4>
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm text-gray-600">
                                        <input type="radio" name="rating" className="text-blue-600" /> 4.5 & up
                                    </label>
                                    <label className="flex items-center gap-2 text-sm text-gray-600">
                                        <input type="radio" name="rating" className="text-blue-600" /> 4.0 & up
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Results Grid */}
                <div className="flex-1">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold text-gray-900">{professionals.length} Professionals found</h2>
                        <select className="bg-white border text-sm border-gray-200 rounded-lg px-3 py-2 outline-none">
                            <option>Recommended</option>
                            <option>Price: Low to High</option>
                            <option>Highest Rated</option>
                        </select>
                    </div>

                    <div className="space-y-4">
                        {professionals.map((pro) => (
                            <Link to={`/profile/${pro.id}`} key={pro.id} className="block group">
                                <Card className="flex flex-col sm:flex-row p-6 hover:shadow-md transition-shadow cursor-pointer">
                                    <div className="h-24 w-24 sm:h-32 sm:w-32 rounded-lg bg-gray-200 flex-shrink-0 flex items-center justify-center text-xl font-bold text-gray-400 mb-4 sm:mb-0 sm:mr-6">
                                        {/* Placeholder Image */}
                                        {pro.name.charAt(0)}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{pro.name}</h3>
                                                <p className="text-gray-600">{pro.role}</p>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-lg font-bold text-gray-900">${pro.price}/hr</div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4 mt-2 mb-4">
                                            <div className="flex items-center gap-1 text-sm text-gray-600">
                                                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                                                <span className="font-medium text-gray-900">{pro.rating}</span>
                                                <span className="text-gray-400">({pro.reviews})</span>
                                            </div>
                                            <div className="flex items-center gap-1 text-sm text-gray-600">
                                                <MapPin className="h-4 w-4 text-gray-400" />
                                                {pro.location}
                                            </div>
                                        </div>

                                        <p className="text-sm text-gray-500 line-clamp-2">
                                            Experienced professional dedicated to delivering high-quality service. Checked and verified by ProService platform.
                                        </p>
                                    </div>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
