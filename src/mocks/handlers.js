import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3030/scoops", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: "Vanilla",
          imagePath: "/images/vanilla.png",
        },
        {
          name: "Chocolate",
          imagePath: "/images/chocolate.png",
        },
      ])
    );
  }),
  rest.get("http://localhost:3030/toppings", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: "Hot fudge",
          imagePath: "/images/hot-fudge.png",
        },
        {
          name: "Peanut butter cups",
          imagePath: "/images/peanut-butter-cups.png",
        },
        {
          name: "Mochi",
          imagePath: "/images/mochi.png",
        },
      ])
    );
  }),
];
