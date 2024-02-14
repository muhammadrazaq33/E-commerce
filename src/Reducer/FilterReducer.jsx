import React from "react";

const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        FilterProducts: [...action.payload],
        AllProducts: [...action.payload],
      };

    case "SET_GRIDVIEW":
      return {
        ...state,
        Grid_view: true,
      };

    case "SET_LISTVIEW":
      return {
        ...state,
        Grid_view: false,
      };
    default:
      return state;
  }
};

export default FilterReducer;
