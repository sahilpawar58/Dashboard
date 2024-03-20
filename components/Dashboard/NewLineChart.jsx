import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function NewLineChart() {
  const canvasRef = useRef(null);
  const prevTimestampRef = useRef(null);
  const realpHRef = useRef(null);
  const pH = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.canvas.width = pH.current.clientWidth;
    ctx.canvas.height = pH.current.clientHeight;

    const data = {
      labels: [],
      datasets: [{
        label: "pH",
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
          text: 'pH Readings'
        }
      },
      scales: {
        x: [{
          type: 'linear',
          position: 'bottom',
        }]
      }
    };

    realpHRef.current = new Chart(ctx, {
      type: 'line',
      data: data,
      options: options
    });

    return () => {
      if (realpHRef.current) {
        realpHRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    const addData = async () => {
      const newData = await getData();
      if (newData.Timestamp !== prevTimestampRef.current) {
        realpHRef.current.data.labels.push(getLabel(newData.Timestamp));
        realpHRef.current.data.datasets[0].data.push(newData.Readings);

        if (realpHRef.current.data.labels.length > 10) {
          realpHRef.current.data.labels.shift();
          realpHRef.current.data.datasets[0].data.shift();
        }

        realpHRef.current.update();
        prevTimestampRef.current = newData.Timestamp;
      }
    };

    const interval = setInterval(addData, 5000);

    return () => clearInterval(interval);
  }, []);

  const getLabel = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes}`;
  };

  const getData = async () => {
    const response = await fetch("http://127.0.0.1:4000/api/data", {
      credentials: 'include' // Include cookies in the request
    });
    return await response.json();
  };
  

  return (
    <>
    <div ref={pH} style={{ width:"80vw",height: "40vh" }} className=' border-solid border-2 border-indigo-600 m-8'>
      <canvas id="realflow" ref={canvasRef}></canvas>
    </div>
    </>
  );
}
