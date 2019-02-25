import React, { Component } from 'react';
import './Chart.css';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const data = [
  { name: 'Day 1', uv: 1400, pv: 2400 },
  { name: 'Day 2', uv: 1350, pv: 2000 },
  { name: 'Day 3', uv: 1500, pv: 2500 },
  { name: 'Day 4', uv: 1370, pv: 2100 },
  { name: 'Day 5', uv: 1450, pv: 2500 }
];

class Chart extends Component {
  render() {
    return (
      <div className="chart">
        <LineChart width={550} height={400} data={data}>
          <Line type="monotone" dataKey="uv" stroke="cyan" />
          <Line type="monotone" dataKey="pv" stroke="pink" />
          <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
      </div>
    );
  }
}

export default Chart;
