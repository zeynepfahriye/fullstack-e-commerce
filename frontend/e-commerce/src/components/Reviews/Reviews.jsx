import React from 'react'
import "./Reviews.css"
import ReviewsItem from './ReviewsItem'
import ReviewsForm from './ReviewsForm'
const Reviews = ({ active, singleProduct }) => {
   return (
      <div className={`tab-panel-reviews ${active}`}>
         {singleProduct.reviews.length < 0 ? (
            <>
               <h3>2 reviews for Basic Colored Sweatpants With Elastic Hems</h3>
               <div className="comments">
                  <ol className="comment-list">
                     <ReviewsItem />
                     <ReviewsItem />
                  </ol>
               </div>
            </>
         ) : (
            <h3>Hiç yorum yok</h3>
         )}
         <div className='review-form-wrapper'>
            <ReviewsForm />
         </div>
      </div>
   )
}

export default Reviews
