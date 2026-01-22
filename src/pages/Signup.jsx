import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Briefcase } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/Card';
import { cn } from '../lib/utils';

export function Signup() {
    const [role, setRole] = useState('client'); // 'client' or 'professional'
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => setIsLoading(false), 1500);
    };

    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] bg-gray-50 px-4 py-8">
            <Card className="w-full max-w-md shadow-lg border-none">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-center">Create an account</CardTitle>
                    <CardDescription className="text-center">
                        Choose how you want to use ProService
                    </CardDescription>
                </CardHeader>

                <div className="px-6 mb-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div
                            className={cn(
                                "cursor-pointer rounded-xl border-2 p-4 flex flex-col items-center gap-2 transition-all hover:border-blue-200",
                                role === 'client' ? "border-blue-600 bg-blue-50/50" : "border-gray-200 bg-white"
                            )}
                            onClick={() => setRole('client')}
                        >
                            <User className={cn("h-6 w-6", role === 'client' ? "text-blue-600" : "text-gray-400")} />
                            <span className={cn("font-medium", role === 'client' ? "text-blue-900" : "text-gray-500")}>I'm a Client</span>
                        </div>
                        <div
                            className={cn(
                                "cursor-pointer rounded-xl border-2 p-4 flex flex-col items-center gap-2 transition-all hover:border-blue-200",
                                role === 'professional' ? "border-blue-600 bg-blue-50/50" : "border-gray-200 bg-white"
                            )}
                            onClick={() => setRole('professional')}
                        >
                            <Briefcase className={cn("h-6 w-6", role === 'professional' ? "text-blue-600" : "text-gray-400")} />
                            <span className={cn("font-medium", role === 'professional' ? "text-blue-900" : "text-gray-500")}>I'm a Pro</span>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-4">
                        <Input
                            label="Full Name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                        <Input
                            type="email"
                            label="Email"
                            placeholder="m@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                        <Input
                            type="password"
                            label="Password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            required
                        />
                    </CardContent>
                    <CardFooter className="flex flex-col gap-4">
                        <Button type="submit" className="w-full" isLoading={isLoading}>
                            {role === 'client' ? 'Sign up as Client' : 'Sign up as Professional'}
                        </Button>
                        <div className="text-center text-sm text-gray-500">
                            Already have an account?{' '}
                            <Link to="/login" className="text-blue-600 hover:underline font-medium">
                                Sign in
                            </Link>
                        </div>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}
