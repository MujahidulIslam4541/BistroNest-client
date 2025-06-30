import { useState } from 'react';
import shopeImage from '../../assets/shop/banner2.jpg'
import Cover from '../../components/cover/Cover'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FoodCard from '../../components/foodCard/FoodCard';
import useMenuItem from '../../hooks/useMenuItem';


const OurShope = () => {
    const [shopeTabs, setShopeTabs] = useState(0)
    const [drinks, salad, dessert, pizza, soup] = useMenuItem()
    return (
        <div>
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
                            dessert.map(item => <FoodCard item={item} key={item.id}></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                        {
                            pizza.map(item => <FoodCard item={item} key={item.id}></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                        {
                            soup.map(item => <FoodCard item={item} key={item.id}></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                        {
                            salad.map(item => <FoodCard item={item} key={item.id}></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                        {
                            drinks.map(item => <FoodCard item={item} key={item.id}></FoodCard>)
                        }
                    </div>
                </TabPanel>

            </Tabs>
        </div>
    )
}

export default OurShope
