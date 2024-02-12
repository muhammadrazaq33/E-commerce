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
  isSingleLoading: false,
  SingleProduct1: {},
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

  // SingleProduct async fuction
  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_Loading" });
    try {
      const res = await axios.get(url);
      // console.log(res);
      const SingleProduct1 = await res.data;
      // console.log(SingleProduct);
      dispatch({ type: "SET_SINGLE_DATA", payload: SingleProduct1 });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);
  return (
    <AppContaxt.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContaxt.Provider>
  );
};

// Custom HOOK
const useCustomHook = () => {
  return useContext(AppContaxt);
};

export { AppProvider, AppContaxt, useCustomHook };
