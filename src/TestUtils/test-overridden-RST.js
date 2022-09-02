import { render } from "@testing-library/react";
import { DataContextProvider } from "../Context/DataContextProvider";

const overriddenRender = (ui, options) => {
  render(ui, { wrapper: DataContextProvider, ...options });
};

// re-export everything
export * from "@testing-library/react";

// override render method
export { overriddenRender as render };
