import { render, screen, fireEvent } from "@testing-library/react";
import { TestComponent1 } from "./TestComponent1";

test("Render Test", () => {
  render(<TestComponent1 />);
  const btn = screen.getByRole("button");
  expect(btn).toBeInTheDocument();
});

test("Toggle function check:", () => {
  render(<TestComponent1 />);

  const btn = screen.getByRole("button");
  expect(btn).toHaveStyle("background: white");
  expect(btn).toHaveStyle("color: black");

  fireEvent.click(btn);

  const title = screen.getByText("Toggle is True");

  expect(title).toBeInTheDocument();
  expect(btn).toHaveStyle("background: black");
  expect(btn).toHaveStyle("color: white");
});
