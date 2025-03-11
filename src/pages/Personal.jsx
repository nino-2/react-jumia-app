import React, { useState } from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import  *as yup  from 'yup'
import jumiaLog from '../assets/myjumia-top-logo.png'
import jumiaLogo from '../assets/jumia.png'
import { useNavigate } from 'react-router-dom'

const Personal = () => {
  let navigate = useNavigate()
  let email = localStorage.getItem("userEmail")

    let url = 'http://localhost:5001/user/update'
    const [message, setMessage] = useState('')
    let formik = useFormik({
        initialValues:{
            firstname: '',
            lastname: '', 
            phonenumber: ''
        },
        onSubmit: (values) => {
            console.log({email,...values})
            axios.patch(url,{email,...values}, {
              headers: {
                'Content-Type': 'application/json'
              }
            })
            .then((response)=>{
              console.log(response);
              if(response.data.status) {
                localStorage.setItem('userFirstname', values.firstname)
                navigate('/signup/gender-birthdate')
              } else{
                  setMessage(response.data.message)
              }
            })
            .catch((err)=>{
              console.log(err); 
            })
        },
        validationSchema:yup.object({
            firstname:yup.string().required(' Please type your first name as in your national ID'),
            lastname:yup.string().required(' Please type your last name as in your national ID'),
            phonenumber:yup.string().required(' Type a valid Phone number to continue'),

        })
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
                        <form  onSubmit={formik.handleSubmit}>
                           <div className='amg-center'>
                               <p className='amg'>Personal details</p>
                               <p className='sub-amg'>We just need you to fill in some details.</p>
                          
                           <div className='keyholders1'>
                            <small>{message}</small>

                               <div className="form-floating mb-3">
                                   <input type="text"  name='firstname' className={formik.errors.firstname&& formik.touched.firstname ? "form-control my-2 my-lg-2 is-invalid" : "form-control my-2 my-lg-2" }  placeholder="firstname" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                   <label htmlFor="floatingInput">First Name*</label>
                               </div>
                               <small className='text-danger xxy'>{ formik.touched.firstname&& formik.errors.firstname}</small>
                           </div>
                           <div className='keyholders1'>
                             <div className="form-floating mb-3 round">
                               <input type="text"  name='lastname' className={formik.errors.lastname&& formik.touched.lastname ? "form-control my-2 my-lg-2 is-invalid" : "form-control my-2 my-lg-2" }  placeholder="lastname" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            
                               <label htmlFor="floatingPassword">Last Name*</label>
                             </div>
                             <small className='text-danger xxy'>{formik.touched.lastname&& formik.errors.lastname}</small>
                           </div>
                           <div className='keyholders-phone'>
                            <div className=' roundx'>
                            <span className="input-group-text roundst " id="inputGroup-sizing-lg">+234</span>
                            </div>
                             <div className="form-floating roundbt">
                                <input type="text" name='phonenumber' placeholder="phonenumber" className={formik.errors.phonenumber&& formik.touched.phonenumber ? "form-control my-2 my-lg-2 is-invalid" : "form-control my-2 my-lg-2" } onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                               <label htmlFor="floatingphoneNumber">Phone Number*</label>
                               <small className='text-danger xxy'>{formik.touched.phonenumber&& formik.errors.phonenumber }</small>
                             </div>
                           </div>
                           <div className='mydetails'>
                                  <button type='submit' className='myorders'>Continue</button>
                           </div>
                           </div>
                        </form>
                           
                       </div>
                       <div className='footer-text'>
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

export default Personal