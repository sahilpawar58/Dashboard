import React from 'react'
import '../../src/App.css'
import StateMap from './StateMap'
import DemoMap from './DemoMap'

export default function StateMapContianer({url,center}) {
  return (
    <div className='w-7/12 h-screen p-4 overflow-hidden'>
        <StateMap url={url} center={center}/>
    </div>
  )
}
