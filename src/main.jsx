import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppProvider } from "./Contaxt/ProductContaxt.jsx";
import { FilterContaxtProvider } from "./Contaxt/FilterContaxt.jsx";
import Cart from "./Cart.jsx";
import { CartProvider } from "./Contaxt/CartContaxt.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <FilterContaxtProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterContaxtProvider>
    </AppProvider>
  </React.StrictMode>
);
