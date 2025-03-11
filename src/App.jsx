import React from 'react'
import { Routes,Route }  from 'react-router-dom'
import HomeComponent from './pages/HomeComponent'
import AboutComponent from './pages/AboutComponent'
import DisplayProduct from './pages/DisplayProduct'
import SignUp from './pages/SignUp'
import Personal from './pages/Personal'
import PersonalGenbirth from './pages/PersonalGenbirth'
import UserDashboard from './pages/UserDashboard'
import Identification from './pages/Identification'
import SignIn from './pages/SignIn'
import ResetPass from './pages/ResetPass'
import RequestPass from './pages/RequestPass'
import VerifyPass from './pages/VerifyPass'
import NotFound from './pages/NotFound'
import ProductPage from './pages/ProductPage'



const App = () => {
  return (
    <>
   
     <Routes>
       <Route path='/' element={<HomeComponent/>}/>
       <Route path='/dashboard' element={<UserDashboard/>}/>
       <Route path='/about' element={<AboutComponent/>}/>
       <Route path='/displayproduct' element={<DisplayProduct/>}/>
       <Route path='/identification' element={<Identification/>}/>
       <Route path='/signin' element={<SignIn/>}/>
       <Route path='/request-password' element={<RequestPass/>}/>
       <Route path='/verify-password' element={<VerifyPass/>}/>
       <Route path='/reset-password' element={<ResetPass/>}/>
       <Route path='/signup' element={<SignUp/>}/>
       <Route path='/signup/profile-details' element={<Personal/>}/>
       <Route path='/signup/gender-birthdate' element={<PersonalGenbirth/>}/>
       <Route path='*' element={<NotFound/>}/>
       <Route path='/productinfo' element={<ProductPage/>}/>
     </Routes>
    
    </>
   
     
  )
}

export default App