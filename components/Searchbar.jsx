import React from 'react'
import { FaSearch } from 'react-icons/fa';

export default function Searchbar() {
  return (
    <div>
      <div className='flex flex-row items-center bg-slate-50 border-2 rounded-xl'>
      <FaSearch className='mr-2 ml-2'/>
        <input className='h-10 w-5/6 focus:outline-none' placeholder='enter district or state'></input>
      </div>
    </div>
  )
}
