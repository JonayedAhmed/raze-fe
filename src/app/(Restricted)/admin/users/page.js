'use client'

import AdminNavbar from '@/common/navbar/AdminNavbar';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaUserPlus } from 'react-icons/fa';
import DeleteIcon from '../../../../../public/icons/DeleteIcon.svg';
import EditIcon from '../../../../../public/icons/EditIcon.svg';
import SearchIcon from '../../../../../public/icons/SearchIcon.svg';

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
                <div className='mb-4'>
                    <h1 className="text-3xl font-bold text-gray-900">Users</h1>
                </div>

                <div className='flex justify-between items-center mb-4'>
                    <Link href="/admin/products/new">
                        <button className="flex items-center bg-gray-900 text-white px-4 py-2 rounded">
                            <FaUserPlus className="mr-2" /> Add New User
                        </button>
                    </Link>

                    <div className="flex relative w-full lg:w-auto mt-3 lg:mt-0">
                        <input
                            className="border border-gray-300 rounded-md p-2 w-full"
                            placeholder="Search Here"
                        // value={searchedWord}
                        // onChange={(e) => setSearchedWord(e.target.value)}
                        />
                        <Image src={SearchIcon} className="absolute top-3 right-3" alt="Search Icon" />
                    </div>
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
                                        <Link href={`/admin/products/edit/${user.id}`}>
                                            <button className="mr-2 px-3 py-1 rounded">
                                                <Image src={EditIcon} alt='EditIcon' height={20} />
                                            </button>
                                        </Link>
                                        <button className="px-3 py-1 rounded">
                                            <Image src={DeleteIcon} alt='DeleteIcon' height={30} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersPage;
