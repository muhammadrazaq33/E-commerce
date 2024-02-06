import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/ProductReducer";

const AppContaxt = createContext();

// API
const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "API_Loading" });
    try {
      const res = await axios.get(url);
      // console.log(res);
      const products = await res.data;
      // console.log(products);
      dispatch({ type: "API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);
  return (
    <AppContaxt.Provider value={{ ...state }}>{children}</AppContaxt.Provider>
  );
};

// Custom HOOK
const useCustomHook = () => {
  return useContext(AppContaxt);
};

export { AppProvider, AppContaxt, useCustomHook };
