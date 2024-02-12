import React from "react";

const ProductReducer = (state, action) => {
  // switch statement
  switch (action.type) {
    case "API_Loading":
      return {
        ...state,
        isLoading: true,
      };
    case "API_DATA":
      const featureData = action.payload.filter((curEle) => {
        return curEle.featured === true;
      });
      //   console.log(featureData);
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureData,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "SET_SINGLE_Loading":
      return {
        ...state,
        isSingleLoading: true,
      };

    case "SET_SINGLE_DATA":
      return {
        ...state,
        isLoading: false,
        SingleProduct1: action.payload,
      };

    case "SET_SINGLE_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default ProductReducer;
