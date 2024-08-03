import React from 'react'
import Header from '../components/Layout/Header/Header'
import Sliders from '../components/Slider/Sliders'
import Categories from '../components/Categories/Categories'
import Products from '../components/Products/Products'
import Campaigns from '../components/Campaigns/Campaigns'
import Blog from '../components/Blogs/Blog'
import Brands from '../components/Brands/Brands'
import CampaignSingle from '../components/CampaignSingle/CampaignSingle'
import Policy from '../components/Layout/Policy/Policy'
import Footer from '../components/Layout/Footer/Footer'

const HomePage = () => {
   return (
      <>
         <Header />
         <Sliders />
         <Categories />
         <Products />
         <Campaigns />
         <Blog />
         <Brands />
         <CampaignSingle />
         <Policy />
         <Footer />
      </>

   )
}

export default HomePage
