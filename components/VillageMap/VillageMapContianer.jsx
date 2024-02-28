import React from 'react'
import '../../src/App.css'
import VillageMap from '../StateMap/StateMap'
import { useParams } from 'react-router-dom';

export default function VillageMapContianer({url,center}) {
  let { District_ID } = useParams();
  let newURL = url + '/' +District_ID;
  return (
    <div className='w-7/12 h-screen p-4 overflow-hidden'>
        <VillageMap url={newURL} center={center} District_ID={District_ID}/>
    </div>
  )
}
