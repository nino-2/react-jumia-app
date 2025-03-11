import React, { useState } from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import jumiaLog from '../assets/myjumia-top-logo.png'
import jumiaLogo from '../assets/jumia.png'
import { useLocation, useNavigate } from 'react-router-dom'


const RequestPass = () => {
    let navigate = useNavigate();
    let url = 'http://localhost:5001/user/request'
    const location = useLocation();
    const [message, setMessage] = useState('')
    const queryParams = new URLSearchParams(location.search);
    const emailFromUrl = queryParams.get("email") || ''
     let formik = useFormik({
        initialValues: {
            email: emailFromUrl
        },
        enableReinitialize: true,
        onSubmit: (values) => {
            axios.post(url, values, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((response)=> {
                if (response.data.status) {
                    navigate(`/verify-password?email=${values.email}`)
                } else {
                    setMessage(response.data.message)
                }
            })
        }
     })
     
  return (
    <>
         <div className='whole-page'>
               <div className='main-content'>
                   <div className='container1'>
                       <div className='top-bar'></div>
                       <div className='content'>
                            <img src={jumiaLog} alt="" className='logo1' />
                       </div>
                       <div className='mycontext1'>
                        <form onSubmit={formik.handleSubmit}>
                           <div className='amg-center'>
                               <p className='amg'>Recover your password</p>
                               <p className='sub-amg'>You can request a password reset below. We will send a security code to the email address, please make sure it is correct.</p>
                           </div>
                           <div className='keyholders1'>
                           <small>{message}</small>
                               <div className="form-floating mb-3">
                                  <input type="email"  name='email' className= "form-control my-2 my-lg-2"  value={formik.values.email} onChange={formik.handleChange}/>
                                   <label htmlFor="floatingInput">Email</label>
                               </div> 
                           </div> 
                           <div className='mydetails'>
                                  <button  type='submit' className='myorders'>Request password reset</button>
                           </div>
                        </form>
                           
                       </div>
                       <div className='footer-text1'>
                           For further support, you may visit the Help Center or contact our customer service team.
                       </div>
                       <div className='footer-logo'>
                        <img src={jumiaLogo} alt="" className='footer-img' />
                       </div>
                   </div>
               </div>
             </div>
    </>
  )
}

export default RequestPass