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
    const categories = ['dessert', 'pizza', 'soup', 'salad', 'drinks']
    const { category } = useParams()
    const initialCategory = categories.indexOf(category)
    const [shopeTabs, setShopeTabs] = useState(initialCategory)
    const [drinks, salad, dessert, pizza, soup] = useMenuItem()

    console.log(category)
    return (
        <div>

            <Helmet>
                <title>Bistro Nest || Our Shope</title>
            </Helmet>



            <Cover img={shopeImage} heading={"Our shope"} subHeading={'loremsdgffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd'}></Cover>


            <Tabs defaultIndex={shopeTabs} onSelect={(index) => setShopeTabs(index)}>
                <TabList>
                    <Tab>DESSERT</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUP</Tab>
                    <Tab>SALAD</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                        {
                            dessert.map(item => <FoodCard item={item} key={item._id}></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                        {
                            pizza.map(item => <FoodCard item={item} key={item._id}></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                        {
                            soup.map(item => <FoodCard item={item} key={item._id}></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                        {
                            salad.map(item => <FoodCard item={item} key={item._id}></FoodCard>)
                        }
                    </div>
                </TabPanel>
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
