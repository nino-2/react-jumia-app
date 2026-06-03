import React from 'react'
import { Link } from 'react-router-dom'
const Newsletter = () => {
  return (
    <div className='int-crd php'>
       <div className='acc-head'>
            <h1 className='acc-text'>Newsletter Preferences</h1>
        </div>
        <form className='news-cont'>
          <h1 className='news-head'>Define your preferences</h1>
          <div className='news-hold'>
             <div className='news-info'>
                <input type="radio" id='do'name='newsletter' className='news-check' />
                <label className='news-text' htmlFor='do'>I want to receive daily newsletters</label>
             </div>
             <div className='news-info'>
                <input type="radio" id='dont' name='newsletter' className='news-check' />
                <label className='news-text ' htmlFor='dont'>I dont want to receive daily newsletters</label>
             </div>
          </div>
          <div className='news-foot'>
             <div className='news-foot-in'>
                <div className='news-foot-det'>
                  <div className='news-info'>
                  <input type="checkbox" id='check' name='newsletter' className='news-check' />
                  <label className='news-texts ' style={{ "--tick": `url(${"/whitetick.png"})` }} htmlFor='check'>I agree to Jumiaâ€™s Privacy and Cookie Policy. You can unsubscribe from newsletters at any time.</label>
                  <div className='news-terms'>
                    <Link className='news-tc'>I accept the Legal Terms</Link>
                  </div>
                  </div>
                </div>
             </div>
             <button className='news-btn'>Save</button>
          </div>
        </form>
        {/* <div className='ord-body'>
            <div className='ord-tac'>
             <img className='ord-img' src="/jmstore.svg" alt="" />
             <h2 className='ord-txt'>You don't follow any seller !</h2>
             <p className='ord-txts'>All your followed sellers will be displayed here</p>
             <Link to='/'>
                <button className='crt-btn'>Start Shopping</button>
             </Link>
            </div>
        </div> */}
         
    </div>
  )
}

export default Newsletter
