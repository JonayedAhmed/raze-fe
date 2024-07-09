'use client'

import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useCallback } from 'react';

const Login = () => {

    const router = useRouter();
    const session = useSession();

    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (session?.data && Object.keys(session?.data)) {
            handleRoleWiseRouting(session?.data?.role);
        }
    }, [session]);

    const handleLogin = async (e) => {
        e.preventDefault();
        // Handle login logic here

        const result = await signIn('credentials', {
            email: email,
            password: password,
            redirect: false
        });

        if (result.error) {
            setError({ ...error, wrongPassWord: result.error, statusOfError: true, wrongEmail: '' });
        } else {
            setError({ ...error, wrongPassWord: "", statusOfError: false, wrongEmail: '' });
        }
    };

    const handleRoleWiseRouting = useCallback((role) => {
        if (role === 'USER') {
            router.push('/')
        }
    }, [router]);

    return (
        <div className="flex justify-center items-center min-h-full my-40">
            <div className="bg-white p-8 rounded-lg w-full max-w-md">
                <h2 className="text-5xl font-normal mb-6 text-center text-gray-900">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 required">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 required">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900"
                            required
                        />
                    </div>
                    <div className="mb-4 flex justify-between items-center">
                        <div className='flex'>
                            <input type="checkbox" id="remember" name="remember" className="h-4 w-4 text-gray-900 focus:ring-gray-900 border-gray-300 rounded" />
                            <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">Remember me</label>
                        </div>
                        <div>
                            <Link href="/forgot-password" className="text-sm text-gray-900 hover:underline">Forgot password?</Link>
                        </div>
                    </div>
                    <button type="submit" className="w-full py-2 px-4 bg-gray-900 text-white font-semibold rounded-md shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50">Login</button>
                </form>
                <p className="mt-6 text-center text-sm text-gray-600">Don't have an account? <Link href="/register" className="text-gray-900 hover:underline">Sign up</Link></p>
            </div>
        </div>
    );
};

export default Login;
