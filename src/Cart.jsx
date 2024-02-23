import React from "react";
import { useCartContaxt } from "./Contaxt/CartContaxt";
import CartItem from "./components/cards/CartItem";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart } = useCartContaxt();

  // console.log(cart);
  if (cart.length === 0) {
    return (
      <div className=" grid place-content-center h-[50vh]">
        <h1 className=" text-[4rem] font-bold">NO ITEM IN CART</h1>
      </div>
    );
  }

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

        {/* underline  =========> */}
        <div className="w-[98%] h-[1.5px] bg-black mt-7"></div>

        {/* clear cart  && continue buttons   */}
        <div className=" flex justify-between items-center mt-6 w-[98%]">
          <NavLink to="/products">
            <div className=" bg-blue-700 text-white px-6 py-3 uppercase">
              Continue shopping
            </div>
          </NavLink>
          <button
            onClick={clearCart}
            className="bg-[red] border-none text-white px-6 py-3 uppercase"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
