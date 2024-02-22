import React from "react";
import { useCartContaxt } from "./Contaxt/CartContaxt";

const Cart = () => {
  const { cart } = useCartContaxt();

  console.log(cart);

  return <div>Cart</div>;
};

export default Cart;
