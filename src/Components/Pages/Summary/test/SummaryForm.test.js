import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SummaryForm } from "../SummaryForm";

test("default checkbox functionality test", () => {
  render(<SummaryForm />);
  expect(screen.getByRole("button", { name: "Confirm Order" })).toBeDisabled();
  expect(screen.getByRole("checkbox")).not.toBeChecked();
});

test("checkbox functionality test after checkbox is true", () => {
  render(<SummaryForm />);
  const checkbx = screen.getByRole("checkbox");
  userEvent.click(checkbx);

  expect(checkbx).toBeChecked();
  expect(screen.getByRole("button")).toBeEnabled();

  userEvent.click(checkbx);
  expect(screen.getByRole("button")).toBeDisabled();
});

test("hover response check", () => {
  render(<SummaryForm />);
  expect(
    screen.getByLabelText("Some conditions would be there!")
  ).toBeInTheDocument();
  userEvent.hover(screen.getByText("Terms and Conditions."));
  expect(
    screen.getByLabelText("Some conditions would be there!")
  ).toBeInTheDocument();
});
