import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "./Button";
import Button from "./Button";

describe("<Button />", () => {
  const mockClickValue = jest.fn();
  const stubbedLabelValue = "Button";
  const stubbedStyleValue = {
    fontSize: "12px",
  };

  it("should show props", () => {
    const { getByTestId } = render(
      <Button
        label={stubbedLabelValue}
        onClick={mockClickValue}
        style={stubbedStyleValue}
      />
    );

    expect(getByTestId("btn").textContent).toBe("Button");
    expect(getByTestId("btn").style).toContain("font-size");

    fireEvent.click(getByTestId("btn"));
    expect(mockClickValue).toBeCalledTimes(1);
  });

  it("should contain classname for large", () => {
    const { getByTestId, asFragment } = render(
      <Button
        label={stubbedLabelValue}
        onClick={mockClickValue}
        className={"large"}
      />
    );

    expect(asFragment()).toMatchSnapshot();
    expect(getByTestId("btn").className).toContain("large");
  });
  it("should contain classname for small", () => {
    const { getByTestId, asFragment } = render(
      <Button
        label={stubbedLabelValue}
        onClick={mockClickValue}
        className={"small"}
      />
    );

    expect(asFragment()).toMatchSnapshot();
    expect(getByTestId("btn").className).toContain("small");
  });
  it("should contain classname for primary", () => {
    const { getByTestId, asFragment } = render(
      <Button
        label={stubbedLabelValue}
        onClick={mockClickValue}
        className={"primary"}
      />
    );

    expect(asFragment()).toMatchSnapshot();
    expect(getByTestId("btn").className).toContain("primary");
  });
  it("should contain classname for secondary", () => {
    const { getByTestId, asFragment } = render(
      <Button
        label={stubbedLabelValue}
        onClick={mockClickValue}
        className={"secondary"}
      />
    );

    expect(asFragment()).toMatchSnapshot();
    expect(getByTestId("btn").className).toContain("secondary");
  });
  it("should show disabled", () => {
    const { getByTestId, asFragment } = render(
      <Button
        label={stubbedLabelValue}
        onClick={mockClickValue}
        disabled={true}
      />
    );

    expect(asFragment()).toMatchSnapshot();
    expect(getByTestId("btn").className).toContain("disabled");
  });
});
