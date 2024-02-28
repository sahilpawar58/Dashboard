import React from 'react'
import '../src/App.css'

function Header() {
  return (
    <div className="h-24 bg-skincol flex flex-row">
        <div className="bg-skincol p-2  w-1/12"><img src="../src/assets/goldenemb.png"></img></div>
        <div className="bg-skincol w-10/12 flex flex-col justify-center items-center">
            <div className='text-2xl font-bold'>Jal jeewan Mission - Har Ghar Jal</div>
            <div className=''>Functional Household Tap Connection (FHTC) in every rural home</div>
            </div>
        <div className="bg-skincol p-2 justify-end"><img className='object-cover h-20 w-20' src='../src/assets/JJM_88x100.png'></img></div>
        {/* <div>Header</div> */}
    </div>
  )
}

export default Header