import React, { useState } from 'react'
import jumiaLog from '../assets/myjumia-top-logo.png'
import fbLog from '../assets/fblogo.png'
import jumiaLogo from '../assets/jumia.png'
import { useFormik } from 'formik'
import  *as yup  from 'yup'
import { signInWithPopup, FacebookAuthProvider } from 'firebase/auth'
import { auth } from '../../firebase'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Identification = () => {
    let navigate = useNavigate()
    let url = 'http://localhost:5001/user/check'

    const [message, setMessage] = useState('')
    const LoginWith = () => {
        const provider = new FacebookAuthProvider();
        signInWithPopup(auth, provider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;

    // IdP data available using getAdditionalUserInfo(result)
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    // ...
  });

    }
    let formik = useFormik({
        initialValues:{
            email: ''
        },
        onSubmit: (values) => {
            console.log(values)
            axios.post(url,values,{
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((response)=>{
                console.log(response.data)
                if (response.data.status) {
                    navigate(`/signin?email=${values.email}`)
                } else {
                    console.log('navigating to signup')
                   
                    setTimeout(()=>{
                      navigate('/signup')
                    },100)
                }
            })
            .catch((err)=>{
                console.log(err);
                
            })
        },
        validationSchema:yup.object({
            email:yup.string('invalid email').required('Invalid email')
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
                    <div className='mycontext'>
                        <form onSubmit={formik.handleSubmit}>
                        <div className='amg-center'>
                        <p className='amg'>Welcome to Jumia</p>
                        <p className='sub-amg'>Type your e-mail or phone number to log in or create a Jumia account.</p>
                        </div>
                        <div className='keyholders1'>
                            <small>{message}</small>
                            <div className="form-floating mb-3">
                                <input type="email" name='email' className="form-control my-2 my-lg-2" id="floatingInput" placeholder="email" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className='text-danger'>{ formik.touched.email&& formik.errors.email}</div>  
                        </div>
                        <div className='mydetails'>
                           <button type='submit' className='myorders'>Continue</button>
                        </div>
                        <div className='disclaimer'>
                            <label>By continuing you agree to Jumia’s</label>
                            <br />
                            <a className='tandc' href="">Terms and Conditions</a>
                        </div>
                        <div className='mydetails'>
                            <div className='facebook'>
                            <img src={fbLog} alt="" className='fbsocial' />
                            <button onClick={LoginWith} className='socials'>Log in with Facebook</button>
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

export default Identification