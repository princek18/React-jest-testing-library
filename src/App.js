import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import { Confirmation } from "./Components/Pages/Confirmation/Confirmation";
import { IndexUI } from "./Components/Pages/Entry/IndexUI";
import { OrderSummary } from "./Components/Pages/Summary/OrderSummary";
import { DataContextProvider } from "./Context/DataContextProvider";

function App() {
  return (
    <div data-testid="app" className="App">
      <DataContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<IndexUI />} />
            <Route path="/summary" element={<OrderSummary />} />
            <Route path="/confirmation" element={<Confirmation />} />
          </Routes>
        </BrowserRouter>
      </DataContextProvider>
    </div>
  );
}

export default App;
