import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardInfo from '../MovieCardInfo';

it('renders correctly', () => {
  const tree = renderer.create(<MovieCardInfo />).toJSON();
  expect(tree).toMatchSnapshot();
});
