import React, { useState } from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import  *as yup  from 'yup'
import { useNavigate , useLocation} from 'react-router-dom'

const ResetPass = () => {
    const API_URL = import.meta.env.VITE_API_URL
    let url = `${API_URL}/user/reset`
    let navigate = useNavigate()
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const emailFromUrl = queryParams.get("email") || ''
    const [message, setMessage] = useState('')
    const [shownewpassword, setShownewpassword] = useState(false)

     let formik = useFormik({
        initialValues: {
            email: emailFromUrl,
            newPassword: '',
            confirmPassword: ''
        },
        onSubmit: (values) => {
            console.log(values)
            axios.post(url, values, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((response)=>{
                if (response.data.status) {
                    localStorage.setItem('userEmail', values.email);
                    localStorage.setItem('authToken', response.data.token);
                    if ( response.data.firstname) {
                        localStorage.setItem('userFirstname', response.data.firstname);
                    }
                   
                    
                    window.dispatchEvent(new Event('storage'));
                    setTimeout(() => navigate("/"), 100);
                    
                } else {
                    setMessage(response.data.message)
                }
            })
            .catch((error)=>{
                console.log(error);
            })
        },
        validationSchema:yup.object({
             newPassword:yup.string().min(6, 'Password must be at least 6 characters').required('This field is required'),
             confirmPassword:yup.string().oneOf([yup.ref('newPassword'), null], 'Passwords must match').required('This field is required')
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
                <div className='mycontext1'>
                <form  onSubmit={formik.handleSubmit}>
                    <div className='amg-center'>
                        <p className='amg'>Reset your password</p>
                        <p className='sub-amg'>Insert your new password.</p>
                    </div>
                    <div className='keyholders1'>
                    <small>{message}</small>
                        <div className="form-floating mb-3">
                            
                           <input type="email"  name='email' className= "form-control my-2 my-lg-2"  value={formik.values.email} readOnly/>
                            <label htmlFor="floatingInput">Email</label>
                        </div>
                        <small className='text-danger'>{ formik.touched.email&& formik.errors.email}</small>
                    </div>
                    <div className='keyholders1'>
                        <div className="form-floating mb-3 round">
                        <input type={shownewpassword ? "text" : "password"}  name='newPassword' className={formik.errors.newPassword&& formik.touched.newPassword ? "form-control my-2 my-lg-2 is-invalid" : "form-control my-2 my-lg-2" }  placeholder="newPassword" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                        <label htmlFor="floatingPassword"> New Password</label>
                        <img src={shownewpassword ? "/eyepass.png" : "/crosseye.png"} alt="Toggle Password"
                            className="eyeicon"
                            onClick={() => setShownewpassword(!shownewpassword)} />
                        </div>
                        <small className='text-danger'>{formik.touched.newPassword&& formik.errors.newPassword}</small>
                    </div>
                    <div className='keyholders1'>
                        <div className="form-floating round">
                        <input type={shownewpassword ? "text" : "password"}  name='confirmPassword' className={formik.errors.confirmPassword&& formik.touched.confirmPassword ? "form-control my-2 my-lg-2 is-invalid" : "form-control my-2 my-lg-2" } placeholder="confirmPassword" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                        
                        <label htmlFor="floatingconfirmPassword">Confirm Password</label>
                        <img src={shownewpassword ? "/eyepass.png" : "/crosseye.png"} alt="Toggle Password"
                            className="eyeicon"
                            onClick={() => setShownewpassword(!shownewpassword)} />
                        </div>
                        <small className='text-danger'>{formik.touched.confirmPassword&& formik.errors.confirmPassword}</small>
                    </div>
                    <div className='mydetails'>
                            <button  type='submit' className='myorders'>Change password</button>
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

export default ResetPass
