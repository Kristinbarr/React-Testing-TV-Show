import React from 'react'
// import renderer from "react-test-renderer"; // 1: install this npm module as a dev dependency
import { render, fireEvent, queryByText } from "@testing-library/react";

import Episodes from "./Episodes"



const episodes = [
  {
      "id":553946,
      "url":"http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
      "name":"Chapter One: The Vanishing of Will Byers",
      "season":1,
      "number":1,
      "airdate":"2016-07-15",
      "airtime":"",
      "airstamp":"2016-07-15T12:00:00+00:00",
      "runtime":60,
  },
  
  {
      "id":578663,
      "url":"http://www.tvmaze.com/episodes/578663/stranger-things-1x02-chapter-two-the-weirdo-on-maple-street",
      "name":"Chapter Two: The Weirdo on Maple Street",
      "season":1,
      "number":2,
      "airdate":"2016-07-15",
      "airtime":"",
      "airstamp":"2016-07-15T12:00:00+00:00",
      "runtime":60,
  },
]

test('Episodes renders correctly', async() => {
  const { queryAllByText } = render(
      <Episodes episodes={episodes} />
  );
  console.log('testttt:',queryAllByText(/episodes/i))
  expect(queryAllByText(/episodes/i)).toHaveLength(2);
});

describe("<Episodes /> snapshot", () => {
  it("matches snapshot", () => {
    const tree = render(<Episodes />) // generates a DOM tree
    // snapshots are a JSON representation of the DOM tree
    expect(tree.asFragment()).toMatchSnapshot();
  });

  // Implementation details ->
  //   - what props.speak is doing...
  //   - if props.speak is invoked...

  // What we _want_ to test:
  //    - When our user clicks that button... what happens in the app?
  // it("displays a message when 'speak' button is clicked", () => {
  //   const speak = jest.fn();
  //   let messageMock = "";

  //   const { getByText } = render(<Speak speak={speak} message={messageMock} />);

  //   fireEvent.click(getByText(/speak/i));

  //   expect(speak).toHaveBeenCalled();
  // });
});

