import React from 'react'

export default function Scrollitems({title,source}) {
  return (
    <div className='h-32 flex flex-col justify-center items-center border-b-2 border-slate-500'>
        <div className='pt-2'><img src={source}></img></div>
        <div className=''><p>{title}</p></div>
    </div>
  )
}
