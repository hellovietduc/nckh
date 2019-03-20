import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import HeaderButton from './HeaderButton';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 'voltage'
    };
  }

  changeScreen(screen) {
    this.props.onChangeScreen(screen);
    this.setState({ screen });
  }

  render() {
    return (
      <header className="header">
        <div className="logo">
          <span>Arduino Monitoring System</span>
        </div>
        <div className="nav">
          <HeaderButton
            text="Voltage"
            isActive={this.state.screen === 'voltage'}
            onClick={() => this.changeScreen('voltage')}
          />
          <HeaderButton
            text="Current"
            isActive={this.state.screen === 'current'}
            onClick={() => this.changeScreen('current')}
          />
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  onChangeScreen: PropTypes.func.isRequired
};

export default Header;
