import React from 'react'
import { Pie } from 'react-chartjs-2'
import {Chart as ChartJS} from "chart.js/auto"
const PieChart = ({ chartData }) => {
  return (
    <div>
      <Pie
        data={chartData}
        options={{
          responsive: true,
        }}
      />
    </div>
  );
};

export default PieChart