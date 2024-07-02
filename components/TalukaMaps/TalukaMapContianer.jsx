import React from 'react'
import '../../src/App.css'
import TalukaMap from './TalukaMap'
import { useParams, useLocation } from 'react-router-dom';

export default function TalukaMapContianer({url,centerUrl}) {
  let { District_ID } = useParams();
  console.log(District_ID)
  let newURL = url + '/' +District_ID;
  let newcenterUrl = centerUrl + '/' + District_ID;
  return (
    <>
    <div className='w-7/12 h-screen p-4 overflow-hidden'>
        <TalukaMap url={newURL} centerUrl={newcenterUrl}  District_ID={District_ID}/>
    </div>
    <div>
    <table class="h-1/3 w-full" >
    <thead>
      <tr class="border-collapse border border-slate-500">
        <th className='pt-5'>Parameter</th>
        <th className='pt-5'>Requrement(Accepted Limit)</th>
        <th className='pt-5'>Permisible Limit</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className='p-5'>Chlorine</td>
        <td className='p-5'>250 mg/L</td>
        <td className='p-5'>1000 mg/L</td>
      </tr>
      <tr>
        <td className='p-5'>pH</td>
        <td className='p-5'>6.5-8.5</td>
        <td className='p-5'>No relaxation</td>
      </tr>
      <tr>
        <td className='p-5'>Turbidity</td>
        <td className='p-5'>1 NTU</td>
        <td className='p-5'>5 NTU</td>
      </tr>
    </tbody>
  </table>
  </div>
  </>
  )
}
