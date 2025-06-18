import React from 'react'
import img1 from '../../../assets/home/chef-service.jpg'
const BistroNest = () => {
    return (
        <div className="relative w-full max-w-screen-xl mx-auto">
            {/* Banner Image */}
            <img
                src={img1}
                alt="BistroNest Banner"
                className="w-full h-[250px] sm:h-[350px] md:h-[350px] lg:h-[450px] xl:h-[400px] object-cover rounded-md"
            />

            {/* White Box Over Image */}
            <div className="absolute bottom-6 lg:bottom-20 left-1/2 transform -translate-x-1/2 
                  bg-white w-[90%] sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-3/4
                  px-4 py-6 sm:px-8 sm:py-16 md:px-12 md:py-20
                  text-center rounded-lg shadow-lg">
                <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-800">BistroNest</h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-2">
                    Welcome to BistroNest — your cozy destination for gourmet dining. Discover handcrafted meals and timeless flavors made fresh with love and care.
                </p>
            </div>
        </div>


    )
}

export default BistroNest
