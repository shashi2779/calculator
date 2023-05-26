import React from 'react'
import "./css/MainSection.css"
import Header from './Header'
import HeaderTwo from './HeaderTwo'

import TimeFrame from './TimeFrame'
import Enable from './Enable'
import RioInput from './RioInput'
import Apply from './Apply'

function MainSection() {
  return (
    <>
     <div className='main-section-white'>
        <Header/>
        <HeaderTwo/>
        <TimeFrame/>
        <Enable/>
        <RioInput/>
        <Apply/>
     </div>
    </>
   
  )
}

export default MainSection