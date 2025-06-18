import React from 'react'
import img1 from '../../../assets/home/chef-service.jpg'
const BistroNest = () => {
    return (
        <div className="relative w-full flex justify-center">
            <img src={img1} alt="" className="w-full h-auto object-cover rounded-md" />

            <div className="absolute bottom-16  bg-white w-4/5 py-24 px-4 text-center rounded-md shadow-md">
                <h2 className="text-2xl font-bold text-gray-800">BistroNest</h2>
                <p className="text-gray-600 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque totam
                    perferendis odit unde obcaecati nostrum ipsum numquam veniam inventore placeat.
                </p>
            </div>
        </div>

    )
}

export default BistroNest
