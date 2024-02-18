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
  },
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

  useEffect(() => {
    dispatch({ type: "SORTED_DATA", payload: products });
  }, [products, state.sorting_value]);

  const updateFilterValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name);
    // console.log(value);
    return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };

  useEffect(() => {
    dispatch({ type: "SET_SEARCH" });
  }, [products, state.filters]);
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
