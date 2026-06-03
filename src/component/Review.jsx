import React from 'react'
import { Link } from 'react-router-dom'
const Review = () => {
  return (
    <div className='int-crd php'>
       <div className='acc-head'>
            <h1 className='acc-text'>Pending Reviews</h1>
        </div>
        <div className='ord-body'>
            <div className='ord-tac'>
             <img className='ord-img' src="/review.svg" alt="" />
             <h2 className='ord-txt'>You have no orders waiting for feedback</h2>
             <p className='ord-txts'>After getting your products delivered, you will be able to rate and review them. Your feedback will be published on the product page to help all Jumia's users get the best shopping experience!</p>
             <Link to='/'>
                <button className='crt-btn'>Start Shopping</button>
             </Link>
            </div>
        </div>
    </div>
  )
}

export default Review