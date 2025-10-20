import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Loader from "../../../components/loader/Loader";
import { useState } from "react";

const ManageBookings = () => {
  const axiosSecure = useAxiosSecure();
 const [currentPage, setCurrentPage] = useState(1);
  const limit = 15; 
  // get all bookings
  // const {
  //   data: bookings = [],
  //   refetch,
  //   isLoading,
  // } = useQuery({
  //   queryKey: ["manageBooking"],
  //   queryFn: async () => {
  //     const result = await axiosSecure.get("/booking");
  //     return result?.data;
  //   },
  // });

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
  const total = bookings.total || 0;
  const pages = bookings.pages || 1;

  // manage booking functionality
  const handleStatusChange = async (id, newStatus) => {
    try {
      const res = await axiosSecure.patch(`/booking/${id}`, { status: newStatus });
      if (res.data) {
        toast.success(`booking status updated to "${newStatus}"`);
        refetch();
      } else {
        toast.error("Failed to update booking status");
      }
    } catch (error) {
      toast.error("Something went wrong!");
      console.error(error);
    }
  };

  if (isLoading) return <Loader></Loader>;

  return (
    <div className="p-6">
      <SectionTitle heading="Manage Bookings" subHeading="Manage All Bookings"></SectionTitle>

      <div className="max-w-6xl mx-auto mt-8 px-4">
        <div className="bg-white shadow-md rounded-xl p-6 mb-6">
          <h2 className="text-lg sm:text-2xl font-bold text-gray-700 mb-6">TOTAL Bookings: {total}</h2>

          <div className="overflow-x-auto rounded-xl">
            <table className="table">
              <thead className="bg-[#D1A054] text-white text-[16px]">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>E-mail</th>
                  <th>Date & Time</th>
                  <th>guests</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {booking?.map((booking,index) => (
                  <tr
                    key={booking._id}
                    className={` ${
                      booking?.status === "Confirmed"
                        ? "bg-green-100 text-green-700"
                        : booking?.status === "canceled"
                        ? "bg-red-100 text-red-700"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <td>{index+1}</td>
                    <td>{booking?.name}</td>
                    <td>{booking?.email}</td>
                    <td>
                      {booking?.date ? booking.date.slice(0, 10).split("-").reverse().join("/") : "-"} {booking?.time}{" "}
                    </td>
                    <td>{booking?.guests}</td>

                    <td className="text-center">
                      <select
                        className={`select select-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D1A054] transition-all duration-200
            ${
              booking?.status === "Confirmed"
                ? "bg-green-100 text-green-700"
                : booking?.status === "canceled"
                ? "bg-red-100 text-red-700"
                : "bg-gray-100 text-gray-700"
            }`}
                        value={booking?.status || "pending"}
                        onChange={(e) => handleStatusChange(booking?._id, e.target.value)}
                        disabled={booking?.status === "Confirmed" || booking?.status === "canceled"}
                      >
                        <option value="pending">Pending</option>
                        <option value="Confirmed">Confirmed</option>
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
    </div>
  );
};

export default ManageBookings;
