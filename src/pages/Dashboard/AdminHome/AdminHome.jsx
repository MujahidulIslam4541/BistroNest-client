import { FaDollarSign, FaUsers, FaBoxOpen, FaShoppingCart } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


const AdminHome = () => {

    const axiosSecure = useAxiosSecure()

    const { data: states = [] } = useQuery({
        queryKey: ['adminHome'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-state')
            return res.data;
        }
    })

    const { data: chartData = [] } = useQuery({
        queryKey: ['order state'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-state')
            return res.data;
        }
    })
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

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

            {/* chart data */}

            <div className="flex">
                <div className="w-1/2">
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default AdminHome;
