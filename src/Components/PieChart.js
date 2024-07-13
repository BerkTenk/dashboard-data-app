import React from 'react'
import { Pie } from 'react-chartjs-2'
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