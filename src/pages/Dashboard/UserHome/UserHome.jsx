import { useState } from 'react';
import { FaShoppingCart, FaStar, FaCalendarCheck, FaTimes, FaCamera } from "react-icons/fa";
import UseContext from '../../../hooks/useContext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../../components/loader/Loader';

const imageHostKey = import.meta.env.VITE_IMAGE_UPLOAD_URL; // imgbb API key
const UserHome = () => {
    const { user, logOut } = UseContext();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', imageFile: null });
    const [loading, setLoading] = useState(false);

    // Fetch user state
    const { data: userState = {}, isLoading } = useQuery({
        queryKey: ["userState", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/userState`);
            return res.data;
        },
    });

    // Fetch payment data
    // const { data: payments = [] } = useQuery({
    //     queryKey: ["payments", ],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get(`/payments`);
    //         return Array.isArray(res.data) ? res.data : [];
    //     },
    //     initialData: [],
    // });



    const handleLogOut = () => {
        logOut();
        navigate('/signIn');
    };

    // Update Profile Handler
    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.imageFile) {
            toast.error("Please fill all fields");
            return;
        }

        setLoading(true);
        try {
            const imageData = new FormData();
            imageData.append("image", formData.imageFile);

            const imgbbResponse = await fetch(`https://api.imgbb.com/1/upload?key=${imageHostKey}`, {
                method: "POST",
                body: imageData,
            });
            const imgbbResult = await imgbbResponse.json();

            if (!imgbbResult.success) {
                throw new Error("Image upload failed");
            }
            const imageURL = imgbbResult.data.url;
            const res = await axiosSecure.patch(`/userProfile/${user?.email}`, {
                displayName: formData.name,
                photoURL: imageURL,
            });

            if (res.data?.modifiedCount || res.status === 200) {
                toast.success("Profile updated successfully!");
                setIsModalOpen(false);
                refetch()
            } else {
                toast.error("Failed to update profile");
            }
        } catch (err) {
            console.error("Update Profile Error:", err);
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };


    const { data: userProfile = {}, isLoading: profileLoading ,refetch} = useQuery({
        queryKey: ["userProfile", user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/userProfile/${user?.email}`);
            return res.data;
        },
    });


    if (isLoading || profileLoading) return <Loader />;

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 px-4 py-10">
            <div className="max-w-6xl mx-auto">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                    {/* Orders */}
                    {/* <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border-t-4 border-yellow-600">
                        <div className="bg-gradient-to-br from-yellow-100 to-amber-100 p-4 rounded-full mb-4">
                            <FaShoppingCart className="text-4xl text-yellow-700" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-700">Total Orders</h3>
                        <p className="text-5xl font-bold mt-2 bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">{payments?.length || 0}</p>
                    </div> */}

                    {/* Reviews */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border-t-4 border-yellow-600">
                        <div className="bg-gradient-to-br from-yellow-100 to-amber-100 p-4 rounded-full mb-4">
                            <FaStar className="text-4xl text-yellow-700" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-700">Total Reviews</h3>
                        <p className="text-5xl font-bold mt-2 bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">{userState?.reviews || 0}</p>
                    </div>

                    {/* Bookings */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border-t-4 border-yellow-600">
                        <div className="bg-gradient-to-br from-yellow-100 to-amber-100 p-4 rounded-full mb-4">
                            <FaCalendarCheck className="text-4xl text-yellow-700" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-700">Total Bookings</h3>
                        <p className="text-5xl font-bold mt-2 bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">{userState?.bookings || 0}</p>
                    </div>
                </div>

                {/* Profile Card */}
                <div className="bg-white rounded-3xl shadow-xl p-10 flex flex-col md:flex-row items-center gap-8 border border-gray-100">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                        <img
                           src={userProfile?.photoURL || user?.photoURL || "https://i.ibb.co/2M7rtLk/default-avatar.png"} 
                            alt="User"
                            className="relative w-44 h-44 rounded-full border-4 border-yellow-600 object-cover shadow-2xl"
                        />
                        <span className="absolute bottom-4 right-4 bg-green-500 w-6 h-6 rounded-full border-4 border-white shadow-lg"></span>
                    </div>

                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-4xl font-bold text-gray-800 mb-2">
                            {userProfile?.displayName||   user?.displayName || "Unknown User"}
                        </h2>
                        <p className="text-gray-600 text-lg mb-3">{user?.email}</p>
                        <div className="inline-block bg-gradient-to-r from-yellow-100 to-amber-100 px-4 py-2 rounded-full">
                            <p className="text-yellow-800 font-semibold">
                                Welcome back to your dashboard 👋
                            </p>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                            <button
                                onClick={() => {
                                    setFormData({ name: user?.displayName || '', imageFile: null });
                                    setIsModalOpen(true);
                                }}
                                className="px-6 py-3 bg-gradient-to-r from-yellow-600 to-amber-600 text-white rounded-xl font-semibold hover:from-yellow-700 hover:to-amber-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                Edit Profile
                            </button>

                            <button onClick={handleLogOut} className="px-6 py-3 bg-gradient-to-r from-yellow-600 to-amber-600 text-white rounded-xl font-semibold hover:from-yellow-700 hover:to-amber-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                LogOut
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Update Profile Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
                            disabled={loading}
                        >
                            <FaTimes className="text-2xl" />
                        </button>

                        <div className="text-center mb-6">
                            <div className="inline-block p-3 bg-gradient-to-r from-yellow-100 to-amber-100 rounded-full mb-3">
                                <FaCamera className="text-3xl text-yellow-700" />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-800">Update Profile</h3>
                            <p className="text-gray-500 mt-2">Change your name and profile picture</p>
                        </div>

                        <form onSubmit={handleUpdateProfile} className="space-y-5">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:outline-none transition"
                                    placeholder="Enter your name"
                                    disabled={loading}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Profile Image</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => setFormData({ ...formData, imageFile: e.target.files[0] })}
                                    className="w-full file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-yellow-600 file:text-white hover:file:bg-yellow-700 cursor-pointer border-2 border-gray-200 rounded-xl"
                                    disabled={loading}
                                />
                            </div>

                            <div className="flex gap-3 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition disabled:opacity-50"
                                    disabled={loading}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 px-6 py-3 bg-gradient-to-r from-yellow-600 to-amber-600 text-white rounded-xl font-semibold hover:from-yellow-700 hover:to-amber-700 transition shadow-lg disabled:opacity-50"
                                    disabled={loading}
                                >
                                    {loading ? "Saving..." : "Save Changes"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserHome
