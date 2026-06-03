import React from 'react'
import { Link } from 'react-router-dom'
const Wishlist = () => {
  return (
    <div className='int-crd php'>
       <div className='acc-head'>
            <h1 className='acc-text'>Wishlist</h1>
        </div>
        <div className='ord-body'>
            <div className='ord-tac'>
             <img className='ord-img' src="/mywishlist.svg" alt="" />
             <h2 className='ord-txt'>You haven’t saved an item yet!</h2>
             <p className='ord-txts'>Found something you like? Tap on the heart shaped icon next to the item to add it to your wishlist! All your saved items will appear here.</p>
             <Link to='/'>
                <button className='crt-btn'>Start Shopping</button>
             </Link>
            </div>
        </div>
    </div>
  )
}

export default Wishlist