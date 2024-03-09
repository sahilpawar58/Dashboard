import React from 'react'
import NewLineChart from './NewLineChart'

export default function RealtimeDashboard() {
  return (
    <>
    <div className='flex flex-col'>
    <NewLineChart />
    <NewLineChart />
    <NewLineChart />
    </div>
    </>
  )
}
