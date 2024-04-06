import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios'; // Import Axios

const ChartComponent = () => {
  const [chartData, setChartData] = useState([]);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/sensor/getmldata'); // Use Axios to fetch data
        setChartData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (Array.isArray(chartData) && chartData.length > 0) {
      if (chartInstance) {
        chartInstance.destroy();
      }
      const ctx = document.getElementById('myChart').getContext('2d');
      const newChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
          labels: chartData.map(dataPoint => dataPoint.ds),
          datasets: [
            {
            label: 'yhat',
            data: chartData.map(dataPoint => dataPoint.yhat)
          },
          {
            label: 'yhat_lower',
            data: chartData.map(dataPoint => dataPoint.yhat_lower)
          },
          {
            label: 'yhat_upper',
            data: chartData.map(dataPoint => dataPoint.yhat_upper)
          }]
        }
      });
      setChartInstance(newChartInstance);
    }
  }, [chartData]);

  return (
    <div>
      <h2>Chart</h2>
      <canvas id="myChart" width="1400" height="400" ></canvas>
    </div>
  );
};

export default ChartComponent;
