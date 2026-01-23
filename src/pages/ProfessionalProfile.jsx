import React, { useState } from 'react';
import { MapPin, Star, MessageSquare, Briefcase, CheckCircle, Clock, Send } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { useNotification } from '../context/NotificationContext';
import { useNavigate } from 'react-router-dom';

export function ProfessionalProfile() {
    const { addToast, simulatePush } = useNotification();
    const navigate = useNavigate();
    const [isRequesting, setIsRequesting] = useState(false);

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

    const handleSendRequest = () => {
        setIsRequesting(true);
        // Simulate a request being sent
        setTimeout(() => {
            addToast(`Work request sent to ${profile.name}!`, 'success');
            setIsRequesting(false);

            // Simulate a notification that the professional would get
            simulatePush(`${profile.name} accepted your request. You can now chat.`);

            // Navigate to messages after a short delay
            setTimeout(() => {
                navigate('/messages');
            }, 1500);
        }, 1000);
    };

    return (
        <div className="container mx-auto px-4 py-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left Column - Main Info */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Header Card */}
                    <Card className="border-none shadow-sm bg-white overflow-hidden">
                        <div className="h-40 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 relative">
                            <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
                        </div>
                        <div className="px-8 pb-8">
                            <div className="relative flex flex-col sm:flex-row justify-between items-start sm:items-end -mt-16 mb-6 gap-4">
                                <div className="h-32 w-32 rounded-2xl border-4 border-white bg-gray-100 flex items-center justify-center text-3xl font-bold text-blue-600 shadow-xl overflow-hidden">
                                    <img
                                        src={`https://ui-avatars.com/api/?name=${profile.name}&background=eff6ff&color=2563eb&size=128`}
                                        alt={profile.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex gap-3 w-full sm:w-auto">
                                    <Button
                                        variant="secondary"
                                        className="gap-2 flex-1 sm:flex-none shadow-sm"
                                        onClick={() => navigate('/messages')}
                                    >
                                        <MessageSquare className="h-4 w-4 text-blue-600" /> Message
                                    </Button>
                                    <Button
                                        className="gap-2 flex-1 sm:flex-none shadow-lg shadow-blue-200"
                                        onClick={handleSendRequest}
                                        isLoading={isRequesting}
                                    >
                                        <Send className="h-4 w-4" /> Hire Now
                                    </Button>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <h1 className="text-3xl font-bold text-gray-900">{profile.name}</h1>
                                    <CheckCircle className="h-5 w-5 text-blue-500" fill="currentColor" fillOpacity={0.1} />
                                </div>
                                <p className="text-lg text-gray-600 font-medium">{profile.role}</p>

                                <div className="flex flex-wrap gap-5 mt-4 text-sm text-gray-500">
                                    <div className="flex items-center gap-1.5 transition-colors hover:text-gray-900 cursor-default">
                                        <MapPin className="h-4 w-4 text-red-400" /> {profile.location}
                                    </div>
                                    <div className="flex items-center gap-1.5 transition-colors hover:text-gray-900 cursor-default">
                                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                                        <span className="font-bold text-gray-900">{profile.rating}</span> ({profile.reviews} reviews)
                                    </div>
                                    <div className="flex items-center gap-1.5 transition-colors hover:text-gray-900 cursor-default">
                                        <Briefcase className="h-4 w-4 text-blue-400" /> {profile.completedConfig} jobs completed
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* About Section */}
                    <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
                        <CardHeader>
                            <CardTitle className="text-xl">About Me</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 leading-relaxed text-base">
                                {profile.about}
                            </p>
                        </CardContent>
                    </Card>

                    {/* Skills Section */}
                    <Card className="border-none shadow-sm">
                        <CardHeader>
                            <CardTitle className="text-xl">Services & Skills</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2.5">
                                {profile.skills.map((skill) => (
                                    <span key={skill} className="px-4 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-semibold border border-blue-100/50">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Reviews Preview (Static) */}
                    <Card className="border-none shadow-sm">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle className="text-xl">Recent Reviews</CardTitle>
                            <Button variant="ghost" className="text-blue-600 text-sm">View all</Button>
                        </CardHeader>
                        <CardContent className="space-y-8">
                            {[1, 2].map((_, i) => (
                                <div key={i} className="group border-b border-gray-100 last:border-0 pb-8 last:pb-0">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-400">
                                                {i === 0 ? 'SM' : 'JD'}
                                            </div>
                                            <div>
                                                <div className="font-bold text-gray-900">{i === 0 ? 'Sarah Miller' : 'John Davis'}</div>
                                                <div className="text-xs text-gray-400">Verified Client</div>
                                            </div>
                                        </div>
                                        <div className="text-sm text-gray-400">2 days ago</div>
                                    </div>
                                    <div className="flex text-yellow-500 mb-3 gap-0.5">
                                        {[...Array(5)].map((_, j) => <Star key={j} className="h-3.5 w-3.5 fill-current" />)}
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed italic">
                                        "Alex did a fantastic job upgrading our electrical panel. He was punctual, professional, and cleaned up everything afterwards. Highly recommended for any electrical work!"
                                    </p>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column - Availability & Sticky Actions */}
                <div className="space-y-6">
                    <Card className="border-none shadow-xl shadow-blue-900/5 sticky top-24 overflow-hidden group">
                        <div className="h-1.5 bg-blue-600 w-full group-hover:bg-blue-500 transition-colors" />
                        <CardContent className="p-8 space-y-8">
                            <div className="flex justify-between items-center pb-6 border-b border-gray-100">
                                <span className="text-gray-500 font-medium text-sm uppercase tracking-wider">Hourly Rate</span>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-3xl font-black text-gray-900">{profile.rate}</span>
                                </div>
                            </div>

                            <div className="space-y-5">
                                <div className="flex items-start gap-4 p-3 rounded-xl bg-green-50/50 border border-green-100/50 transition-colors hover:bg-green-50">
                                    <div className="mt-1 h-8 w-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                                        <Clock className="h-4 w-4 text-green-600" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900 text-sm">Available Now</div>
                                        <p className="text-xs text-green-700/70 font-medium">Avg. response: 15 mins</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-3 rounded-xl bg-blue-50/50 border border-blue-100/50 transition-colors hover:bg-blue-50">
                                    <div className="mt-1 h-8 w-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="h-4 w-4 text-blue-600" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900 text-sm">Verified Pro</div>
                                        <p className="text-xs text-blue-700/70 font-medium">Background checked & Insured</p>
                                    </div>
                                </div>
                            </div>

                            <Button
                                className="w-full h-14 text-lg font-bold shadow-lg shadow-blue-200"
                                onClick={handleSendRequest}
                                isLoading={isRequesting}
                            >
                                Send Work Request
                            </Button>

                            <div className="space-y-3 pt-2">
                                <p className="text-xs text-center text-gray-400 font-medium">
                                    Payment protection guaranteed
                                </p>
                                <div className="flex justify-center gap-4 grayscale opacity-40">
                                    <div className="text-[10px] font-bold border border-gray-400 px-1 rounded">VISA</div>
                                    <div className="text-[10px] font-bold border border-gray-400 px-1 rounded">STRIPE</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-none shadow-sm bg-gradient-to-br from-indigo-600 to-blue-700 text-white">
                        <CardContent className="p-6 space-y-4">
                            <h3 className="font-bold text-lg">ProService Protection</h3>
                            <p className="text-sm text-blue-50/80 leading-relaxed">
                                Every job is protected. If you're not satisfied, we'll make it right.
                            </p>
                            <Button variant="outline" className="w-full border-white/30 bg-white/10 text-white hover:bg-white/20">
                                Learn More
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
