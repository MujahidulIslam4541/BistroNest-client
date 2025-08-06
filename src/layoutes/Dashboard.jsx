import React from 'react'
import { FaCartPlus, FaHome } from 'react-icons/fa'
import { NavLink, Outlet } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div className='flex'>
            <div className='w-64 min-h-screen bg-orange-400'>
                <ul>
                    <li>
                        <NavLink to='/dashboard/userHome'>
                            <FaHome></FaHome> User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/myOrder'>
                            <FaHome></FaHome> My Order</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/cart'>
                            <FaCartPlus></FaCartPlus> My Cart</NavLink>
                    </li>
                </ul>
            </div>

            <div className='flex-1'>
                <Outlet></Outlet>
            </div>

        </div>
    )
}

export default Dashboard
