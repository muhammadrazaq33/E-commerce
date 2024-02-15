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

    case "SORTED_DATA":
      let newSortData;
      let tempSortData = [...action.payload];
      if (state.sorting_value === "a-z") {
        newSortData = tempSortData.sort((a, b) => a.name.localeCompare(b.name));
      }
      //   //   console.log(newSortData);
      return {
        ...state,
        FilterProducts: newSortData,
      };
    case "GET_SORT_VALUE":
      let getSortingValue = document.getElementById("sort");
      let sort_value =
        getSortingValue.options[getSortingValue.selectedIndex].value;
      console.log(sort_value);
      return {
        ...state,
        sorting_value: sort_value,
      };

    default:
      return state;
  }
};

export default FilterReducer;
