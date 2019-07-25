import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

it("renders cardlist component", () => {
  const mockRobots = [
    {
      id: 1,
      name: "Jimmy",
      email: "jimmy@gmail.com"
    }
  ]
  expect(shallow(<CardList robotList={mockRobots} />)).toMatchSnapshot();
})