import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Dropdown from "./Dropdown";

describe("<Dropdown />", () => {
  const mockChangeValue = jest.fn();
  const options = ["Apple", "Banana", "Carrot", "Dates"];
  let selectedOption = options[1];

  it("should show props", () => {
    const { getByTestId, asFragment } = render(
      <Dropdown
        options={options}
        selectedOption={selectedOption}
        onChange={mockChangeValue}
      />
    );

    expect(asFragment()).toMatchSnapshot();
    expect(getByTestId("input").getAttribute("value")).toBe("Banana");

    fireEvent.change(getByTestId("input"), { target: { value: "Dates" } });
    expect(mockChangeValue).toBeCalled();
  });

  it("should show dropdown list", () => {
    const { getByTestId, getAllByTestId, asFragment } = render(
      <Dropdown
        options={options}
        selectedOption={selectedOption}
        onChange={mockChangeValue}
      />
    );

    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(getByTestId("input-container"));
    expect(getByTestId("dropdown-list")).toHaveClass("visible");
    expect(getAllByTestId("dropdown-item").length).toBeGreaterThan(1);

    fireEvent.click(getAllByTestId("dropdown-item")[0]);
    expect(getByTestId("input").getAttribute("value")).toBe("Apple");
    expect(
      getByTestId("dropdown-container").getElementsByClassName("dropdown-item")
        .length
    ).toEqual(0);
  });
});
