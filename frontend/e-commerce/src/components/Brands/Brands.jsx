import React from 'react'
import "./Brands.css"
import BrandsItem from './BrandsItem'
function Brands() {
   return (
      <section className="brands">
         <div className="container">
            <ul className="brand-list">
             <BrandsItem />
             <BrandsItem />
             <BrandsItem />
             <BrandsItem />
             <BrandsItem />
             <BrandsItem />
            </ul>
         </div>
      </section>
   )
}

export default Brands