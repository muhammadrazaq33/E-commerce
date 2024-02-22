import React from "react";
import { useCartContaxt } from "./Contaxt/CartContaxt";
import CartItem from "./components/cards/CartItem";

const Cart = () => {
  const { cart } = useCartContaxt();

  // console.log(cart);

  return (
    <>
      {/* container  ========> */}
      <div className="max-w-[60rem] m-auto px-4 mt-[6rem]">
        {/* titles =========> */}
        <div className="">
          <div className=" grid grid-cols-5 place-items-center">
            <p>Items</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
            <p>Remove</p>
          </div>
        </div>

        {/* underline  =========> */}
        <div className="w-[98%] h-[1px] bg-black mt-2"></div>

        {/* CARTITem   ===========> */}
        <div className=" grid gap-y-6 mt-5">
          {cart.map((curEle) => {
            return <CartItem key={curEle.id} {...curEle} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Cart;
