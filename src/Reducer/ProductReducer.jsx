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
    default:
      return state;
  }
};

export default ProductReducer;
