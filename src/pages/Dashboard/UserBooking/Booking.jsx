import { useState } from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock, FaUtensils, FaCalendarAlt, FaUsers } from "react-icons/fa";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";


const Booking = () => {
    const axiosSecure = useAxiosSecure()
    const [formData, setFormData] = useState({
        date: "",
        time: "",
        guests: "",
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const bookingData = {
            ...formData,
            status: "pending"  
        };
        const res = await axiosSecure.post('/booking',  bookingData )
        if (res.data.insertedId) {
            toast.success("your booking is complete and pending approval")
        }
        setFormData({
            date: "",
            time: "",
            guests: "",
            name: "",
            phone: "",
            email: "",
            message: "",
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <div className="py-16 px-4 sm:px-6 lg:px-8">
                {/* Booking Form */}
                <div className="max-w-4xl mx-auto mb-20">
                    <SectionTitle heading="Reserve Your Table" subHeading="Experience fine dining at its best" />

                    <div className="bg-white shadow-xl rounded-3xl p-8 md:p-12 border border-gray-200 relative overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full -mr-20 -mt-20 opacity-40 blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-orange-100 to-amber-100 rounded-full -ml-16 -mb-16 opacity-40 blur-2xl"></div>

                        <form onSubmit={handleSubmit} className="relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Date */}
                                <div className="group">
                                    <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                                        <FaCalendarAlt className="mr-2 text-amber-600" />
                                        Date
                                    </label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all duration-300 bg-gray-50 focus:bg-white"
                                    />
                                </div>

                                {/* Time */}
                                <div className="group">
                                    <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                                        <FaClock className="mr-2 text-amber-600" />
                                        Time
                                    </label>
                                    <input
                                        type="time"
                                        name="time"
                                        value={formData.time}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all duration-300 bg-gray-50 focus:bg-white"
                                    />
                                </div>

                                {/* Guests */}
                                <div className="group">
                                    <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                                        <FaUsers className="mr-2 text-amber-600" />
                                        Number of Guests
                                    </label>
                                    <select
                                        name="guests"
                                        value={formData.guests}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all duration-300 appearance-none bg-gray-50 focus:bg-white"
                                    >
                                        <option value="">Select number of guests</option>
                                        <option value="1">1 Person</option>
                                        <option value="2">2 People</option>
                                        <option value="3">3 People</option>
                                        <option value="4">4 People</option>
                                        <option value="5">5 People</option>
                                        <option value="6">6 People</option>
                                        <option value="7+">7+ People</option>
                                    </select>
                                </div>

                                {/* Name */}
                                <div className="group">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter your full name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all duration-300 bg-gray-50 focus:bg-white"
                                    />
                                </div>

                                {/* Phone */}
                                <div className="group">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="+880 1234-567890"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all duration-300 bg-gray-50 focus:bg-white"
                                    />
                                </div>

                                {/* Email */}
                                <div className="group">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="your.email@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all duration-300 bg-gray-50 focus:bg-white"
                                    />
                                </div>
                            </div>

                            {/* Special Request */}
                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Special Requests (Optional)
                                </label>
                                <textarea
                                    name="message"
                                    placeholder="Any dietary restrictions or special occasions?"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="3"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all duration-300 resize-none bg-gray-50 focus:bg-white"
                                ></textarea>
                            </div>

                            {/* Submit Button - Smaller & Centered */}
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="px-12 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold text-base hover:from-amber-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                                >
                                    <FaUtensils className="text-sm" />
                                    Confirm Reservation
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Location Section */}
                <div className="max-w-6xl mx-auto">
                    <SectionTitle heading="Visit Us" subHeading="Our Location" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Phone */}
                        <div className="group bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                            <div className="bg-gradient-to-br from-amber-100 to-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-br group-hover:from-amber-600 group-hover:to-orange-600 transition-all duration-300">
                                <FaPhoneAlt className="text-amber-600 text-2xl group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h4 className="font-bold text-gray-800 text-xl mb-2">Phone</h4>
                            <p className="text-gray-600">+880 1234-567890</p>
                            <p className="text-gray-500 text-sm mt-1">Available 10 AM - 11 PM</p>
                        </div>

                        {/* Address */}
                        <div className="group bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                            <div className="bg-gradient-to-br from-amber-100 to-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-br group-hover:from-amber-600 group-hover:to-orange-600 transition-all duration-300">
                                <FaMapMarkerAlt className="text-amber-600 text-2xl group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h4 className="font-bold text-gray-800 text-xl mb-2">Address</h4>
                            <p className="text-gray-600">
                                123 Bistro Street<br />
                                Dhaka, Bangladesh
                            </p>
                        </div>

                        {/* Working Hours */}
                        <div className="group bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                            <div className="bg-gradient-to-br from-amber-100 to-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-br group-hover:from-amber-600 group-hover:to-orange-600 transition-all duration-300">
                                <FaClock className="text-amber-600 text-2xl group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h4 className="font-bold text-gray-800 text-xl mb-2">Working Hours</h4>
                            <p className="text-gray-600">Monday - Sunday</p>
                            <p className="text-gray-500 text-sm mt-1">10:00 AM - 11:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;