'use client'

import AdminNavbar from '@/common/navbar/AdminNavbar';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import DeleteIcon from '../../../../../public/icons/DeleteIcon.svg';
import EditIcon from '../../../../../public/icons/EditIcon.svg';
import SearchIcon from '../../../../../public/icons/SearchIcon.svg';

const ProductsPage = () => {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Wireless Headphones',
            category: 'Electronics',
            price: 99.99,
            stock: 50
        },
        {
            id: 2,
            name: 'Smart Watch',
            category: 'Electronics',
            price: 199.99,
            stock: 30
        },
        {
            id: 3,
            name: 'Running Shoes',
            category: 'Apparel',
            price: 59.99,
            stock: 100
        },
        {
            id: 4,
            name: 'Office Chair',
            category: 'Furniture',
            price: 149.99,
            stock: 20
        },
        {
            id: 5,
            name: 'Bluetooth Speaker',
            category: 'Electronics',
            price: 29.99,
            stock: 75
        }
    ]);

    return (
        <div className='flex'>
            <AdminNavbar />
            <div className="flex-1 p-8">
                <div className='mb-4'>
                    <h1 className="text-3xl font-bold text-gray-900">Products</h1>
                </div>

                <div className='flex justify-between items-center mb-4'>
                    <Link href="/admin/products/new">
                        <button className="flex items-center bg-gray-900 text-white px-4 py-2 rounded">
                            <FaPlus className="mr-2" /> Add New Product
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
                            <th className="border p-2">Product Name</th>
                            <th className="border p-2">Category</th>
                            <th className="border p-2">Price</th>
                            <th className="border p-2">Stock</th>
                            <th className="border p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td className="border p-2">{product.name}</td>
                                <td className="border p-2">{product.category}</td>
                                <td className="border p-2">${product.price}</td>
                                <td className="border p-2">{product.stock}</td>
                                <td className="border p-2">
                                    <div className="flex items-center justify-center">
                                        <Link href={`/admin/products/edit/${product.id}`}>
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

export default ProductsPage;
