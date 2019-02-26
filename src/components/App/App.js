import React, { Component } from 'react';
import './App.css';
import Chart from '../Chart';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h2>Real-time Chart</h2>
        </header>
        <div className="app-content">
          <Chart unit="u" />
          <Chart unit="i" />
        </div>
      </div>
    );
  }
}

export default App;
