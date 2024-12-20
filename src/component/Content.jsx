import React from 'react'
import appIcon from '../assets/appliance.png'
import mobileIcon from '../assets/mobile-phone.png'
import healthIcon from '../assets/hbeauty.png'
import homeIcon from '../assets/home.svg'
import tvIcon from '../assets/tv.png'
import fashIcon from '../assets/fashion.png'
import supIcon from '../assets/supermarket.png'
import compIcon from '../assets/compute.png'
import  babyIcon from '../assets/babyprod.png'
import gameIcon from '../assets/gaming.png'
import catIcon from '../assets/categories.png'
import flashSales from '../assets/flash sales.jpg'
import carTwo from '../assets/carouseltwo.gif'
import carThree from '../assets/carouselthree.gif'
import decSlide from '../assets/decslide.jpg'
import deFacto from '../assets/defacto.jpg'
import carFour from '../assets/carouselfour.gif'
import phoneIcon from '../assets/phone-icon.png'
import sellIcon from '../assets/sell-icon.png'
import returnIcon from '../assets/return-icon.png'
import shopEarn from '../assets/shop-earn.png'
import chillWeb from '../assets/chilling-ac.gif'
import cookWeb from '../assets/cooking-web.gif'
import coolWeb from '../assets/cooling-web.gif'
import whiteBlack from '../assets/whitebl.jpg'
import skyRun from '../assets/skyrun.jpg'
import hTv from '../assets/htv.jpg'
import neXus from '../assets/nexus.jpg'
import ecoFlow from '../assets/ecoflow.jpg'
import adiDas from '../assets/white adidas.jpg'
import appAc from '../assets/appair.png'
import appFans from '../assets/fan.jpg'
import appFridges from '../assets/fridges.png'
import appMicro from '../assets/micro.png'
import appKettle from '../assets/kettle.png'
import appBlenders from '../assets/blenders.png'
import appHair from '../assets/hair.png'
import doubleBan from '../assets/dbanner1.png'
import doubleBann from '../assets/dbanner2.png'
import cardTv from '../assets/television.png'
import cardNew from '../assets/new.gif'
import cardClr from '../assets/clear.png'
import cardAppl from '../assets/applia.png'
import cardFifty from '../assets/fifty.gif'
import cardPhone from '../assets/phone.png' 
import cardSpecial from '../assets/special.png'
import arrow from '../assets/arrow.svg'
import iconFlash from '../assets/iconflash.png'
import mediAna from '../assets/mediana.jpg'
import aCe from '../assets/ace.jpg'
import tempT from '../assets/temptation.jpg'
import waTer from '../assets/pure oil.jpg'
import itEl from '../assets/smart watch.jpg'
import decoG from '../assets/decogear.jpg'




