import React from 'react'
import '../../src/App.css'
import TalukaMap from './TalukaMap'
import { useParams } from 'react-router-dom';

export default function TalukaMapContianer({url,center}) {
  let { District_ID } = useParams();
  console.log(District_ID)
  let newURL = url + '/' +District_ID;
  return (
    <div className='w-7/12 h-screen p-4 overflow-hidden'>
        <TalukaMap url={newURL} center={center} District_ID={District_ID}/>
    </div>
  )
}
