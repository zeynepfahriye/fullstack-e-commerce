import React from 'react'
import "./ProductsDetail.css"
import Breadcrumb from './Breadcrumb/Breadcrumb'
import Gallery from './Gallery/Gallery'
import Info from './Info/Info'
import Tabs from './Tabs/Tabs'
const ProductsDetail = () => {
   return (
      <section className="single-product">
         <div className="container">
            <div className="single-product-wrapper">
               <Breadcrumb />
               <div className="single-content">
                  <main className="site-main">
                     <Gallery />
                     <Info />
                  </main>
               </div>
               <Tabs />
            </div>
         </div>
      </section>
   )
}

export default ProductsDetail
