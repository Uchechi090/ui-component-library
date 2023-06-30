import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Modal from "./Modal";

describe("<Modal />", () => {
  const mockCloseValue = jest.fn();
  let isOpen = true;

  it("should show props", () => {
    const { getByTestId, asFragment, rerender } = render(
      <Modal isOpen={isOpen} onClose={mockCloseValue} />
    );

    expect(asFragment()).toMatchSnapshot();
    expect(getByTestId("modal-wrapper")).toBeInTheDocument();

    fireEvent.click(getByTestId("close-button"));
    expect(mockCloseValue).toBeCalled();

    rerender(<Modal isOpen={isOpen} onClose={mockCloseValue} />);

    fireEvent.click(getByTestId("overlay"));
    expect(mockCloseValue).toBeCalled();
  });
});