const Content = () => {
  return (
    <>
    
      <main className='outter'>
        <div className='inner'>
          <div className='first'>
            <div className='firstinner'>
              <a href="#" className='outline'>
                <img
                  src={appIcon}
                  style={{height: '20px'}}
                 
                />
                <span className='fort'>Appliances</span>
              </a>
              <a href="#" className='outline'>
                <img
                  src={mobileIcon}
                  style={{height: '20px'}}
                 
                />
                <span className='fort'>Phones & Tablets</span>
              </a>
              <a href="#" className='outline'>
                <img
                  src={healthIcon}
                  style={{height: '20px'}}
                 
                />
                <span className='fort'>Health & Beauty</span>
              </a>
              <a href="#" className='outline'>
                <img
                  src={homeIcon}
                  style={{height: '20px'}}
                 
                />
                <span className='fort'>Home & Office</span>
              </a>
              <a href="#" className='outline'>
                <img
                  src={tvIcon}
                  style={{height: '20px'}}
                 
                />
                <span className='fort'>Electronics</span>
              </a>
              <a href="#" className='outline'>
                <img
                  src={fashIcon}
                  style={{height: '20px'}}
                 
                />
                <span className='fort'>Fashion</span>
              </a>
              <a href="#" className='outline'>
                <img
                  src={supIcon}
                  style={{height: '20px'}}
                 
                />
                <span className='fort'>Supermarket</span>
              </a>
              <a href="#" className='outline'>
                <img
                  src={compIcon}
                  style={{height: '20px'}}
                 
                />
                <span className='fort'>Computing</span>
              </a>
              <a href="#" className='outline'>
                <img
                  src={babyIcon}
                  style={{height: '20px'}}
                 
                />
                <span className='fort'>Baby Products</span>
              </a>
              <a href="#" className='outline'>
                <img
                  src={gameIcon}
                  style={{height: '20px'}}
                 
                />
                <span className='fort'>Gaming</span>
              </a>
              <a href="#" className='outline'>
                <span className='fort'>Musical Instrument</span>
              </a>
              <a href="#" className='outline'>
                <img
                  src={catIcon}
                  style={{height: '20px'}}
                 
                />
                <span className='fort'>Other Categories</span>
              </a>
            </div>
          </div>
          <div className='display'>
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide jfk"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner cbi">
              <div className="carousel-item active">
                <img className="xyz" src={flashSales} />
              </div>
              <div className="carousel-item">
                <img
                  className="xyz"
                  src={carTwo}
                  
                />
              </div>
              <div className="carousel-item">
                <img className="xyz" src={carThree} />
              </div>
              <div className="carousel-item">
                <img className="xyz" src={decSlide} />
              </div>
              <div className="carousel-item">
                <img className="xyz" src={deFacto} />
              </div>
              <div className="carousel-item">
                <img className="xyz" src={carFour} />
              </div>
            </div>
          </div>
          </div>
          <div className='cards'>
            <div className='cut'>
              <a className="line" href="#">
                <img
                  src={phoneIcon}
                  style={{height: '20px', position: 'absolute', top: '7px', left: '5px'}}
                />
                <p className="fork">CALL TO ORDER</p>
                <p className="fit">0700-600-0000</p>
              </a>
              <a className="line" href="#">
                <img
                  src={sellIcon}
                  style={{height: '20px', position: 'absolute'}}
                />
                <p className="fork">Sell on Jumia</p>
              </a>
              <a className="line" href="#">
                <img
                  src={returnIcon}
                  alt=""
                  style={{height: '20px', position: 'absolute'}}
                />
                <p className="fork">Best Deals</p>
              </a>
            </div>
            <div className='pay'>
            <img src={shopEarn} />
            </div>
          </div>
        </div>
        <div className='xxl'>
        <section className='cardth1'>
          <div className='downward'>
          <a href="#" className='donb1'>
                <div className='lockd1'>
                <img src={cardTv}  className='imglock1' />
                </div>
                <p className='subtext'>TV & Audio Deals</p>
              </a>
              <a href="#" className='donb1'>
                <div className='lockd1'>
                <img src={cardNew}  className='imglock1' />
                </div>
                <p className='subtext'>New Arrival</p>
              </a>
              <a href="#" className='donb1'>
                <div className='lockd1'>
                <img src={cardClr}  className='imglock1' />
                </div>
                <p className='subtext'>Clearance Sale</p>
              </a>
              <a href="#" className='donb1'>
                <div className='lockd1'>
                <img src={cardAppl}  className='imglock1' />
                </div>
                <p className='subtext'>Appliances Deals</p>
              </a>
              <a href="#" className='donb2'>
                <div className='lockd1'>
                <img src={cardFifty}  className='imglock1' />
                </div>
                <p className='subtext'>Up to 50% off</p>
              </a>
              <a href="#" className='donb2'>
                <div className='lockd1'>
                <img src={cardPhone}  className='imglock1' />
                </div>
                <p className='subtext'>Phones & Tablet Deals</p>
              </a>
              <a href="#" className='donb2'>
                <div className='lockd1'>
                <img src={cardSpecial}  className='imglock1' />
                </div>
                <p className='subtext'>Special Offer</p>
              </a>
          </div>
          
        </section>
       </div>
        <div className='xxl4'>
        <section className='cardoh'>
          <header className='disect' style={{backgroundColor:'red', color:'white'}}>
            <div className='testing'>
                <img src={iconFlash} className='flashsale' />
                <p className="size">Flash Sales</p>
            </div>
            <div className='yog'>
                <span className='fog'>Time Left:</span>
                <time className='ffs' dateTime='2024-08-14' id='demo'> 14h : 59m : 00s </time>
              </div>
            <div className='yoga'>
                <a className='just1' href="#">
                  SEE ALL
                  <img src={arrow} className='dirt' />
                </a>
            </div>
          </header>
          <div className='bisect'>
            <div className='onward'>
              <div className='tfu'>
                <a href="#" className='dond'>
                  <img src={mediAna} className='iimg' />
                  <div>
                    <p className='cdtxt'>Mediana Condition...</p>
                    <p className='cdamt'>&#8358;2,785</p>
                    <p className='cdnt'>&#8358;4,000</p>
                  </div>
                </a>
              </div>
              <div className='tfu'>
                <a href="#" className='dond'>
                  <img src={aCe} className='iimg' />
                  <div>
                    <p className='cdtxt'>Ace Elec 2000Mah Ultr</p>
                    <p className='cdamt'>&#8358;8,500</p>
                    <p className='cdnt'>&#8358;15,000</p>
                  </div>
                </a>
              </div>
              <div className='tfu'>
                <a href="#" className='dond'>
                  <img src={tempT} className='iimg' />
                  <div>
                    <p className='cdtxt'>Temptation Perfume..</p>
                    <p className='cdamt'>&#8358;4,500</p>
                    <p className='cdnt'>&#8358;7,000</p>
                  </div>
                </a>
              </div>
              <div className='tfu'>
                <a href="#" className='dond'>
                  <img src={waTer} className='iimg' />
                  <div>
                    <p className='cdtxt'>Water-soluble Aroma...</p>
                    <p className='cdamt'>&#8358;6,160</p>
                    <p className='cdnt'>&#8358;12,680</p>
                  </div>
                </a>
              </div>
              <div className='tfu'>
                <a href="#" className='dond'>
                  <img src={itEl} className='iimg' />
                  <div>
                    <p className='cdtxt'>Itel 1.83" Sones Smart</p>
                    <p className='cdamt'>&#8358;15,199</p>
                    <p className='cdnt'>&#8358;50,000</p>
                  </div>
                </a>
              </div>
              <div className='tfu'>
                <a href="#" className='dond'>
                  <img src={decoG} className='iimg' />
                  <div>
                    <p className='cdtxt'>Deco Gear Laptop sta...</p>
                    <p className='cdamt'>&#8358;2,980</p>
                    <p className='cdnt'>&#8358;5,898</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
       </div>
        <section className='xxl1'>
        <div
          className='webgif'
          style={{
            display: 'flex',
            backgroundColor: 'white',
            alignContent: 'center',
            padding: '5px',
            justifyContent: 'space-between'
          }}>
          <div>
            <a href="#"> <img src={chillWeb}  /> </a>
          </div>
          <div>
            <a href="#"> <img src={cookWeb}/> </a>
          </div>
          <div>
            <a href="#"> <img src={coolWeb}/> </a>
          </div>
        </div>
        </section>
       <div className='xxl'>
        <section className='cardoh'>
          <header className='disect' style={{backgroundColor:'#276076', color:'white'}}>
            <div className="d-flex align-items-center">
                <p className="size">Limited Stock Deals</p>
            </div>
            <div className='yoga'>
                <a className="just1" href="#">
                  SEE ALL
                  <img src={arrow} className='dirt' />
                </a>
            </div>
          </header>
          <div className='bisect'>
            <div className='onward'>
              <div className='tfu'>
                <a href="#" className='dond'>
                  <img src={whiteBlack} className='iimg' />
                  <div>
                    <p className='cdtxt'>Osc Signatures Mens..</p>
                    <p className='cdamt'>&#8358;5,700</p>
                    <p className='cdnt'>&#8358;8,000</p>
                  </div>
                  {/* <div className='fnt1'>Osc Signatures Mens..</div>
                  <div className='font2'>&#8358;5,700</div>
                  <div className='fnt3'>&#8358;8,000</div> */}
                </a>
              </div>
              <div className='tfu'>
                <a href="#" className='dond'>
                  <img src={skyRun} className='iimg' />
                  <div>
                    <p className='cdtxt'>Skyrun 1HP-Split Air..</p>
                    <p className='cdamt'>&#8358;299,990</p>
                    <p className='cdnt'>&#8358;635,600</p>
                  </div>
                </a>
              </div>
              <div className='tfu'>
                <a href="#" className='dond'>
                  <img src={hTv} className='iimg' />
                  <div>
                    <p className='cdtxt'>Hikers 43" FHD LED TV</p>
                    <p className='cdamt'>&#8358;192,900</p>
                    <p className='cdnt'>&#8358;234,423</p>
                  </div>
                </a>
              </div>
              <div className='tfu'>
                <a href="#" className='dond'>
                  <img src={neXus} className='iimg' />
                  <div>
                    <p className='cdtxt'>Nexus Gas Cooker</p>
                    <p className='cdamt'>&#8358;139,135</p>
                    <p className='cdnt'>&#8358;142,135</p>
                  </div>
                </a>
              </div>
              <div className='tfu'>
                <a href="#" className='dond'>
                  <img src={ecoFlow} className='iimg' />
                  <div>
                    <p className='cdtxt'>ECOFLOW Power Sta..</p>
                    <p className='cdamt'>&#8358;639,999</p>
                    <p className='cdnt'>&#8358;710,761</p>
                  </div>
                </a>
              </div>
              <div className='tfu'>
                <a href="#" className='dond'>
                  <img src={adiDas} className='iimg' />
                  <div>
                    <p className='cdtxt'>ADIDAS Core Sneakers</p>
                    <p className='cdamt'>&#8358;20,407</p>
                    <p className='cdnt'>&#8358;51,017</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
       </div>
       <section className='xxl2'>
        <div
          className='webgif1'
          style={{
            display: 'flex',
            backgroundColor: 'white',
            alignContent: 'center',
            padding: '5px',
            justifyContent: 'space-between'
          }}>
          <div>
            <a href="#"> <img src={doubleBan}  /> </a>
          </div>
          <div>
            <a href="#"> <img src={doubleBann}/> </a>
          </div>
        </div>
        </section>
       <div className='xxl'>
        <section className='cardth'>
          <header className='disect1' style={{backgroundColor:'#FF550C', color:'white'}}>
            <div className='mx-auto'>
              <p className='size'>Appliances Deals</p>
            </div>
          </header>
          <div className='eject'>
            <div className='downward'>
              <a href="#" className='donb'>
                <div className='lockd'>
                <img src={appAc} alt="AIR CONDITIONERS" className='imglock' />
                </div>
              </a>
              <a href="#" className='donb'>
                <div className='lockd'>
                <img src={appFans}  className='imglock' />
                </div>
              </a>
              <a href="#" className='donb'>
                <div className='lockd'>
                <img src={appFridges}  className='imglock' />
                </div>
              </a>
              <a href="#" className='donb'>
                <div className='lockd'>
                <img src={appMicro}  className='imglock' />
                </div>
              </a>
              <a href="#" className='donb5'>
                <div className='lockd'>
                <img src={appKettle}  className='imglock0' />
                </div>
              </a>
              <a href="#" className='donb5'>
                <div className='lockd'>
                <img src={appBlenders}  className='imglock0' />
                </div>
              </a>
              <a href="#" className='donb5'>
                <div className='lockd'>
                <img src={appHair}  className='imglock0' />
                </div>
              </a>
            </div>
          </div>
        </section>
       </div>
      </main>
    </>
  )
}

export default Content