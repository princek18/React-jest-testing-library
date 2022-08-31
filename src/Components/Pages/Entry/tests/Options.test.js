import { render, screen } from "@testing-library/react";
import { Options } from "../Options";

test("Display images for each scoop option from server", async () => {
  render(<Options optionType="scoops" />);

  const images = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(images).toHaveLength(2);

  const altTexts = images.map((one) => one.alt);
  expect(altTexts).toEqual(["Vanilla scoop", "Chocolate scoop"]);
});

test("Display images for each topping option from server", async () => {
  render(<Options optionType="toppings" />);

  const images = await screen.findAllByRole("img", { name: /topping$/i });
  expect(images).toHaveLength(3);

  const altTexts = images.map((one) => one.alt);
  expect(altTexts).toEqual([
    "Hot fudge topping",
    "Peanut butter cups topping",
    "Mochi topping",
  ]);
});
