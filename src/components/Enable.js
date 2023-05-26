import React from 'react'
import "./css/Enable.css"
import { Switch } from 'antd';


function Enable() {
  return (
    <>
    <div className='Enable'>
      <div className='enable-switch'>
        <h3 className='enable-1'>Enable Accelerated APY</h3>
        <div className='switch-111'><Switch size="small" defaultChecked={true} /></div>
      </div>
        
        <h4 className='enable-1-1'>Select Tier</h4>
        <div className='enable-2'>
          <div className='enable-2-1'><h5>Tier 1</h5></div>
          <div className='enable-2-2'><h5>Tier 2</h5></div>
          <div className='enable-2-3'><h5>Tier 3</h5></div>
          <div className='enable-2-4'><h5>Tier 4</h5></div>
          <div className='enable-2-5'><h5>Tier 5</h5></div>
        </div>
      </div>
    </>
  )
}

export default Enable