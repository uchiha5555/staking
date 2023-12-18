import React from 'react';
import { RadialBarChart, PolarAngleAxis, RadialBar } from 'recharts';

const Chart = () => {
  // Sample data
  const data = [
    { name: 'A', x: 1, fill: 'green' },
    { name: 'B', x: 2, fill: 'yellow' },
    // { name: 'C', x: 3, fill: 'aqua' },
    // { name: 'D', x: 4, fill: 'blue' },
    // { name: 'E', x: 5, fill: 'orange' },
    // { name: 'F', x: 6, fill: 'red' },
    // { name: 'G', x: 7, fill: 'black' },
    // { name: 'H', x: 8, fill: 'purple' },
    // { name: 'I', x: 9, fill: 'gray' },
  ];

  return (
    <RadialBarChart width={366} height={288} data={data}
    // cx={30 / 2}
    // cy={30 / 2}
    barSize={25}
    startAngle={-45}
    endAngle={225}>
      <PolarAngleAxis
        type="number"
        domain={[0, 10]}
        angleAxisId={0}
        tick={false}
      />
      <RadialBar
        background
        dataKey="value"
        cornerRadius={30 / 2}
        fill="#0BEFF2"
      />
    </RadialBarChart>
  );
};

export default Chart;