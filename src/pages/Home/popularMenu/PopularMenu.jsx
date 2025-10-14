
import { FaArrowRight } from 'react-icons/fa'
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

            {/* Menu Grid - Enhanced responsive design with better spacing */}
            <div className='grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-12'>
                {
                    popular?.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>

            <div className='flex justify-center items-center'>
                <Link to='/shope/dessert' className="flex items-center gap-2 border-b-2 border-black hover:bg-orange-400 hover:text-white transition-all px-6 py-2 rounded-md mt-2">
                    View More Menu
                    <FaArrowRight className='group-hover:translate-x-1 transition-transform' />
                </Link>
            </div>
        </section>
    )
}

export default PopularMenu
