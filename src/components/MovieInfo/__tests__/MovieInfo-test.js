import React from 'react';
import renderer from 'react-test-renderer';
import MovieInfo from '../MovieInfo';

it('renders correctly', () => {
  const tree = renderer.create(<MovieInfo />).toJSON();
  expect(tree).toMatchSnapshot();
});
