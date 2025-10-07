import { FaCartPlus, FaHome, FaUser, FaUsers, FaUtensils } from 'react-icons/fa'
import { NavLink, Outlet } from 'react-router-dom'
import { SlCalender } from "react-icons/sl";
import { MdEmail, MdLibraryBooks, MdPayments, MdOutlineReviews } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { RiShoppingBag2Fill } from "react-icons/ri";
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {


    // TODO: get is Admin value from the database or context
    const [isAdmin] = useAdmin(); // Replace with actual admin check logic


    const navLinkStyle = ({ isActive }) =>
        isActive
            ? "flex items-center gap-3 py-2 px-4 bg-[#924c0b] text-white rounded-md"
            : "flex items-center gap-3 py-2 px-4 text-black hover:bg-[#b37335] hover:text-white rounded-md transition";

    return (
        <div className='flex'>
            {/* Sidebar */}
            <div className='w-64 min-h-screen bg-[#D1A054] p-4'>
                {/* Logo/Header */}
                <div className='text-center mb-6'>
                    <NavLink to='/' className='text-2xl font-extrabold text-black tracking-wider'>
                        BISTONEST
                        <span className='block text-sm font-medium text-black'>RESTAURANT</span>
                    </NavLink>
                </div>

                {/* Navigation Links for Admin and User */}
                <ul className='space-y-2'>

                    {isAdmin ? <>
                        <li>
                            <NavLink to='/dashboard/adminHome' className={navLinkStyle}>
                                <FaHome /> Admin Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/addItem' className={navLinkStyle}>
                                <FaUtensils /> Add Item
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/manageItems' className={navLinkStyle}>
                                <TiThMenu /> Manage Items
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/users' className={navLinkStyle}>
                                <FaUsers /> All Users
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/manageReviews' className={navLinkStyle}>
                                <MdOutlineReviews /> Manage Reviews
                            </NavLink>
                        </li>
                    </> : <>
                        <li>
                            <NavLink to='/dashboard/userHome' className={navLinkStyle}>
                                <FaHome /> User Home
                            </NavLink>
                        </li>
                        {/* <li>
                            <NavLink to='/dashboard/reservation' className={navLinkStyle}>
                                <SlCalender /> Reservation
                            </NavLink>
                        </li> */}
                        <li>
                            <NavLink to='/dashboard/paymentHistory' className={navLinkStyle}>
                                <MdPayments /> Payment History
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/cart' className={navLinkStyle}>
                                <FaCartPlus />My Cart
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/review' className={navLinkStyle}>
                                <MdOutlineReviews /> Review
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/booking' className={navLinkStyle}>
                                <MdLibraryBooks /> Booking
                            </NavLink>
                        </li>
                    </>
                    }

                    {/* Divider */}
                    <div className='border-t border-white my-4'></div>

                    {/* General Site Links */}
                    <li>
                        <NavLink to='/' className={navLinkStyle}>
                            <FaHome /> Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/menu' className={navLinkStyle}>
                            <TiThMenu /> Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' className={navLinkStyle}>
                            <MdEmail /> Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/shope/dessert' className={navLinkStyle}>
                            <RiShoppingBag2Fill /> Shop
                        </NavLink>
                    </li>
                </ul>

            </div>

            {/* Outlet */}
            <div className='flex-1 bg-gray-50 p-4'>
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard
