import React from 'react';
import renderer from 'react-test-renderer';
import ButtonElement from '../ButtonElement';

it('renders correctly', () => {
  const tree = renderer.create(<ButtonElement />).toJSON();
  expect(tree).toMatchSnapshot();
});
