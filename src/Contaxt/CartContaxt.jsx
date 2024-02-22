import { createContext, useContext, useReducer } from "react";
import reducer from "../Reducer/CartReducer";

const CartContaxt = createContext();

const CartProvider = ({ children }) => {
  const initialState = {
    cart: [],
    total_amount: "",
    total_item: "",
    Shipping_fee: 50000,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // ADDTOCARt
  const addCart = (id, color, amount, product) => {
    return dispatch({
      type: "ADD_TO_CART",
      payload: { id, color, amount, product },
    });
  };
  return (
    <CartContaxt.Provider value={{ ...state, addCart }}>
      {children}
    </CartContaxt.Provider>
  );
};

const useCartContaxt = () => {
  return useContext(CartContaxt);
};

export { CartProvider, useCartContaxt };
