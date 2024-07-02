import React from 'react'
import Searchbar from './Searchbar'
import '../src/App.css'

export default function RightPage() {
  return (
    <>
    <div className=' w-5/12 m-4'>
      <div className='bg-red-200 p-2'>
        <div>Citizen Corner:</div>
        <div>
        <Searchbar />
        </div>
        
      </div>
      <table class="table-fixed border-collapse border border-slate-500 mt-8" >
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
