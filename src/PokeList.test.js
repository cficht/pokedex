import React from 'react';
import PokeList from './PokeList';
import renderer from "react-test-renderer";

test('renders PokeList.js correctly', () => {
  const tree = renderer
  .create(<PokeList pokedex={[]} />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});