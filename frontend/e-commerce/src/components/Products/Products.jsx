import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import ProductItem from './ProductItem'
import { NextBtn, PrevButton } from '../Slider/SliderControlsSlick';
import "./Products.css"

function Products() {
   const [products, setProducts] = useState([])

   const apiUrl = import.meta.env.VITE_API_BASE_URL;

   useEffect(() => {
      const fetchProducts = async () => {
         try {
            const response = await fetch(`${apiUrl}/api/products`);

            if (response.ok) {
               const data = await response.json();
               setProducts(data);
            } else {
               message.error("Veri getirme başarısız.");
            }
         } catch (error) {
            console.log("Veri hatası:", error);
         }
      };
      fetchProducts();
   }, [apiUrl]);

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
                        <ProductItem product={product} key={product._id} />
                     ))}
                  </Slider>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Products