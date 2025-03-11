import React from 'react'
import Navbar from '../component/Navbar'
import Content from '../component/Content'
import Footer from '../component/Footer'





const HomeComponent = () => {
  // let url = 'http://localhost:5001/user/dash'
  // let navigate = useNavigate()
  // useEffect(() => {
  //   axios.get(url, {
  //     headers: {
        
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     }
  //   })
  //   .then((response)=>{
  //    if (!response.data.status) {
     
  //    }
      
  //   })
  //   .catch((error)=>{
  //     console.log(error);
      
  //   })
  // }, [])
  
  return (
    <>
      <Navbar/>
      <Content/>
      <Footer/>
    </>
  )
}

export default HomeComponent