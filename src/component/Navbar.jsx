import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useCart } from '../../Context/CartContext'
import { useAuth } from '../../Context/AuthContext'


const Navbar = () => {
    
   const API_URL = import.meta.env.VITE_API_URL;

    const {cartcount, setCartcount, clearCart} = useCart()
    const {firstname, isLoggedIn, loading, handleLogout} = useAuth()
    const [searchTerm, setSearchTerm] = useState('')

    let navigate = useNavigate()

    const handleClickLogout = async() => {
       await handleLogout()
        clearCart();
        setCartcount(0);

        
        navigate('/');
    }
    const handleLogin = () => {
      navigate('/identification')
    }

    const handleSearch = (event) => {
      event.preventDefault()
      const query = searchTerm.trim()

      if (query) {
        navigate(`/?search=${encodeURIComponent(query)}`)
      } else {
        navigate('/')
      }
    }

    
     
      
      useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
          axios.get(`${API_URL}/cart/`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          .then((response) => setCartcount(response.data.cart?.length || 0))
          .catch((error)=>console.log(error))
        }
        
      }, [])

      
  if (loading) {
    return <div>Loading...</div>;
  }

      
    
  return (
    <>
      <nav className='head'>
       <div className='ptd'>
        {/*Jumia Logo*/}
        <div className='cc1'>
          <Link to='/'>
          <img className='ff2' src="/jumia.png" />
          </Link>
        </div>
        {/*Search Button*/}
        <form className='cc2' onSubmit={handleSearch}> 
          <input
            className='space'
            type='search'
            placeholder='Search products, brands and categories'
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <img className='search-icon' src="/search.svg"  />
          <button className='option'>SEARCH</button>
        </form>
        {/*Account Section*/}
        <ul className='cc3'>
          <li className='nav-item dropdown cc4'>
            <img
              className='c00'
              src="/account.svg"
              
            />
              <Link
              className='nav-link text-black dropdown-toggle cc7'
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className='contd'> {isLoggedIn ? ` Hi, ${firstname}` : 'Account'}</span>
            </Link>
            <ul className='dropdown-menu kyc'>
            { !isLoggedIn ?  (
              <>
              <li>
                 <a className='dropdown-item bg-transparent'>
                  <button onClick={handleLogin} className=' option3'
                  >
                    SIGN IN
                  </button>
                  </a>
              </li>
              <li><hr className='dropdown-divider' /></li>
              <li><Link  className='dropdown-item bg-transparent' >My Account</Link></li>
              <li><Link  className='dropdown-item bg-transparent' >Orders</Link></li>
              <li><Link  className='dropdown-item bg-transparent' >Saved Items</Link></li>
               <li><Link to='/about'  className='dropdown-item bg-transparent'>About us</Link></li>
              </>
            
          ): (
            <>
           
            <li>
            <Link to='/customer/account' className='dropdown-item glk350'>
              <img src="/account.svg" alt="" className='c300' />
              <span>My Account</span> 
            </Link>
          </li>
          <li>
            <Link to='/customer/order' className='dropdown-item glk350' href='#'>
              <img src="/mybox.png" alt="" className='c300' />
              <span>Orders</span> 
            </Link>
            </li>
          <li>
            <Link to='/customer/inbox' className='dropdown-item glk350' href='#'>
              <img src="/myenvelope.png" alt="" className='c300' />
              <span>Inbox</span> 
            </Link>
            </li>
          <li>
            <Link to='/customer/wishlist' className='dropdown-item glk350' href='#'>
              <img src="/mywish.png" alt="" className='c300' />
              <span>Wishlist</span> 
            </Link>
          </li>
          <li className=''>
            <Link to='/customer/voucher' className='item-link glk350' href='#'>
              <img src="/myvoucher.png" alt="" className='c300' />
              <span>Voucher</span> 
            </Link>
          </li>
          <li><hr className='dropdown-divider' /></li>
          <li className='handle-btn'>
            <button onClick={handleClickLogout} className='tkout' >Logout</button>
          </li>
          </>
          )}
          </ul>
          </li> 
         
           {/*Help Section*/}
          <li className='nav-item dropdown cc9'>
            <img
              className='c6'
              src="/help.svg"
              
            />
            <a
              className="nav-link text-black dropdown-toggle c67"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className='contd'> Help</span>
            </a>
            <ul className='dropdown-menu kyc'>
              <li>
                <Link className='dropdown-item'>Help center</Link>
              </li>
              <li>
                <Link className='dropdown-item'>Place an order</Link>
              </li>
              <li>
                <Link className='dropdown-item'>Payment option</Link>
              </li>
              <li>
                <Link className='dropdown-item'>Track an order</Link>
              </li>
              <li>
                <Link className='dropdown-item'>Cancel an order</Link>
              </li>
              <li>
                <Link className='dropdown-item'>Returns & Refunds</Link>
              </li>  
              <li><hr className='dropdown-divider' /></li>
              <li>
                <Link className='dropdown-item'>
                  <button className='option2'>LIVE CHAT</button>
                </Link>
              </li>
            </ul>
          </li>
          {/*Cart Section*/}
          <Link to='/cart' className='nav-link active text-black' aria-current="page">
          <li className='nav-item cc4'>
            <img
              className='c6'
              src="/cart.svg"
            />
           {
            cartcount > 0 &&
            <div className='cart-count'>{cartcount}</div>
           }
           
              <span className='contd'>Cart</span>
              
              </li>
            </Link>
         </ul>
       </div>
      
     </nav>
    </>
    
  )
}

export default Navbar
