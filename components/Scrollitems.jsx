import React from 'react'
import { Link } from 'react-router-dom'

export default function Scrollitems({title,source,link}) {
  return (

    <div className='h-32 flex flex-col justify-center items-center border-b-2 border-slate-500 mt-2'>
      <Link to={link} >
        <div className=' p-2 box-content'><img className="h-16 w-16" src={source}></img></div>
        <div className='p-2'><p>{title}</p></div>
      </Link>
    </div>
  )
}
