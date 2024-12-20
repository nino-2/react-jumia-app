import React from 'react'
import jmiaFoot from '../assets/jmiafoot.png'
import email from '../assets/email.png'
import starIcon from '../assets/staricon.jpg'
import appStore from '../assets/appstore.png'
import googlePlay from '../assets/googleplay.png'
import faceBook from '../assets/fbicon.png'
import youTube from '../assets/youtube.png'
import instaGram from '../assets/instagram.png'
import twiTter from '../assets/twittericon.png'
import payMent from '../assets/payment.png'
import masterCard from '../assets/mastercard.png'
import visaCard from '../assets/visa.png'
import interSwitch from '../assets/interswitch.png'
import dhl from '../assets/dhl.png'
import jmPay from '../assets/jmpay.png'


const Footer = () => {
  return (
    <>
      <footer className='pbm'>
        <div className='bgcolor'>
          <div className='row-pt'>
            <div className='nft'>
              <img src={jmiaFoot} className='ff2' />
            </div>
            <div className='nft2'>
              <div className='nice'>
              <div className='indice'>NEW TO JUMIA?</div>
              Subscribe to our newsletter to get updates on our latest offers!
              </div>
              <form action='newsletter' className='form8'>
                <div className='ripple'>
                  <div className='ripple1'>
                    <img src={email} className='mailbox' />
                    <input type='email' placeholder='Enter E-mail Address'className='fill' />
                  </div>
                  <div className='rags'>
                  <button className='dogs'>MALE</button>
                  <button className='dogs1'>FEMALE</button>
                  </div>
                </div>
                <div className='noni'>
                  <input type='checkbox' className='tick' />
                  <span className='termi'
                  >I agree to Jumia’s Privacy and Cookie Policy. You can
                  unsubscribe from newsletters at any time.</span
                >
                <div className='omg'>
                  <a href="#" className='here'>I accept the Legal Terms</a>
                </div>
                </div>
              </form>
            </div>
            <div className='nft3'>
              <div className='jpg'>
                <img src={starIcon} className='log-jpg' />
                <div className='nice1'>
                <div className='indice'>DOWNLOAD JUMIA FREE APP</div>
                Get access to exclusive offers!
                </div>
              </div>
              <div className='chase'>
                <a href="#">
                  <img src={appStore} className='dip' />
                </a>
                <a href="#">
                  <img src={googlePlay} className='dip' />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='row-bt'>
          <div className='cols-1'>
            <span className='spite'>NEED HELP?</span>
            <button className='chat'>Chat with us</button>
            <ul className='rotten'>
              <li>
                <a href="#" className='rota'>Help Center</a>
              </li>
              <li>
              <a href="#" className='rota'>Contact Us</a>
              </li>
              <li>
              <a href="#" className='rota'>Become a Seller</a>
              </li>
            </ul>
            <span className='spite1'>USEFUL LINKS</span>
            <ul className='rotten4'>
              <li>
                <a href="#" className='rot'>Service Center</a>
              </li>
              <li>
              <a href="#" className='rot'>How to shop on Jumia?</a>
              </li>
              <li>
              <a href="#" className='rot'>Delivery options and timelines</a>
              </li>
              <li>
              <a href="#" className='rot'>How to return a product on Jumia?</a>
              </li>
              <li>
              <a href="#" className='rot'>Corporate and bulk purchases</a>
              </li>
              <li>
                <a href="#" className='rot'>Report a Product</a>
              </li>
              <li>
              <a href="#" className='rot'>Dispute Resolution Policy</a>
              </li>
              <li>
              <a href="#" className='rot'>Returns & Refund Timeline</a>
              </li>
              <li>
              <a href="#" className='rot'>Return Policy</a>
              </li>
            </ul>
          </div>
          <div className='cols-1k'>
            <span className='spite'>ABOUT JUMIA</span>
            <ul className='rotten'>
              <li>
                <a href="#" className='rot'>About us</a>
              </li>
              <li>
              <a href="#" className='rot1'>Jumia careers</a>
              </li>
              <li>
              <a href="#" className='rot'>Jumia Express</a>
              </li>
              <li>
              <a href="#" className='rot'>Terms and Conditions</a>
              </li>
              <li>
              <a href="#" className='rot'>Privacy Notice</a>
              </li>
              <li>
              <a href="#" className='rot1'>Jumia Store Credit Terms and Conditions</a>
              </li>
              <li>
              <a href="#" className='rot1'>Jumia Payment Information Guidelines</a>
              </li>
              <li>
              <a href="#" className='rot1'>Cookie Notice</a>
              </li>
              <li>
              <a href="#" className='rot1'>Jumia Global</a>
              </li>
              <li>
              <a href="#" className='rot1'>Official Stores</a>
              </li>
              <li>
              <a href="#" className='rot'>Flash Sales</a>
              </li>
            </ul>
          </div>
          <div className='cols-1z'>
            <span className='spite'>MAKE MONEY WITH JUMIA</span>
            <ul className='rotten'>
              <li>
              <a href="#" className='rot'>Sell on Jumia</a>
              </li>
              <li>
              <a href="#" className='rot'>Vendor hub</a>
              </li>
              <li>
                <a href="#" className='rot'>Become a Sales Consultant</a>
              </li>
              <li>
              <a href="#" className='rot'>BBecome a Logistics Service Partner</a>
              </li>
              <li>
              <a href="#" className='rot'>Join the Jumia DA Academy</a>
              </li>
              <li>
              <a href="#" className='rot'>Join the Jumia KOL Program</a>
              </li>
            </ul>
          </div>
          <div className='cols-1p'>
            <span className='spite'>JUMIA INTERNATIONAL</span>
            <div className='row-it'>
              <ul className='rotten1'>
                <li>
                  <a href="#" className='rot'>Algeria</a>
                </li>
                <li>
                <a href="#" className='rot'>Egypt</a>
                </li>
                <li>
                <a href="#" className='rot'>Ghana</a>
                </li>
                <li>
                <a href="#" className='rot'>Ivory Coast</a>
                </li>
                <li>
                <a href="#" className='rot'>Kenya</a>
                </li>
              </ul>
              <ul className='rotten1'>
                <li>
                  <a href="#" className='rot'>Morocco</a>
                </li>
                <li>
                <a href="#" className='rot'>Senegal</a>
                </li>
                <li>
                <a href="#" className='rot'>Tunisia</a>
                </li>
                <li>
                <a href="#" className='rot'>Uganda</a>
                </li>
                <li>
                <a href="#" className='rot'>Zando</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='row-ct'>
          <div className='cols-2'>
            <div className='join'>JOIN US NOW</div>
            <div className='cold'>
              <a href="#"className='doc'>
                <img src={faceBook} className='tap'/>
              </a>
              <a href="#"className='doc'>
                <img src={youTube} className='tap'/>
              </a>
              <a href="#"className='doc'>
                <img src={instaGram} className='tap' />
              </a>
              <a href="#"className='doc'>
                <img src={twiTter} className='tap' />
              </a>
            </div>
          </div>
          <div className='cols-3'>
            <div className='join'>PAYMENT METHODS & DELIVERY PARTNERS</div>
            <div className='cold'>
             <a href="#"className='doc'>
                <img src={payMent} className='tap'/>
              </a>
              <a href="#"className='doc'>
                <img src={masterCard} className='tap'/>
              </a>
              <a href="#"className='doc'>
                <img src={visaCard} className='tap'/>
              </a>
              <a href="#"className='doc'>
                <img src={interSwitch} className='tap'/>
              </a>
              <a href="#"className='doc'>
                <img src={dhl} className='tap'/>
              </a>
            </div>
          </div>
        </div>
        <div className='row-dt'>
          <hr  className='line'/>
          <div className='tip'>
            <a href="#">
              <img src={jmPay} className='tcp' />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer