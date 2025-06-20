import React from 'react'
import { Helmet } from 'react-helmet-async'
import Cover from '../../components/cover/Cover'
import CoverImg from '../../assets/menu/banner3.jpg'
import MenuItems from '../../components/menuItems/MenuItems'
import PopularMenu from '../Home/popularMenu/PopularMenu'

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Nest || Menu</title>
            </Helmet>

            <Cover img={CoverImg} heading={'our menu'} subHeading={'Would you like to try a dish?'}></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={CoverImg} heading={'our menu'} subHeading={'Would you like to try a dish?'}></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={CoverImg} heading={'our menu'} subHeading={'Would you like to try a dish?'}></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={CoverImg} heading={'our menu'} subHeading={'Would you like to try a dish?'}></Cover>
            <PopularMenu></PopularMenu>
        </div>
    )
}

export default Menu
