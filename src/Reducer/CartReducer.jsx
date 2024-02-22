import React from "react";

const CartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;

    // console.log(product);
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

  if (action.type === "REMOVE_TO_CART") {
    const updateCart = state.cart.filter((curEle) => {
      return curEle.id !== action.payload;
    });
    return {
      ...state,
      cart: updateCart,
    };
  }

  return state;
};

export default CartReducer;
