import React from 'react';
import PropTypes from 'prop-types';
import './StatsView.css';

function StatsView(props) {
  const { label, data } = props;
  const { max, min, average, live } = data[label.key];
  return (
    <div className="info">
      <div className="live-value">
        <div>
          <span>Live {label.title.toLowerCase()}</span>
        </div>
        <div>
          <h2>
            {live.value}
            {label.unit}
          </h2>
        </div>
      </div>
      <div className="stats">
        <div className="stats-label">
          <div>
            <span>Max:</span>
          </div>
          <div>
            <span>Min:</span>
          </div>
          <div>
            <span>Average:</span>
          </div>
        </div>
        <div className="stats-value">
          <div>
            <span>
              {max.value}
              {label.unit}
            </span>
          </div>
          <div>
            <span>
              {min.value}
              {label.unit}
            </span>
          </div>
          <div>
            <span>
              {average.value}
              {label.unit}
            </span>
          </div>
        </div>
        <div className="stats-time">
          <div>
            <span>{max.time}</span>
          </div>
          <div>
            <span>{min.time}</span>
          </div>
          <div>
            <span>{average.time}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

StatsView.propTypes = {
  label: PropTypes.object.isRequired,
  data: PropTypes.objectOf(
    PropTypes.shape({
      max: PropTypes.shape({
        value: PropTypes.number.isRequired,
        time: PropTypes.string.isRequired
      }),
      min: PropTypes.shape({
        value: PropTypes.number.isRequired,
        time: PropTypes.string.isRequired
      }),
      average: PropTypes.shape({
        value: PropTypes.number.isRequired,
        time: PropTypes.string.isRequired
      }),
      live: PropTypes.shape({
        value: PropTypes.number.isRequired
      })
    })
  )
};

export default StatsView;
