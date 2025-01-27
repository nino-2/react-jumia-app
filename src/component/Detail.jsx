import React from 'react'
import aboutusOne from '../assets/aboutusone.jpg'
import aboutusThree from '../assets/aboutusthree.png'
import aboutusSix from '../assets/aboutussix.png'
import aboutusSeven from '../assets/aboutusseven.png'
import aboutusEight from '../assets/aboutuseight.jpg'
import aboutusNine from '../assets/aboutusnine.jpg'
import aboutusTen from '../assets/aboutusten.jpg'

const detail = () => {
  return (
    <>
      <main className='outter1'>
        <div className='inner1'>
            <div className='xxl-row'>
                <p className='about-us'>About us</p>
                <span>
                    <a href="#" className='menu-title'>Our Vision</a>
                </span>
                <span className='seperator'></span>
                <span>
                    <a href="#" className='menu-title'>Jumia Today</a>
                </span>
                <span className='seperator'></span>
                <span>
                    <a href="#" className='menu-title'>Our History</a>
                </span>
                <span className='seperator'></span>
                <span>
                    <a href="#" className='menu-title'>Awards</a>
                </span>
                <br />
                <div className='t-line'></div>
            </div>
            <br className='clear' />
            <div className='xxl-row'>
                <div>
                    <img className='locate' src={aboutusOne} alt="" />
                </div>
                <p className='sb-head'>Our Vision</p>
                <p className='sb-text txt1'>We are building the most beloved and trusted shopping destination for Africans.</p>
            </div>
            <div className='xxl-row'>
                <br />
                <center>
                    <div className='aboutustwo'>
                        <p className='sub-title1'>Access 100%
                            <br />
                            <span style={{color: '#f90'}}>Genuine</span>
                            "Products"
                            <br />
                            "from Local &"
                            <br />
                            "International Vendors"
                        </p>
                        <p className='sub-title2'>Buy Anything You 
                            <br />
                            "want online at"
                            <br />
                            "the Best Prices"
                        </p>
                        <p className='sub-title3'> Search, Order on 
                            <br />
                            "all Platforms"
                            <br />
                            "Pay on Delivery"
                        </p>
                        <p className='sub-title4'>Assisting Our Customers
                            <br />
                            "for the best"
                            <br />
                            "Shopping Experience"

                        </p>
                    </div>
                </center>
            </div>
            <div className='xxl-row'>
                <br />
                <br />
                <center>
                    <img className src={aboutusThree}  />
                    <div className='grey-cover'>
                        <p className='sb-title1'>Jumia Today</p>
                        <p className='sm-text'>In a Nutshell</p>
                        <div className='first-bg'>
                         <p className='text1'>6,000,000 
                            <br />
                            Products</p>
                         <p className='text2'>13 
                            <br />
                            African 
                            <br />
                            Countries</p>
                         <p className='text3'>Over 50,000 
                            <br />
                            International
                             <br />
                             & National
                             <br />
                              Brands</p>
                         <p className='text4'>Over 10,000 
                            <br />
                            Active Vendors</p>
                            <br className='clear' />
                            <p className='text5'>
                                Jumia offers the 
                                <br />
                                widest assortment
                                <br />
                                at an unbeatable price
                            </p>
                            <p className='text6'>
                                The Pan African
                                <br />
                                Online Commerce
                            </p>
                            <p className='text7'>
                                Samsung,
                                <br />
                                Infinix, Innjoo,
                                <br />
                                Vero Moda, Jack & Jones..
                            </p>
                            <p className='text8'>
                                Nigeria's Biggest Online Mall
                            </p>
                        </div>
                        <br className='clear' />
                        <br />
                        <div className='second-bg'>
                           <p className='dot1'>
                            #1 E-Commerce
                            <br />
                            Website, Nigeria
                            </p> 
                           <p className='dot2'>
                            Over 4 Million
                            <br />
                            Subscribers
                            </p> 
                           <p className='dot3'>
                            10 Commercial
                            <br />
                             Events
                            </p> 
                           <p className='dot4'>
                             Many App 
                             <br />
                             Downloads
                            </p> 
                            <br  className='clear'/>
                            <p className='dot5'>
                                With Over 15 Million 
                                <br />
                                Monthly Visitors
                            </p>
                            <p className='dot6'>
                                Discover First the 
                                <br />
                                Best Deals on Jumia
                            </p>
                            <p className='dot7'>
                                Discover the Events 
                                <br />
                                Changing Africa's
                                <br />
                                Retail Industry
                            </p>
                            <p className='dot8'>
                                During Black Friday 2015
                            </p>
                        </div>
                        <br  className='clear'/>
                        <br />
                    </div>
                </center>
            </div>
            <div className='xxl-row'>
                <br />
                <br />
                <center>
                    <img src={aboutusSix} alt="" />
                    <div className='grey-cover'>
                        <p className='sb-title1'>History</p>
                        <br />
                        <div className='grid1'>
                            <ul className='sb-grid'>
                                <li>
                                    2012: Africa internet Group (AIG) launches Jumia in Nigeria,Morocco,South Africa and Egypt.
                                </li>
                                <li>
                                    2014: Jumia introduces Black Friday in Nigeria
                                    <ul>
                                        <li>Jumia launches Jumia Force an independent sales consultant program catering to populations that do not have access to internet. </li>
                                    </ul>
                                </li>
                                <li>
                                    2015: Jumia Black Friday attracts 2.3 million visitors in Nigeria 
                                    <ul>
                                        <li>Jumia introduces Jumia Pay a secure payment gateway for people to shop on all Jumia servcies</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className='grid1'>
                            <ul className='sb-grid'>
                                <li>
                                    2016:Africa Internet Group rebrands as Jumia
                                    <ul>
                                        <li>Jumia becomes Africa's first tech unicorn</li>
                                        <li>Jumia supports the African tech ecosystem by powering the MTN Entrepreneurship Challenge. Pass.ng, MedRX and Vicoba are ranked the three best startups.</li>
                                    </ul>
                                </li>
                                <li>
                                    2017:Jumia celebrates its Fifth Anniversary milestone
                                    <ul>
                                        <li>Jumia launces Nigeria's first E-commerce Bot, the Jumia Bot, accessible on Facebook Messenger</li>
                                        <li>Jumia Nigeria organizes in partnership with Trace Tv, a first of its kind global live event, the ultimate Music and Deals Festival MAD- Fest </li>
                                    </ul>
                                </li>
                                
                            </ul>
                        </div>
                        <br  className='clear'/>
                        <br />
                    </div>
                </center>
            </div>
            <div className='xxl-row'>
                <br />
                <br />
                <center>
                    <img src={aboutusSeven} alt="" />
                    <div className='grey-cover'>
                        <p className='sb-title1'>Awards</p>
                        <br />
                        <div className='grid1'>
                            <ul className='sb-grid'>
                                <li>2013:Jumia Nigeria is the first African company to win the world retail awards in 2013 with the previous winners including ASOS and Zappos.com</li>
                                <ul>
                                    <li>Leadership ICT company of the year 2013 -Jumia</li>
                                    <li>Economy website of the year(Beacon of ICT Award)</li>
                                    <li>Success Digest-Innovative  business of the year 2013</li>
                                </ul>
                                <li>2015:Jumia Nigeria organizes Customer Sevice Excellence Awards 2015.</li>
                                <ul>
                                    <li>Orange Academy brand wall of Fame- Jumia Nigeria</li>
                                    <li>Rima Awards-Best Use of Mobile App- Jumia App</li>
                                </ul>
                            </ul>
                        </div>
                        <div className='grid1'>
                         <ul className='sb-grid'>
                            <li>
                                2016: Jumia is ranked among the MIT 50 Smartest Companies globally.
                            </li>
                            <li>2017: Jumia is ranked, for the second year in a row, in the MIT 50 Smartest Companies globally.</li>
                         </ul>
                        </div>
                        <br className='clear' />
                        <br />
                        <div className='grid2'>
                            <img className='grid3' src={aboutusEight} alt="" />
                            <br className='clear'/>
                            <br />
                            <p className='txtct'>Brand Journalist Association Awards BJAN (2013)</p>
                        </div>
                        <div className='grid2'>
                            <img className='grid3' src={aboutusNine} alt="" />
                            <br className='clear'/>
                            <br />
                            <p className='txtct'>World Retail Awards 2013</p>
                        </div>
                        <div className='grid2'>
                            <img className='grid3'src={aboutusTen} alt="" />
                            <br className='clear'/>
                            <br />
                            <p className='txtct'>e-Commerce Website of the Year(Beacon of ICT Award)</p>
                        </div>
                        <br  className='clear'/>
                        <br />
                    </div>
                </center>
            </div>
            <div className='xxl-row'>
               <br />
               <br />
               <center>
                <a href="#" className='btn0'>Shop Now</a>
                <a href="#" className='btn0' style={{marginLeft:'5%'}}>Sell on Jumia</a>
                <a href="#" className='btn0' style={{marginLeft:'5%'}}>Affiliate Partner</a>
                <a href="#" className='btn0' style={{marginLeft:'5%'}}>Jforce-Sales Consultant</a>
               </center>
            </div>
            <br className='clear' />
            <br />
        </div>
      </main>
    </>
  )
}

export default detail