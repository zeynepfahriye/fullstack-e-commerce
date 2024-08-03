import React from 'react'
import Sliders from '../components/Slider/Sliders'
import Categories from '../components/Categories/Categories'
import Products from '../components/Products/Products'
import Campaigns from '../components/Campaigns/Campaigns'
import Blog from '../components/Blogs/Blog'
import Brands from '../components/Brands/Brands'
import CampaignSingle from '../components/CampaignSingle/CampaignSingle'

const HomePage = () => {
   return (
      <>
         <Sliders />
         <Categories />
         <Products />
         <Campaigns />
         <Blog />
         <Brands />
         <CampaignSingle />
      </>

   )
}

export default HomePage
