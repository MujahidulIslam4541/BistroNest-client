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
        <section className='mb-24'>
            <SectionTitle heading='from our menu' subHeading='Popular items'></SectionTitle>

            <div className='grid md:grid-cols-2 gap-8 mx-4 md:mx-0'>
                {
                    menu.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
            <div className='flex justify-center items-center'>
                <button className="border-b-2 border-black hover:bg-orange-400 hover:text-white transition-all px-6 py-2 rounded-md mt-2">
                    View More Menu
                </button>
            </div>
        </section>
    )
}

export default PopularMenu
