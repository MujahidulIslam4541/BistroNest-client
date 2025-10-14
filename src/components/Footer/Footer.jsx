import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='mt-20'>
            {/* Main Footer Content */}
            <div className='grid grid-cols-1 md:grid-cols-2'>
                {/* Left Side - Contact Us */}
                <div className='bg-[#1F2937] text-white flex flex-col justify-center items-center py-10 space-y-4 relative overflow-hidden group'>
                    {/* Decorative background */}
                    <div className='absolute inset-0 bg-gradient-to-br from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

                    <div className='relative z-10 space-y-3 text-center'>
                        <h2 className='text-lg md:text-xl font-bold uppercase tracking-wider text-orange-400'>
                            Contact Us
                        </h2>

                        <div className='space-y-2 text-gray-300'>
                            <p className='flex items-center justify-center gap-2 text-sm md:text-base'>
                                <FaMapMarkerAlt className='text-orange-400' />
                                Maijdee Court, Noakhali
                            </p>

                            <div className='space-y-1'>
                                <p className='flex items-center justify-center gap-2 text-sm md:text-base'>
                                    <FaClock className='text-orange-400' />
                                    Mon-Fri: 08:00-22:00
                                </p>
                                <p className='flex items-center justify-center gap-2 text-sm md:text-base'>
                                    <FaClock className='text-orange-400' />
                                    Sat-Sun: 10:00-23:00
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Follow Us */}
                <div className='bg-[#111827] text-white flex flex-col justify-center items-center py-10 space-y-4 relative overflow-hidden group'>
                    {/* Decorative background */}
                    <div className='absolute inset-0 bg-gradient-to-bl from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

                    <div className='relative z-10 space-y-3 text-center'>
                        <h2 className='text-lg md:text-xl font-bold uppercase tracking-wider text-orange-400'>
                            Follow Us
                        </h2>

                        <p className='text-gray-300 text-sm md:text-base'>
                            Join Us On Social Media
                        </p>

                        <div className='flex gap-4 pt-1'>
                            <a
                                href='#'
                                className='bg-white/10 hover:bg-orange-400 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1'
                                aria-label='Facebook'
                            >
                                <FaFacebookF size={20} className='text-white' />
                            </a>
                            <a
                                href='#'
                                className='bg-white/10 hover:bg-orange-400 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1'
                                aria-label='Instagram'
                            >
                                <FaInstagram size={20} className='text-white' />
                            </a>
                            <a
                                href='#'
                                className='bg-white/10 hover:bg-orange-400 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1'
                                aria-label='Twitter'
                            >
                                <FaTwitter size={20} className='text-white' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Footer */}
            <div className='bg-[#151515] text-white text-center py-2'>
                <p className='text-sm md:text-base text-gray-400'>
                    Copyright © <span className='text-orange-400 font-semibold'>Mujahidul Islam Rifat</span>. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer