'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useAuth } from '@/hooks/useAuth';
import Input from './Input';
import Button from './Button';
import Link from 'next/link';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const { login } = useAuth();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await login(username, password);
            router.push('/todo-list')
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form onSubmit={handleSubmit}>
                    <Input
                        id='login-username'
                        label="Your username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input
                        id='login-password'
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button type="submit">Login</Button>
                </form>
                <div className="mt-4 text-center">
                    <Link href="/register" className="text-blue-500 hover:text-blue-600">
                        Don&apos;t have an account? Register here
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default LoginForm