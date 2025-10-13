
// import SectionTitle from '../../../components/sectionTitle/SectionTitle'
// import MenuItems from '../../../components/menuItems/MenuItems'
// import useMenu from '../../../hooks/useMenu'
// import { Link } from 'react-router-dom'

// const PopularMenu = () => {
//     const [menu] = useMenu()
//     const popular = menu.filter(item => item.category === 'popular')
//     return (
//         <section className='mb-24'>
//             <SectionTitle heading='from our menu' subHeading='Popular items'></SectionTitle>

//             <div className='grid md:grid-cols-2 gap-8 mx-4 md:mx-0'>
//                 {
//                     popular?.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
//                 }
//             </div>
//             <div className='flex justify-center items-center'>
//                 < Link to='/shope/dessert' className="border-b-2 border-black hover:bg-orange-400 hover:text-white transition-all px-6 py-2 rounded-md mt-2">
//                     View More Menu
//                 </ Link>
//             </div>
//         </section>
//     )
// }

// export default PopularMenu


import SectionTitle from '../../../components/sectionTitle/SectionTitle'
import MenuItems from '../../../components/menuItems/MenuItems'
import useMenu from '../../../hooks/useMenu'
import { Link } from 'react-router-dom'

const PopularMenu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular')

    return (
        <section className='mb-16 sm:mb-20 md:mb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
            {/* Section Title */}
            <SectionTitle heading='from our menu' subHeading='Popular items'></SectionTitle>

            {/* Menu Grid - Improved responsive design */}
            <div className='grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-12'>
                {
                    popular?.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>

            {/* View More Button - Enhanced design */}
            <div className='flex justify-center items-center'>
                <Link
                    to='/shope/dessert'
                    className='group relative inline-flex items-center justify-center gap-2 
                             px-8 py-3 sm:px-10 sm:py-4 
                             font-semibold text-gray-800 uppercase tracking-wide text-sm sm:text-base
                             border-b-4 border-gray-800 rounded-lg
                             bg-white hover:bg-gradient-to-r hover:from-orange-300 hover:to-amber-400 
                             hover:text-white hover:border-orange-600
                             transition-all duration-300 shadow-md hover:shadow-xl
                             transform hover:-translate-y-1 active:translate-y-0'>
                    <span>View Full Menu</span>
                    <svg
                        className='w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M13 7l5 5m0 0l-5 5m5-5H6'
                        />
                    </svg>
                </Link>
            </div>
        </section>
    )
}

export default PopularMenu
