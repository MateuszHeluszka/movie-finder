import React from 'react';
import Input from '../../atoms/Input';
import loader from '../../../assets/img/loader.svg';
import './SearchBar.css';

export default props => (
  <section className="search-bar">
    {props.loading === true && (
      <img src={loader} className="loader" alt="Loader" />
    )}
    <Input
      placeholder="Type text to find a movie..."
      onChange={props.onChange}
      value={props.value}
    />
  </section>
);
