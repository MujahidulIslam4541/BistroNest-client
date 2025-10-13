import  { useState } from 'react';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';
import { MdDeleteForever } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../../components/loader/Loader';

const ManageItems = () => {
    const axiosSecure = useAxiosSecure();
    const location = useLocation();
    const navigate = useNavigate();

    const searchParams = new URLSearchParams(location.search);
    const initialPage = parseInt(searchParams.get('page')) || 1;
    const [currentPage, setCurrentPage] = useState(initialPage);
    const itemsPerPage = 10;

    const { data: menuData = { data: [], totalPages: 1, total: 0 }, isLoading, refetch } = useQuery({
        queryKey: ['menu', currentPage, itemsPerPage],
        queryFn: async () => {
            const res = await axiosSecure.get(`/menuPagination?page=${currentPage}&limit=${itemsPerPage}`);
            return res.data;
        },
        keepPreviousData: true,
    });

    // page change হলে URL update
    const handlePageChange = (page) => {
        setCurrentPage(page);
        const params = new URLSearchParams(location.search);
        params.set('page', page);
        navigate({ search: params.toString() }, { replace: true });
    };

    // Delete handler
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
                const res = await axiosSecure.delete(`/menu/${id}`);
                if (res.data.deletedCount > 0) {
                    Swal.fire("Deleted!", "Item has been deleted.", "success");
                    refetch();
                }
            }
        });
    };

    if (isLoading) return <Loader></Loader>;

    return (
        <div>
            <SectionTitle heading="Manage All Items" subHeading="Manage your menu items here" />

            <div className="max-w-6xl mx-auto mt-8 px-4">
                <div className="bg-white shadow-md rounded-xl p-6 mb-6">
                    <h2 className="text-lg sm:text-2xl font-bold text-gray-700 mb-6">
                        TOTAL ITEMS: {menuData.total}
                    </h2>

                    <div className="overflow-x-auto rounded-xl">
                        <table className="table">
                            <thead className="bg-[#D1A054] text-white text-[16px]">
                                <tr>
                                    <th>#</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {menuData.data.map((item, idx) => (
                                    <tr key={item._id} className="hover:bg-gray-100">
                                        <td className="font-semibold">{idx + 1 + (currentPage - 1) * itemsPerPage}</td>
                                        <td>
                                            <div className="flex justify-center">
                                                <div className="w-12 h-12 overflow-hidden rounded-xl">
                                                    <img src={item?.image} alt={item?.name} className="object-cover w-full h-full" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="font-medium text-gray-800">{item?.name}</td>
                                        <td className="text-gray-600">${item?.price}</td>
                                        <td>
                                            <Link to={`/dashboard/updateItem/${item._id}`}>
                                                <FaEdit className="text-2xl text-[#D1A054]" />
                                            </Link>
                                        </td>
                                        <td>
                                            <MdDeleteForever
                                                onClick={() => handleItemDelete(item._id)}
                                                className="text-red-500 text-3xl cursor-pointer"
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center items-center mt-4 gap-2">
                        <button
                            onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                            disabled={currentPage === 1}
                            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                        >
                            Previous
                        </button>

                        {[...Array(menuData.totalPages)].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => handlePageChange(i + 1)}
                                className={`px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-[#D1A054] text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                            >
                                {i + 1}
                            </button>
                        ))}

                        <button
                            onClick={() => handlePageChange(Math.min(currentPage + 1, menuData.totalPages))}
                            disabled={currentPage === menuData.totalPages}
                            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;

