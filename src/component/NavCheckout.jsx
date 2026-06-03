import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, PhoneCallIcon, ShieldCheck, Undo2 } from 'lucide-react'
const NavCheckout = () => {

    const enquiryOptions = [
     {
        icon: PhoneCallIcon,
        title: 'Need Help?',
        detail: 'Contact us',
        href: '/contact'
     },
     {
        icon: Undo2,
        title: 'Easy',
        detail: 'Returns'
     },
     {
        icon: ShieldCheck,
        title: 'Secure',
        detail: 'Payments'
     },
    ]
  return (
    <nav className='head'>
      <div className='ptd'>
         {/*Jumia Logo*/}
          <div className='select-pay-logo'>
            <Link to='/'>
            <img className='ff2' src="/jumia.png" />
            </Link>
          </div>

          {/*Select Payment */}
          <div className='select-pay'>
            <div className='mobile-select'>
                <ArrowLeft size={16}/>
            </div>
            <h2 className='select-pay-text'>Select Payment</h2>
          </div>

            {/*Enquiry Options*/}
          <div className='select-enquiries'>
            {
                enquiryOptions.map((option, index)=>{
                    const Icon = option.icon;
                    return (
                        <div key={index} className='enquiry-section'>
                            <div className='enquiry-section-img'>
                                <Icon size={22}/>
                            </div>

                            <div className='enquiry-section-option'>
                                <p className='enquiry-title'>{option.title}</p>

                                {
                                    option.href ? (
                                        <Link to={option.href} className='enquiry-detail-link'>{option.detail}</Link>
                                    ) : (
                                       <p className='enquiry-detail'>{option.detail}</p>
                                    )
                                }
                                
                            </div>

                        </div>
                    )
                })
            }
          </div>
      </div>
    </nav>
  )
}

export default NavCheckout