import { render, screen } from "@testing-library/react";
import { Options } from "../Options";

test("Display images for each scoop option from server", async () => {
  render(<Options optionType="scoop" />);

  const images = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(images).toHaveLength(2);
});
