import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt, FaCalendarAlt, FaTimes, FaExclamationTriangle } from "react-icons/fa";
import Loader from "../../../components/loader/Loader";

const AllBooking = () => {
  const axiosSecure = useAxiosSecure();
  const [showModal, setShowModal] = useState(false);
  const [selectedBookingId, setSelectedBookingId] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 15;

  const {
    data: bookings = {},
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["bookings", currentPage],
    queryFn: async () => {
      const res = await axiosSecure.get(`/booking?page=${currentPage}&limit=${limit}`);
      return res.data?.data || {};
    },
  });

  const booking = bookings.result || [];
  // const total = bookings.total || 0;
  const pages = bookings.pages || 1;

  const openDeleteModal = (id) => {
    setSelectedBookingId(id);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedBookingId(null);
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await axiosSecure.delete(`/booking/${selectedBookingId}`);
      refetch();
      closeModal();
    } catch (error) {
      console.error("Error deleting booking:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  const getStatusBadge = (status) => {
    const colors = {
      pending: "bg-yellow-500",
      confirmed: "bg-green-500",
      cancelled: "bg-red-500",
    };
    return (
      <span className={`${colors[status] || "bg-gray-500"} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
        {status.toUpperCase()}
      </span>
    );
  };

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 ">
      <div className="max-w-7xl mx-auto">
        <SectionTitle heading="My All Bookings" subHeading="Manage and view all your reservations" />

        {bookings.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm">
            <FaCalendarAlt className="mx-auto h-16 w-16 text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No Bookings Found</h3>
            <p className="text-gray-500">You haven't made any reservations yet.</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead style={{ backgroundColor: "#D1A054" }}>
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                      Time
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                      Guests
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-white uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {booking.map((booking, index) => (
                    <tr
                      key={booking._id}
                      className={`${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      } hover:bg-gray-100 transition-colors duration-150`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{booking.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">{booking.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">
                          {new Date(booking.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">{booking.time}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">{booking.guests}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">{getStatusBadge(booking.status)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        {booking.status === "confirmed" ? (
                          <button
                            disabled
                            className="text-white px-4 py-2 rounded-lg inline-flex items-center gap-2 opacity-50 cursor-not-allowed bg-gray-400"
                          >
                            <FaTrashAlt className="h-3.5 w-3.5" />
                            Cancel Booking
                          </button>
                        ) : (
                          <button
                            onClick={() => openDeleteModal(booking._id)}
                            className="text-white px-4 py-2 rounded-lg transition-all duration-200 inline-flex items-center gap-2 hover:opacity-90 hover:shadow-md"
                            style={{ backgroundColor: "#D1A054" }}
                          >
                            <FaTrashAlt className="h-3.5 w-3.5" />
                            Cancel Booking
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
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

      {/* Delete Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 bg-opacity-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full animate-fade-in">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-red-100 p-3 rounded-full">
                    <FaExclamationTriangle className="text-red-600 text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Cancel Booking</h3>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  disabled={isDeleting}
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>

              <p className="text-gray-600 mb-6">
                Are you sure you want to cancel this booking? This action cannot be undone.
              </p>

              <div className="flex gap-3">
                <button
                  onClick={closeModal}
                  disabled={isDeleting}
                  className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-semibold disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  disabled={isDeleting}
                  className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isDeleting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      Canceling...
                    </>
                  ) : (
                    <>
                      <FaTrashAlt />
                      Cancel
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                .animate-fade-in {
                    animation: fade-in 0.2s ease-out;
                }
            `}</style>
    </div>
  );
};

export default AllBooking;
