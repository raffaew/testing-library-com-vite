import { render, screen } from "@testing-library/react";
import SummaryForm from "../summary/SummaryForm";
import userEvent from "@testing-library/user-event";

describe("SummaryForm component", () => {
  test("initial states", () => {
    render(<SummaryForm />);

    const checkboxElement = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    const buttonElement = screen.getByRole("button", {
      name: /confirm order/i,
    });

    expect(buttonElement).toBeInTheDocument();
    expect(checkboxElement).toBeInTheDocument();

    expect(checkboxElement).not.toBeChecked();
    expect(buttonElement).toBeDisabled();
  });

  test("checkbox enables button on first click and disables on second click", async () => {
    userEvent.setup();
    render(<SummaryForm />);

    const checkboxElement = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });

    const buttonElement = screen.getByRole("button", {
      name: /confirm order/i,
    });

    await userEvent.click(checkboxElement);
    expect(buttonElement).toBeEnabled();

    await userEvent.click(checkboxElement);
    expect(buttonElement).toBeDisabled();
  });

  test("popover responds to hover", async () => {
    const user = userEvent.setup();
    render(<SummaryForm />);

    // popover starts out hidden
    const nullPopover = screen.queryByText(
      /no ice cream will actually be delivered/i
    );

    expect(nullPopover).not.toBeInTheDocument();

    // popover appears on mouseover of checkbox label
    const termsAndConditions = screen.getByText(/terms and conditions/i);
    await user.hover(termsAndConditions);
    const popover = screen.getByText(/no ice cream will actually be delivered/i);
    expect(popover).toBeInTheDocument();

    // popover disappears when we mouse out
    await user.unhover(termsAndConditions);
    expect(popover).not.toBeInTheDocument();
  });
});
