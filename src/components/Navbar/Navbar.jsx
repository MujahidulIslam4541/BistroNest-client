import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { FaCartPlus } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import UseContext from '../../hooks/useContext'
import toast from 'react-hot-toast'

const Navbar = () => {
    const { logOut, user } = UseContext()
    const navItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Contact Us'>Contact Us</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to='/shope/dessert'>Our Shope</Link></li>
    </>

    const handleLogOut = () => {
        logOut()
            .then(() => { toast.success('User Sign Out Successful ') })
            .catch(error => {
                toast.error(error.message)
            })
    }
    return (
        <div>
            <div className="navbar fixed z-10 bg-black/30  max-w-7xl mx-auto shadow-sm text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-black/30  rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navItem}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">BISTRO NEST

                    </a>
                </div>
                <div className="navbar-center hidden  lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end space-x-4 items-center">
                    {/* Cart Icon */}
                    <div className="relative">
                        <FaCartPlus className="text-2xl text-white hover:text-yellow-400 cursor-pointer" />
                        {/* Optional badge */}
                        <span className="absolute top-0 right-0 text-xs bg-red-500 text-white px-1 rounded-full">0
                        </span>
                    </div>

                    {/* Sign In Button */}
                    {user ?
                        <Link >
                            <button onClick={handleLogOut} className="px-4 py-1 bg-yellow-400 hover:bg-yellow-500 rounded-md text-black font-medium">
                                Sign Out
                            </button>
                        </Link>
                        : <Link to="/signIn">
                            <button className="px-4 py-1 bg-yellow-400 hover:bg-yellow-500 rounded-md text-black font-medium">
                                Sign In
                            </button>
                        </Link>}

                    {/* User Icon */}
                    <FaUserCircle className="text-3xl text-white hover:text-yellow-400 cursor-pointer" />
                </div>
            </div>
        </div>
    )
}

export default Navbar
