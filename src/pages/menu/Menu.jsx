import { Helmet } from 'react-helmet-async'
import Cover from '../../components/cover/Cover'
import CoverImg from '../../assets/menu/banner3.jpg'
import dessertImage from '../../assets/menu/dessert-bg.jpeg'
import pizzaImage from '../../assets/menu/pizza-bg.jpg'
import saladImage from '../../assets/menu/salad-bg.jpg'
import useMenu from '../../hooks/useMenu'
import SectionTitle from '../../components/sectionTitle/SectionTitle'
import MenuCategory from './menuCategory/MenuCategory'

const Menu = () => {
    const [menu] = useMenu()
    const offered = menu.filter(item => item.category === 'offered')
    const salad = menu.filter(item => item.category === 'salad')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    return (
        <div>
            <Helmet>
                <title>Bistro Nest || Menu</title>
            </Helmet>
            {/* main cover */}
            <Cover img={CoverImg} heading={'our menu'} subHeading={'Would you like to try a dish?'}></Cover>

            {/* offered menu items */}
            <SectionTitle subHeading={"Don't miss "} heading={"today 's Offer"}></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>

            {/* dessert menu items */}
            <Cover img={dessertImage} heading={'dessert'} subHeading={'Would you like to try a dish?'}></Cover>
            <MenuCategory items={dessert}></MenuCategory>

            {/* pizza menu items */}
            <Cover img={pizzaImage} heading={'pizza'} subHeading={'Would you like to try a dish?'}></Cover>
            <MenuCategory items={pizza}></MenuCategory>

            {/* salad menu items */}
            <Cover img={saladImage} heading={'salad'} subHeading={'Would you like to try a dish?'}></Cover>
            <MenuCategory items={salad}></MenuCategory>


        </div>
    )
}

export default Menu
