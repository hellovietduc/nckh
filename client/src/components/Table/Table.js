import React from 'react';
import PropTypes from 'prop-types';
import './Table.css';

function Table(props) {
  const { label } = props;
  const tableRows = props.data[label.key].arr.map((e, i) => (
    <div className="row-data" key={e.time}>
      <div className="col-num">
        <span>{i + 1}</span>
      </div>
      <div className="col-value">
        <span>{e.value}</span>
      </div>
      <div className="col-time">
        <span>{e.time}</span>
      </div>
    </div>
  ));
  return (
    <div className="table">
      <div className="row-title">
        <div className="col-num">
          <span>#</span>
        </div>
        <div className="col-value">
          <span>
            {label.title} ({label.unit})
          </span>
        </div>
        <div className="col-time">
          <span>Time</span>
        </div>
      </div>
      {tableRows}
    </div>
  );
}

Table.propTypes = {
  label: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
};

export default Table;
