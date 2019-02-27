import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Chart.css';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Label, Tooltip } from 'recharts';
import Realtime from '../../services/realtime';

class Chart extends Component {
  constructor(props) {
    super(props);
    if (props.unit === 'u') {
      this.labels = { chartName: 'Voltage chart', unit: 'V' };
      this.colors = { line: '#ff21cb' };
    } else if (props.unit === 'i') {
      this.labels = { chartName: 'Current chart', unit: 'A' };
      this.colors = { line: '#00ffff' };
    }
    this.state = { data: [] };
  }

  componentDidMount() {
    Realtime.on('newData', data => {
      this.setState({ data: data[this.props.unit] });
    });
  }

  render() {
    const { labels, colors } = this;
    return (
      <ResponsiveContainer width="60%" minWidth={360} aspect={1.7}>
        <LineChart data={this.state.data} margin={{ top: 30, bottom: 30 }}>
          <Line type="monotone" dataKey="val" stroke={colors.line} />
          <CartesianGrid stroke={colors.grid} strokeDasharray="5 5" />
          <XAxis dataKey="name">
            <Label value={labels.chartName} position="bottom" fill="#fff" />
          </XAxis>
          <YAxis unit={labels.unit} />
          <Tooltip
            contentStyle={{ borderRadius: '10px' }}
            itemStyle={{ color: '#000' }}
            labelStyle={{ display: 'none' }}
            formatter={value => parseFloat(value).toFixed(this.props.unit === 'u' ? 1 : 2)}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

Chart.propTypes = {
  unit: PropTypes.string.isRequired,
  sizes: PropTypes.object
};

export default Chart;
