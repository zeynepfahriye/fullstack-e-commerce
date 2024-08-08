import React, { useContext, useState } from 'react'
import { CardContext } from '../../context/CardProvider'

const CartTotals = () => {
   const { cartItems } = useContext(CardContext)
   const [fastCargo, setFestCargo] = useState(false)
   const cartItemTotals = cartItems.map((item) => {
      const itemTotal = item.price.newPrice * item.quantity
      return itemTotal
   })

   const subTotal = cartItemTotals.reduce((previousValue, currentValue) => {
      return previousValue + currentValue
   }, 0)
   const cargoFee = 15;
   const cartTotals = fastCargo ? cargoFee + subTotal : subTotal

   return (
      <div className="cart-totals">
         <h2>Cart totals
         </h2>
         <table>
            <tbody>
               <tr className="cart-subtotal">
                  <th>Subtotal</th>
                  <td>
                     <span id="subtotal">{subTotal}</span>
                  </td>
               </tr>
               <tr>
                  <th>Shipping</th>
                  <td>
                     <ul>
                        <li>
                           <label>
                              Fast Cargo: $15.00
                              <input type="checkbox" id="fast-cargo" checked={fastCargo} onChange={() => setFestCargo(!fastCargo)} />
                           </label>
                        </li>
                        <li>
                           <a href="#">Change Address</a>
                        </li>
                     </ul>
                  </td>
               </tr>
               <tr>
                  <th>Total</th>
                  <td>
                     <strong id="cart-total">{cartTotals}</strong>
                  </td>
               </tr>
            </tbody>
         </table>
         <div className="checkout">
            <button className="btn btn-lg">Proceed to checkout</button>
         </div>
      </div>
   )
}

export default CartTotals
