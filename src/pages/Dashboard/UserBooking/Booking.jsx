import { useState } from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";

const Booking = () => {
    const [formData, setFormData] = useState({
        date: "",
        time: "",
        guests: "",
        name: "",
        phone: "",
        email: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("✅ Booking request submitted successfully!");
    };

    return (
        <>
            <SectionTitle heading={"Book Your Table"} subHeading="Reservation"></SectionTitle>

            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                {/* ---------- Booking Form ---------- */}
                <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8 border">


                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Date */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                            />
                        </div>

                        {/* Time */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                            <input
                                type="time"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                            />
                        </div>

                        {/* Guests Dropdown */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                            <select
                                name="guests"
                                value={formData.guests}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                            >
                                <option value="">Select guests</option>
                                <option value="1">1 Person</option>
                                <option value="2">2 People</option>
                                <option value="3">3 People</option>
                                <option value="4">4 People</option>
                                <option value="5+">5+ People</option>
                            </select>
                        </div>

                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="+880..."
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                            />
                        </div>

                        {/* Button */}
                        <div className="md:col-span-2">
                            <button
                                type="submit"
                                className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-amber-700 transition duration-300"
                            >
                                Book Now
                            </button>
                        </div>
                    </form>
                </div>

                {/* ---------- Our Location Section ---------- */}
                <div className="max-w-5xl mx-auto mt-16 text-center">
                    {/* <h3 className="text-2xl font-semibold text-gray-800 mb-8">
                        Our Location
                    </h3> */}

                    <SectionTitle heading="Our Location" subHeading="Visit Us"></SectionTitle>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Phone */}
                        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300">
                            <FaPhoneAlt className="text-amber-600 text-3xl mx-auto mb-3" />
                            <h4 className="font-semibold text-gray-700 text-lg">Phone</h4>
                            <p className="text-gray-600 mt-1">+880 1234-567890</p>
                        </div>

                        {/* Address */}
                        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300">
                            <FaMapMarkerAlt className="text-amber-600 text-3xl mx-auto mb-3" />
                            <h4 className="font-semibold text-gray-700 text-lg">Address</h4>
                            <p className="text-gray-600 mt-1">
                                123 Bistro Street, Dhaka, Bangladesh
                            </p>
                        </div>

                        {/* Working Hours */}
                        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300">
                            <FaClock className="text-amber-600 text-3xl mx-auto mb-3" />
                            <h4 className="font-semibold text-gray-700 text-lg">Working Hours</h4>
                            <p className="text-gray-600 mt-1">Mon - Sun: 10:00 AM - 11:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Booking;
