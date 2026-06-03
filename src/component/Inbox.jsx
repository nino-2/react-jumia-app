import React from 'react'
import { Link } from 'react-router-dom'
const Inbox = () => {
  return (
    <div className='int-crd php'>
       <div className='acc-head'>
            <h1 className='acc-text'>Inbox</h1>
        </div>
        <div className='ord-body'>
            <div className='ord-tac'>
             <img className='ord-img' src="/empty-mail.svg" alt="" />
             <h2 className='ord-txt'>You dont have any messages</h2>
             <p className='ord-txts'>Here you will be able to see all the messages that we send you. <br /> Stay tuned</p>
            </div>
        </div>
    </div>
  )
}

export default Inbox