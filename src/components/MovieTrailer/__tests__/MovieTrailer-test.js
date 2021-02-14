import React from 'react';
import renderer from 'react-test-renderer';
import MovieTrailer from '../MovieTrailer';

it('renders correctly', () => {
  const tree = renderer.create(<MovieTrailer />).toJSON();
  expect(tree).toMatchSnapshot();
});
