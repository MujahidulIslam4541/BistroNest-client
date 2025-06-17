import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                {/* lest side */}
                <div className='bg-[#1F2937] text-white flex flex-col justify-center items-center py-10 space-y-2'>
                    <h1 className='font-semibold'>CONTACT US</h1>
                    <div>
                        <p>Maijdee Court Noakhali </p>
                        <p>Mon-Fri:08:00-22:00</p>
                        <p>Sat-Sun:10:00-23:00</p>
                    </div>
                </div>

                {/* right Side */}
                <div className='bg-[#111827] text-white flex flex-col justify-center items-center space-y-2'>
                    <h1 className='font-semibold'>FOLLOW US</h1>
                    <p>Join Us On Social Media</p>
                    <div className='flex gap-4'>
                        <FaFacebookF size={20} />
                        <FaInstagram size={20} />
                        <FaTwitter size={20} />
                    </div>
                </div>
            </div>
            {/* copyright footer */}
            <div className='bg-[#151515] text-white text-center  py-2'>
                <h2>Copyright © CulinaryCloud. All rights reserved.</h2>
            </div>
        </div>
    )
}

export default Footer
