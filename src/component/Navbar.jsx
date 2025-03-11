import React, { useEffect, useState } from 'react'
import jumiaLogo from '../assets/jumia.png'
import searchBar from '../assets/search.svg'
import userHead from '../assets/account.svg'
import helpIcon from '../assets/help.svg'
import cartIcon from '../assets/cart.svg'
import { useNavigate } from 'react-router-dom'
import userOrder from '../assets/mybox.png'
import userInbox from '../assets/myenvelope.png'
import userWish from '../assets/mywish.png'
import userVouch from '../assets/myvoucher.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
    let navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userFirstname');
        localStorage.removeItem('tokens');
        setFirstname('');

        window.dispatchEvent(new Event("storage"));
        
        navigate('/');
    }
    const handleLogin = () => {
      navigate('/identification')
    }

    const [firstname, setFirstname] = useState(localStorage.getItem('userFirstname') ||'')
      useEffect(() => {
        const updateUser = () => {
            setFirstname(localStorage.getItem('userFirstname') || '');
        };

        window.addEventListener("storage", updateUser);
        return () => window.removeEventListener("storage", updateUser);
    }, []);

    
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
              <Link
              className='nav-link text-black dropdown-toggle cc7'
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className='contd'> {firstname ? ` Hi, ${firstname}` : 'Account'}</span>
            </Link>
            <ul className='dropdown-menu kyc'>
            { !firstname ?  (
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
            <Link className='dropdown-item glk350'>
              <img src={userHead} alt="" className='c300' />
              <span>My Account</span> 
            </Link>
          </li>
          <li>
            <Link to='' className='dropdown-item glk350' href='#'>
              <img src={userOrder} alt="" className='c300' />
              <span>Orders</span> 
            </Link>
            </li>
          <li>
            <Link to='' className='dropdown-item glk350' href='#'>
              <img src={userInbox} alt="" className='c300' />
              <span>Inbox</span> 
            </Link>
            </li>
          <li>
            <Link to='' className='dropdown-item glk350' href='#'>
              <img src={userWish} alt="" className='c300' />
              <span>Wishlist</span> 
            </Link>
          </li>
          <li>
            <Link to='' className='dropdown-item glk350' href='#'>
              <img src={userVouch} alt="" className='c300' />
              <span>Voucher</span> 
            </Link>
          </li>
          <li><hr className='dropdown-divider' /></li>
          <li>
            <button onClick={handleLogout} className='tkout' >Logout</button>
          </li>
          </>
          )}
          </ul>
          </li> 
         

          <li className='nav-item dropdown cc9'>
            <img
              className='c6'
              src={helpIcon}
              
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