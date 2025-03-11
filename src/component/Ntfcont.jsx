import React from 'react'
import { useNavigate } from 'react-router-dom'
import helpPeeps from '../assets/people.svg'


const Ntfcont = () => {
    let navigate = useNavigate()
    const handleHome = () => {
        navigate('/')
     }
  return (
    <>
    
    <main className='smntxl'>
    <div className='godlt'>
            <h1 className='hxlt'>Not Found</h1>
            <img src={helpPeeps} style={{margin: 'auto'}} alt="" width={193} height={193} />
            <p className='hsxlt'>We couldn't find the page you are looking for</p>
            <p className='htxlt'>But we have millions more shopping items for you to browse!</p>
            <button onClick={handleHome} className='bxl'>Go to homepage</button>
        </div>
       
        </main>

        <main className='ntxl'>
        <div className='godl'>
            <div className='fxl'>
                <div className='innxl'>
                    <h1 className='hxl'>Not Found</h1>
                    <h2 className='hsxl'>We couldn't find the page you are looking for</h2>
                    <p className='htxl'>But we have millions more shopping items for you to browse!</p>
                    <button onClick={handleHome} className='bxl'>Go to homepage</button>
                </div>
            </div>
            <div className='sxl'>
                <img src={helpPeeps} alt="" width={477} height={490} />
            </div>
        </div>
     </main>
         
 
   
     
    
 
    </>
  )
}

export default Ntfcont