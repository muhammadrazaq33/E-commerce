import React from "react";

const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        FilterProducts: [...action.payload],
        AllProducts: [...action.payload],
      };

    default:
      return state;
  }
};

export default FilterReducer;
