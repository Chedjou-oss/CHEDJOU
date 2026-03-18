import React from 'react';
import PieChart from './PieChart';

export default {
  title: 'UI/PieChart',
  component: PieChart,
};

const data = [
  { name: 'Shareholder A', value: 400 },
  { name: 'Shareholder B', value: 300 },
  { name: 'Shareholder C', value: 300 },
];

const colors = ['#1976d2', '#dc004e', '#f44336'];

export const Default = () => <PieChart data={data} colors={colors} />;