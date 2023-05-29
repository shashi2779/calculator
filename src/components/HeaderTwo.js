import React, { useState } from 'react'
import "./css/HeaderTwo.css"
import "./css/MainSection.css"

function HeaderTwo() {
  const [inputVal, setInputVal] = useState('2.10000 CAKE')

  let getValue = (e) => {
    setInputVal(e.target.value)
  }

  return (
    <>
      <div className='HeaderTwo-main'>
        <div className='input-header'>
          <input className="myText" value={`${inputVal}`} onChange={getValue} type="text" style={{
            type: "text",
            border: 'none', background: 'transparent', outline: 0
          }} />

        </div>

        <div className='part-input'>
          <div className='part-2'>
            <button className='part-2-1'>USE BALANCE</button>
            <button className='part-2-2'>$1000</button>
            <button className='part-2-2'>$100</button>
          </div>
          <div className='part-2-2-1'>
            <h5 className='part-2-2-1-h5'>~ $20.82</h5>
          </div>
        </div>

      </div>
    </>
  )
}

export default HeaderTwo