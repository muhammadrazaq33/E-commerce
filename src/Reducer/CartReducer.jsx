import React from "react";

const CartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;

    // exIStIng PRodUCT
    let existingProduct = state.cart.find(
      (curItem) => curItem.id === id + color
    );

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
  }

  if (action.type === "SET_INCREASE") {
    let updateProduct = state.cart.map((curEle) => {
      if (curEle.id === action.payload) {
        let incAmount = curEle.amount + 1;
        if (incAmount >= curEle.max) {
          incAmount = curEle.max;
        }
        return {
          ...curEle,
          amount: incAmount,
        };
      } else {
        return curEle;
      }
    });
    return {
      ...state,
      cart: updateProduct,
    };
  }

  if (action.type === "SET_DECREASE") {
    let updateProduct = state.cart.map((curEle) => {
      if (curEle.id === action.payload) {
        let decAmount = curEle.amount - 1;
        if (decAmount <= 1) {
          decAmount = 1;
        }
        return {
          ...curEle,
          amount: decAmount,
        };
      } else {
        return curEle;
      }
    });
    return {
      ...state,
      cart: updateProduct,
    };
  }

  // if (action.type === "ADD_TOTAL_ITEM") {
  //   let updateCartItem = state.cart.reduce((accumulator, curEle) => {
  //     let { amount } = curEle;
  //     accumulator = accumulator + amount;
  //     return accumulator;
  //   }, 0);

  //   return {
  //     ...state,
  //     total_item: updateCartItem,
  //   };
  // }

  // if (action.type === "ADD_TOTAL_PRICE") {
  //   let updateCartPrice = state.cart.reduce((accumulator, curEle) => {
  //     let { price, amount } = curEle;
  //     accumulator = accumulator + price * amount;
  //     return accumulator;
  //   }, 0);

  //   return {
  //     ...state,
  //     total_price: updateCartPrice,
  //   };
  // }

  if (action.type === "ADD_TOTAL_PRICE_ITEM") {
    let { total_item, total_price } = state.cart.reduce(
      (accumulator, curEle) => {
        let { amount, price } = curEle;
        accumulator.total_item += amount;
        accumulator.total_price += amount * price;

        return accumulator;
      },
      { total_item: 0, total_price: 0 }
    );

    return {
      ...state,
      total_item,
      total_price,
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

  if (action.type === "Clear_Cart") {
    return {
      ...state,
      cart: [],
    };
  }

  return state;
};

export default CartReducer;
