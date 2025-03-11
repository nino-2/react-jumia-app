import React, { useState } from 'react'
import axios from 'axios'

const DisplayProduct = () => {
const [products, setproducts] = useState([])
let url = 'http://localhost:5002/prod/cart'
axios.get(url)
.then((response)=>{
    console.log(response.data);
    if (response.status){
        setproducts(response.data.data)
        
    } 
})
.catch((err)=>{
    console.log(err);
})
  return (
    <>
     <h1>Display Products</h1>
     <div>
     {products.map((product,index)=>(
        <div key={product.id}>
        <p><b className='pe-2'>Name:</b>{product.productname}</p>
        <p><b className='pe-2'>Price:</b>{product.productprice}</p>
        <p><b className='pe-2'>Category:</b>{product.productcategory}</p>
        <img src={product.productimage} alt="" width={50} height={50} />
      </div>
       ))}
     </div>
    
    </>
  )
}

export default DisplayProduct