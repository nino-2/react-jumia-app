import { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";


const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({children}) => {

    const API_URL = import.meta.env.VITE_API_URL;

    const [firstname, setFirstname] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const token = localStorage.getItem('token')

    useEffect(() => {
      
      if (!token) {
        setLoading(false)
        return;
      }

      axios.get(`${API_URL}/user/profile`, {
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        if (res.data.status) {
          setUser(res.data.user)
           setIsLoggedIn(true)
           setFirstname(res.data.user.firstname) 
        } else {
          setUser(null)
        setIsLoggedIn(false);
        setFirstname('');

      }
      })
      .catch(()=>{
        
        setIsLoggedIn(false)
      })
      .finally(()=>{
        setLoading(false)
      })
    }, [])


    const handleLogout = () => {
     try {
      
        if (token) {
          axios.post(`${API_URL}/user/logout`, {}, {
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
        }
     } catch (error) {
      console.log(error)
     }

      
      localStorage.removeItem('token');
      setUser(null);
      setIsLoggedIn(false);
      setFirstname('');
    }


    return (
        <AuthContext.Provider value={{firstname, isLoggedIn, loading, setIsLoggedIn, setFirstname, user, handleLogout }}>
            {children}
        </AuthContext.Provider>
    )
    
}
