import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import DataPage from './screens/DataPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: { key: 'u', title: 'Voltage', unit: 'V' }
    };
    this.changeScreen = this.changeScreen.bind(this);
  }

  changeScreen(screen) {
    if (screen === 'voltage') this.setState({ label: { key: 'u', title: 'Voltage', unit: 'V' } });
    if (screen === 'current') this.setState({ label: { key: 'i', title: 'Current', unit: 'A' } });
  }

  render() {
    return (
      <div className="app">
        <Header onChangeScreen={this.changeScreen} />
        <DataPage label={this.state.label} />
        <footer>
          <hr />
          <div className="text-center">
            <code>vietduc@2019</code>
          </div>
        </footer>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
