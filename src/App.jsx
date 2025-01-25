import React from 'react'
import { Routes,Route }  from 'react-router-dom'
import HomeComponent from './pages/HomeComponent'
import AboutComponent from './pages/AboutComponent'



const App = () => {
  return (
    <>
     <Routes>
       <Route path='/' element={<HomeComponent/>}/>
       <Route path='/about' element={<AboutComponent/>}/>
     </Routes>
    
    </>
   
     
  )
}

export default App