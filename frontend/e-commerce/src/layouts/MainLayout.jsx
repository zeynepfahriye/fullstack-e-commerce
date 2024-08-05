import React, { useState } from 'react'
import Header from '../components/Layout/Header/Header'
import Footer from '../components/Layout/Footer/Footer'
import PropTypes from "prop-types"
import Search from '../components/Modals/Searh/Search'
const MainLayout = ({ children }) => {
   const [isSearchShow, setIsSearchShow] = useState(false)
   return (
      <>
         <Search isSearchShow={isSearchShow} setIsSearchShow={setIsSearchShow}/>
         <Header setIsSearchShow = {setIsSearchShow} />
         {children}
         <Footer />
      </>
   )
}
export default MainLayout

MainLayout.propTypes = {
   children: PropTypes.node
}
