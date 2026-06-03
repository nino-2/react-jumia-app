import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Order = () => {
  const [Selected, setSelected] = useState('ongoing')
  return (
    <div className='int-crd php'>
       <div className='acc-head'>
            <h1 className='acc-text'>Orders</h1>
        </div>
        <div className='ord-body'>
            <div className='ord-spc'>
                <div className='ord-opt'>
              
                <Link onClick={()=>setSelected('ongoing')} className={`ord-sel ${Selected === 'ongoing' ? 'active' : ''}`}>
                ONGOING/DELIVERED (0)
                </Link >
                <Link onClick={()=>setSelected('cancelled')} className={`ord-sel ${Selected === 'cancelled' ? 'active' : ''}`}>
                CANCELED/RETURNED (0)
                </Link>
                </div>
            </div>
            <div className='ord-tac'>
             <img className='ord-img' src="/orders-first.svg" alt="" />
             <h2 className='ord-txt'>You have placed no orders yet!</h2>
             <p className='ord-txts'>All your orders will be saved here for you to access their state anytime.</p>
             <Link to='/'>
                <button className='crt-btn'>Start Shopping</button>
             </Link>
            </div>
        </div>
    </div>
  )
}

export default Order