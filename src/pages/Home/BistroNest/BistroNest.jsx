import React from 'react'
import img1 from '../../../assets/home/chef-service.jpg'

const BistroNest = () => {
    return (
        <section className="relative w-full max-w-screen-xl mx-auto px-4 py-12 md:py-16 lg:py-20">
            {/* Banner Image Container */}
            <div className="relative w-full rounded-xl overflow-hidden shadow-2xl">
                {/* Background Image */}
                <img
                    src={img1}
                    alt="BistroNest Chef Service"
                    className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[550px] object-cover"
                />
                
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/20"></div>

                {/* Content Box Overlay */}
                <div className="absolute inset-x-0 bottom-0 flex justify-center px-4 pb-6 sm:pb-8 lg:pb-12">
                    <div className="bg-white/95 backdrop-blur-sm w-full max-w-4xl
                          px-6 py-8 sm:px-10 sm:py-12 md:px-14 md:py-16 lg:px-16 lg:py-20
                          text-center rounded-2xl shadow-2xl border border-gray-100
                          transform hover:scale-[1.02] transition-transform duration-300">
                        
                        {/* Decorative top border */}
                        <div className="w-24 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 mx-auto mb-6 rounded-full"></div>
                        
                        {/* Title */}
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 bg-clip-text text-transparent mb-4">
                            BistroNest
                        </h2>
                        
                        {/* Subtitle */}
                        <p className="text-xs sm:text-sm md:text-base text-gray-500 uppercase tracking-wider font-semibold mb-4">
                            Gourmet Dining Experience
                        </p>
                        
                        {/* Description */}
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                            Welcome to BistroNest — your cozy destination for gourmet dining. 
                            Discover handcrafted meals and timeless flavors made fresh with love and care.
                        </p>
                        
                        {/* Decorative bottom elements */}
                        <div className="flex items-center justify-center gap-2 mt-6">
                            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse delay-100"></div>
                            <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse delay-200"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Optional: Additional decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-200 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-rose-200 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
        </section>
    )
}

export default BistroNest