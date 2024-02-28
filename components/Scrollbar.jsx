import React from 'react'
import '../src/App.css'
import Scrollitems from './Scrollitems'

export default function Scrollbar() {
  return (
    <div className='w-24 h-screen bg-slate-300 overflow-auto'>
        <Scrollitems title="real time dashboard" source="../src/assets/goldenemb.png"/>
        <Scrollitems title="real time dashboard" source="../src/assets/goldenemb.png"/>
        <Scrollitems title="real time dashboard" source="../src/assets/goldenemb.png"/>
        <Scrollitems title="real time dashboard" source="../src/assets/goldenemb.png"/>
        <Scrollitems title="real time dashboard" source="../src/assets/goldenemb.png"/>
        <Scrollitems title="real time dashboard" source="../src/assets/goldenemb.png"/>
        <Scrollitems title="real time dashboard" source="../src/assets/goldenemb.png"/>
        <Scrollitems title="real time dashboard" source="../src/assets/goldenemb.png"/>
        <Scrollitems title="real time dashboard" source="../src/assets/goldenemb.png"/>
        <Scrollitems title="real time dashboard" source="../src/assets/goldenemb.png"/>
   
    </div>
  )
}
