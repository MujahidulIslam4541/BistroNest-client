import React, { useState, useEffect, useRef } from 'react'
import { FaUserCircle, FaUser, FaSignOutAlt, FaTachometerAlt } from 'react-icons/fa'
import { FaCartPlus } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import UseContext from '../../hooks/useContext'
import toast from 'react-hot-toast'
import useCart from '../../hooks/useCart'
import useAdmin from '../../hooks/useAdmin'
import Loader from '../loader/Loader'

const Navbar = () => {
    const { logOut, user } = UseContext()
    const [cart] = useCart()
    const [isAdmin, isAdminLoading] = useAdmin()
    const [showDropdown, setShowDropdown] = useState(false)
    const [showEmailTooltip, setShowEmailTooltip] = useState(false)
    const dropdownRef = useRef(null)

    const navItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Contact Us'>Contact Us</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to='/shope/dessert'>Our Shope</Link></li>
    </>

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false)
            }
        }

        if (showDropdown) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [showDropdown])

    if (isAdminLoading) {
        return <Loader></Loader>
    }

    const handleLogOut = () => {
        logOut()
            .then(() => { 
                toast.success('User Sign Out Successful')
                setShowDropdown(false)
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    const handleAvatarClick = (e) => {
        e.stopPropagation()
        setShowDropdown(!showDropdown)
    }

    return (
        <div>
            <div className="navbar fixed z-10 bg-black/30 max-w-7xl mx-auto shadow-sm text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-black/30 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navItem}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">BISTRO NEST</a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>

                <div className="navbar-end space-x-4 items-center">
                    {/* Cart Icon */}
                    <div className="relative">
                        {user && isAdmin ? 
                            <Link>
                                <FaCartPlus className="text-2xl text-white hover:text-yellow-400 cursor-pointer" />
                            </Link> 
                            : 
                            <Link>
                                <FaCartPlus className="text-2xl text-white hover:text-yellow-400 cursor-pointer" />
                                <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white px-1.5 py-0.5 rounded-full min-w-[20px] text-center">
                                    {cart.length}
                                </span>
                            </Link>
                        }
                    </div>

                    {/* User Section */}
                    {user ? (
                        <div className="relative" ref={dropdownRef}>
                            {/* User Avatar/Initial */}
                            <div 
                                className="flex items-center gap-2 cursor-pointer relative"
                                onClick={handleAvatarClick}
                                onMouseEnter={() => setShowEmailTooltip(true)}
                                onMouseLeave={() => setShowEmailTooltip(false)}
                            >
                                <div className="bg-yellow-400 text-black w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg hover:bg-yellow-500 transition-all duration-300 shadow-lg">
                                    {user?.displayName?.[0]?.toUpperCase() || 'U'}
                                </div>

                                {/* Email Tooltip on Hover */}
                                {showEmailTooltip && !showDropdown && (
                                    <div className="absolute top-12 right-0 bg-gray-800 text-white px-3 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap z-50">
                                        {user?.email}
                                        <div className="absolute -top-1 right-4 w-2 h-2 bg-gray-800 transform rotate-45"></div>
                                    </div>
                                )}
                            </div>

                            {/* Dropdown Menu on Click */}
                            {showDropdown && (
                                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl overflow-hidden z-50">
                                    {/* User Info */}
                                    <div className="px-4 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 border-b border-yellow-600">
                                        <p className="text-sm font-semibold text-black truncate">
                                            {user?.displayName}
                                        </p>
                                        <p className="text-xs text-gray-700 truncate">
                                            {user?.email}
                                        </p>
                                    </div>

                                    {/* Menu Items */}
                                    <div className="py-2">
                                        {/* Dashboard Link */}
                                        <Link 
                                            to={isAdmin ? '/dashboard/adminHome' : '/dashboard/userHome'}
                                            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-yellow-50 transition-colors duration-200"
                                            onClick={() => setShowDropdown(false)}
                                        >
                                            <FaTachometerAlt className="text-yellow-600 text-lg" />
                                            <span className="text-sm font-medium">Dashboard</span>
                                        </Link>

                                        {/* Logout Button */}
                                        <button
                                            onClick={handleLogOut}
                                            className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-red-50 transition-colors duration-200"
                                        >
                                            <FaSignOutAlt className="text-red-600 text-lg" />
                                            <span className="text-sm font-medium">Logout</span>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        /* Sign In Button */
                        <Link to="/signIn">
                            <button className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 rounded-md text-black font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2">
                                <FaUser className="text-sm" />
                                Sign In
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar