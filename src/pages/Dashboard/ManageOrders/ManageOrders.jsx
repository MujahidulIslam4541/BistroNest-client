import { MdDeleteForever } from 'react-icons/md';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

export default function ManageOrders() {
    const axiosSecure = useAxiosSecure();



    const { data: orders = [] } = useQuery({
        queryKey: ["manageOrderAdmin"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments`);
            return Array.isArray(res.data) ? res.data : [];
        },
        initialData: [],
    });


    console.log(orders)





    return (
        <div className="p-6">
            <SectionTitle heading="Manage Orders" subHeading="Manage All Orders"></SectionTitle>


            <div className="max-w-6xl mx-auto mt-8 px-4">
                <div className="bg-white shadow-md rounded-xl p-6 mb-6">
                    <h2 className="text-lg sm:text-2xl font-bold text-gray-700 mb-6">
                        TOTAL ORDERS: {orders?.length}
                    </h2>

                    <div className="overflow-x-auto rounded-xl">
                        <table className="table">
                            <thead className="bg-[#D1A054] text-white text-[16px]">
                                <tr>
                                    <th>E-mail</th>
                                    <th>TransactionId</th>
                                    <th>Price</th>
                                    <th>Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr className="hover:bg-gray-100">
                                    <td>mirifat4541@gmail.com</td>
                                    <td>pk-54584558</td>
                                    <td>$12</td>
                                    <td>10-12-25</td>
                                    <td className="text-center">
                                        <select name="" id="">
                                            <option value="pending">pending</option>
                                            <option value="processing">processing</option>
                                            <option value="delivered">delivered</option>
                                            <option value="canceled">canceled</option>
                                        </select>
                                    </td>
                                </tr>
                              
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    {/* {usersData.pages > 1 && (
                        <div className="flex justify-center items-center mt-4 gap-2">
                            <button
                                onClick={() => goToPage(Math.max(currentPage - 1, 1))}
                                disabled={currentPage === 1}
                                className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
                            >
                                Previous
                            </button>

                            {[...Array(usersData.pages)].map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => goToPage(idx + 1)}
                                    className={`px-3 py-1 rounded ${currentPage === idx + 1 ? 'bg-[#D1A054] text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                                >
                                    {idx + 1}
                                </button>
                            ))}

                            <button
                                onClick={() => goToPage(Math.min(currentPage + 1, usersData.pages))}
                                disabled={currentPage === usersData.pages}
                                className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
                            >
                                Next
                            </button>
                        </div>
                    )} */}
                </div>
            </div>
        </div>
    )
}
