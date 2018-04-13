import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import testData from '../../../test-data';
import Search from './index';

describe('<Search />', () => {
  it('renders SearchResults', () => {
    const search = shallow(<Search />);
    expect(search.find('SearchResults').length).toEqual(1);
  });

  it('renders error', () => {
    const search = shallow(<Search />);
    search.setState({
      error: true,
    })
    expect(search.find('.error').length).toEqual(1);
  });
});
