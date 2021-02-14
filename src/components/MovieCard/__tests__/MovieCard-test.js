import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from '../MovieCard';

it('renders correctly', () => {
  const component = renderer.create(<MovieCard />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
