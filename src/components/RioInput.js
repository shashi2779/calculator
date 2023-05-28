import React,{useState} from 'react'
import "./css/RioInput.css"
import "./css/HeaderTwo.css"

function RioInput() {
    const [inputVal, setInputVal] = useState('2.10000 CAKE')
    let getValue = (e) => {
        setInputVal(e.target.value)
      }

    return (
        <>
            <div className='Rio'>

                <h4 className='rio-current'>RIO at Current Rates</h4>

                <div className='input-header Rio-input-header'>
                    <h3 className='pencil-fig'><i class="ri-pencil-line"></i></h3>
                    <input id="myText Rio-input" value={`${inputVal}`} onChange={getValue} type="text" style={{
                        type: "text",
                        border: 'none', background: 'transparent', outline: 0
                    }} />
                </div>

                <h5>~ 3CAKE + 10 DON</h5>

            </div>
        </>
    )
}

export default RioInput