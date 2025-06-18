import React, { useEffect, useState } from 'react'
import SectionTitle from '../../../components/sectionTitle/SectionTitle'
import MenuItems from '../../../components/menuItems/MenuItems'

const PopularMenu = () => {
    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                setMenu(popularItems)
            })
    }, [])

    console.log(menu)
    return (
        <section>
            <SectionTitle heading='from our menu' subHeading='Popular items'></SectionTitle>

            <div className='grid md:grid-cols-2 gap-8 mx-4 md:mx-0'>
                {
                    menu.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
        </section>
    )
}

export default PopularMenu
