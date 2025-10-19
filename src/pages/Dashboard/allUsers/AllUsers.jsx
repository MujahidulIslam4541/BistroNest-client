import { FaUsers } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UseContext from "../../../hooks/useContext";

const AllUsers = () => {
  const { user } = UseContext();
  const axiosSecure = useAxiosSecure();
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const initialPage = parseInt(searchParams.get("page")) || 1;

  const [currentPage, setCurrentPage] = useState(initialPage);
  const itemsPerPage = 10;

  const { data: usersData = { users: [], total: 0, pages: 1 }, refetch } = useQuery({
    queryKey: ["users", currentPage],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?page=${currentPage}&limit=${itemsPerPage}`);
      return res.data.data;
    },
    keepPreviousData: true,
  });

  const goToPage = (page) => {
    setCurrentPage(page);
    const params = new URLSearchParams(location.search);
    params.set("page", page);
    navigate({ search: params.toString() }, { replace: true });
  };

  // DELETE USER
  const handleUsersDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/user/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };


  // MAKE ADMIN (with confirmation)
  const handleMakeAdmin = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to make this user an admin?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make admin",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/user/admin/${id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              title: "Success!",
              text: "User has been made an admin.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <div>
      <SectionTitle subHeading="Manage All Users" heading="All Users" />

      <div className="max-w-6xl mx-auto mt-8 px-4">
        <div className="bg-white shadow-md rounded-xl p-6 mb-6">
          <h2 className="text-lg sm:text-2xl font-bold text-gray-700 mb-6">TOTAL USERS: {usersData.total}</h2>

          <div className="overflow-x-auto rounded-xl">
            <table className="table">
              <thead className="bg-[#D1A054] text-white text-[16px]">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {usersData.users.map((u, index) => (
                  <tr key={u._id} className="hover:bg-gray-100">
                    <td>{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td>
                      {u.role === "admin" ? (
                        <h2 className="text-[#D1A054] font-semibold">Admin</h2>
                      ) : (
                        <button
                          onClick={() => handleMakeAdmin(u._id)}
                          className="bg-[#D1A054] text-white text-2xl px-2 py-2 rounded-sm transition"
                        >
                          <FaUsers />
                        </button>
                      )}
                    </td>
                    <td className="text-center">
                      {u.email === user?.email ? (
                        <button
                          disabled
                          className="bg-gray-400 text-white text-2xl px-2 py-2 rounded-sm cursor-not-allowed"
                          title="You cannot delete yourself"
                        >
                          <MdDeleteForever />
                        </button>
                      ) : (
                        <button
                          onClick={() => handleUsersDelete(u._id)}
                          className="bg-[#B91C1C] text-white text-2xl px-2 py-2 rounded-sm transition"
                        >
                          <MdDeleteForever />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {usersData.pages > 1 && (
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
                  className={`px-3 py-1 rounded ${
                    currentPage === idx + 1 ? "bg-[#D1A054] text-white" : "bg-gray-200 hover:bg-gray-300"
                  }`}
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
          )}
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
