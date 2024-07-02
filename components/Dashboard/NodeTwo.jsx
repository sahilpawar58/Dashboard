import React,{useState} from 'react'
import NewLineChart from './NewLineChart'
import { API_URL } from '../../urlconfig'

const Switcher = () => {
    const [isChecked, setIsChecked] = useState(false)
  
    const handleCheckboxChange = () => {
      setIsChecked(!isChecked)
    }
  
    return (
      <>
        <label className='autoSaverSwitch relative inline-flex cursor-pointer select-none items-center'>
          <input
            type='checkbox'
            name='autoSaver'
            className='sr-only'
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <span
            className={`slider mr-3 flex h-[26px] w-[50px] items-center rounded-full p-1 duration-200 ${
              isChecked ? 'bg-primary' : 'bg-[#CCCCCE]'
            }`}
          >
            <span
              className={`dot h-[18px] w-[18px] rounded-full bg-white duration-200 ${
                isChecked ? 'translate-x-6' : ''
              }`}
            ></span>
          </span>
          <span className='label flex items-center text-sm font-medium text-black'>
            State <span className='pl-1'> {isChecked ? 'On' : 'Off'} </span>
          </span>
        </label>
      </>
    )
  }

function NodeTwo() {
  return (
    <div class='flex flex-col justify-center items-center  p-2 rounded-lg shadow-lg'>
    <p class='font-bold  text-xl mb-4'>Node Two</p>
    <NewLineChart url={`${API_URL}/api/v1/sensor/getdata`} width="90vw" type="Flowmeter" label="Ltr"/>
    <div class='flex justify-between'>
        <div class='flex flex-col items-center  p-4 rounded-lg shadow-md mr-4'>
            <p class='font-semibold '>Desired litres</p>
            <p class=''>200</p>
        </div>
        <div class='flex flex-col items-center  p-4 rounded-lg shadow-md'>
            <p class='font-semibold '>Solonoid</p>
            <Switcher />
        </div>
    </div>
</div>

  )
}

export default NodeTwo