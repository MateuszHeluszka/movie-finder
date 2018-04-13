import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import SearchBar from './index';

describe('<SearchBar />', () => {
  it('renders Input component', () => {
    const searchBar = shallow(<SearchBar value="The Matrix" />);
    expect(searchBar.find('Input').length).toEqual(1);
  });

  it('renders loader', () => {
    const searchBar = shallow(<SearchBar value="The Matrix" loading />);
    expect(searchBar.find('img.loader').length).toEqual(1);
  });
});
