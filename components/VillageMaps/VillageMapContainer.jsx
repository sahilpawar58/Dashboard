import React from 'react'
import '../../src/App.css'
import VillageMap from './VillagesMap'
import { useParams } from 'react-router-dom';

export default function VillageMapContianer({url,center}) {
  let { District_ID,Tehsil_ID } = useParams();
  console.log(District_ID)
  let newURL = url + '/' +District_ID + '/' + Tehsil_ID;
  return (
    <div className='w-7/12 h-screen p-4 overflow-hidden'>
        <VillageMap url={newURL} center={center} District_ID={District_ID}/>
    </div>
  )
}
