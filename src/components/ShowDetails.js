import React, { useState } from 'react'
import "./css/MainSection.css"
import "./css/ShowDetails.css"

function ShowDetails() {
  const [getValue,setGetValue] = useState('63.34%')
  const [show,setShow] = useState(true)

  return (
    <>
     
      <div className='showDetails-main' >

        <button className='show-datails-1' onClick={()=> setShow(!show)} >
          { show === true ? <div className='hide-dev'>
            <h5>Hide Details</h5>
            <i class="ri-arrow-down-s-line"></i>
          </div>: 
          <div className='show-dev'>
            <h5>Show Details</h5>
            <i class="ri-arrow-down-s-line"></i>
          </div>
          }
        </button>

         { show &&
           <div className='show-datails-2'>
           <div className='show-datails-APY'>
             <h4 className='text-apy'>APY</h4>
             <p className='number-color'>{getValue}</p>
           </div>
 
           <div className='show-datails-points'>
             <ul>
               <li>Calculated based on current rates</li>
               <li>Calculated based on current rates
                 All fugures are estimates provided for your convenience only,
                 and by no means represent guaranted returns.</li>
             </ul>
           </div>
         </div>
        }
      
      </div>
    </>
  )
}

export default ShowDetails