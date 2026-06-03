import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import MobileBackButton from './MobileBackButton'
import { useOutletContext } from 'react-router-dom'

const Account = () => {
  
  const [user, setUser] = useState({})
  const [defaultAddress, setDefaultAddress] = useState(null)
  const token = localStorage.getItem('token')
  let navigate = useNavigate()
  const API_URL = import.meta.env.VITE_API_URL

  const { showBackButton, onBack } = useOutletContext();

  useEffect(() => {
   axios.get(`${API_URL}/user/profile`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
   }) 
   .then(res => setUser(res.data.user))
   
   axios.get(`${API_URL}/address/default`, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => {
      if (res.data.status) setDefaultAddress(res.data.data);
    });
  }, [])
  
  
  return (
    <>
     
       <div className='int-crd php'>
          
            
          
          <div className='acc-head'>
            {showBackButton && (
              <div className="mobile-back">
                <MobileBackButton onBack={onBack} />
              </div>
            )}
            <h1 className='acc-text'>Account Overview</h1>
          </div>
          <div className='acc-body '>
            <div className='acc-cols'>
               <div className='acc-art php'>
                 <div className='acc-hdtext'>
                    <h2 className='acc-stext'>ACCOUNT DETAILS</h2>
                 </div>
                 <div className='acc-details'>
                 
                     <p className='acc-det-text'>{user.firstname} {user.lastname}</p>
                     <p className='acc-det-sbtext'>{user.email}</p>
                 </div>
               </div>
            </div>
            <div className='acc-cols'>
               <div className='acc-art'>
                 <div className='acc-hdtext'>
                    <h2 className='acc-stext'>ADDRESS BOOK</h2>
                    <Link to='/customer/address' className='acc-addbook'>
                        <img src="/editpen.png" alt="" />
                    </Link>
                 </div>
                 <div className='acc-dtl'>
                  <p className='acc-default'>Your default shipping address:</p>
                  {
                    defaultAddress ? (
                      <div className='address-det'>
                        <p>{defaultAddress.firstname} {defaultAddress.lastname}</p>
                        <p>{defaultAddress.deliveryadd}</p>
                        <p>{defaultAddress.city}, {defaultAddress.state}</p>
                        <p>{defaultAddress.phonenumber}</p>
                      </div>
                    ) : (
                      <p>No default address</p>
                    )
                  }
                  
                    
                 </div>
               </div>
            </div>
             <div className='acc-cols'>
               <div className='acc-art php'>
                 <div className='acc-hdtext'>
                    <h2 className='acc-stext'>JUMIA STORE CREDIT</h2>
                 </div>
                 <div className='acc-store'>
                     <img className='acc-store-img' src="/storewallet.png" alt="" />
                     <p className='acc-store-text'>
                        <span>Jumia store credit balance:</span>
                        <span className='acc-store-sbtext'>&#8358; 0</span>
                     </p>
                    
                 </div>
               </div>
            </div>
             <div className='acc-cols'>
               <div className='acc-art'>
                 <div className='acc-hdtext'>
                    <h2 className='acc-stext'>NEWSLETTER PREFERENCES</h2>
                 </div>
                 <p className='acc-news-text'>
                   Manage your email communications to stay updated with the latest news and offers.
                 </p>
                 <Link className='acc-btn'>Edit Newsletter preferences</Link>
               </div>
            </div>
          </div>
       </div>
   
    </>
  )
}

export default Account