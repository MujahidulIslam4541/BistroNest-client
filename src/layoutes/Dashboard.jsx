import { useState } from 'react'
import { FaCartPlus, FaHome, FaJediOrder, FaUser, FaUsers, FaUtensils, FaBars, FaTimes } from 'react-icons/fa'
import { NavLink, Outlet } from 'react-router-dom'
import { SlCalender } from "react-icons/sl";
import { MdEmail, MdLibraryBooks, MdPayments, MdOutlineReviews, MdManageAccounts } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { RiShoppingBag2Fill } from "react-icons/ri";
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isAdmin] = useAdmin();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const navLinkStyle = ({ isActive }) =>
        isActive
            ? "flex items-center gap-3 py-2 px-4 bg-[#924c0b] text-white rounded-md"
            : "flex items-center gap-3 py-2 px-4 text-black hover:bg-[#b37335] hover:text-white rounded-md transition";

    return (
        <div className='flex relative'>
            {/* Mobile Navbar */}
            <div className='lg:hidden fixed top-0 left-0 right-0 bg-[#D1A054] z-40 px-4 py-3 flex items-center justify-between shadow-md'>
                <NavLink to='/' className='text-xl font-extrabold text-black tracking-wider'>
                    BISTONEST
                </NavLink>
                <button 
                    onClick={toggleSidebar}
                    className='text-black text-2xl p-2 hover:bg-[#b37335] rounded-md transition'
                >
                    {isSidebarOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Overlay */}
            {isSidebarOpen && (
                <div 
                    className='lg:hidden fixed inset-0 bg-black/50 bg-opacity-50 z-40 transition-opacity'
                    onClick={closeSidebar}
                ></div>
            )}

            {/* Sidebar */}
            <div className={`
                fixed lg:static
                w-64 min-h-screen bg-[#D1A054] p-4
                z-50 transition-transform duration-300 ease-in-out
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                top-0 left-0
                overflow-y-auto
            `}>
                {/* Logo/Header - Hidden on mobile (shown in navbar) */}
                <div className='text-center mb-6 hidden lg:block'>
                    <NavLink to='/' className='text-2xl font-extrabold text-black tracking-wider'>
                        BISTONEST
                        <span className='block text-sm font-medium text-black'>RESTAURANT</span>
                    </NavLink>
                </div>

                {/* Mobile Header - Only visible on mobile inside sidebar */}
                <div className='text-center mb-6 lg:hidden pt-2'>
                    <NavLink to='/' className='text-2xl font-extrabold text-black tracking-wider'>
                        BISTONEST
                        <span className='block text-sm font-medium text-black'>RESTAURANT</span>
                    </NavLink>
                </div>

                {/* Navigation Links for Admin and User */}
                <ul className='space-y-2'>
                    {/* Admin Dashboard */}
                    {isAdmin ? <>
                        <li>
                            <NavLink to='/dashboard/adminHome' className={navLinkStyle} onClick={closeSidebar}>
                                <FaHome /> Admin Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to='/dashboard/addItem' className={navLinkStyle} onClick={closeSidebar}>
                                <FaUtensils /> Add Item
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/manageBooking' className={navLinkStyle} onClick={closeSidebar}>
                                <MdManageAccounts /> Manage Booking
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/manageOrders' className={navLinkStyle} onClick={closeSidebar}>
                                <FaJediOrder /> Manage Orders
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to='/dashboard/manageItems' className={navLinkStyle} onClick={closeSidebar}>
                                <TiThMenu /> Manage Items
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/users' className={navLinkStyle} onClick={closeSidebar}>
                                <FaUsers /> All Users
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/manageReviews' className={navLinkStyle} onClick={closeSidebar}>
                                <MdOutlineReviews /> Manage Reviews
                            </NavLink>
                        </li>
                    </> :
                        //  User DashBoard  
                        <>
                            <li>
                                <NavLink to='/dashboard/userHome' className={navLinkStyle} onClick={closeSidebar}>
                                    <FaHome /> User Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/paymentHistory' className={navLinkStyle} onClick={closeSidebar}>
                                    <MdPayments /> Payment History
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/cart' className={navLinkStyle} onClick={closeSidebar}>
                                    <FaCartPlus />My Cart
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/booking' className={navLinkStyle} onClick={closeSidebar}>
                                   <MdLibraryBooks /> My Bookings
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/review' className={navLinkStyle} onClick={closeSidebar}>
                                    <MdOutlineReviews /> Review
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/AddBooking' className={navLinkStyle} onClick={closeSidebar}>
                                    <MdLibraryBooks /> Booking
                                </NavLink>
                            </li>
                        </>
                    }

                    {/* Divider */}
                    <div className='border-t border-white my-4'></div>

                    {/* General Site Links */}
                    <li>
                        <NavLink to='/' className={navLinkStyle} onClick={closeSidebar}>
                            <FaHome /> Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/menu' className={navLinkStyle} onClick={closeSidebar}>
                            <TiThMenu /> Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' className={navLinkStyle} onClick={closeSidebar}>
                            <MdEmail /> Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/shope/dessert' className={navLinkStyle} onClick={closeSidebar}>
                            <RiShoppingBag2Fill /> Shop
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Outlet */}
            <div className='flex-1 bg-gray-50 p-4 mt-14 lg:mt-0'>
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard
