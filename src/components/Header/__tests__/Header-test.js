import React from 'react';
// import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import Header from '../Header';

it('renders correctly', () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(<Header />);
  expect(tree).toMatchSnapshot();
});
