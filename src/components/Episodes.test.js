import React from 'react'
// import renderer from "react-test-renderer"; // 1: install this npm module as a dev dependency
import { render, fireEvent } from "@testing-library/react";

import Episodes from "./Episodes"

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

