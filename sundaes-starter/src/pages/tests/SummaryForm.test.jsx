import { render, screen, fireEvent } from "@testing-library/react";
import SummaryForm from "../summary/SummaryForm";

describe("SummaryForm component", () => {

  test("initial states", () => {
    render(<SummaryForm />);

    const checkboxElement = screen.getByRole("checkbox", {
      name: "I agree to terms and conditions",
    });
    const buttonElement = screen.getByRole("button", { name: "Confirm order" });

    expect(buttonElement).toBeInTheDocument();
    expect(checkboxElement).toBeInTheDocument();

    expect(checkboxElement).not.toBeChecked();
    expect(buttonElement).toBeDisabled();

  });

  test("checkbox enables button on first click and disables on second click", () => {
    render(<SummaryForm />);

    const checkboxElement = screen.getByRole("checkbox", {name: "I agree to terms and conditions"});

    const buttonElement = screen.getByRole("button", {name: "Confirm order"});

    fireEvent.click(checkboxElement);
    expect(buttonElement).toBeEnabled();

    fireEvent.click(checkboxElement);
    expect(buttonElement).toBeDisabled();   
  });

});
