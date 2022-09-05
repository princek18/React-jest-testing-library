import { render } from "@testing-library/react";
import { DataContextProvider } from "../Context/DataContextProvider";
import { BrowserRouter } from "react-router-dom";

const Wrappers = ({ children }) => {
  return (
    <DataContextProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </DataContextProvider>
  );
};

const overriddenRender = (ui, options) => {
  render(ui, { wrapper: Wrappers, ...options });
};

// re-export everything
export * from "@testing-library/react";

// override render method
export { overriddenRender as render };
