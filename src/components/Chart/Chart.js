import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Chart.css';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Label } from 'recharts';
import { merge } from 'lodash';

class Chart extends Component {
  render() {
    const { configs } = this.props;
    const sizes = merge({ w: 500, h: 500 }, configs.sizes);
    const data = configs.data || [];
    const keys = merge({ data: '', x: 'name' }, configs.keys);
    const labels = merge({ chartName: '', unit: '' }, configs.labels);
    const colors = merge({ line: '#fff', grid: '#aaa' }, configs.colors);
    return (
      <div className="chart">
        <LineChart data={data} width={sizes.w} height={sizes.h} margin={{ top: 20, bottom: 30 }}>
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
  configs: PropTypes.object.isRequired
};

export default Chart;
