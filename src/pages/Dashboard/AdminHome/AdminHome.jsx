import { FaDollarSign, FaUsers, FaBoxOpen, FaShoppingCart } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AdminHome = () => {

    const axiosSecure = useAxiosSecure()

    const { data: states = [] } = useQuery({
        queryKey: ['adminHome'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-state')
            return res.data;
        }
    })


    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Hi! Welcome Back</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Revenue Card */}
                <div className="flex items-center p-6 rounded-xl shadow-lg text-white bg-gradient-to-r from-purple-300 to-purple-500 transition-transform hover:scale-105">
                    <div className="mr-4 text-3xl">
                        <FaDollarSign />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Revenue</h3>
                        <p className="text-2xl font-bold mt-1">${states.revenue}</p>
                    </div>
                </div>

                {/* Customers Card */}
                <div className="flex items-center p-6 rounded-xl shadow-lg text-white bg-gradient-to-r from-orange-300 to-orange-500 transition-transform hover:scale-105">
                    <div className="mr-4 text-3xl">
                        <FaUsers />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Users</h3>
                        <p className="text-2xl font-bold mt-1">{states.users}</p>
                    </div>
                </div>

                {/* Products Card */}
                <div className="flex items-center p-6 rounded-xl shadow-lg text-white bg-gradient-to-r from-pink-300 to-pink-500 transition-transform hover:scale-105">
                    <div className="mr-4 text-3xl">
                        <FaBoxOpen />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Menu Items</h3>
                        <p className="text-2xl font-bold mt-1">{states.menuItems}</p>
                    </div>
                </div>

                {/* Orders Card */}
                <div className="flex items-center p-6 rounded-xl shadow-lg text-white bg-gradient-to-r from-blue-300 to-blue-500 transition-transform hover:scale-105">
                    <div className="mr-4 text-3xl">
                        <FaShoppingCart />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Orders</h3>
                        <p className="text-2xl font-bold mt-1">{states.orders}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
