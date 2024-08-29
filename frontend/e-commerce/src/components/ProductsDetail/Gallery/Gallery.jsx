import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "./Gallery.css"
import { NextBtn, PrevButton } from '../../Slider/SliderControlsSlick';

const Gallery = ({ singleProduct }) => {
   const [activeImg, setActiveImg] = useState({
      img: "",
      imgIndex: 0
   })
   useEffect(() => {
      setActiveImg({ img: singleProduct.img[0], imgIndex: 0 });
    }, [singleProduct.img]);

   const sliderSettings = {
      dots: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      nextArrow: <NextBtn />,
      prevArrow: <PrevButton />,
   }
   return (
      <div className="product-gallery">
         <div className="single-image-wrapper">
            <img src={`${activeImg.img}`} id="single-image" alt="" />
         </div>
         <div className="product-thumb">
            <div className="glide__track" data-glide-el="track">
               <ol className="gallery-thumbs glide__slides">
                  <Slider {...sliderSettings}>
                     {singleProduct.img.map((itemImg, index) => (
                        <li
                           className="glide__slide glide__slide--active"
                           key={index}
                           onClick={() =>
                              setActiveImg({
                                 img: itemImg,
                                 imgIndex: index,
                              })
                           }
                        >
                           <img
                              src={`${itemImg}`}
                              alt=""
                              className={`img-fluid ${itemImg === activeImg ? "active" : ""
                                 } `}
                           />
                        </li>
                     ))}
                  </Slider>
               </ol>
            </div>
         </div>
      </div>
   )
}

export default Gallery
