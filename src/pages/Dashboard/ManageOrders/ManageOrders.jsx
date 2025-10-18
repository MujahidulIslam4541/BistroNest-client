// import { MdDeleteForever } from "react-icons/md";
// import SectionTitle from "../../../components/sectionTitle/SectionTitle";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";

// export default function ManageOrders() {
//   const axiosSecure = useAxiosSecure();

//   const { data: orders = [] } = useQuery({
//     queryKey: ["manageOrderAdmin"],
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/payments`);
//       return Array.isArray(res.data) ? res.data : [];
//     },
//     initialData: [],
//   });

//   return (
//     <div className="p-6">
//       <SectionTitle heading="Manage Orders" subHeading="Manage All Orders"></SectionTitle>

//       <div className="max-w-6xl mx-auto mt-8 px-4">
//         <div className="bg-white shadow-md rounded-xl p-6 mb-6">
//           <h2 className="text-lg sm:text-2xl font-bold text-gray-700 mb-6">TOTAL ORDERS: {orders?.length}</h2>

//           <div className="overflow-x-auto rounded-xl">
//             <table className="table">
//               <thead className="bg-[#D1A054] text-white text-[16px]">
//                 <tr>
//                   <th>E-mail</th>
//                   <th>TransactionId</th>
//                   <th>Price</th>
//                   <th>Date</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {orders?.map((order) => (
//                   <tr key={order._id} className="hover:bg-gray-100">
//                     <td>{order?.email}</td>
//                     <td>(order?.transactionId)</td>
//                     <td>${order?.price}</td>
//                     <td>{order?.date}</td>
//                     <td className="text-center">
//                       <select name="" id="">
//                         <option value="pending">pending</option>
//                         <option value="processing">processing</option>
//                         <option value="delivered">delivered</option>
//                         <option value="canceled">canceled</option>
//                       </select>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Pagination */}
//           {/* {usersData.pages > 1 && (
//                         <div className="flex justify-center items-center mt-4 gap-2">
//                             <button
//                                 onClick={() => goToPage(Math.max(currentPage - 1, 1))}
//                                 disabled={currentPage === 1}
//                                 className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
//                             >
//                                 Previous
//                             </button>

//                             {[...Array(usersData.pages)].map((_, idx) => (
//                                 <button
//                                     key={idx}
//                                     onClick={() => goToPage(idx + 1)}
//                                     className={`px-3 py-1 rounded ${currentPage === idx + 1 ? 'bg-[#D1A054] text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
//                                 >
//                                     {idx + 1}
//                                 </button>
//                             ))}

//                             <button
//                                 onClick={() => goToPage(Math.min(currentPage + 1, usersData.pages))}
//                                 disabled={currentPage === usersData.pages}
//                                 className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
//                             >
//                                 Next
//                             </button>
//                         </div>
//                     )} */}
//         </div>
//       </div>
//     </div>
//   );
// }

import { MdDeleteForever } from "react-icons/md";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Loader from "../../../components/loader/Loader";

export default function ManageOrders() {
  const axiosSecure = useAxiosSecure();

  const {
    data: orders = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["manageOrderAdmin"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments`);
      return Array.isArray(res.data) ? res.data : [];
    },
    initialData: [],
  });

  const handleStatusChange = async (id, newStatus) => {
    try {
      const res = await axiosSecure.patch(`/order/${id}`, { status: newStatus });
      if (res.data) {
        toast.success(`Order status updated to "${newStatus}"`);
        refetch();
      } else {
        toast.error("Failed to update order status");
      }
    } catch (error) {
      toast.error("Something went wrong!");
      console.error(error);
    }
  };

  if (isLoading) return <Loader />;

  return (
    <div className="p-6">
      <SectionTitle heading="Manage Orders" subHeading="Manage All Orders"></SectionTitle>

      <div className="max-w-6xl mx-auto mt-8 px-4">
        <div className="bg-white shadow-md rounded-xl p-6 mb-6">
          <h2 className="text-lg sm:text-2xl font-bold text-gray-700 mb-6">TOTAL ORDERS: {orders?.length}</h2>

          <div className="overflow-x-auto rounded-xl">
            <table className="table">
              <thead className="bg-[#D1A054] text-white text-[16px]">
                <tr>
                  <th>E-mail</th>
                  <th>Transaction ID</th>
                  <th>Price</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {orders?.map((order) => (
                  <tr key={order._id} className="hover:bg-gray-50">
                    <td>{order?.email}</td>
                    <td>{order?.TransactionId}</td>
                    <td>${order?.price}</td>
                    <td>{order?.date ? order.date.slice(0, 10).split("-").reverse().join("/") : "-"}</td>

                    <td className="text-center">
                      <select
                        className={`select select-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D1A054] transition-all duration-200
                          ${
                            order?.status === "delivered"
                              ? "bg-green-100 text-green-700"
                              : order?.status === "processing"
                              ? "bg-yellow-100 text-yellow-700"
                              : order?.status === "canceled"
                              ? "bg-red-100 text-red-700"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        value={order?.status || "pending"}
                        onChange={(e) => handleStatusChange(order?._id, e.target.value)}
                        disabled={order?.status === "delivered" || order?.status === "canceled"}
                      >
                        <option value="pending" disabled>
                          Pending
                        </option>
                        <option value="processing">Processing</option>
                        <option value="delivered">Delivered</option>
                        <option value="canceled">Canceled</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
