import React, { useState } from 'react'
import Slider from "react-slick";
import ProductItem from './ProductItem'
import ProductsData from "../../data.json"
import "./Products.css"

function NextBtn({ onClick }) {
   return (
      <button className="glide__arrow glide__arrow--right" onClick={onClick}>
         <i className="bi bi-chevron-right"></i>
      </button>
   )
}

function PrevButton({ onClick }) {
   return (
      <button className="glide__arrow glide__arrow--left" onClick={onClick} >
         <i className="bi bi-chevron-left"></i>
      </button>
   )
}
function Products() {

   const [products] = useState(ProductsData)

   const sliderSettings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <NextBtn />,
      prevArrow: <PrevButton />,
      responsive: [
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 2,
            },
         },
         {
            breakpoint: 520,
            settings: {
               slidesToShow: 1,
            },
         },
      ]
   }

   return (
      <section className="products">
         <div className="container">
            <div className="section-title">
               <h2>Featured Products</h2>
               <p>Summer Collection New Morden Design</p>
            </div>
            <div className="product-wrapper product-carousel">
               <div className="glide__track" data-glide-el="track">
                  <Slider {...sliderSettings}>
                     {products.map((product) => (
                        <ProductItem product={product} key={product.id} />
                     ))}
                  </Slider>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Products