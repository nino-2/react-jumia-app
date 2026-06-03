import React, { useEffect, useState } from 'react'
import {Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { useNavigate } from 'react-router-dom'
import {useLocation} from 'react-router-dom'
import { useCart } from '../../Context/CartContext'
const CustomerPages = () => {
   
   const {setCartcount, clearCart} = useCart()
   const [firstname, setFirstname] = useState(localStorage.getItem('userFirstname') ||'')
   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
   const [menuOpen, setMenuOpen] = useState(false)
   let navigate = useNavigate()
   const location = useLocation();
    const showBackButton = false

    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth <= 768)
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
      setMenuOpen(false)
    }, [location.pathname])
    
   const handleLogout = () => {
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userFirstname');
        localStorage.removeItem('token');
        setFirstname('');
        clearCart();
        setCartcount(0);

        window.dispatchEvent(new Event("storage"));
        
        navigate('/');
        
    }
  return (
      <>
      <Navbar/>
      <main>

        

        <div className='outter-space lnp'>

          {isMobile && (
            <button
              type='button'
              className='customer-menu-toggle'
              onClick={() => setMenuOpen((open) => !open)}
            >
              Account menu
            </button>
          )}

          {(!isMobile || menuOpen) && (
            <div className='side-card'>
                <div className='s-menu' onClick={() => isMobile && setMenuOpen(false)}>
                    <Link  to='/customer/account' className='s-choice'>
                      <img src="/account.svg" alt="" className='c300' />
                      <span>My Account</span>
                    </Link>
                    <Link  to='/customer/order' className='s-choice'>
                      <img src="/mybox.png" alt="" className='c300' />
                      <span>Orders</span>
                    </Link>
                     <Link  to='/customer/inbox' className='s-choice'>
                      <img src="/myenvelope.png" alt="" className='c300' />
                      <span>Inbox</span>
                    </Link>
                    <Link  to='/customer/reviewsrating' className='s-choice'>
                      <img src="/myenvelope.png" alt="" className='c300' />
                      <span>Pending Reviews</span>
                    </Link>
                    <Link  to='/customer/voucher' className='s-choice'>
                      <img src="/myvoucher.png" alt="" className='c300' />
                      <span>Voucher</span>
                    </Link>
                    <Link  to='/customer/wishlist' className='s-choice'>
                      <img src="/mywish.png" alt="" className='c300' />
                      <span>Wishlist</span>
                    </Link>
                    <Link  to='/customer/followed-sellers' className='s-choice'>
                      <img src="/myenvelope.png" alt="" className='c300' />
                      <span>Followed Sellers</span>
                    </Link>
                    <Link  to='inbox' className='s-choice'>
                      <img src="/myenvelope.png" alt="" className='c300' />
                      <span>Recently Viewed</span>
                    </Link>
                    <Link  to='inbox' className='s-item'>
                      <span>Account Management</span>
                    </Link>
                    <Link  to='inbox' className='s-item'>
                      <span>Payment Settings</span>
                    </Link>
                    <Link  to='/customer/address' className='s-item'>
                      <span>Address Book</span>
                    </Link>
                    <Link  to='/customer/newsletter/manage' className='s-item'>
                      <span>Newsletter Preferences</span>
                    </Link>
                    <Link  to='inbox' className='s-item'>
                      <span>Close Account</span>
                    </Link>
                    <div className='s-handle'>
                      {/* <hr className='s-rule ' /> */}
                      <button onClick={handleLogout} className='tkout' >Logout</button>
                    </div>
                </div>
            </div>
          )}
            
          <div className='outter-card'>
            
           <Outlet
           context={{
            showBackButton,
            onBack : () => setMenuOpen(true)
           }}/>
          </div>
            
            
        </div>
      </main>
      <Footer/>
      </>
  )
}

export default CustomerPages
