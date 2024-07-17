'use client'

import AdminNavbar from '@/common/navbar/AdminNavbar';
import { useState } from 'react';
import { FaBell, FaLock, FaShieldAlt, FaUser } from 'react-icons/fa';

const SettingsPage = () => {
    const [openSection, setOpenSection] = useState('');

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? '' : section);
    };

    return (
        <div className='flex'>
            <AdminNavbar />
            <div className="flex-1 p-8">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
                </div>
                <div className="space-y-6">
                    <div className="bg-white p-4 rounded shadow">
                        <div
                            className="flex items-center justify-between cursor-pointer"
                            onClick={() => toggleSection('profile')}
                        >
                            <h2 className="text-xl font-semibold flex items-center">
                                <FaUser className="mr-3" /> Profile
                            </h2>
                            <span>{openSection === 'profile' ? '-' : '+'}</span>
                        </div>
                        {openSection === 'profile' && (
                            <div className="mt-4">
                                <form>
                                    <div className="mb-4">
                                        <label className="block text-gray-700">Name</label>
                                        <input type="text" className="w-full p-2 border rounded" />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700">Email</label>
                                        <input type="email" className="w-full p-2 border rounded" />
                                    </div>
                                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Save</button>
                                </form>
                            </div>
                        )}
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <div
                            className="flex items-center justify-between cursor-pointer"
                            onClick={() => toggleSection('account')}
                        >
                            <h2 className="text-xl font-semibold flex items-center">
                                <FaLock className="mr-3" /> Account
                            </h2>
                            <span>{openSection === 'account' ? '-' : '+'}</span>
                        </div>
                        {openSection === 'account' && (
                            <div className="mt-4">
                                <form>
                                    <div className="mb-4">
                                        <label className="block text-gray-700">Password</label>
                                        <input type="password" className="w-full p-2 border rounded" />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700">Confirm Password</label>
                                        <input type="password" className="w-full p-2 border rounded" />
                                    </div>
                                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Change Password</button>
                                </form>
                            </div>
                        )}
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <div
                            className="flex items-center justify-between cursor-pointer"
                            onClick={() => toggleSection('notifications')}
                        >
                            <h2 className="text-xl font-semibold flex items-center">
                                <FaBell className="mr-3" /> Notifications
                            </h2>
                            <span>{openSection === 'notifications' ? '-' : '+'}</span>
                        </div>
                        {openSection === 'notifications' && (
                            <div className="mt-4">
                                <form>
                                    <div className="mb-4">
                                        <label className="block text-gray-700">Email Notifications</label>
                                        <input type="checkbox" className="mr-2" /> Enabled
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700">Push Notifications</label>
                                        <input type="checkbox" className="mr-2" /> Enabled
                                    </div>
                                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Save</button>
                                </form>
                            </div>
                        )}
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <div
                            className="flex items-center justify-between cursor-pointer"
                            onClick={() => toggleSection('privacy')}
                        >
                            <h2 className="text-xl font-semibold flex items-center">
                                <FaShieldAlt className="mr-3" /> Privacy
                            </h2>
                            <span>{openSection === 'privacy' ? '-' : '+'}</span>
                        </div>
                        {openSection === 'privacy' && (
                            <div className="mt-4">
                                <form>
                                    <div className="mb-4">
                                        <label className="block text-gray-700">Profile Visibility</label>
                                        <select className="w-full p-2 border rounded">
                                            <option>Public</option>
                                            <option>Private</option>
                                            <option>Friends only</option>
                                        </select>
                                    </div>
                                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Save</button>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;
