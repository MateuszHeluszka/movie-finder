import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const Input = props => (
  <input
    className="input"
    onChange={props.onChange}
    value={props.value}
    type="search"
  />
);

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  onChange: undefined,
};

export default Input;
