import { FaDollarSign, FaUsers, FaBoxOpen, FaShoppingCart } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";
import UseContext from "../../../hooks/useContext";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8B5CF6", "#EC4899"];
const COLORS = ["#8B5CF6", "#EC4899", "#F59E0B", "#10B981", "#3B82F6", "#EF4444"];

const AdminHome = () => {
  const { user } = UseContext();
  const axiosSecure = useAxiosSecure();

  const { data: states = {} } = useQuery({
    queryKey: ["adminHome"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-state");
      return res.data;
    },
  });

  const { data: chartData = [] } = useQuery({
    queryKey: ["order-state"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-state");
      return res.data;
    },
  });

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

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
    const y = cy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        className="text-sm font-semibold"
      >
        {`${((percent ?? 0) * 100).toFixed(0)}%`}
      </text>
    );
  };

  const piChartData = chartData.map((data) => ({
    name: data.category,
    value: data.revenue,
  }));

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Hi! Welcome Back {user?.displayName}</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {/* Revenue Card */}
        <div className="flex items-center p-6 rounded-xl shadow-lg text-white bg-gradient-to-r from-purple-400 to-purple-600 transition-transform hover:scale-105">
          <div className="mr-4 text-4xl">
            <FaDollarSign />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Revenue</h3>
            <p className="text-2xl font-bold mt-1">${states.revenue}</p>
          </div>
        </div>

        {/* Users Card */}
        <div className="flex items-center p-6 rounded-xl shadow-lg text-white bg-gradient-to-r from-orange-400 to-orange-600 transition-transform hover:scale-105">
          <div className="mr-4 text-4xl">
            <FaUsers />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Users</h3>
            <p className="text-2xl font-bold mt-1">{states.users}</p>
          </div>
        </div>

        {/* Menu Items Card */}
        <div className="flex items-center p-6 rounded-xl shadow-lg text-white bg-gradient-to-r from-pink-400 to-pink-600 transition-transform hover:scale-105">
          <div className="mr-4 text-4xl">
            <FaBoxOpen />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Menu Items</h3>
            <p className="text-2xl font-bold mt-1">{states.menuItems}</p>
          </div>
        </div>

        {/* Orders Card */}
        <div className="flex items-center p-6 rounded-xl shadow-lg text-white bg-gradient-to-r from-blue-400 to-blue-600 transition-transform hover:scale-105">
          <div className="mr-4 text-4xl">
            <FaShoppingCart />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Orders</h3>
            <p className="text-2xl font-bold mt-1">{states.orders}</p>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

        {/* Bar Chart  */}
        <div className="w-full">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Orders by Category</h3>
          <div className="flex justify-center">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart
                data={chartData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 0,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "none",
                    borderRadius: "12px",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  }}
                />
                <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: "top" }}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Revenue Distribution</h3>
          <div className="flex justify-center">
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={piChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {piChartData.map((entry, index) => (
                    <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "none",
                    borderRadius: "12px",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  }}
                />
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
