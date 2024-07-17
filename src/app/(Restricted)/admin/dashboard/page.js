import AdminNavbar from "@/common/navbar/AdminNavbar";

const AdminDashboard = () => {
    return (
        <div className="flex">
            <AdminNavbar />
            <div className="text-gray-800 flex-1 p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
                        <h2 className="text-2xl font-bold mb-4">Sales Overview</h2>
                        <p className="text-gray-600">Total Sales: $23,000</p>
                        <p className="text-gray-600">Monthly Revenue: $5,000</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
                        <h2 className="text-2xl font-bold mb-4">Product Inventory</h2>
                        <p className="text-gray-600">Total Products: 120</p>
                        <p className="text-gray-600">Low Stock: 5</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
                        <h2 className="text-2xl font-bold mb-4">User Activity</h2>
                        <p className="text-gray-600">Active Users: 450</p>
                        <p className="text-gray-600">New Registrations: 20</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
                        <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
                        <ul className="text-gray-600">
                            <li>Order #12345 - $250</li>
                            <li>Order #12346 - $500</li>
                            <li>Order #12347 - $750</li>
                        </ul>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
                        <h2 className="text-2xl font-bold mb-4">Support Tickets</h2>
                        <p className="text-gray-600">Open Tickets: 10</p>
                        <p className="text-gray-600">Closed Tickets: 30</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
                        <h2 className="text-2xl font-bold mb-4">Top Selling Products</h2>
                        <ul className="text-gray-600">
                            <li>Product A - 120 sales</li>
                            <li>Product B - 90 sales</li>
                            <li>Product C - 75 sales</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
