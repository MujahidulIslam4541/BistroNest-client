import React from 'react'

const MenuItems = ({ item }) => {
    const { name, image, recipe, price } = item;
    return (
        <div className='flex gap-4'>
            <img style={{ borderRadius: '0px 200px 200px 200px' }} className='w-[100px] border-4xl border-t-r-0 ' src={image} alt="" />
            <div>
                <h2 className='uppercase'>{name}---------</h2>
                <p>{recipe}</p>
            </div>
            <div>
                <p className='text-[#BB8506]'>${price}</p>
            </div>
        </div>
    )
}

export default MenuItems
