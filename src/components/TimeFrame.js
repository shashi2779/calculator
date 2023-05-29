import React, { useState } from 'react'
import "./css/TimeFrame.css"
import "./css/MainSection.css"

function TimeFrame() {
  const [day,setDay] = useState('1 Day');
  const [oneWeek,setOneWeek] = useState('7 Day');
  const [oneMonth,setOneMonth] = useState('30 Day');
  const [oneYear,setOneYear] = useState('1 Year');
  const [threeYear,setThreeYear] = useState('3 Year');
  const [fiveYear,setFiveYear] = useState('5 Year');

  return (
    <>
      <div className='timeframe'>
        <h3>Timeframe</h3>
 
        <div className='timeframe-2'>
          <div className='timeframe-2-1'>{day}</div>
          <div className='timeframe-2-1 timeframe-2-2 '>{oneWeek}</div>
          <div className='timeframe-2-1 timeframe-2-2 '>{oneMonth}</div>
          <div className='timeframe-2-1 timeframe-2-2 timeframe-2-3 '>{oneYear}</div>
          <div className='timeframe-2-1 timeframe-2-2 timeframe-2-3'>{threeYear}</div>
          <div className='timeframe-2-1 timeframe-2-2 timeframe-2-3'>{fiveYear}</div>
        </div>

      </div>
    </>
  )
}

export default TimeFrame