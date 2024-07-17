'use client'

import AdminNavbar from '@/common/navbar/AdminNavbar';
import { useEffect, useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ReportsPage = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        // Set up dummy data for charts
        const fetchData = async () => {
            const dummyData = {
                sales: [
                    { month: 'January', sales: 12000 },
                    { month: 'February', sales: 19000 },
                    { month: 'March', sales: 3000 },
                    { month: 'April', sales: 5000 },
                    { month: 'May', sales: 2000 },
                    { month: 'June', sales: 3000 },
                ],
                users: [
                    { name: 'Active', value: 300 },
                    { name: 'Inactive', value: 50 },
                    { name: 'Banned', value: 20 },
                ],
                revenue: [
                    { week: 'Week 1', revenue: 4000 },
                    { week: 'Week 2', revenue: 3000 },
                    { week: 'Week 3', revenue: 2000 },
                    { week: 'Week 4', revenue: 5000 },
                ],
            };
            setData(dummyData);
        };

        fetchData();
    }, []);

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <div className='flex'>
            <AdminNavbar />
            <div className="flex-1 p-8">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded shadow">
                        <h2 className="text-2xl font-semibold mb-4">Sales Report</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={data.sales}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="sales" fill="#8884d8" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <h2 className="text-2xl font-semibold mb-4">User Distribution</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={data.users}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={100}
                                    fill="#8884d8"
                                    label
                                >
                                    {data.users && data.users.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="bg-white p-4 rounded shadow md:col-span-2 lg:col-span-3">
                        <h2 className="text-2xl font-semibold mb-4">Revenue Report</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={data.revenue}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="week" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReportsPage;
