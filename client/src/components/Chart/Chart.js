import React from 'react';
import PropTypes from 'prop-types';
import './Chart.css';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, YAxis, XAxis, Tooltip } from 'recharts';

function Chart(props) {
  const { label } = props;
  const data = props.data[label.key].arr.slice(0, 15).reverse();
  const colors = {};
  const domain = [];
  if (props.label.key === 'u') {
    colors.line = 'var(--color-u-line)';
    domain.push(0, 20);
  } else if (props.label.key === 'i') {
    colors.line = 'var(--color-i-line)';
    domain.push(0, 0.6);
  }
  return (
    <ResponsiveContainer width="70%" minWidth={320} aspect={1.6}>
      <LineChart data={data} margin={{ top: 30, bottom: 30 }}>
        <Line dataKey="value" type="monotone" stroke={colors.line} />
        <CartesianGrid stroke="var(--color-black)" strokeDasharray="5 5" />
        <YAxis domain={domain} unit={label.unit} axisLine={false} stroke="var(--color-black)" />
        <XAxis dataKey="time" hide={true} tick={false} />
        <Tooltip
          contentStyle={{ borderRadius: '10px', borderColor: colors.line }}
          itemStyle={{ color: 'var(--color-black)' }}
          labelStyle={{ color: 'var(--color-black)' }}
          animationDuring={100}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

Chart.propTypes = {
  label: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
};

export default Chart;
