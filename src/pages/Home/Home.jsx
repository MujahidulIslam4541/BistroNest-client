import React from 'react'
import Banner from './Banner/Banner'
import Category from './category/Category'
import BistroNest from './BistroNest/BistroNest'
import PopularMenu from './popularMenu/PopularMenu'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <BistroNest></BistroNest>
      <PopularMenu></PopularMenu>
    </div>
  )
}

export default Home;
