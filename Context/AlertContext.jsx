import { useState, createContext, useContext } from "react";
const AlertContext = createContext()

export const useAlert =  () => useContext(AlertContext)

export const AlertProvider = ({children}) => {
    const [alert, setAlert] = useState({open: false, message: ''})
    return (
        <AlertContext.Provider value={{alert, setAlert}}>
            {children}
        </AlertContext.Provider>
    )
}
 
