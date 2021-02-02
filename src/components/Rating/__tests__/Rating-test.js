import React from 'react';
import renderer from 'react-test-renderer';
import Rating from '../Rating';

it('renders correctly', () => {
  const tree = renderer.create(<Rating />).toJSON();
  expect(tree).toMatchSnapshot();
});
