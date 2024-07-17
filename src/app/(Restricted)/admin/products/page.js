'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaPlus, FaSearch, FaEdit, FaTrash } from 'react-icons/fa';
import AdminNavbar from '@/common/navbar/AdminNavbar';

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
                <div className="mb-6 flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-gray-900">Products</h1>
                    <Link href="/admin/products/new">
                        <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded">
                            <FaPlus className="mr-2" /> Add New Product
                        </button>
                    </Link>
                </div>
                <div className="bg-white p-6 rounded shadow">
                    <div className="mb-4 flex items-center">
                        <input type="text" placeholder="Search products" className="border p-2 rounded w-full" />
                        <button className="ml-2 bg-gray-600 text-white px-4 py-2 rounded">
                            <FaSearch />
                        </button>
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

export default ProductsPage;
