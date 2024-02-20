import { createContext, useContext, useEffect, useReducer } from "react";
import { useCustomHook } from "./ProductContaxt";
import reducer from "../Reducer/FilterReducer";

const FilterContaxt = createContext();

const initialState = {
  FilterProducts: [],
  AllProducts: [],
  Grid_view: true,
  sorting_value: "a-z",
  filters: {
    text: "",
    category: "all",
  },
};

const FilterContaxtProvider = ({ children }) => {
  // products data
  const { products } = useCustomHook();
  //   console.log(products);

  // reducer hook for sending data into contaxt api
  const [state, dispatch] = useReducer(reducer, initialState);

  // useEffect(() => {
  //   dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  // }, [products]);

  // set grid view
  const setGridView = () => {
    return dispatch({ type: "SET_GRIDVIEW" });
  };

  // set list view
  const setListView = () => {
    return dispatch({ type: "SET_LISTVIEW" });
  };

  // sorting function
  const sorting = (e) => {
    let sort_value = e.target.value;
    // console.log(sort_value);
    dispatch({ type: "GET_SORT_VALUE", payload: { sort_value } });
  };

  // useEffect(() => {
  //   dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  // }, [products]);

  const updateFilterValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    // console.log(name);
    // console.log(value);
    return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };

  useEffect(() => {
    dispatch({ type: "SET_SEARCH" });
    dispatch({ type: "SORTED_DATA", payload: products });
  }, [products, state.sorting_value, state.filters]);

  // const updateFilterValue = (e) => {
  //   let name = e.target.name;
  //   let value = e.target.value;
  //   // console.log(name);
  //   // console.log(value);
  //   return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  // };

  // useEffect(() => {
  //   dispatch({ type: "SET_SEARCH" });
  // }, [products, state.filters]);
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContaxt.Provider
      value={{ ...state, setGridView, setListView, sorting, updateFilterValue }}
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
