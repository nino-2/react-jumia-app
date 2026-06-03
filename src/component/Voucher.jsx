import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Voucher = () => {
  const [Selected, setSelected] = useState('ongoing')
  return (
    <div className='int-crd php'>
       <div className='acc-head'>
            <h1 className='acc-text'>Voucher</h1>
        </div>
        <div className='ord-body'>
            <div className='ord-spc'>
                <div className='ord-opt'>
                <Link onClick={()=>setSelected('ongoing')} className={`ord-sel ${Selected === 'ongoing' ? 'active' : ''}`}>
                ACTIVE
                </Link>
                <Link onClick={()=>setSelected('cancelled')} className={`ord-sel ${Selected === 'cancelled' ? 'active' : ''}`}>
                INACTIVE
                </Link>
                </div>
            </div>
            <div className='ord-tac'>
             <img className='ord-img' src="/voucher.svg" alt="" />
             <h2 className='ord-txt'>You currently have no available Voucher</h2>
             <p className='ord-txts'>All your available Vouchers will be displayed here</p>
             <Link to='/'>
                <button className='crt-btn'>Start Shopping</button>
             </Link>
            </div>
        </div>
    </div>
  )
}

export default Voucher