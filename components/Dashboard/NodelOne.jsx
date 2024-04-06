import React,{useState} from 'react'
import NewLineChart from './NewLineChart'

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

function NodelOne() {
  return (
    <div name="Node" class='flex flex-col justify-center  items-center p-2 rounded-lg shadow-lg' >
    
    <NewLineChart url="http://localhost:3000/api/v1/sensor/getdata" width="90vw" type="FlowMeter" label="Ltr"/>
    
</div>

  )
}

export default NodelOne