import { Link } from 'react-router-dom'

import { useCart } from '../../Context/CartContext'

import Spinner from './Spinner'

const Cart = () => {
 
  
  const {cartItems,cartcount, updateCartItem,removeCartItem, loadingItemId} = useCart()

  
  
 
 

   const subTotal = (() => {
    let sum = 0;
    cartItems.forEach(item => sum += (item.product?.salesprice || 0) * item.quantity, 0 )
    return sum.toLocaleString()
   }) ();
   
   
  
  return (
    <>
     {/* {
            alert.open && (
              <div className='alert'>
                <p className='crt-show-msg'>{alert.message}</p>
                <button className='crt-exit'  onClick={()=>setAlert({open: false, message: ''})}>X</button>
              </div>
            )
          } */}
      <main>
        <div className='outter'>
         
          {
            cartItems?.length === 0 ? (
              <div className='crt-out'>
              <div className='crt-col'>
                <img className='crt-img' src="/carticon.svg" alt="" />
                <h2 className='crt-info'>Your Cart is empty!</h2>
                <p className='crt-infoo'>Browse our categories and discover our best deals!</p>
                <Link to='/'>
                  <button className='crt-btn'>Start Shopping</button>
                </Link>
              </div>
           </div>
            ) : (
              <>
             
            <div className='crt-conti'>
              <div className='crt-cinn'>
              <div className="crt-head">
            
                <h2 className='crt-item'>Cart ({cartcount})</h2>
              </div>
             
             
              {cartItems.map((item)=> (
                 <div className='crt-body' key={item.product?._id}>
                 <Link to={`/products/${item.product?._id}`} className='crt-goto'>
                 <div className='crt-prod-img'>
                  <img style={{width: '72px', height: '72px'}} src={item.product?.images[0]} alt={item.product?.name} />
                 </div>
                 <div className='crt-prod-split'>
                   <div className='crt-prod-det'>
                  <h3 className='crt-prod-name'>{item.product?.name}</h3>
                  <p className='crt-prod-sell'>
                    <span className='crt-dt'>
                      Seller:
                    </span>
                    {item.product?.sellerinfo}
                  </p>
                  <p className='crt-stock'>In Stock</p>
                 </div>
                 <div className='crt-prod-pd'>
                  <div className='crt-sp'>&#8358;{item.product?.salesprice.toLocaleString()}</div>
                  <div className='crt-btw'>
                    <div className='crt-old'>&#8358;{item.product?.initialprice.toLocaleString()}</div>
                    <div className='crt-pct bop2'>{item.product?.percent}%</div>
                  </div>
                 </div>
                 </div>
                 
               </Link>
               <div className='crt-foot'>
                 <button onClick={()=> removeCartItem(item._id)} className='crt-inft'>
                     <img src="/trashcan.png" alt="" />
                     Remove
                 </button>
                 <div  className='crt-control' >
                     <button onClick={()=>
                      
                      updateCartItem(item._id, item.quantity - 1)} className='crt-dir'
                      disabled={loadingItemId === item._id}>
                     {/* {loadingItemId === item._id ? <Spinner /> : } */}
                     <img src="/minus.png" alt="" /> 
                     </button>
                     <span className='crt-qty'> {loadingItemId  === item._id? <Spinner/> : item.quantity} </span>
                     <button onClick={()=> 
                      
                      updateCartItem(item._id, item.quantity + 1)} className='crt-dir'
                      disabled={loadingItemId === item._id}>
                     {/* {loadingItemId === item._id ? <Spinner /> : } */}
                     <img src="/addition.png" alt="" />
                     </button>
                 </div>
               </div>
                 </div>
              ))}
               
              
             
            </div>
          </div>
          <div className='crt-contii'>
            <div className='crt-scinn'>
                <div className='crt-card'>
                  <h1 className='crt-summ'>CART SUMMARY</h1>
                  <div className='crt-itm'>
                    {/* <p className='crt-dp'>
                        Item's total ({subTotal.toFixed(2)})
                        <span className='crt-pp'></span>
                    </p> */}
                    <p className='crt-dp'></p>
                  </div>
                  <div className='crt-subt'>
                    <p className='crt-tt'>Subtotal</p>
                    <p className='crt-amt'>&#8358; {subTotal}</p>
                  </div>
                  <p className='crt-deli'>Delivery fees not included yet.</p>
                  <div className="crt-chk">
                    <Link to='/checkout'>
                     <button className='crt-c-btn'>Checkout (&#8358;{subTotal} )</button>
                    </Link>
                  </div>
                </div>
                <div className='crt-contiii'>
                <h2 className='crt-ret'>Returns are easy</h2>
                Free return within 7 days for ALL eligible items&nbsp;
                <button className='crt-mr-dt'>Details</button>
                </div>
            </div>
           
          </div>
          </>
            )
          }
         
          
          
        </div>
      </main>
    </>
  )
}

export default Cart
