import { createContext, useContext, useEffect, useReducer } from "react";
import { useCustomHook } from "./ProductContaxt";
import reducer from "../Reducer/FilterReducer";

const FilterContaxt = createContext();

const initialState = {
  FilterProducts: [],
  AllProducts: [],
  Grid_view: false,
  sorting_value: "lowest",
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

  useEffect(() => {
    dispatch({ type: "SORTED_DATA", payload: products });
  }, [state.sorting_value]);

  // set grid view
  const setGridView = () => {
    return dispatch({ type: "SET_GRIDVIEW" });
  };

  // set list view
  const setListView = () => {
    return dispatch({ type: "SET_LISTVIEW" });
  };

  // sorting function
  const sorting = () => {
    return dispatch({ type: "GET_SORT_VALUE" });
  };

  return (
    <FilterContaxt.Provider
      value={{ ...state, setGridView, setListView, sorting }}
    >
      {children}
    </FilterContaxt.Provider>
  );
};

// Custom HOOK
const useFilterContaxt = () => {
  return useContext(FilterContaxt);
};

export { useFilterContaxt, FilterContaxtProvider };
