import React, { useEffect, useState } from 'react'
import "./Reviews.css"
import ReviewsItem from './ReviewsItem'
import ReviewsForm from './ReviewsForm'
const Reviews = ({ active, singleProduct ,setSingleProduct}) => {
   const [users, setUsers] = useState([]);
   const apiUrl = import.meta.env.VITE_API_BASE_URL;
   const thisReview = [];
 
   useEffect(() => {
     const fetchUsers = async () => {
       try {
         const response = await fetch(`${apiUrl}/api/users`);
 
         if (response.ok) {
           const data = await response.json();
           setUsers(data);
         } else {
           message.error("Veri getirme başarısız.");
         }
       } catch (error) {
         console.log("Veri hatası:", error);
       }
     };
     fetchUsers();
   }, [apiUrl]);

   singleProduct.reviews.forEach((review) => {
      const matchingUsers = users?.filter((user) => user._id === review.user);
  
      matchingUsers.forEach((matchingUser) => {
        thisReview.push({
          review: review,
          user: matchingUser,
        });
      });
    });
 
console.log("thisReview!!!",thisReview)

   return (
      <div className={`tab-panel-reviews ${active}`}>
         {singleProduct.reviews.length > 0 ? (
            <>
               <div className="comments">
                  <ol className="comment-list">
                     {thisReview.map((item, index)  => (
                        <ReviewsItem key={index} reviewItem={item}  />
                     ))}
                  </ol>
               </div>
            </>
         ) : (
            <h3>Hiç yorum yok</h3>
         )}
         <div className='review-form-wrapper'>
            <ReviewsForm singleProduct={singleProduct} setSingleProduct={setSingleProduct}/>
         </div>
      </div>
   )
}

export default Reviews
