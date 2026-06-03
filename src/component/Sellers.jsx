import React from 'react'
import { Link } from 'react-router-dom'
const Sellers = () => {
  return (
    <div className='int-crd php'>
       <div className='acc-head'>
            <h1 className='acc-text'>Followed Sellers</h1>
        </div>
        <div className='ord-body'>
            <div className='ord-tac'>
             <img className='ord-img' src="/jmstore.svg" alt="" />
             <h2 className='ord-txt'>You don't follow any seller !</h2>
             <p className='ord-txts'>All your followed sellers will be displayed here</p>
             <Link to='/'>
                <button className='crt-btn'>Start Shopping</button>
             </Link>
            </div>
        </div>
    </div>
  )
}

export default Sellers