import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div className="h-24 bg-skincol flex flex-row">
    <div className="bg-skincol p-2  w-1/12"></div>
    <div className="bg-skincol w-10/12 flex flex-col justify-center items-center">
        <div className='text-2xl font-bold'>Jal jeewan Mission - Har Ghar Jal</div>
        <div className=''>Functional Household Tap Connection (FHTC) in every rural home</div>
        </div>
    <div className="bg-red-400 p-2 flex justify-center items-center">
    <Link to="/login" className="">Login</Link>
    <Link to="/register" className="">Register</Link>

    </div>
    {/* <div>Header</div> */}
</div>
  )
}
