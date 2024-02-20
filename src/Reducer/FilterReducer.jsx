import React from "react";
import Products from "../Products";

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

    case "GET_SORT_VALUE":
      // let getSortingValue = document.getElementById("sort");
      // let sort_value =
      //   getSortingValue.options[getSortingValue.selectedIndex].value;
      // console.log(sort_value);
      const { sort_value } = action.payload;
      console.log(sort_value);
      return {
        ...state,
        sorting_value: sort_value,
      };

    case "SORTED_DATA":
      // const { FilterProducts } = state;
      let newSortData;
      // console.log(FilterProducts);
      // let tempSortData = FilterProducts.slice;
      // console.log("FilterProducts:", FilterProducts)
      let tempSortData = [...action.payload]; // Create a copy of FilterProducts array
      // console.log("tempSortData before sorting:", tempSortData);
      if (state.sorting_value === "a-z") {
        newSortData = tempSortData.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }
      // console.log("true", newSortData);
      return {
        ...state,
        // FilterProducts: newSortData,
      };

    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "SET_SEARCH":
      const { AllProducts } = state;
      // console.log(AllProducts);
      let tempFilterProducts = [...AllProducts];
      const { text } = state.filters;

      // console.log(tempFilterProducts);
      if (text) {
        tempFilterProducts = tempFilterProducts.filter((curEle) => {
          return curEle.name.toLowerCase().includes(text);
        });
      }

      // if (category) {
      //   tempFilterProducts = tempFilterProducts.filter((curEle) => {
      //     return curEle.category === category;
      //   });
      // }

      // console.log(tempFilterProducts);
      return {
        ...state,
        FilterProducts: tempFilterProducts,
      };
    default:
      return state;
  }
};

export default FilterReducer;
