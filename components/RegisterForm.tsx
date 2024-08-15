'use client'
import { authService } from '@/services/authService';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import Input from './Input';
import Button from './Button';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        try {
            const response = await authService.register(username, password)
            console.log('Registration response: ', response);
            if (response.data.isSuccess) {
                router.push('/login');
            } else {
                const data = await response.json();
                setError(data.message || "An error occurred during registration.");
            }
        } catch (error) {
            setError("An error occurred while connecting to the server.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
                <form onSubmit={handleSubmit}>
                    <Input
                        label="Username"
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <Input
                        label="Password"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <Input
                        label="Confirm Password"
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                    <Button type="submit">Register</Button>
                </form>
                <p className="mt-4 text-center text-sm">
                    Already have an account? <Link href="/login" className="text-blue-500 hover:text-blue-600">Log in</Link>
                </p>
            </div>
        </div>
    );
}

export default RegisterForm