import React from 'react'
import {ArrowLeft} from 'lucide-react'


const MobileBackButton = ({onBack}) => {
  return (
    <button
      onClick={onBack}
      className="back-btn"
    >
      <ArrowLeft size={19}/>
    </button>
  )
}

export default MobileBackButton