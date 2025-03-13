import React, { useEffect, useState } from 'react'
import aCe from '../assets/ace.jpg'
import prodImgb from '../assets/pdimgb.jpg'
import { Link } from 'react-router-dom'
import beFore from '../assets/leftarr.svg'
import afTer from '../assets/rightarr.svg'
import socFace from '../assets/socialf.png'
import socX from '../assets/socialx.png'
import socW from '../assets/socialws.png'
import iLike from '../assets/likedby.png'
import nLike from '../assets/notlike.png'
import iconFlash from '../assets/iconflash.png'
import myCart from '../assets/mycart.png'
import jumiaLog from '../assets/myjumia-top-logo.png'
import jmiaEx from '../assets/jumia-express.png'
import picProd from '../assets/pickprod.png'
import devProd from '../assets/deliverprod.png'
import retProd from '../assets/returnprod.png'
import sInfo from '../assets/infoid.png'
import wStar from '../assets/wstar.png'
import axios from 'axios'

const Product = ({rating}) => {
  const [states, setStates] = useState([])
  const [cities, setCities] = useState([])
  const [selectedstate, setSelectedState] = useState('')
  const [selectedcity, setSelectedCity] = useState('')
  const [mainimage, setMainimage] = useState('')

  useEffect(() => {
    axios.get('http://localhost:5001/api/states')
    .then((response)=>{
      if (response.data.states) {
        setStates(response.data.states)
      }
       
    })
    .catch((err)=>{
      console.log(err, 'Error fetching states')
    })
  }, [])
  const fetchCities = (stateName) => {
    axios.get(`http://localhost:5001/api/states/${stateName}`)
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

  
  const ratingPercentage = (rating / 5) * 100;
  const [liked, setLiked] = useState(false)
  const [follow, setFollow] = useState(false)
  const handleLike = () => {
    setLiked(!liked)
  }
  const handleflow = () => {
    setFollow(!follow)
  }
  return (
    <>
      <main className='family'>
        <div className='outter-space'>
          <div className='dimensions'>
             <Link to='#' className='arrow'>
              Home 
              <span className='cond'>{'>'}</span> 
             </Link>
             <Link to='#' className='arrow'>
              Phones & Tablets
              <span className='cond'>{'>'}</span> 
             </Link>
             <Link to='#' className='arrow'>
              Mobile Phone Accessories
              <span className='cond'>{'>'}</span> 
             </Link>
             <Link to='#' className='arrow'>
              Batteries & Battery Packs
              <span className='cond'>{'>'}</span> 
             </Link>
             <Link to='#' className='arrow'>
              Portable Power Banks
              <span className='cond'>{'>'}</span> 
             </Link>
             <Link to='#' className='arrow'>
              20000 Mah Ultra Slim Portable Power Bank
              {/* <span className='cond'>{'>'}</span>  */}
             </Link>
          </div>
          <section className='outter-card'>
            <div className='row-card'>
              <div className='tnt'>
                <div className='atnt'>
                  <div className='imgdiv'>
                    <input type="radio" className='slide' />
                    <Link to='#' className='dont'>
                    <img src={aCe} alt=""  className='pd-img'/>
                    </Link>
                    <input type="radio" className='slide' />
                    <Link to='#' className='dont'>
                    <img src={aCe} alt=""  className='pd-img'/>
                    </Link>
                    <input type="radio" className='slide' />
                    <Link to='#' className='dont'>
                    <img src={aCe} alt=""  className='pd-img'/>
                    </Link>
                    <input type="radio" className='slide' />
                    <Link to='#' className='dont'>
                    <img src={aCe} alt=""  className='pd-img'/>
                    </Link>
                    <input type="radio" className='slide' />
                    <Link to='#' className='dont'>
                    <img src={aCe} alt=""  className='pd-img'/>
                    </Link>
                    <input type="radio" className='slide' />
                    <Link to='#' className='dont'>
                    <img src={aCe} alt=""  className='pd-img'/>
                    </Link>
                  </div>
                  <div className='btnt'>
                    <div className='scroll'>
                      <div className='img-pd'>
                        <label htmlFor="" className='fitx'>
                          <img src={aCe} alt="" className='fity' />
                        </label>
                      </div>
                      <div className='img-pd'>
                        <label htmlFor="" className='fitx'>
                          <img src={prodImgb} alt="" className='fity' />
                        </label>
                      </div>
                      <div className='img-pd'>
                        <label htmlFor="" className='fitx'>
                          <img src={aCe} alt="" className='fity' />
                        </label>
                      </div>
                      <div className='img-pd'>
                        <label htmlFor="" className='fitx'>
                          <img src={aCe} alt="" className='fity' />
                        </label>
                      </div>
                      <div className='img-pd'>
                        <label htmlFor="" className='fitx'>
                          <img src={aCe} alt="" className='fity' />
                        </label>
                      </div>
                      <div className='img-pd'>
                        <label htmlFor="" className='fitx'>
                          <img src={aCe} alt="" className='fity' />
                        </label>
                      </div>
                      
                    </div>
                    <button className='left'>
                      <img src={beFore} alt="" />
                    </button>
                    <button className='right'>
                      <img src={afTer} alt="" />
                    </button>
                  </div>
                </div>
                <section className='tnt2'>
                 <hr  className='rule'/>
                  <h2 className='ctnt'>SHARE THIS PRODUCT</h2>
                  <div className='dtnt'>
                    <button className='link _rnd'>
                      <img src={socFace} alt=""  className='social'/>
                    </button>
                    <button className='link1 _rnd'>
                      <img src={socX} alt=""  className='social'/>
                    </button>
                    <button className='link1 _rnd'>
                      <img src={socW} alt=""  className='social'/>
                    </button>
                  </div>
                </section>
              </div>
              <div className='cnn'>
                <div className='cnna'>
                  <div className='inn-cnn'>
                    <div className='hd'>
                        <Link className='trade'>Official Store</Link>
                        <Link className='trade1'>Pay on Delivery</Link>
                    </div>
                    <h2 className='brnd'>Ace Elec 20000 MAh Utra Slim Portable Power Bank</h2>
                  </div>
                  <form action="">
                    <input type="hidden" />
                    <input type="hidden" />
                    <button onClick={handleLike} className='likebtn'>
                      <img src={ liked ? iLike : nLike}  alt="like"  />
                    </button>
                    <input type="hidden" />
                  </form>
                </div>
                <div className='cnnb'>
                  <div className='ctn1'>
                    Brand:
                    <Link className='extra'>Ace Elec</Link>
                     |
                    <Link className='extra1'>Similar products from Ace Elec</Link>
                  </div>
                  <div className='ctn2'>
                    <hr className='rule1' />
                    <div className='bbo'>
                      <div className='bbo1'>
                        <div className='bob'>
                          <img className='flash' src={iconFlash} alt="" />
                          <span className='sales'>Flash Sales</span>
                        </div>
                        <div className='bob1'>
                          Time Left: 
                          <time className='c-down' dateTime='2024-08-14' id='demo'> 14h : 59m : 00s </time>
                        </div>
                      </div>
                    </div>
                    <div className='brb'>
                      <span className='price-tag'>&#8358; 8,500</span>
                      <div className='beep'>
                        <span className='bop1'>&#8358; 15,000</span>
                        <span className='bop2'>-31%</span>
                      </div>
                      <div className='beep1'>
                        <span className='bop3'>
                          131 items left
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='ctn3'>
                     + shipping from
                     <span className='ptag'>&#8358; 600</span>
                      to {selectedcity ? selectedcity : 'your location'}
                  </div>
                  <div className='ctn4'>
                    <div className='hbc'>
                      <div className="in" style={{ width: `${78}%` }}></div>
                    </div>
                    <Link className='obc'>
                       (331 verified ratings)                      
                      </Link>
                  </div>
                </div>
                <div className='cnnc'>
                  <div className='tbc'>
                    <form action="" className='outcb'>
                      <button className='tcb'>
                        <img className='crt' src={myCart} alt="" />
                        <span className='cbt'>Add to Cart</span>
                      </button>
                      <input type="hidden" />
                    </form>
                  </div>
                </div>
                <div className='cnnd'>
                  <hr  className='rule12'/>
                   <p className='nbc'>PROMOTIONS</p>
                   <div className='jbc'>
                    <Link className='jbl'>
                       <img className='logs' src={jumiaLog} alt="" />
                       Call 07006000000 To Place Your Order
                    </Link>
                    <Link className='jbl'>
                       <img className='logs' src={jumiaLog} alt="" />
                       Need extra money? Loan u to &#8358;500,000 on the JumiaPay
                       Android App
                    </Link>
                    <Link className='jbl'>
                       <img className='logs' src={jumiaLog} alt="" />
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
                     <img className='myexpress' src={jmiaEx} alt="" />
                    </h3>
                    <p className='simp'>
                     The BEST products, delivered faster. Now PAY on DELIVERY, Cash or Bank Transfer Anywhere, Zero Wahala!&nbsp;
                    <button className='din'>Details</button>
                    </p>
                  </div>
                </article>
              </div>
              <div className='ciso'>
                <hr  className='rule13'/>
                <article className='cad2'>
                  <h3 className='tiso1'>Choose your location</h3>
                  <div className='dtx'>
                    <div className='fiwner'>
                      <select className='sel'  onChange={handleStateChange} value={selectedstate}>
                      <option  disabled>Please Select</option>
                        {states.map((state) => (
                          <option key={state.id} value={state.name}>{state.name}</option>
                        ))}
                      </select>
                    </div>
                  
                    <div className='fiwner'>
                      <select required className='sel' aria-label='Region' onChange={handleCityChange} value={selectedcity}>
                      {cities.map((city) => (
                        <option key={city.id} value={city.name}>{city.name}</option>
                      ))}
                      </select>
                    </div>
                 
                  </div>
                    
                  <section className='pr'>
                    <div>
                      <article className='dfpr'>
                         <img className='xim' src={picProd} alt="" />
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
                      <article className='dfpr'>
                         <img className='xim' src={devProd} alt="" />
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
                <article className='cad3'>
                  <hr className='rule1'/>
                  <img className='xim' src={retProd} alt="" />
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
            <div className='pts'>
              <section className='outcard1'>
                <Link className='rjd'>
                  <p className='slr'>SELLER INFORMATION</p>
                  <img className='slrx' src={afTer} alt="" />
                </Link>
                <div className='hr-pas'>
                  <hr className='rule13' />
                  <p className='t-pas'>Zeemak Ltd 2 - AC</p>
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
                      <img className='mg-pas' src={sInfo} alt="" />
                    </button>
                  </h3>
                  <div className='i-das'>
                    <span className='midas'>
                      <img className='gstar' src={wStar} alt="" />
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
                      <img className='gstar' src={wStar} alt="" />
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
                      <img className='gstar' src={wStar} alt="" />
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
      </main>
    </>
  )
}

export default Product