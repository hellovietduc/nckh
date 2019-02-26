import React, { Component } from 'react';
import './App.css';
import Chart from '../Chart';

const data = [
  { name: 'Day 1', u: 2.5, i: 0.48 },
  { name: 'Day 2', u: 2.3, i: 0.49 },
  { name: 'Day 3', u: 2.1, i: 0.52 },
  { name: 'Day 4', u: 2.2, i: 0.54 },
  { name: 'Day 5', u: 2.3, i: 0.51 }
];

class App extends Component {
  render() {
    const uChart = {
      data,
      keys: { data: 'u' },
      labels: { chartName: 'Voltage chart', unit: 'V' },
      colors: { line: '#ff21cb' }
    };
    const iChart = {
      data,
      keys: { data: 'i' },
      labels: { chartName: 'Current chart', unit: 'A' },
      colors: { line: '#00ffff' }
    };
    return (
      <div className="app">
        <header className="app-header">
          <h2>Real-time Chart</h2>
        </header>
        <div className="app-content">
          <Chart configs={uChart} />
          <Chart configs={iChart} />
        </div>
      </div>
    );
  }
}

export default App;
