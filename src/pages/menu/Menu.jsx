import React from 'react'
import { Helmet } from 'react-helmet-async'
import Cover from '../../components/cover/Cover'
import CoverImg from '../../assets/menu/banner3.jpg'

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Nest || Menu</title>
            </Helmet>

            <Cover img={CoverImg}></Cover>

        </div>
    )
}

export default Menu
