import React from 'react'
import Banner from './Banner/Banner'
import Category from './category/Category'
import BistroNest from './BistroNest/BistroNest'
import PopularMenu from './popularMenu/PopularMenu'
import CallUs from './callus/CallUs'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <BistroNest></BistroNest>
      <PopularMenu></PopularMenu>
      <CallUs></CallUs>
    </div>
  )
}

export default Home;
