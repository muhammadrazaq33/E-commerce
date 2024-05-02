import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/CartReducer";

const CartContaxt = createContext();

const CartProvider = ({ children }) => {
  // get DATA From LOCALE SToRage
  let getLocaleStorageData = () => {
    let cartData = localStorage.getItem("Cart_Data");

    if (!cartData || cartData === "null" || JSON.parse(cartData).length === 0) {
      return [];
    } else {
      return JSON.parse(cartData);
    }
  };

  const initialState = {
    //cart: [],
    cart: getLocaleStorageData(),
    total_price: "",
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

  const setIncrease = (id) => {
    dispatch({ type: "SET_INCREASE", payload: id });
  };

  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREASE", payload: id });
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
    // dispatch({ type: "ADD_TOTAL_ITEM" });
    // dispatch({ type: "ADD_TOTAL_PRICE" });
    localStorage.setItem("Cart_Data", JSON.stringify(state.cart));
  }, [state.cart]);

  // clearCart
  const clearCart = () => {
    dispatch({ type: "Clear_Cart" });
  };

  return (
    <CartContaxt.Provider
      value={{
        ...state,
        addCart,
        removeCart,
        clearCart,
        setIncrease,
        setDecrease,
      }}
    >
      {children}
    </CartContaxt.Provider>
  );
};

const useCartContaxt = () => {
  return useContext(CartContaxt);
};

export { CartProvider, useCartContaxt };
