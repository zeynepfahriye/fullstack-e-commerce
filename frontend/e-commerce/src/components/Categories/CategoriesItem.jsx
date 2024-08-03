import React from 'react'
import './CategoriesItem.css'
const CategoriesItem = () => {
   return (
      <div>
         <li className="category-item">
            <a href="#">
               <img src="img/categories/categories2.png" alt="" className="category-image" />
               <span className="category-title"> Watches </span>
            </a>
         </li>
      </div>
   )
}

export default CategoriesItem
