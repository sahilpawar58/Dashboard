import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios'; // Import Axios

const ChartComponent = () => {
  const [chartData1, setChartData1] = useState([]);
  const [chartData2, setChartData2] = useState([]);
  const [chartInstance1, setChartInstance1] = useState(null);
  const [chartInstance2, setChartInstance2] = useState(null);

  useEffect(() => {
    const fetchData1 = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/sensor/getmldata'); // Use Axios to fetch data
        setChartData1(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData1();
  }, []);

  useEffect(() => {
    const fetchData2 = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/sensor/getmldatatwo'); // Adjust the URL for the second API
        ///console.log(response.data.data)
        setChartData2(response.data.data);
      } catch (error) {
        console.error('Error fetching data for second chart:', error);
      }
    };

    fetchData2();
  }, []);

  useEffect(() => {
    if (Array.isArray(chartData1) && chartData1.length > 0) {
      if (chartInstance1) {
        chartInstance1.destroy();
      }
      const ctx1 = document.getElementById('myChart1').getContext('2d');
      const newChartInstance1 = new Chart(ctx1, {
        type: 'line',
        data: {
          labels: chartData1.map(dataPoint => dataPoint.ds),
          datasets: [
            {
              label: 'yhat',
              data: chartData1.map(dataPoint => dataPoint.yhat)
            },
            {
              label: 'yhat_lower',
              data: chartData1.map(dataPoint => dataPoint.yhat_lower)
            },
            {
              label: 'yhat_upper',
              data: chartData1.map(dataPoint => dataPoint.yhat_upper)
            }
          ]
        }
      });
      setChartInstance1(newChartInstance1);
    }
  }, [chartData1]);

  useEffect(() => {
    if (Array.isArray(chartData2) && chartData2.length > 0) {
      if (chartInstance2) {
        chartInstance2.destroy();
      }
      const ctx2 = document.getElementById('myChart2').getContext('2d');
      const newChartInstance2 = new Chart(ctx2, {
        type: 'line', // Change chart type as needed
        data: {
          labels: chartData2.map(dataPoint => dataPoint.ds),
          datasets: [
            {
                label: 'yhat',
                data: chartData2.map(dataPoint => dataPoint.yhat)
              },
              {
                label: 'yhat_lower',
                data: chartData2.map(dataPoint => dataPoint.yhat_lower)
              },
              {
                label: 'yhat_upper',
                data: chartData2.map(dataPoint => dataPoint.yhat_upper)
              }
          ]
        }
      });
      setChartInstance2(newChartInstance2);
    }
  }, [chartData2]);

  return (
    <div>
      <div>
        <h2>Chart 1</h2>
        <canvas id="myChart1" width="1400" height="400"></canvas>
      </div>
      <div>
        <h2>Chart 2</h2>
        <canvas id="myChart2" width="1400" height="400"></canvas>
      </div>
    </div>
  );
};

export default ChartComponent;
