import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

it("renders card component", () => {
  expect(shallow(<Card />)).toMatchSnapshot();
})