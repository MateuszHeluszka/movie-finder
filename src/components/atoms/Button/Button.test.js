import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import Button from './index';

describe('<Button />', () => {
  it('renders Input component', () => {
    const button = shallow(<Button>Test button</Button>);
    expect(button.find('button').children.length).toEqual(1);
    expect(button.find('button').contains('Test button')).toEqual(true);
  });
});
