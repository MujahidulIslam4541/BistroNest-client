import { useState } from 'react';
import {
    FaMapMarkerAlt,
    FaPaperPlane,
    FaCheckCircle,
    FaPhone,
    FaEnvelope,
    FaClock,
    FaMapPin
} from 'react-icons/fa';
import SectionTitle from '../../components/sectionTitle/SectionTitle';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">

            <SectionTitle heading='Contact Us' subHeading='Please share  your experience'></SectionTitle>
            {/* Map Section */}
            <div className="mt-16 max-w-6xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-4 overflow-hidden">
                    <h3 className="text-3xl font-bold text-amber-700 mb-6 text-center">Find Us Here</h3>
                    <div className="rounded-xl overflow-hidden h-96">
                        <iframe
                            title="AmberBistroNest Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29408.964266013416!2d91.0755161421276!3d22.872005415656133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754a4f60180b351%3A0xaf35df91820c2a37!2sMaijdee!5e0!3m2!1sen!2sbd!4v1760540935392!5m2!1sen!2sbd"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-3xl font-bold text-amber-700 mb-6">Send Us a Message</h3>

                        {submitted ? (
                            <div className="text-center py-12">
                                <FaCheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
                                <h4 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h4>
                                <p className="text-gray-600">Your Message succesfylly sent.</p>
                            </div>
                        ) : (
                            <div className="space-y-5">
                                {['name', 'email', 'phone', 'subject'].map((field, idx) => (
                                    <div key={idx}>
                                        <label className="block text-gray-700 font-semibold mb-2 capitalize">{field}</label>
                                        <input
                                            type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                                            name={field}
                                            value={formData[field]}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                                            placeholder={
                                                field === 'name' ? 'Apnar naam' :
                                                    field === 'email' ? 'your@email.com' :
                                                        field === 'phone' ? '+880 XXXX-XXXXXX' :
                                                            'Bishoy'
                                            }
                                        />
                                    </div>
                                ))}

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="5"
                                        className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors resize-none"
                                        placeholder="Apnar message likhun..."
                                    />
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 rounded-lg font-bold text-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-md"
                                >
                                    <FaPaperPlane className="w-5 h-5" />
                                    Send Message
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-6">
                        {/* Address */}
                        <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
                            <div className="flex items-start gap-4">
                                <div className="bg-amber-100 p-3 rounded-full">
                                    <FaMapMarkerAlt className="w-6 h-6 text-amber-600" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-800 mb-2">Our Location</h4>
                                    <p className="text-gray-600 leading-relaxed">
                                        Supar Market<br />
                                        Noakhali, chattogram<br />
                                        Bangladesh
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
                            <div className="flex items-start gap-4">
                                <div className="bg-amber-100 p-3 rounded-full">
                                    <FaPhone className="w-6 h-6 text-amber-600" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-800 mb-2">Phone</h4>
                                    <p className="text-gray-600">+880 1XXX-XXXXXX</p>
                                    <p className="text-gray-600">+880 1XXX-XXXXXX</p>
                                </div>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
                            <div className="flex items-start gap-4">
                                <div className="bg-amber-100 p-3 rounded-full">
                                    <FaEnvelope className="w-6 h-6 text-amber-600" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-800 mb-2">Email</h4>
                                    <p className="text-gray-600">info@amberbistronest.com</p>
                                    <p className="text-gray-600">support@amberbistronest.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Opening Hours */}
                        <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
                            <div className="flex items-start gap-4">
                                <div className="bg-amber-100 p-3 rounded-full">
                                    <FaClock className="w-6 h-6 text-amber-600" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-xl font-bold text-gray-800 mb-3">Opening Hours</h4>
                                    <div className="space-y-2 text-gray-600">
                                        <div className="flex justify-between">
                                            <span className="font-semibold">Sun - Thu:</span>
                                            <span>10:00 AM - 11:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="font-semibold">Fri - Sat:</span>
                                            <span>10:00 AM - 12:00 AM</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
