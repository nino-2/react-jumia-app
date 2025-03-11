import React, { useEffect, useState } from 'react'
import jumiaLog from '../assets/myjumia-top-logo.png'
import jumiaLogo from '../assets/jumia.png'
import { useFormik } from 'formik';
import  *as yup  from 'yup'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const VerifyPass = () => {
    let url = 'http://localhost:5001/user/verify'
    let navigate = useNavigate()
    const location = useLocation()
    
    const queryParams = new URLSearchParams(location.search);
    const emailFromUrl = queryParams.get("email") || ''
    const [message, setMessage] = useState('')
    const [timer, setTimer] = useState(60)
    const [requestcode, setRequestcode] = useState(false)
    useEffect(() => {
      if (timer > 0) {
        const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
          }, 1000);
          return () => clearInterval(interval);
      } else {
        setRequestcode(true)
      }
    }, [timer])
    const handleNewcode = () => {
        axios.post('http://localhost:5001/user/request',{email: emailFromUrl})
        .then((response)=> {
            setMessage(response.data.message)
            setTimer(60)
            setRequestcode(false)
        })
        .catch((error)=>{
            console.log(error)
            if (error.response && error.response.status === 429) {
                setMessage(error.response.data.message); 
            } else {
                setMessage('Error requesting new code. Please try again.');
            }
        })
        
    }
    
  let formik = useFormik({
    initialValues:{
        otp1: '',
        otp2: '',
        otp3: '',
        otp4: ''
    },
    onSubmit: (values, {setSubmitting}) => {
        const otpCode = values.otp1 + values.otp2 + values.otp3 + values.otp4;
        if (otpCode.length !== 4) {
            setMessage("Please enter a valid 4-digit code.");
            setSubmitting(false);
            return;
        }
        
        axios.post(url, { email: emailFromUrl, resetCode: otpCode }, {
            headers: { 'Content-Type': 'application/json' }
        })
        .then((response)=>{
            if (response.data.status) {
                navigate(`/reset-password?email=${emailFromUrl}`)
            } else {
                setMessage(response.data.message)
            }
        })
        .catch((err)=>{
            console.log(err)
        })
        .finally(()=>{
            setSubmitting(false)
        })
    },
    validationSchema:yup.object({
        otp1: yup.string().matches(/^\d$/, "Must be a number").required(),
        otp2: yup.string().matches(/^\d$/, "Must be a number").required(),
        otp3: yup.string().matches(/^\d$/, "Must be a number").required(),
        otp4: yup.string().matches(/^\d$/, "Must be a number").required(),
    })
  })
  
//   const handleInputchange = (e,fieldName, nextField) => {
//     let value = e.target.value
//     if (/^\d?$/.test(value)) {
//         formik.setFieldValue(fieldName, value);
//         if  (value.length === 1 && nextField) {
//             document.getElementById(nextField).focus()
//         }
//     }
//   }

  
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
                            <p className='amg'>Security code to reset password</p>
                            <p className='sub-amg'>Insert the security code sent to your email in order to proceed with the password reset.</p>
                        </div>

                        <div className="keyholders1">
                            <small>{message}</small>
                        <div className='mindtalk'>
                         <input type='text' id='otp1' pattern='[0-9]*' inputMode='numeric' className='form-control text-center plcemnt' maxLength='1'  name='otp1' {...formik.getFieldProps("otp1")}/>
                         <input type='text' id='otp2' pattern='[0-9]*' inputMode='numeric' className='form-control text-center plcemnt' maxLength='1'  name='otp2' {...formik.getFieldProps("otp2")}/>
                         <input type='text' id='otp3' pattern='[0-9]*' inputMode='numeric' className='form-control text-center plcemnt' maxLength='1'  name='otp3' {...formik.getFieldProps("otp3")}/>
                         <input type='text' id='otp4' pattern='[0-9]*' inputMode='numeric' className='form-control text-center plcemnt' maxLength='1'  name='otp4' {...formik.getFieldProps("otp4")}/>
                        </div>
                        
                        </div>
                        <div className='mydetails'>
                            <button  type='submit' className='myorders'>

                            {formik.isSubmitting ? "Submitting..." : "Submit"}
                            </button>
                        </div>
                    </form>
                        
                    </div>
                    <div className='footer-text1'>
                        {!requestcode ? (
                             <p>
                             Didn't receive the verification code? It could take a bit of time, request a new code in <strong>{timer} seconds</strong>
                           </p>
                        ) : (
                            <p style={{ color: "orange", cursor: "pointer" }} onClick={handleNewcode}>
                                Request a new code
                            </p>
                        )}
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

export default VerifyPass