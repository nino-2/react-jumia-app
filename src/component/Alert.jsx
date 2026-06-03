import React, { useEffect } from 'react'
import { useAlert } from '../../Context/AlertContext'
const Alert = () => {
  const {alert, setAlert} = useAlert();  

    useEffect(() => {
      if (alert.open) {
        const timer = setTimeout(()=> {
            setAlert({open: false, message: ''})
        }, 10000)
        return () => clearTimeout(timer)
      }
    
     
    }, [alert, setAlert])
    
  return (
    <>
        {
            alert.open && (
                <div className='alert'>
                    <p className='crt-show-msg'>{alert.message}</p>
                    <button className='crt-exit' onClick={()=>setAlert({open: false, message: ''})}>X</button>
                </div>
            ) 
        }
    </>
  )
}

export default Alert