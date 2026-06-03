import React from 'react'
import {   Routes,Route }  from 'react-router-dom'

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
import ScrollToTop from './component/ScrollToTop'
import CartPage from './pages/CartPage'
import CustomerPages from './pages/CustomerPages'
import CheckoutPage from './pages/CheckoutPage'

{/*Component*/}
import Alert from './component/Alert'
import Account from './component/Account'
import Order from './component/Order'
import Inbox from './component/Inbox'
import Review from './component/Review'
import Voucher from './component/Voucher'
import Wishlist from './component/Wishlist'
import Sellers from './component/Sellers'
import Newsletter from './component/Newsletter'
import Address from './component/Address'
import AddressEdit from './component/AddressEdit'
import AddressCreate from './component/AddressCreate'

{/*Context*/}
import { AlertProvider } from '../Context/AlertContext'
import { AddressProvider } from '../Context/AddressContext'
import { AuthProvider } from '../Context/AuthContext'
import { CartProvider } from '../Context/CartContext'



const App = () => {
  return (
    <>
    
    
    <ScrollToTop/>

    <AuthProvider>
    <AlertProvider>
     <CartProvider>
     <AddressProvider>

      <Alert/>

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
       <Route path='/products/:id' element={<ProductPage/>}/>
       <Route path='/cart' element={<CartPage/>}/>
        <Route path='/checkout' element={<CheckoutPage/>}/>
        
       <Route path='/customer/*' element={<CustomerPages/>}>
          <Route path='account' element={<Account/>}/>
          <Route path='order' element={<Order/>}/>
          <Route path='inbox' element={<Inbox/>}/>
          <Route path='reviewsrating' element={<Review/>}/>
          <Route path='voucher' element={<Voucher/>}/>
          <Route path='wishlist' element={<Wishlist/>}/>
          <Route path='followed-sellers' element={<Sellers/>}/>
          <Route path='newsletter/manage' element={<Newsletter/>}/>
          <Route path='address' element={<Address/>}/>
          <Route path='address/edit/:id' element={<AddressEdit/>}/>
          <Route path='address/create' element={<AddressCreate/>}/>
       </Route>  

     </Routes>

     </AddressProvider>
     </CartProvider> 
     </AlertProvider>
     </AuthProvider>
     
     
    </>
   
     
  )
}

export default App