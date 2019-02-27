import React, { Component } from 'react';
import './App.css';
import Chart from '../Chart';
import Realtime from '../../services/realtime';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noti: { msg: 'Server Disconnected', color: '#ff0000' },
      chartView: null
    };
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
      this.setState({
        noti: { msg: 'Server Disconnected', color: '#ff0000' },
        chartView: null
      });
    });
  }

  onReceivedNoti() {
    Realtime.on('noti', ({ msg }) => {
      this.setState({ noti: { msg, color: '#00ce1b' } });
    });
  }

  componentDidMount() {
    this.onServerConnected.bind(this)();
    this.onServerDisconnected.bind(this)();
    this.onReceivedNoti.bind(this)();
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h2>Real-time Chart</h2>
          <span style={{ color: this.state.noti.color }}>{this.state.noti.msg}</span>
        </header>
        <div className="app-content">{this.state.chartView}</div>
      </div>
    );
  }
}

export default App;
