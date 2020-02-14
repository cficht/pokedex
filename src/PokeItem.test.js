import React from 'react';
import PokeItem from './PokeItem';
import renderer from "react-test-renderer";
import data from './data.js';

test('renders PokeItem.js correctly', () => {
  const tree = renderer
  .create(<PokeItem pokemon={data} />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});