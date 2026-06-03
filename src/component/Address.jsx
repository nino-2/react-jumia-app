import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import { useAddress } from '../../Context/AddressContext'

const Address = () => {
  const {addresses, getAddress, loading, setDefaultAddress, removeAddress} = useAddress()

    useEffect(() => {
    getAddress()
  }, [])

  if (loading) return <div>Loading addresses...</div>
  return (
     <div className='int-crd php'>
       <div className='add-head'>
            <h1 className='acc-text'>{addresses.length > 1 ? `Addresses (${addresses.length})` : 'Address Book'}</h1>
            <Link to='/customer/address/create'>
              <button className='adr-btn'>Add new address</button>
            </Link>
          
           
        </div>
       
        <div className='adr-body'>
          {addresses.map((addr)=> (
          <div className='acc-cols' key={addr._id}>  
               <div className='adr-art'>
               <div className={addr.isDefault ? 'address' : 'noaddress'}>
                 <p className='add-name'>{addr?.firstname}  {addr?.lastname}</p>
                 <p>{addr?.deliveryadd}</p>
                 <p>{addr?.city}, {addr?.state}</p>
                 <p className='add-num'>{addr?.phonenumber}</p>
                 {
                  addr.isDefault && (
                   <div className='add-default'>Default Address</div>
                  )
                 } 
               </div>
               <div className='add-footer'>
                { addresses.length > 0 &&  (
                  <button onClick={()=>setDefaultAddress(addr._id)} disabled={addr.isDefault} className={`address-btn ${!addr.isDefault ? 'disabled' : 'active'}`}>
                     Set as default
                  </button>
                )}
                 
                  <Link to={`/customer/address/edit/${addr._id}`} className='acc-addbook'>
                    <img src="/editpen.png" alt="" />
                  </Link>
                {addresses.length > 1 && (
                  <button onClick={()=>removeAddress(addr._id)} className='acc-addbook'>
                    <img src="/trashcan.png" alt="" />
                  </button>
                )}
               </div>
             </div>
          </div>
            ))}
        </div>
    </div>
  )
}

export default Address