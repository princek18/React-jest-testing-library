import "./App.css";
import { IndexUI } from "./Components/Pages/Entry/IndexUI";
import { OrderSummary } from "./Components/Pages/Summary/OrderSummary";
import { TestComponent1 } from "./Components/TestComponent1/TestComponent1";
import { DataContextProvider } from "./Context/DataContextProvider";

function App() {
  return (
    <div data-testid="app" className="App">
      <DataContextProvider>
        {/* <TestComponent1 /> */}
        {/* <OrderSummary /> */}
        <IndexUI />
      </DataContextProvider>
    </div>
  );
}

export default App;
