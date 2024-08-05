import React, { useState,useEffect } from 'react'
import Header from '../components/Layout/Header/Header'
import Footer from '../components/Layout/Footer/Footer'
import PropTypes from "prop-types"
import Search from '../components/Modals/Search/Search'
import Dialog from '../components/Modals/Dialog/Dialog'
const MainLayout = ({ children }) => {
   const [isSearchShow, setIsSearchShow] = useState(false)
   const [isDialogShow, setIsDialogShow] = useState(false)

   useEffect(() => {
      const dialogStatus = localStorage.getItem("dialog")
         ? JSON.parse(localStorage.getItem("dialog"))
         : localStorage.setItem("dialog", JSON.stringify(true))

      setTimeout(() => {
         setIsDialogShow(dialogStatus)
      }, 3000);
   }, [])

   return (
      <>
         <Search isSearchShow={isSearchShow} setIsSearchShow={setIsSearchShow} />
         <Dialog isDialogShow={isDialogShow} setIsDialogShow={setIsDialogShow} />
         <Header setIsSearchShow={setIsSearchShow} />
         {children}
         <Footer />
      </>
   )
}
export default MainLayout

MainLayout.propTypes = {
   children: PropTypes.node
}
