import React, { useState } from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import  *as yup  from 'yup'
import jumiaLog from '../assets/myjumia-top-logo.png'
import jumiaLogo from '../assets/jumia.png'
import { useNavigate } from 'react-router-dom'

const PersonalGenbirth = () => {
    let navigate = useNavigate()
    let email = localStorage.getItem("userEmail")
     let url = 'http://localhost:5001/user/updated'
    const [agreed, setAgreed] = useState(false)
    const handleCheckboxChange = (event) => {
        setAgreed(event.target.checked);
      };
    const [message, setMessage] = useState('')
    
    let formik = useFormik({
        initialValues:{
            gender: '',
            birthdate: '', 
            
        },
        onSubmit: (values) => {
            console.log({email,...values})
            axios.patch(url,{email, ...values}, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((response)=>{
              console.log(response);
              if(response.data.status) {
                navigate('/')
              } else{
                  setMessage(response.data.message)
              }
            })
            .catch((err)=>{
              console.log(err); 
            })
        },
        validationSchema:yup.object({
            gender:yup.string().required(),
            birthdate:yup.string().required('Please type a valid birth date'),
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
                        <form action="" onSubmit={formik.handleSubmit}>
                            <div className='amg-center'>
                                <p className='amg'>Personal details</p>
                                <p className='sub-amg'>Almost there... Just a few more details.</p>
                            <div className='keyholders1'>
                                <small>{message}</small>
                                <div className="form-floating mb-3">
                                    <select id='inputState' name='gender' className={formik.errors.gender&& formik.touched.gender ? "form-select my-2 my-lg-2 is-invalid" : "form-select my-2 my-lg-2" }  placeholder="gender" onChange={formik.handleChange} onBlur={formik.handleBlur}>
                                    <option value=""></option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        </select>  
                                    <label htmlFor="floatingInput">Gender*</label>
                                </div>
                                {/* <small className='text-danger'>{ formik.touched.gender&& formik.errors.gender}</small> */}
                            </div>
                            <div className='keyholders1'>
                            <div className="form-floating  round">
                                <input type="date"  name='birthdate' className={formik.errors.birthdate&& formik.touched.birthdate ? "form-control my-2 my-lg-2 is-invalid ope" : "form-control my-2 my-lg-2 ope" }  placeholder="birthdate" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                <label htmlFor="floatingPassword">Birth date*</label>
                            </div>
                            <small className='text-danger xxy'>{formik.touched.birthdate&& formik.errors.birthdate}</small>
                            </div>
                            <div className='mydetails'>
                                <button type='submit'  disabled={!agreed} className={` ${agreed ? 'myorder1' : 'myorder'}`}>Continue</button>
                            </div>
                            <div className='legal'>
                                <input type="checkbox" className='autocheck' checked={agreed} onChange={handleCheckboxChange}/>
                                <span>I read and consented to the</span>
                                 <a className='autoaccept' href="https://my.jumia.com.ng/interaction//en-ng/terms-and-conditions">Terms and Conditions</a>
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

export default PersonalGenbirth