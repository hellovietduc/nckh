import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Chart.css';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Label, Tooltip } from 'recharts';
import { merge } from 'lodash';
import Realtime from '../../services/realtime';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.sizes = merge({ w: 720, h: 500 }, props.sizes);
    if (props.unit === 'u') {
      this.labels = { chartName: 'Voltage chart', unit: 'V' };
      this.colors = { line: '#ff21cb' };
    } else if (props.unit === 'i') {
      this.labels = { chartName: 'Current chart', unit: 'A' };
      this.colors = { line: '#00ffff' };
    }
    this.state = { data: [] };
    this.onReceivedData.bind(this)();
  }

  onReceivedData() {
    Realtime.on('newData', data => {
      this.setState({ data: data[this.props.unit] });
    });
  }

  render() {
    const { sizes, labels, colors } = this;
    return (
      <div className="chart">
        <LineChart data={this.state.data} width={sizes.w} height={sizes.h} margin={{ top: 20, bottom: 30 }}>
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
      </div>
    );
  }
}

Chart.propTypes = {
  unit: PropTypes.string.isRequired,
  sizes: PropTypes.object
};

export default Chart;
