import React from 'react';
import { MapPin, Star, MessageSquare, Briefcase, CheckCircle, Clock } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

export function ProfessionalProfile() {
    // Mock data
    const profile = {
        name: "Alex Johnson",
        role: "Master Electrician",
        location: "San Francisco, CA",
        rating: 4.9,
        reviews: 124,
        rate: "$80/hr",
        about: "Licensed electrician with over 10 years of experience in residential and commercial electrical systems. I specialize in panel upgrades, lighting installation, and troubleshooting.",
        skills: ["Panel Upgrades", "Lighting", "Wiring", "Smart Home", "EV Chargers"],
        completedConfig: 342,
        availability: "Available this week"
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left Column - Main Info */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Header Card */}
                    <Card className="border-none shadow-sm bg-white overflow-hidden">
                        <div className="h-32 bg-gradient-to-r from-blue-600 to-indigo-600" />
                        <div className="px-8 pb-8">
                            <div className="relative flex justify-between items-end -mt-12 mb-6">
                                <div className="h-24 w-24 rounded-full border-4 border-white bg-gray-200 flex items-center justify-center text-2xl font-bold text-gray-400">
                                    {/* Placeholder Avatar */}
                                    AJ
                                </div>
                                <div className="flex gap-3">
                                    <Button variant="outline" className="gap-2">
                                        <MessageSquare className="h-4 w-4" /> Message
                                    </Button>
                                    <Button className="gap-2">Hire Now</Button>
                                </div>
                            </div>

                            <div>
                                <h1 className="text-3xl font-bold text-gray-900">{profile.name}</h1>
                                <p className="text-lg text-gray-600 font-medium">{profile.role}</p>

                                <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">
                                    <div className="flex items-center gap-1">
                                        <MapPin className="h-4 w-4" /> {profile.location}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                                        <span className="font-semibold text-gray-900">{profile.rating}</span> ({profile.reviews} reviews)
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Briefcase className="h-4 w-4" /> {profile.completedConfig} jobs completed
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* About Section */}
                    <Card className="border-none shadow-sm">
                        <CardHeader>
                            <CardTitle>About Me</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 leading-relaxed">
                                {profile.about}
                            </p>
                        </CardContent>
                    </Card>

                    {/* Skills Section */}
                    <Card className="border-none shadow-sm">
                        <CardHeader>
                            <CardTitle>Services & Skills</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {profile.skills.map((skill) => (
                                    <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Reviews Preview (Static) */}
                    <Card className="border-none shadow-sm">
                        <CardHeader>
                            <CardTitle>Recent Reviews</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {[1, 2].map((_, i) => (
                                <div key={i} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="font-medium text-gray-900">Sarah M.</div>
                                        <div className="text-sm text-gray-400">2 days ago</div>
                                    </div>
                                    <div className="flex text-yellow-500 mb-2">
                                        {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}
                                    </div>
                                    <p className="text-gray-600 text-sm">
                                        Alex did a fantastic job upgrading our electrical panel. He was punctual, professional, and cleaned up everything afterwards. Highly recommended!
                                    </p>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column - Availability & Sticky Actions */}
                <div className="space-y-6">
                    <Card className="border-none shadow-sm sticky top-24">
                        <CardContent className="p-6 space-y-6">
                            <div className="flex justify-between items-center pb-6 border-b border-gray-100">
                                <span className="text-gray-600">Hourly Rate</span>
                                <span className="text-2xl font-bold text-gray-900">{profile.rate}</span>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <Clock className="h-5 w-5 text-green-600 mt-0.5" />
                                    <div>
                                        <div className="font-medium text-gray-900">Available Now</div>
                                        <p className="text-sm text-gray-500">Fast response time (avg. 1hr)</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                                    <div>
                                        <div className="font-medium text-gray-900">Verified Pro</div>
                                        <p className="text-sm text-gray-500">Background checked & Insured</p>
                                    </div>
                                </div>
                            </div>

                            <Button className="w-full h-12 text-lg">Send Request</Button>
                            <p className="text-xs text-center text-gray-400">
                                You won't be charged until the job is done.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
