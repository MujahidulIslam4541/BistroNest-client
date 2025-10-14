// import React from 'react'

// const CallUs = () => {
//   return (
//     <div className='py-16 bg-black flex justify-center items-center text-white'>
//       <p className='text-3xl font-semibold'>Call Us :+880 1853744541</p>
//     </div>
//   )
// }

// export default CallUs


import React from 'react'

const CallUs = () => {
  return (
    <div className='relative py-16 md:py-20 bg-gradient-to-r from-black via-gray-900 to-black overflow-hidden'>
      {/* Decorative background elements */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500 rounded-full blur-3xl'></div>
        <div className='absolute bottom-1/4 right-1/4 w-64 h-64 bg-amber-500 rounded-full blur-3xl'></div>
      </div>

      {/* Content */}
      <div className='relative max-w-4xl mx-auto px-4 flex flex-col items-center text-center space-y-6'>
        {/* Icon with animation */}
        <div className='relative'>
          <div className='absolute inset-0 bg-orange-500 rounded-full blur-xl opacity-50 animate-pulse'></div>
          <div className='relative bg-gradient-to-br from-orange-400 to-amber-500 p-5 rounded-full shadow-2xl'>
            <svg className='w-10 h-10 md:w-12 md:h-12 text-white' fill='currentColor' viewBox='0 0 20 20'>
              <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h2 className='text-xl md:text-2xl font-semibold text-gray-300 uppercase tracking-wider'>
          Need Assistance?
        </h2>

        {/* Phone number with enhanced styling */}
        <div className='group'>
          <a
            href='tel:+8801853744541'
            className='inline-flex items-center gap-3 text-2xl md:text-4xl font-bold text-white hover:text-orange-400 transition-all duration-300 transform hover:scale-105'
          >
            <span className='bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-orange-400 group-hover:to-amber-400 transition-all duration-300'>
              Call Us: +880 1853744541
            </span>
            <svg className='w-6 h-6 md:w-8 md:h-8 text-orange-400 transform group-hover:rotate-12 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
            </svg>
          </a>
        </div>

        {/* Subtitle */}
        <p className='text-gray-400 text-sm md:text-base max-w-md'>
          Available 24/7 for reservations and inquiries
        </p>

        {/* Decorative divider */}
        <div className='flex items-center gap-3 pt-2'>
          <div className='w-12 h-[2px] bg-gradient-to-r from-transparent to-orange-400'></div>
          <div className='w-2 h-2 bg-orange-400 rounded-full'></div>
          <div className='w-12 h-[2px] bg-gradient-to-l from-transparent to-orange-400'></div>
        </div>
      </div>
    </div>
  )
}

export default CallUs



// import { FaPhoneAlt } from 'react-icons/fa'

// const CallUs = () => {
//   return (
//     <div className='relative py-12 md:py-16 bg-black overflow-hidden'>
//       {/* Subtle background decoration */}
//       <div className='absolute inset-0 opacity-5'>
//         <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500 rounded-full blur-3xl'></div>
//       </div>

//       {/* Content */}
//       <div className='relative max-w-5xl mx-auto px-4'>
//         {/* Heading */}
//         <h2 className='text-center text-lg md:text-xl font-semibold text-gray-400 uppercase tracking-wider mb-6'>
//           Need Assistance?
//         </h2>

//         {/* Phone Section */}
//         <div className='flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6'>
//           {/* Phone Icon */}
//           <div className='bg-white p-4 rounded-full shadow-lg'>
//             <FaPhoneAlt className='text-2xl md:text-3xl text-black' />
//           </div>

//           {/* Phone Number */}
//           <a
//             href='tel:+8801853744541'
//             className='text-2xl md:text-4xl font-semibold text-white hover:text-orange-400 transition-colors duration-300'
//           >
//             Call Us: +880 1853744541
//           </a>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CallUs