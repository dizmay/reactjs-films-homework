import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardHover from '../MovieCardHover';

it('renders correctly', () => {
  const tree = renderer.create(<MovieCardHover />).toJSON();
  expect(tree).toMatchSnapshot();
});
