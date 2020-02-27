import React from 'react';
import PropTypes from 'prop-types';
import './HeaderButton.css';

function HeaderButton(props) {
  return (
    <button type="button" className={props.isActive ? 'button-active' : 'button-inactive'} onClick={props.onClick}>
      {props.text}
    </button>
  );
}

HeaderButton.propTypes = {
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

export default HeaderButton;
