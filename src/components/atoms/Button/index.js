import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = props => (
  <button className={`button ${props.className}`} onClick={props.onClick}>
    {props.children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: undefined,
};

export default Button;
