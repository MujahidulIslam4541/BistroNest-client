import React from 'react'
import SectionTitle from '../../../components/sectionTitle/SectionTitle'
import useMenu from '../../../hooks/useMenu';
import { MdDeleteForever } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ManageItems = () => {
    const [menu] = useMenu(); // Assuming useMenu is a custom hook to fetch menu items
    const axiosSecure = useAxiosSecure();

    // menuItem deletion handler
    const handleItemDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const result = await axiosSecure.delete(`/menu/${id}`)
                // console.log("Delete response:", result.data);
                if (result.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            }
        });
    };
    return (
        <div>
            <SectionTitle heading={"Manage All Items"} subHeading="Manage your menu items here" ></SectionTitle>

            {/* Add your manage items functionality here */}
            <div className="max-w-6xl mx-auto mt-8 px-4">
                <div className="bg-white shadow-md rounded-xl p-6 mb-6">
                    <h2 className="text-lg sm:text-2xl font-bold text-gray-700 mb-6">TOTAL PAYMENT: {menu?.length}</h2>
                    {/* table section */}
                    <div className="overflow-x-auto rounded-xl">
                        <table className="table">
                            {/* head */}
                            <thead className="bg-[#D1A054] text-white text-[16px]">
                                <tr>
                                    <th>#</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th> Price</th>
                                    <th>Action</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    menu.map((item, index) => (
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
                                                    className="text-[#D1A054] hover:text-[#924C0B] text-2xl transition"
                                                    title="Delete"
                                                >
                                                    <FaEdit />
                                                </button>
                                            </td>
                                            <td>
                                                <button
                                                    onClick={() => handleItemDelete(item._id)}
                                                    className="text-red-500 hover:text-red-700 text-3xl transition"
                                                    title="Delete"
                                                >
                                                    <MdDeleteForever />
                                                </button>
                                            </td>
                                        </tr>
                                    ))

                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ManageItems
