import { useState } from 'react';
import shopeImage from '../../assets/shop/banner2.jpg'
import Cover from '../../components/cover/Cover'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// import useMenuItem from '../../hooks/useMenuItem';


const OurShope = () => {
    const [shopeTabs, setShopeTabs] = useState(0)
    // const [offered, salad, dessert, pizza, soup] = useMenuItem()
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
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
        </div>
    )
}

export default OurShope
