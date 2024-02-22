import React from "react";

const CartReducer = (action, state) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;
    console.log(product, id);
  }

  return state;
};

export default CartReducer;
