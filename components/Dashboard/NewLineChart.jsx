import React, { useEffect, useRef,useState } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';

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
          className={`slider mr-3 flex h-[26px] w-[50px] border-md items-center rounded-full p-1 duration-200 ${
            isChecked ? 'bg-[#CCCCCE]' : 'bg-[#CCCCCE]'
          }`}
        >
          <span
            className={`dot h-[18px] w-[18px] rounded-full border-md bg-[#ffffff]  duration-200 ${
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

export default function NewLineChart({url,width,type,label}) {
  const canvasRefone = useRef(null);
  const canvasReftwo = useRef(null);
  const prevTimestampRef = useRef(null);
  const node_onechart = useRef(null);
  const node_twochart = useRef(null);
  const node_1 = useRef(null);
  const node_2 = useRef(null);
  const [data,setData] = useState(null);

  const getData = async () => {
    const response = await axios.get(
      url,
      { withCredentials: true } 
    );
    return await response.data.data;
  };

  useEffect(() => {
    const ctx = canvasRefone.current.getContext("2d");
    ctx.canvas.width = node_1.current.clientWidth;
    ctx.canvas.height = node_1.current.clientHeight;

    const ctxtwo = canvasReftwo.current.getContext("2d");
    ctxtwo.canvas.width = node_2.current.clientWidth;
    ctxtwo.canvas.height = node_2.current.clientHeight;

    const datanode_one = {
      labels: [],
      datasets: [{
        label: label,
        borderColor: "rgb(75, 192, 192)",
        data: [],
        fill: false
      }]
    };

    const datanode_two = {
      labels: [],
      datasets: [{
        label: label,
        borderColor: "rgb(75, 192, 192)",
        data: [],
        fill: false
      }]
    };

    const options = {
      plugins: {
        legend: {
          position: 'right',
          align: 'start'
        },
        title: {
          display: true,
          text: type
        }
      },
      scales: {
        x: [{
          type: 'linear',
          position: 'bottom',
        }]
      }
    };

    node_onechart.current = new Chart(ctx, {
      type: 'line',
      data: datanode_one,
      options: options
    });

    node_twochart.current = new Chart(ctxtwo, {
      type: 'line',
      data: datanode_two,
      options: options
    });

    return () => {
      if (node_onechart.current) {
        node_onechart.current.destroy();
      }
      if (node_twochart.current) {
        node_twochart.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    const addData = async () => {
      const newData = await getData();
      console.log(newData);
      setData(newData)
      if (newData.Timestamp !== prevTimestampRef.current) {
        node_onechart.current.data.labels.push(getLabel(newData.Timestamp));
        node_onechart.current.data.datasets[0].data.push(newData.Readings.NODE_1.Liters);

        if (node_onechart.current.data.labels.length > 10) {
          node_onechart.current.data.labels.shift();
          node_onechart.current.data.datasets[0].data.shift();
        }

        node_onechart.current.update();
        //prevTimestampRef.current = newData.Timestamp;
      }
      
      if (newData.Timestamp !== prevTimestampRef.current) {
        node_twochart.current.data.labels.push(getLabel(newData.Timestamp));
        node_twochart.current.data.datasets[0].data.push(newData.Readings.NODE_2.Liters);

        if (node_twochart.current.data.labels.length > 10) {
          node_twochart.current.data.labels.shift();
          node_twochart.current.data.datasets[0].data.shift();
        }

        node_twochart.current.update();
        
      }
      prevTimestampRef.current = newData.Timestamp;
    };

    const interval = setInterval(addData, 1000);

    return () => clearInterval(interval);
  }, []);

  const getLabel = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes}`;
  };

  

 
  

  return (
    <>
    <p class='font-bold  text-xl mb-4'>Node One</p>
    <div ref={node_1} style={{ width:width,height: "40vh" }} className=' border-solid border-2 border-indigo-600 m-2 '>
      <canvas id="realflow1" ref={canvasRefone}></canvas>
    </div>
    <div class='flex justify-between'>
        <div class='flex flex-col items-center  p-4 rounded-lg shadow-md mr-4'>
            <p class='font-semibold '>Desired litres</p>
            <p class=''>{data?.Readings?.NODE_1?data?.Readings?.NODE_1.DesiredLitres:''}</p>
        </div>
        <div class='flex flex-col items-center  p-4 rounded-lg shadow-md'>
            <p class='font-semibold '>Solonoid</p>
            <Switcher />
        </div>
    </div>

    <p class='font-bold  text-xl m-4'>Node two</p>

    <div ref={node_2} style={{ width:width,height: "40vh" }} className=' border-solid border-2 border-indigo-600 m-2 '>
      <canvas id="realflow2" ref={canvasReftwo}></canvas>
    </div>
    <div class='flex justify-between'>
        <div class='flex flex-col items-center  p-4 rounded-lg shadow-md mr-4'>
            <p class='font-semibold '>Desired litres</p>
            <p class=''>{data?.Readings?.NODE_2?data?.Readings?.NODE_2.DesiredLitres:''}</p>
        </div>
        <div class='flex flex-col items-center  p-4 rounded-lg shadow-md'>
            <p class='font-semibold '>Solonoid</p>
            <Switcher />
        </div>
    </div>
    <div class='flex justify-between w-full'>
        <div class='flex flex-col w-1/2 items-center  p-4 rounded-lg border-slate-800 shadow-md mr-4'>
            <p class='font-semibold '>Turbidity Remark</p>
            <p class=''>{data?.Readings?.NODE_2?data?.Readings?.TANK.turbidity_remark:''}neutral</p>
        </div>
        <div class='flex flex-col w-1/2 items-center  p-4 rounded-lg shadow-md mr-4'>
            <p class='font-semibold '>pH Remark</p>
            <p class=''>{data?.Readings?.NODE_2?data?.Readings?.TANK.ph_remark:''}</p>
        </div>
    </div>
    </>
  );
}
