import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppProvider } from "./Contaxt/ProductContaxt.jsx";
import { FilterContaxtProvider } from "./Contaxt/FilterContaxt.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <FilterContaxtProvider>
        <App />
      </FilterContaxtProvider>
    </AppProvider>
  </React.StrictMode>
);
