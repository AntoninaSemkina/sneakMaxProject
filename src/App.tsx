import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import { BasketProvider } from "./components/Basket/BasketContext";

function App() {
  return (
    <BasketProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </BasketProvider>
  );
}

export default App;
