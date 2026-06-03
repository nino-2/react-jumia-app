import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Spinner from './Spinner'
import axios from 'axios'

import { useCart } from '../../Context/CartContext'


const Product = ({rating}) => {
  
  const API_URL = import.meta.env.VITE_API_URL
  
  const {cartItems, addToCart, updateCartItem, loadingItemId} = useCart();
  const { id } = useParams();
  const [product, setProduct] = useState(null)
  const [activetab, setActivetab] = useState({
    prodetails: true,
    prospecs: false,
    proreviews: false
  })

  const [states, setStates] = useState([])
  const [cities, setCities] = useState([])
  const [selectedstate, setSelectedState] = useState('')
  const [selectedcity, setSelectedCity] = useState('')
  const [loading, setLoading] = useState(true)
  // const [error, setError] = useState(null)
  const [mainimage, setMainimage] = useState([0])
  const [liked, setLiked] = useState(false)
  const [follow, setFollow] = useState(false)

  
  const cartItem = cartItems.find((item) => item.product?._id === product?._id);

  
  
 {/*Fetching Product from Backend*/}
  useEffect(() => {
    const fetchProduct = () => {
      console.log(id)
      axios.get(`${API_URL}/products/${id}`)
    .then((response)=>{
      console.log(response.data)
      if (response.data) {
        setProduct(response.data)
        setLoading(false)
      }
    })
    .catch((err)=> {
      console.log('Error fetching products', err)
      setLoading(false)
    })
    }
     fetchProduct()
  }, [API_URL, id])
  
  {/*Fetching States API from Backend*/}
  useEffect(() => {
    axios.get(`${API_URL}/api/states`)
    .then((response)=>{
      if (response.data.states) {
        setStates(response.data.states)
      }
       
    })
    .catch((err)=>{
      console.log(err, 'Error fetching states')
    })
  }, [API_URL])

  {/*Fetching State Cities API from Backend*/}
  const fetchCities = (stateName) => {
    axios.get(`${API_URL}/api/states/${stateName}`)
    .then((response) => {
      setCities(response.data.cities);
    })
    .catch((err) => {
      console.error('Error fetching cities:', err);
    });
  }
  const handleStateChange = (event) => {
    const stateName = event.target.value;
    setSelectedState(stateName);
    fetchCities(stateName);
    
  };
  const handleCityChange = (event) => {
    setSelectedCity(event.target.value)
  }
  
  
  const ratingPercentage = product ? (product.rating / 5) * 100 : 0;

  {/*Handle Like*/}
  const handleLike = () => {
    setLiked(!liked)
  }

  {/*Handle Follow*/}
  const handleflow = () => {
    setFollow(!follow)
  }
   
  const handleScrollTo = (sectionId) => {
    setActivetab(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  }

  

  {/*If Product doesnt exist*/}
  if (loading || !product) return <p>Loading...</p>
  return (
    <>
      <main className='family'>
       
        <div className='outter-space'>
          <div className='dimensions'>
             {/* Breadcrumbs */}
             {
              product.direction.map((item, index)=>(
                <Link to="#"  key={index} 
                  className={`arrow ${index === product.direction.length - 1 ? 'last-item' : ''}`}
                >
                  {item}
                  {index !== product.direction.length - 1 && <span className="cond">{'>'}</span>}
                </Link>
              ))}
             
          </div>
          <section className='outter-card fyp'>
            <div className='row-card'>
              <div className='tnt'>
                <div className='atnt'>
                  {/* Product Images */}
                  <div className='imgdiv'>  
                          <label>
                            <img src={product.images[mainimage]} alt={product.name} className="pd-img" />
                          </label>
                  
                  
                  </div>
                  {
                    product.images.length >= 3 && (
                      <div className='btnt'>
                    <div className='scroll'>
                      {product.images.map((img,index)=> (
                        <div key={index} className={`img-pd ${mainimage === index ? 'active' : ''}`}>
                           <label  className='fitx'>
                          <img src={img} alt={product.name} className={`fity ${mainimage === index ? 'selected' : ''}`}
                          onClick={()=>setMainimage((index))}
                          />
                        </label>
                        </div>
                       
                      ))}
                    
                      
                    </div>
                    
                       <div className='arrows'>
                        {/* Left Direction */}
                       <button className='left'  onClick={() => setMainimage((prev) => Math.max(prev - 1, 0))}>
                        <img src="/leftarr.svg" alt="" />
                        </button>
                        {/* Right Direction */}
                        <button className='right' onClick={() => setMainimage((prev) => Math.min(prev + 1, product.images.length - 1))}>
                        <img src="/rightarr.svg" alt="" />
                        </button>
                       </div>
                    </div>
                    )}
                </div>
                <section className='tnt2'>
                 <hr  className='rule'/>
                  <h2 className='ctnt'>SHARE THIS PRODUCT</h2>
                  <div className='dtnt'>
                    <button className='link _rnd'>
                      <img src="/socialf.png" alt=""  className='social'/>
                    </button>
                    <button className='link1 _rnd'>
                      <img src="/socialx.png" alt=""  className='social'/>
                    </button>
                    <button className='link1 _rnd'>
                      <img src="/socialws.png" alt=""  className='social'/>
                    </button>
                  </div>
                </section>
              </div>
              {/* Product Details */}
              <div className='cnn'>
                <div className='cnna'>
                  <div className='inn-cnn'>
                    <div className='hd'>
                        <Link className='trade'>Official Store</Link>
                        <Link className='trade1'>Pay on Delivery</Link>
                    </div>
                    {/* Product Name */}
                    <h2 className='brnd'>{product.name}</h2>
                  </div>
                    {/* Like Button */}
                    {/* <button onClick={handleLike} className='likebtn'>
                      <img src={ liked ? "/likedby.png" : "/notlike.png"}  alt="like"  />
                    </button> */}
                    
                  
                </div>
                <div className='cnnb'>
                  <div className='ctn1'>
                    {/* Product Brand  & Similar Brand */}
                    {product.brand &&  (
                      <p className='npmnj'>
                        <span className='nmdi'>Brand:</span>
                      <Link className='extra'>{product.brand}</Link>
                       |
                      <Link className='extra1'>{product.smbrand}</Link>
                      </p>
                    )}
                    
                  </div>
                  <div className='ctn2'>
                    <hr className='rule1' />
                    <div className='bbo'>
                      <div className='bbo1'>
                        <div className='bob'>
                          <img className='flash' src="/iconflash.png" alt="" />
                          <span className='sales'>Flash Sales</span>
                        </div>
                        <div className='bob1'>
                          Time Left: 
                          <time className='c-down' dateTime='2024-08-14' id='demo'> 14h : 59m : 00s </time>
                        </div>
                      </div>
                    </div>
                    {/* Product Discounted Price & Initial Price */}
                    <div className='brb'>
                      <span className='price-tag'>&#8358;{product.salesprice.toLocaleString()}</span>
                      <div className='beep'>
                        <span className='bop1'>&#8358;{product.initialprice.toLocaleString()}</span>
                        <span className='bop2'>{product.percent}%</span>
                      </div>
                      <div className='beep1'>
                        <span className='bop3'>
                          131 items left
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Your Location  Display */}
                  <div className='ctn3'>
                     + shipping from
                     <span className='ptag'>&#8358; 600</span>
                      to {selectedcity ? selectedcity : 'your location'}
                  </div>
                  <div className='ctn4'>
                    {/* Product Ratings */}
                    <div className='hbc'>
                      <div className="in" style={{ width: `${(product.ratings.rating / 5)* 100}%` }}></div>
                    </div>
                    {/* Product Reviews */}
                    <Link className='obc'>
                       ({product.ratings.review} verified ratings)                      
                      </Link>
                  </div>
                </div>
                {/* Add to Cart */}
                <div className='cnnc'>
                  <div className='tbc'>
                    {
                     cartItem ? (
                      <div  className='crt-control-pd' >
                     <button onClick={()=>
                      
                      updateCartItem(cartItem._id, cartItem.quantity - 1)} className='crt-dir'
                      disabled={loadingItemId === cartItem._id}>
                     {/* {loadingItemId === item._id ? <Spinner /> : } */}
                     <img src="/minus.png" alt="" /> 
                     </button>
                     <span className='crt-qty'> {loadingItemId  === cartItem._id? <Spinner/> : cartItem.quantity} </span>
                     <button onClick={()=> 
                      
                      updateCartItem(cartItem._id, cartItem.quantity + 1)} className='crt-dir'
                      disabled={loadingItemId === cartItem._id}>
                     {/* {loadingItemId === item._id ? <Spinner /> : } */}
                     <img src="/addition.png" alt="" />
                     </button>
                    </div>
                      ): (
                        <>
                        <button 
                          className='tcb'
                          onClick={() => addToCart(product)}
                          disabled={loadingItemId === product._id}
                        >
                          {loadingItemId === product._id ? <Spinner /> : (
                            <>
                              <img className='crt' src="/mycart.png" alt="" />
                              <span className='cbt'>Add to Cart</span>
                            </>
                          )}
                        </button>

                        
                        </>
                      )
                    }
                    
                  </div>
                </div>

                {/* Further Enquiries */}
                <div className='cnnd'>
                  <hr  className='rule12'/>
                   <p className='nbc'>PROMOTIONS</p>
                   <div className='jbc'>
                    <Link className='jbl'>
                       <img className='logs' src="/myjumia-top-logo.png" alt="" />
                       Call 07006000000 To Place Your Order
                    </Link>
                    <Link className='jbl'>
                       <img className='logs' src="/myjumia-top-logo.png" alt="" />
                       Need extra money? Loan u to &#8358;500,000 on the JumiaPay
                       Android App
                    </Link>
                    <Link className='jbl'>
                       <img className='logs' src="/myjumia-top-logo.png" alt="" />
                       Enjoy cheaper shipping fees when you select a PickUp Station
                       at checkout.
                    </Link>
                   </div>
                </div>
              </div>
              <div className='jetro'>
                <Link className='_more'>Report incorrect product information</Link>
              </div>
            </div>
          </section>
          <div className='side-card'>
            <section className='outcard'>
              <h2 className='tiso'>DELIVERY & RETURNS</h2>
              <div className='ciso'>
                <hr  className='rule13'/>
                <article className='tisio'>
                  <div className='tisk'>
                    <h3 className='sisk'>
                     <img className='myexpress' src="/jumia-express.png" alt="" />
                    </h3>
                    <p className='simp'>
                     The BEST products, delivered faster. Now PAY on DELIVERY, Cash or Bank Transfer Anywhere, Zero Wahala!&nbsp;
                    <button className='din'>Details</button>
                    </p>
                  </div>
                </article>
              </div>
              {/* Select your preferred Location */}
              <div className='ciso'>
                <hr  className='rule13'/>
                <article className='cad2'>
                  <h3 className='tiso1'>Choose your location</h3>
                  <div className='dtx'>
                    <div className='fiwner'>
                      {/* Select your State  */}
                      <select className='sel'  onChange={handleStateChange} value={selectedstate}>
                      <option  disabled>Please Select</option>
                        {states.map((state) => (
                          <option key={state.id} value={state.name}>{state.name}</option>
                        ))}
                      </select>
                    </div>
                      {/* Select your City */}
                    <div className='fiwner'>
                      <select required className='sel' aria-label='Region' onChange={handleCityChange} value={selectedcity}>
                      {cities.map((city) => (
                        <option key={city.id} value={city.name}>{city.name}</option>
                      ))}
                      </select>
                    </div>
                 
                  </div>

                      {/* Pickup Details */}
                  <section className='pr'>
                    <div>
                      <article className='dfpr'>
                         <img className='xim' src="/pickprod.png" alt="" />
                         <div className='dpr'>
                            <div className='rpd'>
                              <p className='xpd'>Pickup Station</p>
                              <button className='din1'>Details</button>
                            </div>
                            <div>
                              <div className='mxp'>
                                Delivery Fees
                                <span className='ptag'>&#8358;3,500</span>
                              </div>
                              <div className='mxp'>
                                Ready for pickup between
                                <span className='ptag1'>14 March</span>
                                 and 
                                <span className='ptag1'>18 March</span> 
                                if you place your order within
                                the next
                                 <span className='ptag1'>3hrs 47mins</span>
                                
                              </div>
                            </div>
                         </div>
                      </article>

                      {/* Door Delivery */}
                      <article className='dfpr'>
                         <img className='xim' src="/deliverprod.png" alt="" />
                         <div className='dpr'>
                            <div className='rpd'>
                              <p className='xpd'>Door Delivery</p>
                              <button className='din1'>Details</button>
                            </div>
                            <div>
                              <div className='mxp'>
                                Delivery Fees
                                <span className='ptag'>&#8358;4,519</span>
                              </div>
                              <div className='mxp'>
                                Ready for pickup between
                                <span className='ptag1'>14 March</span>
                                 and 
                                <span className='ptag1'>18 March</span> 
                                if you place your order within
                                the next
                                 <span className='ptag1'>3hrs 47mins</span>
                                
                              </div>
                            </div>
                         </div>
                      </article>
                    </div>
                  </section>
                </article>
                {/* Return Policy */}
                <article className='cad3'>
                  <hr className='rule1'/>
                  <img className='xim' src="/returnprod.png" alt="" />
                  <div className='xmi'>
                    <p className='xpdb'>
                      Return Policy
                    </p>
                    <p className='xmis'>
                      Free return within 7 days for ALL eligble items 
                      <Link className='dinx'>Details</Link>
                    </p>
                  </div>
                </article>
              </div>
            </section>
            {/* Seller Info */}
            <div className='pts'>
              <section className='outcard1'>
                <Link className='rjd'>
                  <p className='slr'>SELLER INFORMATION</p>
                  <img className='slrx' src="/rightarr.svg" alt="" />
                </Link>
                <div className='hr-pas'>
                  <hr className='rule13' />
                  {product.sellerinfo && (
                    <p className='t-pas'>{product.sellerinfo}</p>
                  )}
                  
                  <div className='j-bet'>
                    <div className='df-bet'>
                      <p className='ovr'>
                        <bdo className='sm-bet' dir="ltr">88%</bdo>
                        Seller Score
                      </p>
                      <p className='ovr'>
                        <span className='-mm'>979</span>
                        <span>Followers</span>
                      </p>
                    </div>
                    <form className='frm'>
                      <input type="hidden" />
                      { follow ? (
                         <button onClick={handleflow} className='sl-cls'>
                         <span className='cls'>Following</span>
                      </button>  
                      ) : (
                        <button onClick={handleflow} className='rdbt'>
                        <span className='cls'>Follow</span>
                       </button>
                      )
                    }
                     
                      
                    </form>
                  </div>
                </div>
                <div className='lr-pas'>
                  <h3 className='tr-pas'>
                    Seller Performance 
                    <button className='i-pas'>
                      <img className='mg-pas' src="/infoid.png" alt="" />
                    </button>
                  </h3>
                  <div className='i-das'>
                    <span className='midas'>
                      <img className='gstar' src="/wstar.png" alt="" />
                    </span>
                    <p className='clx'>
                      Shipping speed: &nbsp;
                      <span className='-mm'>
                        Excellent
                      </span>
                    </p>
                    
                  </div>
                  <div className='i-das'>
                    <span className='midas'>
                      <img className='gstar' src="/wstar.png" alt="" />
                    </span>
                    <p className='clx'>
                      Quality Score: &nbsp;
                      <span className='-mm'>
                        Good
                      </span>
                    </p>
                    
                  </div>
                  <div className='i-das'>
                    <span className='midas'>
                      <img className='gstar' src="/wstar.png" alt="" />
                    </span>
                    <p className='clx'>
                      Customer rating: &nbsp;
                      <span className='-mm'>
                        Good
                      </span>
                    </p>
                    
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className='outter-space'>
           <div className='ramad'>
           </div>

           {/* Product Details Info */}
           <section id='prodetails' className='outter-card1'>
              <div className='hpsum'>
                <header className='myhead'>
                  <h2 className='pvsbb'>Product details</h2>
                </header>
                {
                  product.details?.info?.length > 0 && (
                    <div className='bndd'>
                  { 
                    product.details.info.map((item, index)=> (
                      <span className='desc-text' style={{marginRight: '4px'}} key={index}>
                        {item.type === "bold" ? <strong>{item.content}</strong> : item.content}
                      </span>                      
                    ))
                  }
                </div>
                  )
                }

                {/* Product Description */}
                {product.details?.description?.length > 0 && (
                  <div className='bndd'>
                    {/* Render text-based descriptions only if they exist */}
                    {product.details.description.some(desc => !desc.startsWith("http")) && (
                      <>
                        <strong>Description:</strong>
                        <ul>
                          {product.details.description
                            .filter(desc => !desc.startsWith("http")) // Exclude images
                            .map((desc, index) => <li className='desc-text' key={index}>{desc}</li>)
                          }
                        </ul>
                      </>
                    )}

                    {/* Render images separately */}
                    {product.details.description
                      .filter(desc => desc.startsWith("http")) // Only keep images
                      .map((img, index) => (
                        <img key={index} src={img} alt={`description-${index}`} className="desc-image" />
                      ))
                    }
                    {product.exlink?.video && (
                      <iframe
                        width="840"
                        height="352"
                        src={product.exlink.video}
                        title="Product Video"
                        frameBorder='0'
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    )}
                  </div>
                )}

                  {/* Product Features */}
                {
                  product.details?.feature?.length > 0 && (
                    <div className='bndd'>
                      <strong>Features:</strong>
                      <ul>
                        {product.details.feature.map((feat, index)=>(
                          <li className='desc-text' key={index}>{feat}</li>
                        ))}
                      </ul>
                    </div>
                  )
                }
                   
                   {/* Product General Specifications */}
                {
                  product.details?.genspec?.length > 0 && (
                    <div className='bndd'>
                      <strong>General Specification:</strong>
                      <ul>
                        {product.details.genspec.map((gens, index)=>(
                          <li className='desc-text' key={index}>{gens}</li>
                        ))}
                      </ul>
                    </div>
                  )
                }
                   
                   {/* Product Package List */}
                {
                  product.details?.package?.length > 0 && (
                    <div className='bndd'>
                      <strong>Package List:</strong>
                      <ul>
                        {product.details.package.map((pack, index)=>(
                          <li className='desc-text' key={index}>{pack}</li>
                        ))}
                      </ul>
                    </div>
                  )
                }
                   
                   {/* Product  Notes */}
                {
                  product.details?.note?.length > 0 && (
                    <div className='bndd'>
                      <strong>Notes:</strong>
                      <ul>
                        {product.details.note.map((nt, index)=>(
                          <li className='desc-text' key={index}>{nt}</li>
                        ))}
                      </ul>
                    </div>
                  )
                }

                   {/* Product Technical Parameters */}
                {
                  product.details?.techparam?.length > 0 && (
                    <div className='bndd'>
                      <strong>Technical Parameters:</strong>
                      <ul>
                        {product.details.techparam.map((tech, index)=>(
                          <li className='desc-text' key={index}>{tech}</li>
                        ))}
                      </ul>
                    </div>
                  )
                }
                
                
              </div>

                  {/* Product Key Features */}
              <div id='prospecs' className='hpsum'>
              <header className='myhead'>
                  <h2 className='pvsbb'>Specifications</h2>
                </header>
                <div className='fcr'>
                {
                  product.keyfeature?.length > 0 &&  ( 
                  <article className='dfcr'>
                    <div className='crdcr'>
                      <h2 className='crd-text'>KEY FEATURES</h2>
                      <div className='crdxt'>
                        <ul style={{margin: '0px', boxSizing: 'border-box'}}>
                          {product.keyfeature.map((kft, index)=>(
                            <li key={index}>{kft}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
               
                  )
                }

                  {/* Product Specifications */}
                {
                  product.specifications?.length > 0 && (
                   <article className='dfcr'>
                    <div className='crdcr'>
                      <h2 className='crd-text'>SPECIFICATIONS</h2>
                       <div className='crdxt'>
                          <ul className='dstx' >
                            {
                              product.specifications.map((item, index)=>(
                                <li key={index}>
                                <strong>{item.key}:</strong> {item.value}
                                </li>
                              ))
                            }
                            
                          </ul>
                       </div>
                    </div>

                   </article>
                  )
                }
                        {/* Product Box Content */}
                    {(product.boxcontent?.package?.length > 0 || product.boxcontent?.note?.length > 0 || product.boxcontent?.general?.length > 0) && (
                        <article className='dfcr'>
                          <div className='crdcr'>
                            <h2 className='crd-text'>BOX CONTENT</h2>
                            <div className='crdxt'>
                              <ul style={{ margin: '0px', boxSizing: 'border-box' }}>
                                {/* Display "package" if it exists */}
                                {product.boxcontent?.package?.length > 0 &&
                                  product.boxcontent.package.map((item, index) => <li key={index}>{item}</li>)
                                }

                                {/* Display "note" if it exists */}
                                {product.boxcontent?.note?.length > 0 &&
                                  product.boxcontent.note.map((item, index) => <li key={index}>{item}</li>)
                                }

                                {/* If both package & note are empty, show "general" */}
                                {product.boxcontent?.package?.length === 0 && 
                                product.boxcontent?.note?.length === 0 && 
                                product.boxcontent?.general?.length > 0 &&
                                  product.boxcontent.general.map((item, index) => <li key={index}>{item}</li>)
                                }
                              </ul>
                            </div>
                          </div>
                        </article>
                      )}
                      
                </div>
              </div>
           </section>
               {/* Side Cards */}
            <div className='side-card'>
              <div className='stide'>
                <nav className='chride'>

                  {/* Product Details Side Card */}
                  <Link to='#prodetails' className={`hjiko ${activetab.prodetails ? "active" : ""}`}
                     onClick={() => handleScrollTo('prodetails')} > 
                      <img className='smite' src="/prodetails.png" alt="" />
                     Product details 
                   </Link> 

                   {/* Product Specs Side Card */}
                   <Link to='#prospecs' className={`hjiko ${activetab.prospecs ? "active" : ""}`}
                     onClick={() => handleScrollTo("prospecs")}>
                     <img className='smite' src="/custspec.png" alt="" />
                     Specifications 
                   </Link>

                   {/* Product Customer Feedback Side Card */}
                   <Link to='#proreviews' className={`hjiko ${activetab.proreviews ? "active" : ""}`}
                    onClick={() => handleScrollTo("prospecs")}>
                      <img className='smite' src="/custfeed.png" alt="" />
                     Verified Customer Feedback 
                   </Link>  
                </nav>
                   {/* Product Images, Name and Price Side Card */}
                <div className='jside'>
                  <div className='jdide'>
                      <img src={product.images[mainimage]} alt={product.name} style={{height: '90px'}} />
                      <div className='jgide'>
                        <h3 className='cdtxtr'>{product.name}</h3>
                        <div className='jride'>
                          <span className='price-tag1'>&#8358;{product.salesprice.toLocaleString()}</span>
                          <div className='jdide'>
                            <span className='bop11'>&#8358;{product.initialprice.toLocaleString()}</span>
                            <span className='bop22'>{product.percent}%</span>
                          </div>
                         
                        </div>
                      </div>
                  </div>
                  {/* Add to Cart Btn Side Card */}
                  <button 
                    className='otcb'
                    onClick={() => addToCart(product)}
                    disabled={loadingItemId === product._id}
                  >
                    {loadingItemId === product._id ? <Spinner /> : (
                      <>
                        <img className='crt' src="/mycart.png" alt="" />
                        <span className='cbt'>Add to Cart</span>
                      </>
                    )}
                  </button>

                </div>
                {/* Support Chat */}
                <div className='jside1'>
                  <span className='scid'>Questions about this product?</span>
                  <button className='skid'>
                    <img src="/chatbot.png" alt="" />
                    <span style={{textIndent: '8px'}}>Chat</span>
                  </button>
                </div>
              </div>
            </div>
        </div>
      </main>
      
    </>
  )
}

export default Product
