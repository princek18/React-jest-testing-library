import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../App";

test("Whole app flow test", async () => {
  render(<App />);

  const allScoops = await screen.findAllByRole("spinbutton");
  userEvent.clear(allScoops[1]);
  userEvent.type(allScoops[1], "2");

  const allToppings = await screen.findAllByRole("checkbox");
  userEvent.click(allToppings[0]);

  const confirmButton = screen.getByRole("button", { name: "Confirm" });

  userEvent.click(confirmButton);

  const summaryHeading = screen.getByRole("heading", {
    name: "Toppings Total: $1.5",
  });
  expect(summaryHeading).toBeInTheDocument();

  expect(screen.getByText("Chocolate: 2")).toBeInTheDocument();
  expect(screen.getByText("Hot fudge")).toBeInTheDocument();

  const tcCheckbox = screen.getByRole("checkbox", {
    name: "Some conditions would be there!",
  });
  userEvent.click(tcCheckbox);

  const confirmOrder = screen.getByRole("button", { name: "Confirm Order" });

  userEvent.click(confirmOrder);

  const finalHeader = await screen.findByRole("heading", {
    name: "You are not getting anything!",
  });

  expect(finalHeader).toBeInTheDocument();

  const orderNmbr = await screen.findByText(/Order Number:/);

  expect(orderNmbr).toBeInTheDocument();

  const entryButton = screen.getByRole("button", { name: "Go to Entry Page" });

  userEvent.click(entryButton);

  const subTotalScoops = screen.getByText("Scoops Total: $0");
  expect(subTotalScoops).toBeInTheDocument();
  const subTotalToppings = screen.getByText("Toppings Total: $0");
  expect(subTotalToppings).toBeInTheDocument();
});
