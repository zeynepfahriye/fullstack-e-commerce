import React, { useContext, useState } from 'react'
import { message } from 'antd';
import { CardContext } from '../../context/CardProvider';

const CartCoupon = () => {
   const [couponCode, setCouponCode] = useState("")
   const apiUrl = import.meta.env.VITE_API_BASE_URL;
   const { cartItems,setCartItems } = useContext(CardContext)
   const applyCoupon = async () => {
      try {
         const response = await fetch(`${apiUrl}/api/coupons/code/${couponCode}`);
         console.log(response);
         if (!response.ok) {
            return message.warning("Geçerli bir kupon kodu değil")
         }
         const data = await response.json()
         const discountPercent = data.discountPercent

         const updateCartItems = cartItems.map((item) => {
            const updatePrice = item.price * (1 - discountPercent / 100)
            return { ...item, price: updatePrice }
         })
         setCartItems(updateCartItems)
         message.success(`${couponCode} kupon kodu başarıyla uygulandı`)
      } catch (error) {
         console.log(error)
      }
   }
   return (
      <div className="actions-wrapper">
         <div className="coupon">
            <input type="text" className="input-text" placeholder="Coupon code" onChange={(e) => setCouponCode(e.target.value)} value={couponCode} />
            <button className="btn" onClick={applyCoupon} type='button'>Apply Coupon</button>
         </div>
         <div className="update-cart">
            <button className="btn">Update Cart</button>
         </div>
      </div>

   )
}

export default CartCoupon
