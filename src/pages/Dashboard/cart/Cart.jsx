import { MdDeleteForever } from "react-icons/md";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    const axiosSecure = useAxiosSecure()

    const handleItemDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/cart/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });
    };

    return (
        <>
            <Helmet>BistroNest || Cart</Helmet>
            
            <SectionTitle subHeading='Your Cart' heading='Selected Items'></SectionTitle>

            <div className="max-w-6xl mx-auto mt-8 px-4">
                {/* Summary Card + Table Container */}
                <div className="bg-white shadow-md rounded-xl p-6 mb-6">
                    {/* Summary Card */}
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                        <h3 className="text-lg sm:text-2xl font-bold text-gray-700">
                            Total Items: <span className="text-[#D1A054]">{cart.length}</span>
                        </h3>
                        <h3 className="text-lg sm:text-2xl font-bold text-gray-700">
                            Total Price: <span className="text-[#D1A054]">${totalPrice.toFixed(2)}</span>
                        </h3>
                        {cart.length ? <Link to='/dashboard/payment'>
                            <button className="mt-4 sm:mt-0 px-6 py-2 bg-[#D1A054] hover:bg-[#b37335] transition text-white font-semibold rounded-lg shadow-md">
                                Pay
                            </button></Link> : <button disabled className="mt-4 sm:mt-0 px-6 py-2 bg-[#D1A054] hover:bg-[#b37335] transition text-white font-semibold rounded-lg shadow-md">
                            Pay
                        </button>}
                    </div>

                    {/* Cart Table */}
                    <div className="overflow-x-auto rounded-xl">
                        <table className="table w-full text-center">
                            {/* Table Head */}
                            <thead className="bg-[#D1A054] text-white text-[16px]">
                                <tr>
                                    <th>#</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item, index) => (
                                    <tr key={item._id} className="hover:bg-gray-100">
                                        <td className="font-semibold">{index + 1}</td>
                                        <td>
                                            <div className="flex justify-center">
                                                <div className="w-12 h-12  overflow-hidden rounded-xl">
                                                    <img src={item?.image} alt={item?.name} className="object-cover w-full h-full" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="font-medium text-gray-800">{item?.name}</td>
                                        <td className="text-gray-600">${item?.price}</td>
                                        <td>
                                            <button
                                                onClick={() => handleItemDelete(item._id)}
                                                className="text-red-500 hover:text-red-700 text-2xl transition"
                                                title="Delete"
                                            >
                                                <MdDeleteForever />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Cart;
