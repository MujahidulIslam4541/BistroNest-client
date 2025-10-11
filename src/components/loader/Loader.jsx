import React from 'react'

const Loader = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen bg-gradient-to-br from-gray-50 to-gray-100'>
            {/* Animated Logo/Icon Container */}
            <div className="relative">
                {/* Outer rotating ring */}
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-yellow-400 border-r-yellow-500 w-24 h-24 animate-spin"></div>
                
                {/* Middle rotating ring (opposite direction) */}
                <div className="absolute inset-2 rounded-full border-4 border-transparent border-b-yellow-300 border-l-yellow-600 w-20 h-20 animate-spin-slow"></div>
                
                {/* Center circle with pulse */}
                <div className="relative flex items-center justify-center w-24 h-24">
                    <div className="absolute w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full animate-pulse shadow-lg"></div>
                    
                    {/* Restaurant Icon */}
                    <svg 
                        className="w-8 h-8 text-white relative z-10" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                    >
                        <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z" />
                    </svg>
                </div>
            </div>
            
            {/* Loading Text */}
            <div className="mt-8 text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-2 animate-pulse">
                    BISTRO NEST
                </h2>
                <div className="flex items-center gap-2 justify-center">
                    <p className="text-gray-600 font-medium">Loading</p>
                    <div className="flex gap-1">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                        <span className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                        <span className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                </div>
            </div>

            {/* Custom CSS for slower spin animation */}
            <style jsx>{`
                @keyframes spin-slow {
                    from {
                        transform: rotate(360deg);
                    }
                    to {
                        transform: rotate(0deg);
                    }
                }
                .animate-spin-slow {
                    animation: spin-slow 2s linear infinite;
                }
            `}</style>
        </div>
    )
}

export default Loader