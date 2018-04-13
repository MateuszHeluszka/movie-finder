import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import SearchDetails from './index';

describe('<SearchDetails />', () => {
  it('renders close button', () => {
    const searchDetails = shallow(<SearchDetails />);
    expect(searchDetails.find('.search-details__close').length).toEqual(1);
  });

  it('renders background image', () => {
    const details = {
      data: {
        "backdrop_path": "\/7u3pxc0K1wx32IleAkLv78MKgrw.jpg",
      },
      visible: true,
    };
    const searchDetails = shallow(<SearchDetails details={details} />);
    searchDetails.setState({
      visible: details.visible,
      data: details.data,
    });
    expect(searchDetails.find('.search-details__backdrop').length).toEqual(1);
    searchDetails.setState({
      imageReady: true,
    });
    expect(searchDetails.find('.search-details__backdrop.hidden').length).toEqual(0);
  });

  it('renders movie details', () => {
    const details = {
      data: {
        "title": "The Matrix",
        "original_title": "The Matrix",
        "release_date": "1999-03-30",
        "overview": "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
        "backdrop_path": "\/7u3pxc0K1wx32IleAkLv78MKgrw.jpg",
        "vote_average": 8.3,
        "vote_count": 12345,
      },
      visible: true,
    };
    const searchDetails = shallow(<SearchDetails details={details} />);
    searchDetails.setState({
      visible: details.visible,
      data: details.data,
    });
    expect(searchDetails.find('.search-details__content').length).toEqual(1);
    expect(searchDetails.find('.search-details__content span').contains('The Matrix')).toEqual(true);
    expect(searchDetails.find('.search-details__content span').contains('1999-03-30')).toEqual(true);
    expect(searchDetails.find('.search-details__content span').contains(8.3)).toEqual(true);
    expect(searchDetails.find('.search-details__content span').contains(12345)).toEqual(true);
  });
});
