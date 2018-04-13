import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import Input from './index';

describe('<Input />', () => {
  it('renders Input component', () => {
    const input = shallow(<Input value="The Matrix" />);
    expect(input.find('input').length).toEqual(1);
  });
});
