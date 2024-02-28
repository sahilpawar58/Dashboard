import React from 'react'
import '../src/App.css'
import Map from './Map'

export default function MapContianer({url}) {
  return (
    <div className='w-7/12 h-screen p-4 overflow-hidden'>
        <Map url={url}/>
    </div>
  )
}
