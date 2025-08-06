
import SectionTitle from '../../../components/sectionTitle/SectionTitle'
import MenuItems from '../../../components/menuItems/MenuItems'
import useMenu from '../../../hooks/useMenu'
import { Link } from 'react-router-dom'

const PopularMenu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular')
    return (
        <section className='mb-24'>
            <SectionTitle heading='from our menu' subHeading='Popular items'></SectionTitle>

            <div className='grid md:grid-cols-2 gap-8 mx-4 md:mx-0'>
                {
                    popular?.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
            <div className='flex justify-center items-center'>
                < Link to='/shope/dessert' className="border-b-2 border-black hover:bg-orange-400 hover:text-white transition-all px-6 py-2 rounded-md mt-2">
                    View More Menu
                </ Link>
            </div>
        </section>
    )
}

export default PopularMenu
