import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DataPage.css';
import StatsView from './StatsView';
import DataView from './DataView';
import Realtime from '../../services/realtime';

class DataPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socketId: null,
      u: {
        arr: [],
        max: { value: 0, time: '' },
        min: { value: 0, time: '' },
        average: { value: 0, time: '' },
        live: { value: 0 }
      },
      i: {
        arr: [],
        max: { value: 0, time: '' },
        min: { value: 0, time: '' },
        average: { value: 0, time: '' },
        live: { value: 0 }
      }
    };
    this.handleDownload = this.handleDownload.bind(this);
  }

  async handleDownload() {
    window.open(process.env.REACT_APP_SERVER_URL + '/data/download?socket_id=' + this.state.socketId, '_blank');
  }

  componentDidMount() {
    Realtime.on('receivedId', socketId => this.setState({ socketId }));
    Realtime.on('newData', data => this.setState(data));
  }

  render() {
    const { label } = this.props;
    return (
      <div>
        <div className="title">
          <div className="title-name">
            <span>{label.title} Data </span>
            <span className="small-text">from sensor</span>
          </div>
          <div className="download">
            <button type="button" onClick={this.handleDownload}>
              Download
            </button>
          </div>
        </div>
        <hr />
        <StatsView label={label} data={{ u: this.state.u, i: this.state.i }} />
        <hr />
        <DataView label={label} data={{ u: this.state.u, i: this.state.i }} />
      </div>
    );
  }
}

DataPage.propTypes = {
  label: PropTypes.shape({
    key: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    unit: PropTypes.string.isRequired
  })
};

export default DataPage;
