import { FaUsers } from "react-icons/fa"
import { MdDeleteForever } from "react-icons/md"


const AllUsers = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto mt-8 px-4">
                <div className="bg-white shadow-md rounded-xl p-6 mb-6">
                    <h2 className="text-lg sm:text-2xl font-bold text-gray-700 mb-6">TOTAL USERS: 6</h2>
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
                                <tr>
                                    <td>1</td>
                                    <td>Mujahidul Islam Rifat</td>
                                    <td>mirifat4541@gmail.com</td>
                                    <td>  <button
                                        className=" bg-[#D1A054] text-white text-2xl px-2 py-2 rounded-sm transition"
                                    >
                                        <FaUsers  />
                                    </button></td>
                                    <td>                                        <button
                                        className="bg-[#B91C1C] text-white text-2xl px-2 py-2 rounded-sm transition"
                                    >
                                        <MdDeleteForever />
                                    </button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllUsers
