import userEvent from "@testing-library/user-event";
import { render, screen } from "../../../../TestUtils/test-overridden-RST";
import { IndexUI } from "../IndexUI";

test("check scoops sub total is working properly", async () => {
  render(<IndexUI />);

  const subTotal = screen.getByText("Scoops Total: $", { exact: false });
  expect(subTotal).toHaveTextContent(0);

  const allScoops = await screen.findAllByRole("spinbutton");

  userEvent.clear(allScoops[0]);
  userEvent.type(allScoops[0], "2");
  expect(subTotal).toHaveTextContent(4);

  //   const chocolateScoop = await screen.findByRole("spinbutton", {
  //     name: /Chocolate/i,
  //   });
  userEvent.clear(allScoops[1]);
  userEvent.type(allScoops[1], "2");
  expect(subTotal).toHaveTextContent(8);

  userEvent.type(allScoops[0], "1");
  expect(subTotal).toHaveTextContent(6);
});

test("check toppings sub total is working properly", async () => {
  render(<IndexUI />);

  const subTotal = screen.getByText("Toppings Total: $", {
    exact: false,
  });
  expect(subTotal).toHaveTextContent(0);

  const allToppings = await screen.findAllByRole("checkbox");

  userEvent.click(allToppings[0]);
  expect(subTotal).toHaveTextContent(1.5);

  //   const mochi = await screen.findByRole("checkbox", {
  //     name: /Mochi/i,
  //   });
  userEvent.click(allToppings[1]);
  expect(subTotal).toHaveTextContent(3);

  userEvent.click(allToppings[0]);
  expect(subTotal).toHaveTextContent(1.5);
});
describe("check grand total for multiple cases", () => {
  test("first add scoops then toopings", async () => {
    render(<IndexUI />);
    const total = screen.getByText("Grand Total: $", {
      exact: false,
    });

    const allScoops = await screen.findAllByRole("spinbutton");

    userEvent.clear(allScoops[0]);
    userEvent.type(allScoops[0], "2");

    expect(total).toHaveTextContent(4);

    const allToppings = await screen.findAllByRole("checkbox");

    userEvent.click(allToppings[1]);
    expect(total).toHaveTextContent(5.5);

    userEvent.click(allToppings[0]);
    expect(total).toHaveTextContent(7);
  });
  test("first add toppings then scoops", async () => {
    render(<IndexUI />);
    const total = screen.getByText("Grand Total: $", {
      exact: false,
    });

    const allScoops = await screen.findAllByRole("spinbutton");

    const allToppings = await screen.findAllByRole("checkbox");

    userEvent.click(allToppings[1]);
    expect(total).toHaveTextContent(1.5);

    userEvent.clear(allScoops[0]);
    userEvent.type(allScoops[0], "1");
    expect(total).toHaveTextContent(3.5);

    userEvent.clear(allScoops[1]);
    userEvent.type(allScoops[1], "2");
    expect(total).toHaveTextContent(7.5);
  });
  test("try removing both", async () => {
    render(<IndexUI />);
    const total = screen.getByText("Grand Total: $", {
      exact: false,
    });

    const allScoops = await screen.findAllByRole("spinbutton");

    const allToppings = await screen.findAllByRole("checkbox");

    userEvent.click(allToppings[1]);
    expect(total).toHaveTextContent(1.5);

    userEvent.clear(allScoops[0]);
    userEvent.type(allScoops[0], "1");
    expect(total).toHaveTextContent(3.5);

    userEvent.clear(allScoops[1]);
    userEvent.type(allScoops[1], "2");
    expect(total).toHaveTextContent(7.5);

    userEvent.type(allScoops[0], "0");
    userEvent.type(allScoops[1], "1");
    expect(total).toHaveTextContent(3.5);

    userEvent.click(allToppings[1]);
    expect(total).toHaveTextContent(2);
  });
});
