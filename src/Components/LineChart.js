import React from 'react'
import { Line } from 'react-chartjs-2'
import {Chart as ChartJS} from "chart.js/auto"
const LineChart = ({ chartData }) => {
  return (
    <div>
      <Line
        data={chartData}
        options={{
          responsive: true,
          scales: {
            y: {
              beginAtZero: false,
            },
          },
        }}
      />
    </div>
  );
};

export default LineChart