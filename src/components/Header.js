import React from 'react'
import "./css/Header.css"
import { Switch } from 'antd';


function Header() {



    return (
        <>

            <div className='head-p1'>
                <h5>Calculator</h5>
                <div className='head-arrow'><i class="ri-close-line"></i></div>
            </div>
            <div className='head-p2'>
                <h4>Cake</h4>
                <div className='switch-size'><Switch size="small" defaultChecked={true} /><h4>USD</h4></div>
            </div>
            
        </>

    )
}

export default Header