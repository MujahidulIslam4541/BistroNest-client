
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='w-11/12 md:w-5/12 lg:w-5/12 mx-auto text-center my-6 md:my-6'>
            {/* SubHeading with decorative elements */}
            <div className='flex items-center justify-center gap-3 mb-4'>
                <div className='w-8 h-[2px] bg-gradient-to-r from-transparent to-[#DB9F12]'></div>
                <p className='text-[#DB9F12] italic font-medium text-base md:text-lg tracking-wide'>
                    {subHeading}
                </p>
                <div className='w-8 h-[2px] bg-gradient-to-l from-transparent to-[#DB9F12]'></div>
            </div>

            {/* Main Heading with enhanced border */}
            <div className='relative'>
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wide text-gray-800 py-4 px-4 relative z-10'>
                    {heading}
                </h2>
                
                {/* Top border with decorative corners */}
                <div className='absolute top-0 left-0 right-0 h-[3px] bg-[#E8E8E8]'>
                    <div className='absolute left-0 top-0 w-12 h-[3px] bg-[#DB9F12]'></div>
                    <div className='absolute right-0 top-0 w-12 h-[3px] bg-[#DB9F12]'></div>
                </div>
                
                {/* Bottom border with decorative corners */}
                <div className='absolute bottom-0 left-0 right-0 h-[3px] bg-[#E8E8E8]'>
                    <div className='absolute left-0 bottom-0 w-12 h-[3px] bg-[#DB9F12]'></div>
                    <div className='absolute right-0 bottom-0 w-12 h-[3px] bg-[#DB9F12]'></div>
                </div>
            </div>

            {/* Optional decorative dot */}
            <div className='flex justify-center mt-4'>
                <div className='w-2 h-2 rounded-full bg-[#DB9F12] shadow-lg'></div>
            </div>
        </div>
    )
}

export default SectionTitle