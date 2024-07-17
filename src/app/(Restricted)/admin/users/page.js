'use client'

import AdminNavbar from '@/common/navbar/AdminNavbar';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaUserPlus } from 'react-icons/fa';
import DeleteIcon from '../../../../../public/icons/DeleteIcon.svg';
import EditIcon from '../../../../../public/icons/EditIcon.svg';
import SearchIcon from '../../../../../public/icons/SearchIcon.svg';
import { useSession } from 'next-auth/react';
import { getAllUsers } from '@/api/admin/GET';

const UsersPage = () => {

    const { data: session } = useSession();

    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (session) {
            getAllUsers(session.jwtToken).then(response => {
                if (response?.[0]) {
                    setUsers(response?.[0]);
                } else {
                    setUsers([]);
                }
            })
        }
    }, [session])

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
                            <th className="border p-2">Name</th>
                            <th className="border p-2">Email</th>
                            <th className="border p-2">Role</th>
                            <th className="border p-2">Status</th>
                            <th className="border p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td className="border p-2">{user.fullName}</td>
                                <td className="border p-2">{user.email}</td>
                                <td className="border p-2">{user.role}</td>
                                <td className={`border p-2 ${user.status === 'Active' ? 'text-green-600' : 'text-red-600'}`}>{user.status || 'ACTIVE'}</td>
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
