import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Search from './index';

test('Component renders corectly', () => {
  const component = renderer.create(
    <Search />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
