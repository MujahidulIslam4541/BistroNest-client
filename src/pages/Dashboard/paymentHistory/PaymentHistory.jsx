import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loader from "../../../components/loader/Loader";
import { useState } from "react";

const PaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 15;

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  // payment history
  const {
    data: paymentData = {},
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["paymentHistory", currentPage],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?page=${currentPage}&limit=${limit}`);
      return res.data?.data || {};
    },
  });

  const payments = paymentData.result || [];
  const total = paymentData.total || 0;
  const pages = paymentData.pages || 1;

  if (isLoading) return <Loader />;

  const openConfirmModal = (id) => {
    setSelectedOrderId(id);
    setShowConfirmModal(true);
  };

  const handleCancelOrder = async () => {
    try {
      await axiosSecure.delete(`/cancelOrder/${selectedOrderId}`);
      refetch();
      setShowConfirmModal(false);
      setShowSuccessModal(true);

      // auto close success modal after 1 sec
      setTimeout(() => setShowSuccessModal(false), 1000);
    } catch (err) {
      console.error(err);
      setShowConfirmModal(false);
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <SectionTitle subHeading="Your Payment History" heading="Payment History" />

      <div className="max-w-6xl mx-auto mt-10 px-4">
        <div className="bg-white shadow-lg rounded-2xl p-8 mb-8 border border-gray-100">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mb-8 text-center">
            Total Payments: <span className="text-[#D1A054]">{total}</span>
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="table w-full border-collapse">
              <thead className="bg-[#D1A054] text-white text-sm sm:text-base uppercase">
                <tr>
                  <th>#</th>
                  <th className="py-4 px-6 text-left">Transaction ID</th>
                  <th className="py-4 px-6 text-center">Total Price</th>
                  <th className="py-4 px-6 text-center">Order Date</th>
                  <th className="py-4 px-6 text-center">Status</th>
                  <th className="py-4 px-6 text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {payments.length > 0 ? (
                  payments.map((item, index) => (
                    <tr
                      key={item?._id}
                      className={`border-t border-gray-100 transition-all duration-200 ${
                        item?.status === "delivered"
                          ? "bg-green-100 text-green-800"
                          : item?.status === "canceled"
                          ? "bg-red-100 text-red-800"
                          : index % 2 === 0
                          ? "bg-white"
                          : "bg-gray-50"
                      }`}
                    >
                      {/* Index */}
                      <td className="py-3 px-6 text-gray-700 font-medium">{index + 1}</td>

                      <td className="py-3 px-6 text-gray-700">{item?.TransactionId || "N/A"}</td>
                      <td className="py-3 px-6 text-center font-semibold text-gray-800">${item?.price || 0}</td>
                      <td className="py-3 px-6 text-center text-gray-600">
                        {item?.date ? new Date(item.date).toLocaleDateString() : "N/A"}
                      </td>
                      <td
                        className={`py-3 px-6 text-center font-medium ${
                          item?.status === "pending"
                            ? "text-yellow-500"
                            : item?.status === "delivered"
                            ? "text-green-600"
                            : item?.status === "canceled"
                            ? "text-red-600"
                            : ""
                        }`}
                      >
                        {item?.status || "delivered"}
                      </td>
                      <td className="py-3 px-6 text-center">
                        {item?.status === "canceled" || item?.status === "delivered" ? (
                          <button
                            disabled
                            className="whitespace-nowrap bg-gray-400 text-white font-semibold px-3 py-2 rounded-lg shadow-md"
                          >
                            Cancel Order
                          </button>
                        ) : (
                          <button
                            onClick={() => openConfirmModal(item?._id)}
                            className="whitespace-nowrap bg-[#D1A054] text-white font-semibold px-3 py-2 rounded-lg shadow-md hover:bg-yellow-600 hover:shadow-lg transition-all duration-300"
                          >
                            Cancel Order
                          </button>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center py-6 text-gray-500 italic">
                      No payment history found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-2 mt-6">
        <button
          className="px-3 py-1 bg-[#D1A054] text-white rounded-md disabled:opacity-50"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
        >
          Prev
        </button>

        {[...Array(pages).keys()].map((num) => (
          <button
            key={num}
            onClick={() => setCurrentPage(num + 1)}
            className={`px-3 py-1 rounded-md ${
              currentPage === num + 1 ? "bg-[#D1A054] text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            {num + 1}
          </button>
        ))}

        <button
          className="px-3 py-1 bg-[#D1A054] text-white rounded-md disabled:opacity-50"
          disabled={currentPage === pages}
          onClick={() => setCurrentPage((p) => Math.min(p + 1, pages))}
        >
          Next
        </button>
      </div>

      {/* Confirm Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center transform animate-slide-up">
            <div className="mb-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Cancel Order?</h3>
              <p className="text-gray-600 leading-relaxed">
                This action cannot be undone. Are you sure you want to cancel this order?
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 font-semibold transition-colors duration-200"
              >
                Keep Order
              </button>
              <button
                onClick={handleCancelOrder}
                className="flex-1 px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 font-semibold transition-colors duration-200 shadow-lg shadow-red-200"
              >
                Yes, Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-8 text-center animate-bounce-in">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Success!</h3>
            <p className="text-gray-600">Order cancelled successfully</p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        @keyframes bounce-in {
          0% { 
            opacity: 0; 
            transform: scale(0.3); 
          }
          50% { 
            transform: scale(1.05); 
          }
          70% { 
            transform: scale(0.9); 
          }
          100% { 
            opacity: 1; 
            transform: scale(1); 
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
        .animate-bounce-in {
          animation: bounce-in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
      `}</style>
    </>
  );
};

export default PaymentHistory;
