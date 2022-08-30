import "./App.css";
import { IndexUI } from "./Components/Pages/Entry/IndexUI";
import { OrderSummary } from "./Components/Pages/Summary/OrderSummary";
import { TestComponent1 } from "./Components/TestComponent1/TestComponent1";

function App() {
  return (
    <div data-testid="app" className="App">
      {/* <TestComponent1 /> */}
      {/* <OrderSummary /> */}
      <IndexUI />
    </div>
  );
}

export default App;
