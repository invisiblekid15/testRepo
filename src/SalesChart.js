import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const SalesChart = () => {
  const [salesData, setSalesData] = useState([]);

  const fetchSalesData = async () => {
    const response = await axios.get('/api/sales');
    setSalesData(response.data);
  };

  useEffect(() => {
    fetchSalesData();
    const interval = setInterval(fetchSalesData, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  const data = {
    labels: salesData.map(data => data.date),
    datasets: [
      {
        label: 'Sales',
        data: salesData.map(data => data.amount),
        fill: false,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return <Line data={data} />;
};

export default SalesChart;
