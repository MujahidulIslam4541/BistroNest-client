// // import { useQuery } from "@tanstack/react-query"
// // import SectionTitle from "../../../components/sectionTitle/SectionTitle"
// // import useAxiosSecure from "../../../hooks/useAxiosSecure"


// // const AllBooking = () => {
// //     const axiosSecure = useAxiosSecure()

// //     const { data: bookings = [] } = useQuery({
// //         queryKey: ['booking'],
// //         queryFn: async () => {
// //             const result = await axiosSecure.get('/booking')
// //             return result?.data;
// //         }
// //     })
// //     console.log(bookings)
// //     return (
// //         <div>
// //             <SectionTitle heading="My All Booking" subHeading='sd'></SectionTitle>


// //         </div>
// //     )
// // }

// // export default AllBooking



// import { useQuery } from "@tanstack/react-query"
// import SectionTitle from "../../../components/sectionTitle/SectionTitle"
// import useAxiosSecure from "../../../hooks/useAxiosSecure"
// import { FaCalendarAlt, FaClock, FaEnvelope, FaPhoneAlt, FaUsers, FaCommentDots, FaTrashAlt } from "react-icons/fa";

// const AllBooking = () => {
//     const axiosSecure = useAxiosSecure()

//     const { data: bookings = [], isLoading, refetch } = useQuery({
//         queryKey: ['booking'],
//         queryFn: async () => {
//             const result = await axiosSecure.get('/booking')
//             return result?.data;
//         }
//     })

//     const handleDelete = async (id) => {
//         if (window.confirm('Are you sure you want to delete this booking?')) {
//             try {
//                 await axiosSecure.delete(`/booking/${id}`)
//                 refetch()
//             } catch (error) {
//                 console.error('Error deleting booking:', error)
//             }
//         }
//     }

//     const getStatusColor = (status) => {
//         switch (status) {
//             case 'pending':
//                 return 'bg-yellow-100 text-yellow-800 border-yellow-200'
//             case 'confirmed':
//                 return 'bg-green-100 text-green-800 border-green-200'
//             case 'cancelled':
//                 return 'bg-red-100 text-red-800 border-red-200'
//             default:
//                 return 'bg-gray-100 text-gray-800 border-gray-200'
//         }
//     }

//     if (isLoading) {
//         return (
//             <div className="flex items-center justify-center min-h-screen">
//                 <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//             </div>
//         )
//     }

//     return (
//         <div className="min-h-screen bg-gray-50 py-8 px-4">
//             <div className="max-w-7xl mx-auto">
//                 <SectionTitle
//                     heading="My All Bookings"
//                     subHeading="Manage and view all your reservations"
//                 />

