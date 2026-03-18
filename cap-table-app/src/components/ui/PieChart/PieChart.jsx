import React from 'react';
import { PieChart as RePieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

export default function PieChart({ data, colors }) {
  return (
    <RePieChart width={300} height={300}>
      <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </RePieChart>
  );
}