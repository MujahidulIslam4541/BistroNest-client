import { FaUsers } from "react-icons/fa"
import { MdDeleteForever } from "react-icons/md"
import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "../../../hooks/useAxiosSecure"
import Swal from "sweetalert2"


const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access_token')}`
                }
            })
            return res.data
        }
    })

    // DELETE USER
    const handleUsersDelete = (id) => {
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
                axiosSecure.delete(`/user/${id}`)
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
    }

    // MAKE ADMIN
    const handleMakeAdmin = (id) => {
        axiosSecure.patch(`/user/admin/${id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Success!",
                        text: "User has been made an admin.",
                        icon: "success"
                    });
                    refetch()
                }
            })
    }
    console.log(users)
    return (
        <div>
            <div className="max-w-6xl mx-auto mt-8 px-4">
                <div className="bg-white shadow-md rounded-xl p-6 mb-6">
                    <h2 className="text-lg sm:text-2xl font-bold text-gray-700 mb-6">TOTAL USERS: {users.length}</h2>
                    {/* table section */}
                    <div className="overflow-x-auto rounded-xl">
                        <table className="table">
                            {/* head */}
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
                                {/* row 1 */}
                                {users?.map((user, index) => (
                                    <tr key={user._id} className="hover:bg-gray-100">
                                        <td>{index + 1}</td>
                                        <td>{user?.name}</td>
                                        <td>{user?.email}</td>
                                        <td> {user.role === 'admin' ? <h2 className="text-[#D1A054] font-semibold">Admin</h2> : <button onClick={() => handleMakeAdmin(user._id)}
                                            className=" bg-[#D1A054] text-white text-2xl px-2 py-2 rounded-sm transition"
                                        >
                                            <FaUsers />
                                        </button>}</td>
                                        <td>                                        <button onClick={() => handleUsersDelete(user._id)}
                                            className="bg-[#B91C1C] text-white text-2xl px-2 py-2 rounded-sm transition"
                                        >
                                            <MdDeleteForever />
                                        </button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllUsers
