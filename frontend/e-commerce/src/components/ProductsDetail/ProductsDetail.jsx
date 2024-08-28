import React from 'react'
import "./ProductsDetail.css"
import Breadcrumb from './Breadcrumb/Breadcrumb'
import Gallery from './Gallery/Gallery'
import Info from './Info/Info'
import Tabs from './Tabs/Tabs'
const ProductsDetail = ({singleProduct ,setSingleProduct}) => {
   return (
      <section className="single-product">
         <div className="container">
            <div className="single-product-wrapper">
               <Breadcrumb />
               <div className="single-content">
                  <main className="site-main">
                     <Gallery singleProduct={singleProduct} />
                     <Info singleProduct={singleProduct}/>
                  </main>
               </div>
               <Tabs singleProduct={singleProduct} setSingleProduct={setSingleProduct}/>
            </div>
         </div>
      </section>
   )
}

export default ProductsDetail
