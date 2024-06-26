// pages/login.js
import Head from 'next/head';

export default function Login() {
    return (
        <>
            <Head>
                <title>Login | YourWebsite</title>
            </Head>
            <div className="min-h-screen flex items-center justify-center" style={{ backgroundImage: 'url(/path-to-your-background-image.jpg)' }}>
                <div className="bg-white bg-opacity-70 backdrop-blur-lg p-8 rounded-xl shadow-md max-w-md w-full">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login to Your Account</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-red-600 text-white font-bold py-3 rounded-lg shadow-lg hover:bg-red-700 transition-colors duration-300"
                        >
                            Login
                        </button>
                    </form>
                    <p className="text-center text-gray-600 mt-4">
                        Don't have an account? <a href="/register" className="text-red-500 hover:text-red-700 font-medium">Sign Up</a>
                    </p>
                </div>
            </div>
        </>
    );
}
