import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppProvider } from "./Contaxt/ProductContaxt.jsx";
import { FilterContaxtProvider } from "./Contaxt/FilterContaxt.jsx";
import Cart from "./Cart.jsx";
import { CartProvider } from "./Contaxt/CartContaxt.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-xaixqcfir37rsaap.us.auth0.com"
    clientId="oJ7p4OYincFbhzJhEZgKcFfsgiYeLX8K"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <React.StrictMode>
      <AppProvider>
        <FilterContaxtProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterContaxtProvider>
      </AppProvider>
    </React.StrictMode>
  </Auth0Provider>
);
