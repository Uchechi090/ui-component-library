import React from "react";
import { render } from "@testing-library/react";

import App from "./App";

describe("<App />", () => {
  it("should show App component", () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });
});
