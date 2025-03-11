import React, { useState } from 'react'
import jumiaLog from '../assets/myjumia-top-logo.png'
import jumiaLogo from '../assets/jumia.png'
import { useFormik } from 'formik'
import  *as yup  from 'yup'
import hideIcon from '../assets/crosseye.png'
import showIcon from '../assets/eyepass.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
const SignIn = () => {
    let navigate = useNavigate();
    let url = 'http://localhost:5001/user/login'
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const emailFromUrl = queryParams.get("email") || ''

  
    const [showpassword, setShowpassword] = useState(false)

     let formik = useFormik({
            initialValues:{
                email: emailFromUrl,
                password: ''
            },
            onSubmit:(values) => {
             console.log(values)
             axios.post(url,values, {
                headers: {
                   'Content-Type': 'application/json'
                },
             })
             .then((response)=>{
                if(response.data.status) {
                    
                    localStorage.setItem('userFirstname', response.data.user.firstname || '')
                    localStorage.setItem('userEmail', response.data.user.email);
                    localStorage.setItem('token', response.data.token);

                    window.dispatchEvent(new Event("storage"));

                    navigate('/')
                } else {
                   console.log('invalid credentials')
                }
             })
             .catch((err)=>{
                console.log(err);
                
             })
             
            },
            validationSchema:yup.object({
                password:yup.string().required('Password is required')
            })
        })
        console.log(formik.errors)
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
                        <form  onSubmit={formik.handleSubmit}>
                           <div className='amg-center'>
                               <p className='amg'>Welcome back!</p>
                               <p className='sub-amg'>Log back into your jumia account.</p>
                           </div>
                           <div className='keyholders1'>
                           {/* <small>{message}</small> */}
                               <div className="form-floating mb-3">
                                   <input type="email"  name='email' className= "form-control my-2 my-lg-2"  value={formik.values.email} onChange={formik.handleChange}/>
                                   <label htmlFor="floatingInput">Email</label>
                               </div>
                           </div>
                           <div className='keyholders1'>
                             <div className="form-floating mb-3 round position-relative">
                               <input type={showpassword ? "text" : "password"}  name='password' className={formik.errors.password&& formik.touched.password ? "form-control my-2 my-lg-2 is-invalid" : "form-control my-2 my-lg-2" }  placeholder="password" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                               <label htmlFor="floatingPassword">Password</label>
                               <img src={showpassword ? showIcon : hideIcon} alt="Toggle Password"
                                className="eyeicon"
                                onClick={() => setShowpassword(!showpassword)} />
                             </div>
                           </div>
                           
                           <div className='mydetails'>
                                  <button  type='submit' className='myorders'>Login</button>
                           </div>
                           <div className='disclaimer'>
                            <Link to='/request-password' className='es350'>
                            <span className='forgotten'>Forgot your password?</span>
                            </Link>
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

export default SignIn