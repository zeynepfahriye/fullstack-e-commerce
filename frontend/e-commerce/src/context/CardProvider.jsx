import { createContext, useState } from "react";

export const CardContext = createContext();

const CardProvider = ({ children }) => {
   const [cartItems, setCartItems] = useState([])
   const addToCart = (cartItem) => {
      setCartItems((prevCart) => [...prevCart, cartItem]);
   };
   console.log("card", cartItems)
   return (
      <CardContext.Provider
         value={{
            addToCart,
            cartItems
         }}
      >
         {children}
      </CardContext.Provider>
   )
}

export default CardProvider
