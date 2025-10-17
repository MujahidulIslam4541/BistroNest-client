// import { useQuery } from "@tanstack/react-query";
// import SectionTitle from "../../../components/sectionTitle/SectionTitle";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import UseContext from "../../../hooks/useContext";

// const PaymentHistory = () => {
//     const { user } = UseContext();
//     const axiosSecure = useAxiosSecure();

//     const { data: payments = [] } = useQuery({
//         queryKey: ["payment", user?.email],
//         enabled: !!user?.email, 
//         queryFn: async () => {
//             const res = await axiosSecure.get(`/payments/${user?.email}`);
//             return res.data;
//         },
//     });

//     console.log(payments)
//     return (
//         <>
//             <SectionTitle
//                 subHeading="Your Payment History"
//                 heading="Payment History"
//             ></SectionTitle>

//             <div className="max-w-6xl mx-auto mt-10 px-4">
//                 <div className="bg-white shadow-lg rounded-2xl p-8 mb-8 border border-gray-100">
//                     <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mb-8 text-center">
//                         Total Payments:{" "}
//                         <span className="text-[#D1A054]">{payments?.length}</span>
//                     </h2>

//                     <div className="overflow-x-auto rounded-2xl border border-gray-200">
//                         <table className="table w-full border-collapse">
//                             {/* head */}
//                             <thead className="bg-[#D1A054] text-white text-sm sm:text-base uppercase">
//                                 <tr>
//                                     <th className="py-4 px-6 text-left">Email</th>
//                                     <th className="py-4 px-6 text-left">Transaction ID</th>
//                                     <th className="py-4 px-6 text-center">Total Price</th>
//                                     <th className="py-4 px-6 text-center">Order Date</th>
//                                     <th className="py-4 px-6 text-center">Status</th>
//                                 </tr>
//                             </thead>

//                             {/* body */}
//                             <tbody>
//                                 {payments?.map((item) => (
//                                     <tr
//                                         key={item?._id}
//                                         className="border-t border-gray-100 hover:bg-gray-50 transition-all duration-200"
//                                     >
//                                         <td className="py-3 px-6 text-gray-700">{item?.email}</td>
//                                         <td className="py-3 px-6 text-gray-700">
//                                             {item?.TransactionId}
//                                         </td>
//                                         <td className="py-3 px-6 text-center font-semibold text-gray-800">
//                                             ${item.price}
//                                         </td>
//                                         <td className="py-3 px-6 text-center text-gray-600">
//                                             {new Date(item?.date).toLocaleDateString()}
//                                         </td>
//                                         <td
//                                             className={`py-3 px-6 text-center font-medium ${item?.status === "pending"
//                                                     ? "text-yellow-500"
//                                                     : "text-green-600"
//                                                 }`}
//                                         >
//                                             {item?.status}
//                                         </td>
//                                     </tr>
//                                 ))}

//                                 {payments?.length === 0 && (
//                                     <tr>
//                                         <td
//                                             colSpan="5"
//                                             className="text-center py-6 text-gray-500 italic"
//                                         >
//                                             No payment history found
//                                         </td>
//                                     </tr>
//                                 )}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default PaymentHistory;




import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import UseContext from "../../../hooks/useContext";
import Loader from "../../../components/loader/Loader";

const PaymentHistory = () => {
    const { user } = UseContext();
    const axiosSecure = useAxiosSecure();

    // 🟢 Safe Query Setup
    const { data: payments = [], isLoading } = useQuery({
        queryKey: ["payment", user?.email],
        enabled: !!user?.email, 
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`);
            return Array.isArray(res.data) ? res.data : []; 
        },
        initialData: [], 
    });

    if (isLoading) <Loader></Loader>

    return (
        <>
            <SectionTitle
                subHeading="Your Payment History"
                heading="Payment History"
            ></SectionTitle>

            <div className="max-w-6xl mx-auto mt-10 px-4">
                <div className="bg-white shadow-lg rounded-2xl p-8 mb-8 border border-gray-100">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mb-8 text-center">
                        Total Payments:{" "}
                        <span className="text-[#D1A054]">{payments.length}</span>
                    </h2>

                    <div className="overflow-x-auto rounded-2xl border border-gray-200">
                        <table className="table w-full border-collapse">
                            {/* Table Head */}
                            <thead className="bg-[#D1A054] text-white text-sm sm:text-base uppercase">
                                <tr>
                                    <th className="py-4 px-6 text-left">Email</th>
                                    <th className="py-4 px-6 text-left">Transaction ID</th>
                                    <th className="py-4 px-6 text-center">Total Price</th>
                                    <th className="py-4 px-6 text-center">Order Date</th>
                                    <th className="py-4 px-6 text-center">Status</th>
                                </tr>
                            </thead>

                            {/* Table Body */}
                            <tbody>
                                {payments.length > 0 ? (
                                    payments.map((item) => (
                                        <tr
                                            key={item?._id}
                                            className="border-t border-gray-100 hover:bg-gray-50 transition-all duration-200"
                                        >
                                            <td className="py-3 px-6 text-gray-700">{item?.email}</td>
                                            <td className="py-3 px-6 text-gray-700">
                                                {item?.TransactionId || "N/A"}
                                            </td>
                                            <td className="py-3 px-6 text-center font-semibold text-gray-800">
                                                ${item?.price || 0}
                                            </td>
                                            <td className="py-3 px-6 text-center text-gray-600">
                                                {item?.date
                                                    ? new Date(item.date).toLocaleDateString()
                                                    : "N/A"}
                                            </td>
                                            <td
                                                className={`py-3 px-6 text-center font-medium ${item?.status === "pending"
                                                    ? "text-yellow-500"
                                                    : "text-green-600"
                                                    }`}
                                            >
                                                {item?.status || "success"}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="5"
                                            className="text-center py-6 text-gray-500 italic"
                                        >
                                            No payment history found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PaymentHistory;
