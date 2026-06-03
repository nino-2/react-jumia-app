import React, { useState } from 'react'
import { useFormik } from 'formik'
import  *as yup  from 'yup'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../../Context/AuthContext'


const SignIn = () => {
    
    let navigate = useNavigate();
    const API_URL = import.meta.env.VITE_API_URL
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const emailFromUrl = queryParams.get("email") || ''

  
    const [showpassword, setShowpassword] = useState(false)
    const [errormsg, setErrormsg] = useState()
    const {setIsLoggedIn, setFirstname} = useAuth()

     let formik = useFormik({
            initialValues:{
                email: emailFromUrl,
                password: ''
            },
            onSubmit:(values) => {
             console.log(values)
             axios.post(`${API_URL}/user/login`,values, {
                headers: {
                   
                   'Content-Type': 'application/json'
                },
             })
             .then((response)=>{
                if(response.data.status) {
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('email', response.data.email)

                    window.dispatchEvent(new Event("cart-login"))
                    setIsLoggedIn(true)
                    setFirstname(response.data.firstname)
                    navigate('/')
                } else {
                   console.log('invalid credentials')
                }
             })
             .catch((error)=>{
                if (error.response) {
                    setErrormsg(error.response.data.message)
                }
                
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
                            <img src="/myjumia-top-logo.png" alt="" className='logo1' />
                       </div>
                       <div className='mycontext1'>
                        <form  onSubmit={formik.handleSubmit}>
                           <div className='amg-center'>
                               <p className='amg'>Welcome back!</p>
                               <p className='sub-amg'>Log back into your jumia account.</p>
                           </div>
                           <div className='keyholders1'>
                           <small style={{color: 'red'}}>{errormsg}</small>
                               <div className="form-floating mb-3">
                                   <input type="email"  name='email' className= "form-control my-2 my-lg-2"  value={formik.values.email} onChange={formik.handleChange}/>
                                   <label htmlFor="floatingInput">Email</label>
                               </div>
                           </div>
                           <div className='keyholders1'>
                             <div className="form-floating mb-3 round position-relative">
                               <input type={showpassword ? "text" : "password"}  name='password' className={formik.errors.password&& formik.touched.password ? "form-control my-2 my-lg-2 is-invalid" : "form-control my-2 my-lg-2" }  placeholder="password" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                               <label htmlFor="floatingPassword">Password</label>
                               <img src={showpassword ? "/eyepass.png" : "/crosseye.png"} alt="Toggle Password"
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
                        <img src="/jumia.png" alt="" className='footer-img' />
                       </div>
                   </div>
               </div>
             </div>
    </>
  )
}

export default SignIn