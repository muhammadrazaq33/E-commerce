import React from "react";

const CartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;

    console.log(product);
    let ProductCart;

    ProductCart = {
      id: id + color,
      name: product.name,
      color,
      amount,
      image: product.image[0].url,
      price: product.price,
      max: product.stock,
    };

    // console.log(ProductCart);
    return {
      ...state,
      cart: [...state.cart, ProductCart],
    };
  }

  return state;
};

export default CartReducer;
