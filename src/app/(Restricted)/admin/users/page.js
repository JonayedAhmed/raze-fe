'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaUserPlus, FaSearch, FaEdit, FaTrash } from 'react-icons/fa';
import AdminNavbar from '@/common/navbar/AdminNavbar';

const UsersPage = () => {
    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'john_doe',
            email: 'john@example.com',
            role: 'Admin',
            status: 'Active'
        },
        {
            id: 2,
            username: 'jane_smith',
            email: 'jane@example.com',
            role: 'User',
            status: 'Active'
        },
        {
            id: 3,
            username: 'michael_jones',
            email: 'michael@example.com',
            role: 'User',
            status: 'Inactive'
        },
        {
            id: 4,
            username: 'emily_davis',
            email: 'emily@example.com',
            role: 'Moderator',
            status: 'Active'
        },
        {
            id: 5,
            username: 'william_brown',
            email: 'william@example.com',
            role: 'User',
            status: 'Active'
        }
    ]);

    return (
        <div className='flex'>
            <AdminNavbar />
            <div className="flex-1 p-8">
                <div className="mb-6 flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-gray-900">Users</h1>
                    <Link href="/admin/users/new">
                        <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded">
                            <FaUserPlus className="mr-2" /> Add New User
                        </button>
                    </Link>
                </div>
                <div className="bg-white p-6 rounded shadow">
                    <div className="mb-4 flex items-center">
                        <input type="text" placeholder="Search users" className="border p-2 rounded w-full" />
                        <button className="ml-2 bg-gray-600 text-white px-4 py-2 rounded">
                            <FaSearch />
                        </button>
                    </div>
                    <table className="w-full border-collapse">
                        <thead>
                            <tr>
                                <th className="border p-2">Username</th>
                                <th className="border p-2">Email</th>
                                <th className="border p-2">Role</th>
                                <th className="border p-2">Status</th>
                                <th className="border p-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id}>
                                    <td className="border p-2">{user.username}</td>
                                    <td className="border p-2">{user.email}</td>
                                    <td className="border p-2">{user.role}</td>
                                    <td className={`border p-2 ${user.status === 'Active' ? 'text-green-600' : 'text-red-600'}`}>{user.status}</td>
                                    <td className="border p-2">
                                        <div className="flex items-center justify-center">
                                            <Link href={`/admin/users/edit/${user.id}`}>
                                                <button className="mr-2 bg-green-600 text-white px-3 py-1 rounded">
                                                    <FaEdit />
                                                </button>
                                            </Link>
                                            <button className="bg-red-600 text-white px-3 py-1 rounded">
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UsersPage;
