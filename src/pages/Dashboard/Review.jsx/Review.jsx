import { useState } from "react";
import { FaStar, FaPen, FaQuoteLeft, FaHeart } from "react-icons/fa";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";

const Reviews = () => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        rating: 0,
    });

    const [hover, setHover] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const reviewData = {
            ...formData,
            rating: Number(formData.rating),
        };

        console.log(reviewData);

        alert("✅ Thank you for your valuable feedback!");
        e.target.reset();
        setFormData({ name: "", description: "", rating: 0 });
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-orange-50">

            <div className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    {/* Review Form Card */}
                    <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-12 border border-gray-200 relative overflow-hidden">
                        {/* Decorative Quote Icon */}
                        <div className="absolute top-8 right-8 opacity-5">
                            <FaQuoteLeft className="text-9xl text-amber-600" />
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full -ml-16 -mt-16 opacity-40 blur-2xl"></div>
                        <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-orange-100 to-amber-100 rounded-full -mr-20 -mb-20 opacity-40 blur-2xl"></div>

                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            {/* Name Input */}
                            <div className="group">
                                <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                                    <FaPen className="mr-2 text-amber-600 text-xs" />
                                    Your Name
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

                            {/* Rating Section */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-3">
                                    Rate Your Experience
                                </label>
                                <div className="flex items-center justify-center space-x-3 bg-gradient-to-r from-amber-50 to-orange-50 py-6 rounded-2xl border-2 border-amber-100">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <FaStar
                                            key={star}
                                            className={`cursor-pointer text-4xl transition-all transform hover:scale-125 ${star <= (hover || formData.rating)
                                                    ? "text-amber-500 drop-shadow-lg"
                                                    : "text-gray-300"
                                                }`}
                                            onClick={() => setFormData({ ...formData, rating: star })}
                                            onMouseEnter={() => setHover(star)}
                                            onMouseLeave={() => setHover(null)}
                                        />
                                    ))}
                                </div>
                                {formData.rating > 0 && (
                                    <p className="text-center mt-3 text-amber-600 font-semibold">
                                        {formData.rating === 5 && "⭐ Excellent!"}
                                        {formData.rating === 4 && "😊 Great!"}
                                        {formData.rating === 3 && "👍 Good!"}
                                        {formData.rating === 2 && "😐 Fair"}
                                        {formData.rating === 1 && "😔 Needs Improvement"}
                                    </p>
                                )}
                            </div>

                            {/* Description Textarea */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Share Your Thoughts
                                </label>
                                <textarea
                                    name="description"
                                    rows="5"
                                    placeholder="Tell us about your dining experience, favorite dishes, service quality, ambiance..."
                                    value={formData.description}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all duration-300 resize-none bg-gray-50 focus:bg-white"
                                ></textarea>
                                <p className="text-xs text-gray-500 mt-1">
                                    Minimum 10 characters required
                                </p>
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-center pt-4">
                                <button
                                    type="submit"
                                    disabled={formData.rating === 0}
                                    className="px-12 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold text-base hover:from-amber-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                >
                                    <FaStar className="text-sm" />
                                    Submit Review
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Info Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                        <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 text-center">
                            <div className="text-3xl font-bold text-amber-600 mb-2">1000+</div>
                            <p className="text-gray-600 text-sm">Happy Customers</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 text-center">
                            <div className="text-3xl font-bold text-amber-600 mb-2 flex items-center justify-center">
                                4.8 <FaStar className="text-2xl ml-1" />
                            </div>
                            <p className="text-gray-600 text-sm">Average Rating</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 text-center">
                            <div className="text-3xl font-bold text-amber-600 mb-2">98%</div>
                            <p className="text-gray-600 text-sm">Satisfaction Rate</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;