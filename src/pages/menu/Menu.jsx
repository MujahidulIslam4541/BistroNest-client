import { Helmet } from 'react-helmet-async'
import Cover from '../../components/cover/Cover'
import CoverImg from '../../assets/menu/banner3.jpg'
import dessertImage from '../../assets/menu/dessert-bg.jpeg'
import pizzaImage from '../../assets/menu/pizza-bg.jpg'
import saladImage from '../../assets/menu/salad-bg.jpg'
import soupImage from '../../assets/menu/soup-bg.jpg'
import drinksImage from '../../assets/menu/drinks.jpeg'
import SectionTitle from '../../components/sectionTitle/SectionTitle'
import MenuCategory from './menuCategory/MenuCategory'
import useMenuItem from '../../hooks/useMenuItem'

const Menu = () => {
    const [offered, salad, dessert, pizza, soup, drinks] = useMenuItem()
    return (
        <div>
            <Helmet>
                <title>Bistro Nest || Menu</title>
            </Helmet>


            {/* main cover */}
            <Cover img={CoverImg} heading={'our menu'} subHeading={'Would you like to try a dish?'}></Cover>


            {/* offered menu items */}
            <SectionTitle subHeading={"Don't miss "} heading={"today 's Offer"}></SectionTitle>
            <MenuCategory items={offered} title={"offered"}></MenuCategory>


            {/* dessert menu items */}
            <Cover img={dessertImage} heading={'dessert'} subHeading={'Would you like to try a dish?'}></Cover>
            <MenuCategory items={dessert} title={"dessert"}></MenuCategory>


            {/* pizza menu items */}
            <Cover img={pizzaImage} heading={'pizza'} subHeading={'Would you like to try a dish?'}></Cover>
            <MenuCategory items={pizza} title={"pizza"}></MenuCategory>


            {/* salad menu items */}
            <Cover img={saladImage} heading={'salad'} subHeading={'Would you like to try a dish?'}></Cover>
            <MenuCategory items={salad} title={"salad"}></MenuCategory>



            {/* soup menu items */}
            <Cover img={soupImage} heading={'soup'} subHeading={'Would you like to try a dish?'}></Cover>
            <MenuCategory items={soup} title={"soup"}></MenuCategory>


            {/* drinks menu items */}
            <Cover img={drinksImage} heading={'drinks'} subHeading={'Would you like to try a dish?'}></Cover>
            <MenuCategory items={drinks} title={"drinks"}></MenuCategory>


        </div>
    )
}

export default Menu
