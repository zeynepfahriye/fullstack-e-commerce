import React, { useState } from 'react'
import "./Slider.css"
import SliderItems from './SliderItems'
const Sliders = () => {
   const [currentSlide, setCurrentSlide] = useState(0)

   const nexSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3)
   }
   const prevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + 3) % 3)
   }
   return (
      <section className="slider">
         <div className="slider-elements">
            {currentSlide === 0 && <SliderItems imgSrc={"img/slider/slider1.jpg"} />}
            {currentSlide === 1 && <SliderItems imgSrc={"img/slider/slider2.jpg"} />}
            {currentSlide === 2 && <SliderItems imgSrc={"img/slider/slider3.jpg"} />}
            <div className="slider-buttons">
               <button onclick="plusSlide(-1)" onClick={prevSlide}>
                  <i className="bi bi-chevron-left"></i>
               </button>
               <button onclick="plusSlide(1)" onClick={nexSlide}>
                  <i className="bi bi-chevron-right"></i>
               </button>
            </div>
            <div className="slider-dots">
               <button className={`slider-dot ${currentSlide === 0 ? "active" : ""}`}>
                  <span></span>
               </button>
               <button className={`slider-dot ${currentSlide === 1 ? "active" : ""}`}>
                  <span></span>
               </button>
               <button className={`slider-dot ${currentSlide === 2 ? "active" : ""}`}>
                  <span></span>
               </button>
            </div>
         </div>
      </section>

   )
}

export default Sliders
