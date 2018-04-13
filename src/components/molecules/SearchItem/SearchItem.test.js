import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import SearchItem from './index';

describe('<SearchItem />', () => {
  it('renders SearchItem', () => {
    const searchItem = shallow(<SearchItem />);
    searchItem.setState({
      ready: true,
    });
    expect(searchItem.find('.search-item').length).toEqual(1);
    expect(searchItem.find('.search-item.hidden').length).toEqual(0);
  });

  it('handle image error', () => {
    const searchItem = shallow(<SearchItem />);
    searchItem.setState({
      ready: true,
      error: true,
    })
    expect(searchItem.find('.search-item__cover.error').length).toEqual(1);
  });

  it('renders title', () => {
    const searchItem = shallow(<SearchItem />);
    searchItem.setState({
      ready: true,
    });
    searchItem.setProps({
      title: 'Test title'
    });
    expect(searchItem.find('.search-item__desc h2').contains('Test title')).toEqual(true);
  });

  it('renders rate', () => {
    const searchItem = shallow(<SearchItem />);
    searchItem.setState({
      ready: true,
    });
    searchItem.setProps({
      voteAverage: 9,
    });
    expect(searchItem.find('.search-item__desc span').length).toEqual(1);
  });

  it('renders more button', () => {
    const searchItem = shallow(<SearchItem />);
    searchItem.setState({
      ready: true,
    });
    searchItem.setProps({
      id: 10,
    });
    expect(searchItem.find('.search-item__desc Button').length).toEqual(1);
  });
});
