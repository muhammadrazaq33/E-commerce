import React from "react";

const CartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;

    // exIStIng PRodUCT
    let existingProduct = state.cart.find(
      (curItem) => curItem.id == id + color
    );
    console.log(existingProduct);

    if (existingProduct) {
      // UPDATE ProDUCT
      let updateProducts = state.cart.map((curEle) => {
        if (curEle.id == id + color) {
          let newAmount = curEle.amount + amount;
          if (newAmount >= curEle.max) {
            newAmount = curEle.max;
          }
          return {
            ...curEle,
            amount: newAmount,
          };
        } else {
          return curEle;
        }
      });

      // cart
      return {
        ...state,
        cart: updateProducts,
      };
    } else {
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

      return {
        ...state,
        cart: [...state.cart, ProductCart],
      };
    }

    // console.log(ProductCart);
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

  if (action.type === "Clear_Cart") {
    return {
      ...state,
      cart: [],
    };
  }

  return state;
};

export default CartReducer;
