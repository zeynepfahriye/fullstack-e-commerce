import { createContext, useState, useEffect } from "react";

export const CardContext = createContext();

const CardProvider = ({ children }) => {
   const [cartItems, setCartItems] = useState(
      localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem("cartItems"))
         : []
   )

   useEffect(() => {
      localStorage.setItem('cartItems', JSON.stringify(cartItems))
   }, [cartItems])

   const addToCart = (cartItem) => {
      setCartItems((prevCart) => [...prevCart,
      {
         ...cartItem,
         quantity: cartItem.quantity ? cartItem.quantity : 1
      }]);
   };

   const removeFromCart = (itemId) => {
      const filteredCartItems = cartItems.filter((cartItem) => {
         return cartItem._id !== itemId;
      });

      setCartItems(filteredCartItems);
   };
   console.log("card", cartItems)
   return (
      <CardContext.Provider
         value={{
            addToCart,
            cartItems,
            removeFromCart,
            setCartItems
         }}
      >
         {children}
      </CardContext.Provider>
   )
}

export default CardProvider
