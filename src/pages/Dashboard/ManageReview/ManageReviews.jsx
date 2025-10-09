import { useState } from 'react';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';


const ManageReviews = () => {
    const [reviews, setReviews] = useState([
        {
            _id: "1",
            name: "Mujahidul Islam Rifat",
            email: "rifat@example.com",
            rating: 5,
            comment: "Excellent food and service! Highly recommend the Bistro Combo meal.",
            status: "approved",
            createdAt: "2025-10-07T10:30:00Z",
        },
        {
            _id: "2",
            name: "Nusrat Jahan",
            email: "nusrat@example.com",
            rating: 4,
            comment: "Nice ambiance and friendly staff. Will visit again!",
            status: "pending",
            createdAt: "2025-10-06T15:20:00Z",
        },
        {
            _id: "3",
            name: "Rakib Hasan",
            email: "rakib@example.com",
            rating: 3,
            comment: "Food was okay, but service was a bit slow.",
            status: "rejected",
            createdAt: "2025-10-05T12:00:00Z",
        },
    ]);

    const [filter, setFilter] = useState('all');

    const handleStatusChange = (id, newStatus) => {
        setReviews(reviews.map(review =>
            review._id === id ? { ...review, status: newStatus } : review
        ));
    };

    const handleDelete = (id) => {
        setReviews(reviews.filter(review => review._id !== id));
    };

    const filteredReviews = filter === 'all'
        ? reviews
        : reviews.filter(r => r.status === filter);

    const stats = {
        total: reviews.length,
        approved: reviews.filter(r => r.status === 'approved').length,
        pending: reviews.filter(r => r.status === 'pending').length,
        rejected: reviews.filter(r => r.status === 'rejected').length,
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <SectionTitle heading="Manage Reviews" subHeading="Admin Control Panel" />

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-[#D1A054] transform hover:scale-105 transition">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm font-medium">Total Reviews</p>
                                <p className="text-3xl font-bold text-gray-800 mt-1">{stats.total}</p>
                            </div>
                            <div className="bg-[#D1A054] bg-opacity-10 p-3 rounded-full">
                                <svg className="w-8 h-8 text-[#D1A054]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500 transform hover:scale-105 transition">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm font-medium">Approved</p>
                                <p className="text-3xl font-bold text-green-600 mt-1">{stats.approved}</p>
                            </div>
                            <div className="bg-green-100 p-3 rounded-full">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-yellow-500 transform hover:scale-105 transition">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm font-medium">Pending</p>
                                <p className="text-3xl font-bold text-yellow-600 mt-1">{stats.pending}</p>
                            </div>
                            <div className="bg-yellow-100 p-3 rounded-full">
                                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500 transform hover:scale-105 transition">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm font-medium">Rejected</p>
                                <p className="text-3xl font-bold text-red-600 mt-1">{stats.rejected}</p>
                            </div>
                            <div className="bg-red-100 p-3 rounded-full">
                                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filter Tabs */}
                <div className="bg-white rounded-xl shadow-lg p-2 mb-6 flex flex-wrap gap-2">
                    {['all', 'approved', 'pending', 'rejected'].map(status => (
                        <button
                            key={status}
                            onClick={() => setFilter(status)}
                            className={`px-6 py-2 rounded-lg font-medium transition capitalize ${filter === status
                                ? 'bg-[#D1A054] text-white shadow-md'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {status}
                        </button>
                    ))}
                </div>

                {/* Reviews Table */}
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gradient-to-r from-[#D1A054] to-[#d4aa61] text-white">
                                    <th className="px-6 py-4 text-left text-sm font-semibold">Reviewer</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">Rating</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">Comment</th>
                                    <th className="px-6 py-4 text-center text-sm font-semibold">Status</th>
                                    <th className="px-6 py-4 text-right text-sm font-semibold">Actions</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-200">
                                {filteredReviews.length === 0 ? (
                                    <tr>
                                        <td colSpan="5" className="px-6 py-12 text-center text-gray-500">
                                            <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                                            </svg>
                                            <p className="text-lg font-medium">No reviews found</p>
                                        </td>
                                    </tr>
                                ) : (
                                    filteredReviews.map((review) => (
                                        <tr key={review._id} className="hover:bg-gray-50 transition">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D1A054] to-[#d4aa61] flex items-center justify-center text-white font-bold">
                                                        {review.name.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <div className="font-semibold text-gray-800">{review.name}</div>
                                                        <div className="text-xs text-gray-500">{review.email}</div>
                                                        <div className="text-xs text-gray-400 mt-1">
                                                            {new Date(review.createdAt).toLocaleString('en-US', {
                                                                year: 'numeric',
                                                                month: 'short',
                                                                day: 'numeric',
                                                                hour: '2-digit',
                                                                minute: '2-digit'
                                                            })}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-1">
                                                    {[...Array(5)].map((_, i) => (
                                                        <svg
                                                            key={i}
                                                            className={`w-5 h-5 ${i < review.rating ? 'text-[#D1A054]' : 'text-gray-300'}`}
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                    ))}
                                                    <span className="ml-2 text-sm font-semibold text-gray-700">{review.rating}.0</span>
                                                </div>
                                            </td>

                                            <td className="px-6 py-4">
                                                <p className="text-sm text-gray-700 max-w-md line-clamp-2">{review.comment}</p>
                                            </td>

                                            <td className="px-6 py-4 text-center">
                                                <span
                                                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium capitalize ${review.status === "approved"
                                                        ? "bg-green-100 text-green-700"
                                                        : review.status === "rejected"
                                                            ? "bg-red-100 text-red-700"
                                                            : "bg-yellow-100 text-yellow-700"
                                                        }`}
                                                >
                                                    {review.status}
                                                </span>
                                            </td>

                                            <td className="px-6 py-4">
                                                <div className="flex justify-end gap-2">
                                                    {review.status !== "approved" && (
                                                        <button
                                                            onClick={() => handleStatusChange(review._id, 'approved')}
                                                            className="px-3 py-1.5 bg-green-500 hover:bg-green-600 text-white text-xs font-medium rounded-lg transition shadow-sm"
                                                        >
                                                            Approve
                                                        </button>
                                                    )}
                                                    {review.status !== "rejected" && (
                                                        <button
                                                            onClick={() => handleStatusChange(review._id, 'rejected')}
                                                            className="px-3 py-1.5 bg-yellow-500 hover:bg-yellow-600 text-white text-xs font-medium rounded-lg transition shadow-sm"
                                                        >
                                                            Reject
                                                        </button>
                                                    )}
                                                    <button
                                                        onClick={() => handleDelete(review._id)}
                                                        className="px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white text-xs font-medium rounded-lg transition shadow-sm"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageReviews;