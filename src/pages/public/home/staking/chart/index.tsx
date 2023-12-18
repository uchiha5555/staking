import { GV } from '@/utils/style.util';
import React from 'react';
import { PieChart, Pie, Cell, Label, Text, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 1, color: 'rgb(236, 237, 239)' },
  { name: 'Group B', value: 1, color: '#375BD2' },
];

export default function Chart() {
  return (
    <div style={{ width: '100%', height: '100%', minWidth: '200px', minHeight: '300px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="value"
            startAngle={-40}
            endAngle={220}
            data={data}
            cx={"50%"}
            cy={"50%"}
            cornerRadius={30 / 2}
            innerRadius="80%"
            outerRadius="100%"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
