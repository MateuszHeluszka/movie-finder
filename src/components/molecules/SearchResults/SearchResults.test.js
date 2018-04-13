import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import testData from '../../../test-data';
import SearchResults from './index';

describe('<SearchResults />', () => {
  it('renders results', () => {
    const searchResults = shallow(<SearchResults items={testData.results} />);
    expect(searchResults.find('li').length).toEqual(testData.results.length);
  });

  it('renders message', () => {
    const searchResults = shallow(<SearchResults items={testData.results} message="Test message" />);
    expect(searchResults.find('p').contains('Test message')).toEqual(true);
  });
});
