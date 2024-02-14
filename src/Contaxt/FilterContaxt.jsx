import { createContext, useContext, useEffect, useReducer } from "react";
import { useCustomHook } from "./ProductContaxt";
import reducer from "../Reducer/FilterReducer";

const FilterContaxt = createContext();

const initialState = {
  FilterProducts: [],
  AllProducts: [],
  Grid_view: false,
};

const FilterContaxtProvider = ({ children }) => {
  // products data
  const { products } = useCustomHook();
  //   console.log(products);

  // reducer hook for sending data into contaxt api
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  const setGridView = () => {
    return dispatch({ type: "SET_GRIDVIEW" });
  };
  return (
    <FilterContaxt.Provider value={{ ...state, setGridView }}>
      {children}
    </FilterContaxt.Provider>
  );
};

// Custom HOOK
const useFilterContaxt = () => {
  return useContext(FilterContaxt);
};

export { useFilterContaxt, FilterContaxtProvider };
