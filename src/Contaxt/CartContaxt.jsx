import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/CartReducer";

const CartContaxt = createContext();

const CartProvider = ({ children }) => {
  // get DATA From LOCALE SToRage
  let getLocaleStorageData = () => {
    let cartData = localStorage.getItem("Cart_Data");

    if (cartData == []) {
      return [];
    } else {
      return JSON.parse(cartData);
    }
  };

  const initialState = {
    //cart: [],
    cart: getLocaleStorageData(),
    total_amount: "",
    total_item: "",
    Shipping_fee: 50000,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // ADDTOCARt
  const addCart = (id, color, amount, product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, color, amount, product },
    });
  };

  // REMOVE CART
  const removeCart = (id) => {
    dispatch({
      type: "REMOVE_TO_CART",
      payload: id,
    });
  };

  // ADD CART DATA into LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("Cart_Data", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContaxt.Provider value={{ ...state, addCart, removeCart }}>
      {children}
    </CartContaxt.Provider>
  );
};

const useCartContaxt = () => {
  return useContext(CartContaxt);
};

export { CartProvider, useCartContaxt };
