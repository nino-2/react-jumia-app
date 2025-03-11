import React from 'react'
import jumiaLogo from '../assets/jumia.png'
import searchBar from '../assets/search.svg'
import userHead from '../assets/account.svg'
import helpIcon from '../assets/help.svg'
import cartIcon from '../assets/cart.svg'
import { Link, useNavigate } from 'react-router-dom'

const Altnav = () => {
  let navigate = useNavigate();
  const handleLogin = () => {
    navigate('/identification')
  }
  return (
    <>
      <nav className='head'>
       <div className='ptd'>
        <div className='cc1'>
          <Link to='/'>
          <img className='ff2' src={jumiaLogo} />
          </Link>
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
            <ul className='dropdown-menu kyc'>
              <li>
                <Link className='dropdown-item' >
                  <button onClick={handleLogin} className='option3'
                  >
                    SIGN IN
                  </button>
                </Link>
              </li>
              <li><hr className='dropdown-divider' /></li>
              <li><Link  className='dropdown-item' >My Account</Link></li>
              <li><Link  className='dropdown-item' >Orders</Link></li>
              <li><Link  className='dropdown-item' >Saved Items</Link></li>
              <Link  className='dropdown-item'>About us</Link>
            </ul>
          </li>
          <li className='nav-item dropdown cc9'>
            <img
              className='c6'
              src={helpIcon}  
            />
            <Link
              className="nav-link text-black dropdown-toggle c67"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className='contd'> Help</span>
            </Link>
            <ul className='dropdown-menu kyc'>
              <li><Link  className='dropdown-item' href="#">Help center</Link></li>
              <li><Link  className='dropdown-item' href="#">Place an order</Link></li>
              <li><Link  className='dropdown-item' href="#">Payment option</Link></li>
              <li><Link  className='dropdown-item' href="#">Track an order</Link></li>
              <li><Link  className='dropdown-item' href="#">Cancel an order</Link></li>
              <li><Link  className='dropdown-item' href="#">Returns & Refunds</Link></li>  
              <li><hr className='dropdown-divider' /></li>
              <li>
                <Link  className='dropdown-item' >
                  <button className='option2'>LIVE CHAT</button>
                </Link>
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

export default Altnav