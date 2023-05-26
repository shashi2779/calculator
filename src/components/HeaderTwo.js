import React, { useState } from 'react'
import "./css/HeaderTwo.css"


function HeaderTwo() {
  const [inputVal,setInputVal] = useState('2.10000 CAKE')
  return (
    <>
      <div>
         <div className='input-header'>
           <h4>2.10000 CAKE </h4>
         </div>
        <div className='part-input'>
          <div className='part-2'>
            <div className='part-2-1'><h5>USE BALANCE</h5></div>
            <div className='part-2-2'><h5>$1000</h5></div>
            <div className='part-2-3'><h5>$100</h5></div>
          </div>
          <div className='part-2-2-1'>
            <h5>~ $20.82</h5>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default HeaderTwo