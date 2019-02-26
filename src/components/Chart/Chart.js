import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Chart.css';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Label } from 'recharts';
import { merge } from 'lodash';
import Realtime from '../../services/realtime';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.sizes = merge({ w: 500, h: 500 }, props.sizes);
    this.keys = { data: 'val', x: 'name' };
    if (props.unit === 'u') {
      this.labels = { chartName: 'Voltage chart', unit: 'V' };
      this.colors = { line: '#ff21cb' };
      this.getData = Realtime.getU;
    } else if (props.unit === 'i') {
      this.labels = { chartName: 'Current chart', unit: 'A' };
      this.colors = { line: '#00ffff' };
      this.getData = Realtime.getI;
    }
    this.state = {
      data: []
    };
    this.updateData = this.updateData.bind(this);
  }

  async updateData() {
    const data = await this.getData();
    this.setState({ data });
  }

  render() {
    const { sizes, keys, labels, colors } = this;
    return (
      <div className="chart" onClick={this.updateData}>
        <LineChart data={this.state.data} width={sizes.w} height={sizes.h} margin={{ top: 20, bottom: 30 }}>
          <Line type="monotone" dataKey={keys.data} stroke={colors.line} />
          <CartesianGrid stroke={colors.grid} strokeDasharray="5 5" />
          <XAxis dataKey={keys.x}>
            <Label value={labels.chartName} position="bottom" fill="#fff" />
          </XAxis>
          <YAxis unit={labels.unit} />
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
