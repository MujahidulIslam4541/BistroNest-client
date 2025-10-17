import { FaPhoneAlt, FaMapMarkerAlt, FaClock, FaUtensils, FaCalendarAlt, FaUsers } from "react-icons/fa";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import UseContext from "../../../hooks/useContext";

const Booking = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = UseContext();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;

        const bookingData = {
            date: form.date.value,
            time: form.time.value,
            guests: form.guests.value,
            name: form.name.value,
            phone: form.phone.value,
            email: form.email.value,
            message: form.message.value,
            status: "pending",
        };

        try {
            const res = await axiosSecure.post("/booking", bookingData);
            if (res.data.insertedId) {
                toast.success("Your booking is complete and pending approval");
                form.reset();
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to create booking");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <div className="py-16 px-4 sm:px-6 lg:px-8">
                {/* Booking Form */}
                <div className="max-w-4xl mx-auto mb-20">
                    <SectionTitle heading="Reserve Your Table" subHeading="Experience fine dining at its best" />

                    <div className="bg-white shadow-xl rounded-3xl p-8 md:p-12 border border-gray-200 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full -mr-20 -mt-20 opacity-40 blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-orange-100 to-amber-100 rounded-full -ml-16 -mb-16 opacity-40 blur-2xl"></div>

                        <form onSubmit={handleSubmit} className="relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Date */}
                                <div>
                                    <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                                        <FaCalendarAlt className="mr-2 text-amber-600" /> Date
                                    </label>
                                    <input
                                        type="date"
                                        name="date"
                                        required
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                                    />
                                </div>

                                {/* Time */}
                                <div>
                                    <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                                        <FaClock className="mr-2 text-amber-600" /> Time
                                    </label>
                                    <input
                                        type="time"
                                        name="time"
                                        required
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                                    />
                                </div>

                                {/* Guests */}
                                <div>
                                    <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                                        <FaUsers className="mr-2 text-amber-600" /> Number of Guests
                                    </label>
                                    <select
                                        name="guests"
                                        required
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                                    >
                                        <option value="">Select number of guests</option>
                                        {[1, 2, 3, 4, 5, 6].map((n) => (
                                            <option key={n} value={n}>{n} {n === 1 ? "Person" : "People"}</option>
                                        ))}
                                        <option value="7+">7+ People</option>
                                    </select>
                                </div>

                                {/* Name */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        defaultValue={user?.displayName || ""}
                                        placeholder="Enter your full name"
                                        readOnly
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="+880 1234-567890"
                                        required
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        defaultValue={user?.email || ""}
                                        placeholder="your.email@example.com"
                                        readOnly
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                                    />
                                </div>
                            </div>

                            {/* Special Requests */}
                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Special Requests (Optional)
                                </label>
                                <textarea
                                    name="message"
                                    placeholder="Any dietary restrictions or special occasions?"
                                    rows="3"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-100 resize-none"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="px-12 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold text-base hover:from-amber-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2"
                                >
                                    <FaUtensils className="text-sm" /> Confirm Reservation
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
