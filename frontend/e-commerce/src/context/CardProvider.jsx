import { createContext, useState ,useEffect} from "react";

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
