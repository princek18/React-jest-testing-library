import { screen, render, waitFor } from "@testing-library/react";
import { IndexUI } from "../IndexUI";
import { server } from "../../../../mocks/server";
import { rest } from "msw";

test("handles error for scoops nad toppings routes", async () => {
  server.resetHandlers(
    rest.get("http://localhost:3030/scoops", (req, res, ctx) => {
      return res(ctx.status(500));
    }),
    rest.get("http://localhost:3030/toppings", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  render(<IndexUI />);

  const errors = await screen.findAllByTestId("error");
  expect(errors).toHaveLength(2);
});
