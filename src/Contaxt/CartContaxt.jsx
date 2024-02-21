import { Children, createContext, useReducer } from "react";

const CartContaxt = createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <CartContaxt.Provider>{Children}</CartContaxt.Provider>;
};

export { CartProvider };