//                 {bookings.length === 0 ? (
//                     <div className="text-center py-16 bg-white rounded-lg shadow-sm">
//                         <FaCalendarAlt className="mx-auto h-16 w-16 text-gray-400 mb-4" />
//                         <h3 className="text-xl font-semibold text-gray-700 mb-2">No Bookings Found</h3>
//                         <p className="text-gray-500">You haven't made any reservations yet.</p>
//                     </div>
//                 ) : (
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {bookings.map((booking) => (
//                             <div
//                                 key={booking._id}
//                                 className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
//                             >
//                                 <div className="p-6">
//                                     <div className="flex justify-between items-start mb-4">
//                                         <h3 className="text-xl font-bold text-gray-800">{booking.name}</h3>
//                                         <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(booking.status)}`}>
//                                             {booking.status.toUpperCase()}
//                                         </span>
//                                     </div>

//                                     <div className="space-y-3">
//                                         <div className="flex items-center text-gray-600">
//                                             <FaEnvelope className="h-4 w-4 mr-2 text-blue-500" />
//                                             <span className="text-sm">{booking.email}</span>
//                                         </div>

//                                         <div className="flex items-center text-gray-600">
//                                             <FaPhoneAlt className="h-4 w-4 mr-2 text-green-500" />
//                                             <span className="text-sm">{booking.phone}</span>
//                                         </div>

//                                         <div className="flex items-center text-gray-600">
//                                             <FaCalendarAlt className="h-4 w-4 mr-2 text-purple-500" />
//                                             <span className="text-sm">{new Date(booking.date).toLocaleDateString('en-US', {
//                                                 year: 'numeric',
//                                                 month: 'long',
//                                                 day: 'numeric'
//                                             })}</span>
//                                         </div>

//                                         <div className="flex items-center text-gray-600">
//                                             <FaClock className="h-4 w-4 mr-2 text-orange-500" />
//                                             <span className="text-sm">{booking.time}</span>
//                                         </div>

//                                         <div className="flex items-center text-gray-600">
//                                             <FaUsers className="h-4 w-4 mr-2 text-pink-500" />
//                                             <span className="text-sm">{booking.guests} Guest{booking.guests > 1 ? 's' : ''}</span>
//                                         </div>

//                                         {booking.message && (
//                                             <div className="flex items-start text-gray-600 mt-4 pt-4 border-t">
//                                                 <FaCommentDots className="h-4 w-4 mr-2 text-indigo-500 mt-1" />
//                                                 <p className="text-sm italic">{booking.message}</p>
//                                             </div>
//                                         )}
//                                     </div>

//                                     <button
//                                         onClick={() => handleDelete(booking._id)}
//                                         className="mt-6 w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-colors duration-200"
//                                     >
//                                         <FaTrashAlt className="h-4 w-4" />
//                                         Delete Booking
//                                     </button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </div>
//     )
// }

// export default AllBooking



import { useQuery } from "@tanstack/react-query"
import SectionTitle from "../../../components/sectionTitle/SectionTitle"
import useAxiosSecure from "../../../hooks/useAxiosSecure"
import { FaTrashAlt, FaCalendarAlt } from "react-icons/fa";

const AllBooking = () => {
    const axiosSecure = useAxiosSecure()

    const { data: bookings = [], isLoading, refetch } = useQuery({
        queryKey: ['booking'],
        queryFn: async () => {
            const result = await axiosSecure.get('/booking')
            return result?.data;
        }
    })

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this booking?')) {
            try {
                await axiosSecure.delete(`/booking/${id}`)
                refetch()
            } catch (error) {
                console.error('Error deleting booking:', error)
            }
        }
    }

    const getStatusBadge = (status) => {
        const colors = {
            pending: 'bg-yellow-500',
            confirmed: 'bg-green-500',
            cancelled: 'bg-red-500'
        }
        return (
            <span className={`${colors[status] || 'bg-gray-500'} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                {status.toUpperCase()}
            </span>
        )
    }

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2" style={{ borderColor: '#D1A054' }}></div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-7xl mx-auto">
                <SectionTitle
                    heading="My All Bookings"
                    subHeading="Manage and view all your reservations"
                />

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
                                <thead style={{ backgroundColor: '#D1A054' }}>
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
                                    {bookings.map((booking, index) => (
                                        <tr
                                            key={booking._id}
                                            className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100 transition-colors duration-150`}
                                        >
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm font-medium text-gray-900">{booking.name}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-600">{booking.email}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-600">
                                                    {new Date(booking.date).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'short',
                                                        day: 'numeric'
                                                    })}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-600">{booking.time}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-600">{booking.guests}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {getStatusBadge(booking.status)}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-center">
                                                <button
                                                    onClick={() => handleDelete(booking._id)}
                                                    className="text-white px-4 py-2 rounded-lg transition-all duration-200 inline-flex items-center gap-2 hover:opacity-90 hover:shadow-md"
                                                    style={{ backgroundColor: '#D1A054' }}
                                                >
                                                    <FaTrashAlt className="h-3.5 w-3.5" />
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AllBooking
