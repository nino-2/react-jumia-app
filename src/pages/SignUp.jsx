import React, { useState } from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import  *as yup  from 'yup'
import { useNavigate } from 'react-router-dom'


const SignUp = () => {
  let navigate = useNavigate()
   const API_URL = import.meta.env.VITE_API_URL
   
   const [message, setMessage] = useState('')
   const [showpassword, setShowpassword] = useState(false)
    let formik = useFormik({
        initialValues:{
            email: '',
            password: '', 
            confirmPassword: ''
        },
        onSubmit: (values) => {
            console.log(values)
            axios.post(`${API_URL}/user/register`,values, {
              headers: {
                'Content-Type': 'application/json'
              }
            })
            .then((response)=>{
              console.log(response.data);
              
                if(response.data.status) {
                  console.log(values.email);
                  
                  localStorage.setItem('userEmail', values.email);
                  navigate('/signup/profile-details')
                } else{
                    setMessage(response.data.message)
                }
              
             
            })
            .catch((err)=>{
              console.log(err); 
            })
        },
        validationSchema:yup.object({
            email:yup.string().required('This field is required'),
            password:yup.string().min(6, 'Password must be at least 6 characters').required('This field is required'),
            confirmPassword:yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('This field is required')
        })
    })
    
    
  return (
    <>
      <div className='whole-page'>
        <div className='main-content'>
            <div className='container1'>
                <div className='top-bar'></div>
                <div className='content'>
                     <img src="/myjumia-top-logo.png" alt="" className='logo1' />
                </div>
                <div className='mycontext'>
                 <form  onSubmit={formik.handleSubmit}>
                    <div className='amg-center'>
                        <p className='amg'>Create your account</p>
                        <p className='sub-amg'>Let's get you started by creating your account.
                            <br />
                            To keep your account safe, we need a strong password
                        </p>
                    </div>
                    <div className='keyholders1'>
                    <small>{message}</small>
                        <div className="form-floating mb-3">
                          
                            <input type="email"  name='email' className={formik.errors.email&& formik.touched.email ? "form-control my-2 my-lg-2 is-invalid" : "form-control my-2 my-lg-2" }   placeholder="email" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            <label htmlFor="floatingInput">Email</label>
                        </div>
                        <small className='text-danger'>{ formik.touched.email&& formik.errors.email}</small>
                    </div>
                    <div className='keyholders1'>
                      <div className="form-floating mb-3 round">
                        <input type={showpassword ? "text" : "password"}  name='password' className={formik.errors.password&& formik.touched.password ? "form-control my-2 my-lg-2 is-invalid" : "form-control my-2 my-lg-2" }  placeholder="password" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                        <label htmlFor="floatingPassword">Password</label>
                         <img src={showpassword ? "/eyepass.png" : "/crosseye.png"} alt="Toggle Password"
                          className="eyeicon"
                          onClick={() => setShowpassword(!showpassword)} />
                      </div>
                      <small className='text-danger'>{formik.touched.password&& formik.errors.password}</small>
                    </div>
                    <div className='keyholders1'>
                      <div className="form-floating round">
                        <input type={showpassword ? "text" : "password"}  name='confirmPassword' className={formik.errors.confirmPassword&& formik.touched.confirmPassword ? "form-control my-2 my-lg-2 is-invalid" : "form-control my-2 my-lg-2" } placeholder="confirmPassword" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                       
                        <label htmlFor="floatingconfirmPassword">Confirm Password</label>
                        <img src={showpassword ? "/eyepass.png" : "/crosseye.png"} alt="Toggle Password"
                          className="eyeicon"
                          onClick={() => setShowpassword(!showpassword)} />
                      </div>
                      <small className='text-danger'>{formik.touched.confirmPassword&& formik.errors.confirmPassword}</small>
                    </div>
                    <div className='mydetails'>
                           <button  type='submit' className='myorders'>Continue</button>
                    </div>
                 </form>
                    
                </div>
                <div className='footer-text'>
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

export default SignUp