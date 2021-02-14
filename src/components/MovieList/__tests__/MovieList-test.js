import React from 'react';
import renderer from 'react-test-renderer';
import MovieList from '../MovieList';

it('renders correctly', () => {
  const tree = renderer.create(<MovieList />).toJSON();
  expect(tree).toMatchSnapshot();
});
