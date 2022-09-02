import { screen, render } from "../../../../TestUtils/test-overridden-RST";
import { IndexUI } from "../IndexUI";
import { server } from "../../../../mocks/server";
import { rest } from "msw";

test("handles error for scoops and toppings routes", async () => {
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
