import React, { useState } from 'react'
import "./Info.css"
const Info = ({ singleProduct }) => {
   console.log("single->", singleProduct)
   const [activeSize, setActiveSize] = useState(null);

   const handleSizeClick = (size) => {
      setActiveSize(size);
   };
   const originalPrice = singleProduct.price.current
   const discountPercentage = singleProduct.price.discount 
   const discountedPrice = originalPrice - (originalPrice * discountPercentage) / 100;

   return (
      <div className="product-info">
         <h1 className="product-title">
            {singleProduct.name}
         </h1>
         <div className="product-review">
            <ul className="product-star">
               <li><i className="bi bi-star-fill"></i></li>
               <li><i className="bi bi-star-fill"></i></li>
               <li><i className="bi bi-star-fill"></i></li>
               <li><i className="bi bi-star-fill"></i></li>
               <li><i className="bi bi-star-half"></i></li>
            </ul>
            <span>{singleProduct.reviews.length} reviews</span>
         </div>
         <div className="product-price">
            <s className="old-price">{originalPrice} $</s>
            <strong className="new-price">{discountedPrice} $</strong>
         </div>
         <p className="product-description" dangerouslySetInnerHTML={{ __html: singleProduct.description }} />
         <form className="variations-form">
            <div className="variations">
               <div className="colors">
                  <div className="colors-label">
                     <span>Color</span>
                  </div>
                  <div className="colors-wrapper">
                     <div className="color-wrapper">
                        <label className="blue-color">
                           <input type="radio" name="product-color" />
                        </label>
                     </div>
                     <div className="color-wrapper">
                        <label className="red-color">
                           <input type="radio" name="product-color" />
                        </label>
                     </div>
                     <div className="color-wrapper active">
                        <label className="green-color">
                           <input type="radio" name="product-color" />
                        </label>
                     </div>
                     <div className="color-wrapper">
                        <label className="purple-color">
                           <input type="radio" name="product-color" />
                        </label>
                     </div>
                  </div>
               </div>
               <div className="values">
                  <div className="values-label">
                     <span>Size</span>
                  </div>
                  <div className="values-list">
                     {singleProduct.sizes.map((size) => (
                        <span
                           key={size}
                           className={activeSize === size ? 'active' : ''}
                           onClick={() => handleSizeClick(size)}
                        >
                           {size}
                        </span>
                     ))}
                  </div>
               </div>
               <div className="cart-button">
                  <input type="number" defaultValue="1" min="1" id="quantity" />
                  <button className="btn btn-lg btn-primary" id="add-to-cart" type="button">Add to
                     cart</button>
               </div>
               <div className="product-extra-buttons">
                  <a href="#">
                     <i className="bi bi-globe"></i>
                     <span>Size Guide</span>
                  </a>
                  <a href="#">
                     <i className="bi bi-heart"></i>
                     <span>Add to Wislist</span>
                  </a>
                  <a href="#">
                     <i className="bi bi-share"></i>
                     <span>Share this Product</span>
                  </a>
               </div>
            </div>
         </form>
         <div className="divider"></div>
         <div className="product-meta">
            <div className="product-sku">
               <span>SKU:</span>
               <strong>BE45VGRT</strong>
            </div>
            <div className="product-categories">
               <span>Categories:</span>
               <strong>Pants , Women</strong>
            </div>
            <div className="product-tags">
               <span>Tags:</span>
               <a href="#">black</a>
               ,
               <a href="#">white</a>
            </div>
         </div>
      </div>
   )
}

export default Info
