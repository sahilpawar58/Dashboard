import React from 'react'
import Searchbar from './Searchbar'
import '../src/App.css'

export default function RightPage() {
  return (
    <>
    <div className='bg-slate-200 w-5/12 m-4'>
      <div className='bg-red-200 p-2'>
        <div>Citizen Corner:</div>
        <div>
        <Searchbar />
        </div>
      </div>
      
    </div>
    </>
  )
}
