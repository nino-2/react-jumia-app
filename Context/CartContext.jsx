/* eslint-disable react/prop-types, react-refresh/only-export-components, react-hooks/exhaustive-deps */
import { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";
import { useAlert } from "./AlertContext";
const CartContext = createContext()

export const useCart = () => useContext(CartContext)


export const CartProvider = ({children}) => {
  const API_URL = import.meta.env.VITE_API_URL;
  const {setAlert} = useAlert();
    const [cartcount, setCartcount] = useState(0)
    const [loadingItemId, setLoadingItemId] = useState(null)
    const [cartItems, setCartItems] = useState([])
    const [token, setToken] = useState(localStorage.getItem('token'))

    
    
     const fetchCart = async() => {
      try {
        
        const res = await axios.get(`${API_URL}/cart/`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setCartItems(res.data.cart || []);
        setCartcount(res.data.cart?.length || 0); 
      } catch (error) {
        console.log(error)
      }
    } 
    useEffect(() => {
      if (token) fetchCart();
    }, [token]);
        
    useEffect(() => {
      const handle = () => {
        const newToken = localStorage.getItem('token');
        setToken(newToken);
        if (newToken) fetchCart();
       
      }
       window.addEventListener("cart-login", handle)
       return () => window.removeEventListener("cart-login", handle)
    }, [])


      const addToCart = async (product) => {
       setLoadingItemId(product._id)
       try {
         await axios.post(`${API_URL}/cart`, { productId: product._id, quantity: 1 },
        {
          headers: {Authorization: `Bearer ${token}`}
          
       })
        await fetchCart()
        setAlert({open: true, message: 'Item has been added to cart'})
       } finally {
          setLoadingItemId(null) 
      };
     }
     
      
       const updateCartItem =  async(itemId, newQty) => {
        if (newQty < 1) return;
        setLoadingItemId(itemId)
        
        try {
         await axios.put(`${API_URL}/cart/${itemId}`, {quantity: newQty}, {
            headers:{
              Authorization: `Bearer ${token}`
            }
          })
          await fetchCart();
          setAlert({ open: true, message: 'Item quantity has been updated' });
        } catch (error) {
          console.log(error)
        } finally {
          setLoadingItemId(null)
        }
        
     } 

     const removeCartItem = async(itemId) => {
      try {
        await axios.delete(`${API_URL}/cart/${itemId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        fetchCart()
      } catch (error) {
        console.log(error)
      }
     }

     const clearCart = () => {
      setCartItems([]);
      setCartcount(0);
     }
     



    return (
        <CartContext.Provider value={{cartItems, addToCart, cartcount, setCartcount, updateCartItem,removeCartItem, clearCart, fetchCart, loadingItemId }}>
            {children}
        </CartContext.Provider>
    )
}
