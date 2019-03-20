import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DataView.css';
import Table from '../../../components/Table';
import Chart from '../../../components/Chart';

class DataView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'table'
    };
  }

  changeView(view) {
    this.setState({ view });
  }

  render() {
    return (
      <div className="data">
        <div className="data-switch">
          <button
            type="button"
            className={this.state.view === 'table' ? 'active' : 'inactive'}
            onClick={() => this.changeView('table')}
          >
            Table
          </button>
          <button
            type="button"
            className={this.state.view === 'chart' ? 'active' : 'inactive'}
            onClick={() => this.changeView('chart')}
          >
            Chart
          </button>
        </div>
        {this.state.view === 'table' ? (
          <Table label={this.props.label} data={this.props.data} />
        ) : (
          <Chart label={this.props.label} data={this.props.data} />
        )}
      </div>
    );
  }
}

DataView.propTypes = {
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

export default DataView;
