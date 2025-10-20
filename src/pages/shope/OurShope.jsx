import { useState } from 'react';
import shopeImage from '../../assets/shop/banner2.jpg'
import Cover from '../../components/cover/Cover'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FoodCard from '../../components/foodCard/FoodCard';
import useMenuItem from '../../hooks/useMenuItem';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const OurShope = () => {
    // All category names
    const categories = ['dessert', 'pizza', 'soup', 'salad', 'drinks']

    // Get category from the URL parameter
    const { category } = useParams()


    // Find the initial tab index based on the URL category
    const initialCategory = categories.indexOf(category)

    // State to track which tab is currently selected
    const [shopeTabs, setShopeTabs] = useState(initialCategory)

    // Get menu items from custom hook
    const [drinks, salad, dessert, pizza, soup] = useMenuItem()


    return (
        <div>

            {/* Set dynamic page title */}
            <Helmet>
                <title>Bistro Nest || Our Shope</title>
            </Helmet>

            {/* Top banner / cover section */}
            <Cover
                img={shopeImage}
                heading={"Our Shop"}
                subHeading={"Discover a wide range of products with quality you can trust. Shop your favorites today!"}
            />


            {/* Tabs for menu categories */}
            <Tabs defaultIndex={shopeTabs} onSelect={(index) => setShopeTabs(index)}>
                <TabList>
                    <Tab>DESSERT</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUP</Tab>
                    <Tab>SALAD</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>
                {/* Dessert tab items */}
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                        {
                            dessert.map(item => <FoodCard item={item} key={item._id}></FoodCard>)
                        }
                    </div>
                </TabPanel>
                {/* Pizza tab items */}
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                        {
                            pizza.map(item => <FoodCard item={item} key={item._id}></FoodCard>)
                        }
                    </div>
                </TabPanel>
                {/* Soup tab items */}
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                        {
                            soup.map(item => <FoodCard item={item} key={item._id}></FoodCard>)
                        }
                    </div>
                </TabPanel>
                {/* Salad tab items */}
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                        {
                            salad.map(item => <FoodCard item={item} key={item._id}></FoodCard>)
                        }
                    </div>
                </TabPanel>
                {/* Drinks tab items */}
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                        {
                            drinks.map(item => <FoodCard item={item} key={item._id}></FoodCard>)
                        }
                    </div>
                </TabPanel>

            </Tabs>
        </div>
    )
}

export default OurShope
