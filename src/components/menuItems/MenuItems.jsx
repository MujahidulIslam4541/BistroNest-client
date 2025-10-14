
// MenuItems Component - Enhanced Design with Original Functionality
const MenuItems = ({ item }) => {
    const { name, image, recipe, price } = item || [];
    return (
        <div className='group relative flex gap-4 sm:gap-5 p-4 rounded-xl bg-white hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 transition-all duration-300 shadow-sm hover:shadow-lg border border-gray-100'>
            {/* Image with enhanced styling */}
            <div className='relative flex-shrink-0'>
                <img 
                    style={{ borderRadius: '0px 200px 200px 200px' }} 
                    className='w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] object-cover border-2 border-gray-200 group-hover:border-orange-300 transition-all duration-300 shadow-md' 
                    src={image} 
                    alt={name} 
                />
                {/* Decorative element */}
                <div className='absolute -top-2 -right-2 w-6 h-6 bg-[#BB8506] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </div>

            {/* Content */}
            <div className='flex-grow flex flex-col justify-center min-w-0'>
                <h2 className='uppercase font-semibold text-gray-800 text-base sm:text-lg mb-2 flex items-center gap-2 group-hover:text-[#BB8506] transition-colors duration-300'>
                    {name}
                    <span className='flex-grow border-b-2 border-dotted border-gray-300 min-w-[20px]'></span>
                </h2>
                <p className='text-gray-600 text-sm sm:text-base line-clamp-2'>{recipe}</p>
            </div>

            {/* Price with enhanced styling */}
            <div className='flex-shrink-0 flex items-start pt-1'>
                <p className='text-[#BB8506] font-bold text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300'>
                    ${price}
                </p>
            </div>
        </div>
    )
}

export default MenuItems