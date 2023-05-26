import React from 'react'
import "./css/TimeFrame.css"

function TimeFrame() {
  return (
    <>
      <div className='timeframe'>
        <h3 className='timeframe-1'>Timeframe</h3>
        <div className='timeframe-2'>
          <div className='timeframe-2-1'><h5>1 Day</h5></div>
          <div className='timeframe-2-2'><h5>7 Day</h5></div>
          <div className='timeframe-2-3'><h5>30 Days</h5></div>
          <div className='timeframe-2-4'><h5>1 year</h5></div>
          <div className='timeframe-2-5'><h5>5 years</h5></div>
        </div>
      </div>
    </>
  )
}

export default TimeFrame