import React from 'react'
import useMenu from './useMenu'

const useMenuItem = () => {
    const [menu] = useMenu()
    const offered = menu.filter(item => item.category === 'offered')
    const salad = menu.filter(item => item.category === 'salad')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    return [offered, salad, dessert, pizza, soup]
}

export default useMenuItem
