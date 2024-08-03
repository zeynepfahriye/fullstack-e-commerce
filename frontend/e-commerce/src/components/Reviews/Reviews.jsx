import React from 'react'
import "./Reviews.css"
import ReviewsItem from './ReviewsItem'
import ReviewsForm from './ReviewsForm'
const Reviews = () => {
   return (
      <div className="tab-panel-reviews">
         <h3>2 reviews for Basic Colored Sweatpants With Elastic Hems</h3>
         <div className="comments">
            <ol className="comment-list">
               <ReviewsItem />
               <ReviewsItem />
            </ol>
         </div>
         <ReviewsForm />
      </div>
   )
}

export default Reviews
