import React, { Component } from 'react';
import './App.css';
import Chart from '../Chart';
import Realtime from '../../services/realtime';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { noti: 'Server Disconnected', chartView: null };
    this.onServerConnected.bind(this)();
    this.onServerDisconnected.bind(this)();
    this.onReceivedNoti.bind(this)();
  }

  onServerConnected() {
    Realtime.on('connect', () => {
      this.setState({
        chartView: (
          <div>
            <Chart unit="u" />
            <Chart unit="i" />
          </div>
        )
      });
    });
  }

  onServerDisconnected() {
    Realtime.on('disconnect', () => {
      this.setState({ noti: 'Server Disconnected', chartView: null });
    });
  }

  onReceivedNoti() {
    Realtime.on('noti', ({ msg }) => {
      this.setState({ noti: msg });
    });
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h2>Real-time Chart</h2>
        </header>
        <div className="app-content">
          <div className="app-noti">
            <span>{this.state.noti}</span>
          </div>
          {this.state.chartView}
        </div>
      </div>
    );
  }
}

export default App;
