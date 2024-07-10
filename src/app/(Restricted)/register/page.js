'use client'

import { registerUser } from '@/app/api/auth/POST';
import Link from 'next/link';
import { useState } from 'react';

const initialValue = {
    fullName: '',
    phone: '+880',
    email: '',
    password: '',
    confirmPassword: ''
}

const RegisterPage = () => {
    const [values, setValues] = useState({ ...initialValue });
    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};
        tempErrors.fullName = values.fullName ? "" : "Full Name is required.";
        tempErrors.phone = values.phone && values.phone.length >= 14 ? "" : "Valid Bangladeshi number is required.";
        tempErrors.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email) ? "" : "Email is not valid.";
        tempErrors.password = values.password ? "" : "Password is required.";
        tempErrors.confirmPassword = values.confirmPassword === values.password ? "" : "Passwords do not match.";
        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === "");
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (validate()) {
            registerUser(values).then(response => {
                if (response?.[0]) {

                } else {

                }
            })
        } else {
            console.log("Form is invalid, display errors.");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-full my-30">
            <div className="bg-white p-8 rounded-lg w-full max-w-md">
                <h2 className="text-5xl font-normal mb-6 text-center text-gray-900">Register</h2>
                <form onSubmit={handleRegister}>
                    <div className="mb-4">
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 required">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={values?.fullName}
                            onChange={(e) => setValues({ ...values, fullName: e.target.value })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900"
                            required
                        />
                        {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 required">Mobile</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={values?.phone}
                            onChange={(e) => setValues({ ...values, phone: e.target.value })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900"
                            required
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 required">Email address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={values?.email}
                            onChange={(e) => setValues({ ...values, email: e.target.value })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900"
                            required
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 required">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={values?.password}
                            onChange={(e) => setValues({ ...values, password: e.target.value })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900"
                            required
                        />
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 required">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={values?.confirmPassword}
                            onChange={(e) => setValues({ ...values, confirmPassword: e.target.value })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900"
                            required
                        />
                        {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
                    </div>
                    <button type="submit" className="w-full py-2 px-4 bg-gray-900 text-white font-semibold rounded-md shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50">Register</button>
                </form>
                <p className="mt-6 text-center text-sm text-gray-600">Already have an account? <Link href="/login" className="text-gray-900 hover:underline">Login</Link></p>
            </div>
        </div>
    );
};

export default RegisterPage;
