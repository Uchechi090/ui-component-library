import React from "react";
import { render, fireEvent } from "@testing-library/react";

import InputField from "./InputField";

describe("<InputField />", () => {
  const mockChangeValue = jest.fn();

  it("should show props", () => {
    const { getByTestId, asFragment } = render(
      <InputField
        label={"Name"}
        onChange={mockChangeValue}
        type={"text"}
        value={"Jane Doe"}
        name={"name"}
        placeholder={"Please enter your name"}
        isValid={true}
      />
    );

    expect(asFragment()).toMatchSnapshot();

    expect(getByTestId("input-field").getAttribute("value")).toBe("Jane Doe");
    expect(getByTestId("input-field").getAttribute("type")).toBe("text");
    expect(getByTestId("input-field").getAttribute("name")).toBe("name");
    expect(getByTestId("input-field").getAttribute("placeholder")).toBe(
      "Please enter your name"
    );

    fireEvent.change(getByTestId("input-field"), { target: { value: "Jane" } });
    expect(mockChangeValue).toBeCalled();
  });

  it("should test for when isValid is false", () => {
    const { getByTestId, asFragment } = render(
      <InputField
        label={"Name"}
        onChange={mockChangeValue}
        type={"text"}
        value={"Jane Doe"}
        name={"name"}
        placeholder={"Please enter your name"}
        isValid={false}
      />
    );

    expect(asFragment()).toMatchSnapshot();
    expect(getByTestId("error-validation")).toHaveTextContent(
      /Please check that your input is valid/
    );
  });

  it("should test for disabled", () => {
    const { getByTestId, asFragment } = render(
      <InputField
        label={"Name"}
        onChange={mockChangeValue}
        type={"text"}
        value={"Jane Doe"}
        name={"name"}
        placeholder={"Please enter your name"}
        isValid={true}
        disabled
      />
    );

    expect(asFragment()).toMatchSnapshot();
    expect(getByTestId("input-field")).toHaveAttribute("disabled");
  });
});
