import React, { useState , useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import axios from 'axios'
import  *as yup  from 'yup'
const AddressCreate = () => {
     const API_URL = import.meta.env.VITE_API_URL
     let url = `${API_URL}/address/`
     let navigate = useNavigate()
      const [states, setStates] = useState([])
      const [cities, setCities] = useState([])
      const [message, setMessage] = useState('')

        {/*Fetching States API from Backend*/}
  useEffect(() => {
    axios.get(`${API_URL}/api/states`)
    .then((response)=>{
      if (response.data.states) {
        setStates(response.data.states)
      }
       
    })
    .catch((err)=>{
      console.log(err, 'Error fetching states')
    })
  }, [])

  {/*Fetching State Cities API from Backend*/}
  const handleStateChange = async (stateName) => {
    formik.setFieldValue('state', stateName);
    formik.setFieldValue('city', '')
    try{
      const response = await axios.get(`${API_URL}/api/states/${stateName}`)
      setCities(response.data.cities || [])
    }
    catch (err) {
      console.log(err)
      setCities([])
    } 
  };
  
   
  
  const token = localStorage.getItem("token");
  let formik = useFormik({
    initialValues:{
        firstname: '',
        lastname: '',
        phonenumber: '',
        deliveryadd: '',
        addinfo: '',
        state: '',
        city: '',
        isDefault: false
       
    },
    onSubmit: (values) => {
        console.log(values)
        console.log(localStorage.getItem('item'))
        axios.post(url,values, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        })

      .then((response)=>{
        console.log(response.data)
        if(response.data.status) {
          navigate('/customer/address')
        } else {
          setMessage(response.data.message)
        }
      })
      .catch((err)=>{
        console.log(err)
      })  
    },
    validationSchema:yup.object({
      firstname:yup.string().required('Required field'),
      lastname:yup.string().required('Required field'),
      phonenumber:yup.string().required('Required field'),
      deliveryadd:yup.string().required('Required field'),
      state:yup.string().required('Required field'),
      city:yup.string().required('Required field')
    })
   
  })
   console.log(formik.errors)
  return (
    <>
    <div className='int-crd php'>
       <div className='edt-head'>
        {/*Previous Button*/}
            <Link to='/customer/address' className='edt-go'>
              <img src="/arrow-left.png" alt="" />
            </Link>
            <h1 className='acc-text'>Add a New Address</h1> 
        </div>
        <form onSubmit={formik.handleSubmit} className='edt-form'>
            <div className='edt-col16'>
              <small>{message}</small>
                {/*First Name*/}
                <div className='edt-cont'>
                  <input name='firstname' placeholder='Enter your First Name' className={`edt-inp ${formik.touched.firstname && formik.errors.firstname ? 'error': ''}`} onChange={formik.handleChange} type="text" />
                  <label className={`edt-lbl ${formik.touched.firstname && formik.errors.firstname ? 'error' : ''}`} htmlFor="">First Name</label>
                  <small className='text-danger xxy'>{ formik.touched.firstname&& formik.errors.firstname}</small>
                </div>
                
                {/*Last Name*/}
                <div className='edt-contx'>
                  <input name='lastname' placeholder='Enter your Last Name' className={`edt-inp ${formik.touched.lastname && formik.errors.lastname ? 'error': ''}`} onChange={formik.handleChange} type="text" />
                  <label className={`edt-lbl ${formik.touched.lastname && formik.errors.lastname ? 'error' : ''}`} htmlFor="">Last Name</label>
                  <small className='text-danger xxy'>{formik.touched.lastname&& formik.errors.lastname}</small>
                </div>
            </div>
            <div className='edt-col16p'>
                {/*Phone Number*/}
                <div className='edt-col8'>
                  <div className='edt-prefix'>
                    <div className='edt-npt'>+234</div>
                    <label className='edt-lbl'  htmlFor="">Prefix</label>
                  </div>
                  <div className='edt-conty'>
                    <input name='phonenumber' placeholder='Enter your Phone Number' className={`edt-inp ${formik.touched.phonenumber && formik.errors.phonenumber ? 'error': ''}`} onChange={formik.handleChange} type="text" />
                    <label className={`edt-lbl ${formik.touched.phonenumber && formik.errors.phonenumber ? 'error' : ''}`} htmlFor="">Phone Number</label>
                    <small className='text-danger xxy'>{formik.touched.phonenumber&& formik.errors.phonenumber}</small>
                  </div>
                </div>
                {/*Additional Phone Number*/}
                <div className='edt-col8b'>
                   <div className='edt-prefix'>
                    <div className='edt-npt'>+234</div>
                    <label className='edt-lbl'  htmlFor="">Prefix</label>
                    
                  </div>
                  <div className='edt-conty'>
                    <input name='addphonenum' placeholder='Enter your Additional Phone Number' className='edt-inp' type="text" />
                    <label className='edt-lbl' htmlFor="">Additional Phone Number</label>
                  </div>
                </div>
            </div>
            <div className='edt-col16t'>
                {/*Delivery Address*/}
                <div className='edt-prefix'>
                    <input name='deliveryadd' placeholder='Enter your Delivery Address' className={`edt-inp ${formik.touched.deliveryadd && formik.errors.deliveryadd ? 'error': ''}`} onChange={formik.handleChange} type="text" />
                    <label className={`edt-lbl ${formik.touched.deliveryadd && formik.errors.deliveryadd ? 'error' : ''}`} htmlFor="">Delivery Address</label>
                    <small className='text-danger xxy'>{formik.touched.deliveryadd&& formik.errors.deliveryadd}</small>
                </div>
                {/*Additional Information*/}
                <div className='edt-prefix'>
                    <input name='addinfo' placeholder='Enter your Additional Information' className='edt-inp' type="text" />
                    <label className='edt-lbl' htmlFor="">Additional Information</label>
                </div>
            </div>
            {/*Select Your State & City*/}
            <div className='edt-col16'>
                <div className='edt-cont'>
                    <select name='state' className={`sel ${formik.touched.state && formik.errors.state ? 'error' : ''}`}  onChange={(e)=>handleStateChange(e.target.value)} value={formik.values.state}>
                      <option>Please Select</option>
                        {states.map((state) => (
                          <option key={state.id} value={state.name}>{state.name}</option>
                        ))}
                      </select>
                      <label className={`edt-lbl ${formik.touched.state && formik.errors.state ? 'error' : ''}`} htmlFor="">State</label>
                      <small className='text-danger xxy'>{formik.touched.state&& formik.errors.state}</small>
                </div>
                <div className='edt-contx'>
                    <select name='city'  className={`sel ${formik.touched.city && formik.errors.city ? 'error' : ''}`} aria-label='Region' onChange={formik.handleChange} value={formik.values.city}>
                    {cities?.map((city) => (
                        <option key={city.id} value={city.name}>{city.name}</option>
                    ))}
                    </select>
                    <label className='edt-lbl' htmlFor="">City</label>
                </div>
            </div>
            {/*Set as Default*/}
            <div className='edt-col16t'>
              <div className='news-foot-det'>
                <div className='news-info'>
                <input type="checkbox" id='check' name='isDefault' className='news-check' checked={formik.values.isDefault} onChange={formik.handleChange} />
                <label className='news-texts ' style={{ "--tick": `url(${"/whitetick.png"})` }} htmlFor='check'>Set as Default Address</label>
                
                </div>
                </div>
            </div>
            <div className='edt-col0'>
              <div className='edt-contb'>
                <button type='submit' className='edt-btn'>Save</button>
              </div>
            </div>
        </form>
       
    </div>
    </>
  )
}

export default AddressCreate
