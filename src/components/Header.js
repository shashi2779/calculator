import React from 'react'
import "./css/Header.css"
import { Switch } from 'antd';
import "./css/MainSection.css"

function Header() {



    return (
        <>

            <div className='Header-main'>
                <div className='head-p1'>
                    <h5 className='head-p1-h5'>Calculator</h5>
                </div>
                
                <div className='head-p2'>
                     <div className='head-p2-arrow'><i class="ri-close-line"></i></div>
                     <div className='head-p2-seccond'>
                        <div className='cake-main'>
                            <div className='cake-head-2'>
                                <i class="ri-cake-3-line"></i>
                            </div>
                            <h4>Cake</h4>
                        </div>
                        <div className='switch-size'>
                            <div className='switch'><Switch size="small" defaultChecked={true} /> </div>
                            <h4 className='switch-size-h4'>USD</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Header