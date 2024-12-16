import React from 'react'
import jumiaLogo from '../assets/jumia.png'
import searchBar from '../assets/search.svg'
import userHead from '../assets/account.svg'
import helpIcon from '../assets/help.svg'
import cartIcon from '../assets/cart.svg'

const Navbar = () => {
  return (
    <>
      <nav className='head'>
       <div className='ptd'>
        <div className='cc1'>
          <img className='ff2' src={jumiaLogo} />
        </div>
        <form className='cc2'> 
          <input className='space' type='search' placeholder='Search products, brands and categories'/>
          <img className='search-icon' src={searchBar}  />
          <button className='option'>SEARCH</button>
        </form>
        <ul className='cc3'>
          <li className='nav-item dropdown cc4'>
            <img
              className='c00'
              src={userHead}
              
            />
            <a
              className='nav-link text-black dropdown-toggle cc7'
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className='contd'>Account</span>
            </a>
            <ul className='dropdown-menu kyc'>
              <li>
                <a className='dropdown-item' href='#'>
                  <button className='option3'
                  >
                    SIGN IN
                  </button>
                </a>
              </li>
              <li><hr className='dropdown-divider' /></li>
              <li><a className='dropdown-item' href='#'>My Account</a></li>
              <li><a className='dropdown-item' href='#'>Orders</a></li>
              <li><a className='dropdown-item' href='#'>Saved Items</a></li>
            </ul>
          </li>

          <li className='nav-item dropdown cc9'>
            <img
              className='c6'
              src={helpIcon}
              
            />
            <a
              className="nav-link text-black dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className='contd'> Help</span>
            </a>
            <ul className='dropdown-menu kyc'>
              <li><a className='dropdown-item' href="#">Help center</a></li>
              <li><a className='dropdown-item' href="#">Place an order</a></li>
              <li><a className='dropdown-item' href="#">Payment option</a></li>
              <li><a className='dropdown-item' href="#">Track an order</a></li>
              <li><a className='dropdown-item' href="#">Cancel an order</a></li>
              <li><a className='dropdown-item' href="#">Returns & Refunds</a></li>
              <li><hr className='dropdown-divider' /></li>
              <li>
                <a className='dropdown-item' href="#">
                  <button className='option2'>LIVE CHAT</button>
                </a>
              </li>
            </ul>
          </li>

          <li className='nav-item cc4'>
            <img
              className='c6'
              src={cartIcon}
            />
            <a className='nav-link active text-black' aria-current="page" href="#">
              <span className='contd'>Cart</span>
            </a>
          </li>
         </ul>
       </div>
     </nav>
    </>
  )
}

export default Navbar