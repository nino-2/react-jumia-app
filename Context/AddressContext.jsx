import { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";


const AddressContext = createContext()

export const useAddress = () => useContext(AddressContext)

export const AddressProvider = ({children}) => {

     const API_URL = import.meta.env.VITE_API_URL;

    const [addresses, setAddresses] = useState([])
    const [currentAddress, setCurrentAddress] = useState(null)
    const [loading, setLoading] = useState(true)

    const token = localStorage.getItem('token')

    const getAddress = async () => {
        try {
          setLoading(true)
          const res = await axios.get(`${API_URL}/address/`, {
            headers: {
               Authorization: `Bearer ${token}`  
            }
          })
          setAddresses(res.data.addresses || [])
           
        } catch (error) {
           console.log(error) 
        } finally {
            setLoading(false)
        }
    }
   
    
   
   
    
    
    const getAddressById = async (id) => {
        try {
         setLoading(true)
         setCurrentAddress(null)
         console.log('Current Address id:', id)   
         const response = await axios.get(`${API_URL}/address/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
            }) 
            setCurrentAddress(response.data.data)
            
        } catch (error) {
           console.log(error.message)

           
        } finally {
            setLoading(false)
        }
    } 

   
   


    const updateAddress = async (id, updatedData) => {
        try {
           await axios.put(`${API_URL}/address/${id}`,updatedData, {
            headers: {
               Authorization: `Bearer ${token}`  
            }
           }) 
           await getAddress()
        } catch (error) {
            console.log(error)
        }
    }


    
  const setDefaultAddress = async (id) => {
    try {
      await axios.put(`${API_URL}/address/default/${id}`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      await getAddress();
    } catch (error) {
      console.log(error);
    }
  };

  const removeAddress = async (id) => {
    try {
      await axios.delete(`${API_URL}/address/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      await getAddress();
    } catch (error) {
      console.log(error);
    }
  };

    useEffect(() => {
      if(!token) {
        setAddresses([]);
        setCurrentAddress(null)
         return;
      }
      getAddress();
    }, [token]);   // clears on login/logout


    const clearAdd = () => setAddresses([])
    
   

    return (
        <AddressContext.Provider value={{addresses, currentAddress, getAddress, setDefaultAddress, loading, getAddressById, updateAddress,removeAddress,  clearAdd }}>
            {children}
        </AddressContext.Provider>
    )
    
}