import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";

const AddToCart = ({ product }) => {
  const { id, stock, colors } = products;
  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  // Increasing function
  const setIncrease = () => {
    stock > amount ? setAmount(amount + 1) : setAmount(1);
  };

  // Decreasing function
  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(amount);
  };

  return (
    <div className=" flex flex-col gap-4">
      <div>
        <p className=" flex items-center gap-2">
          {" "}
          Colors:
          {colors.map((curCol, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: curCol }}
                className={`w-[1.6rem] h-[1.6rem] grid place-content-center rounded-[50%] ${
                  color === curCol ? "active" : "faded"
                }`}
                onClick={() => setColor(curCol)}
              >
                {color === curCol ? <FaCheck className="text-[white]" /> : null}
              </button>
            );
          })}
        </p>
      </div>

      {/* ADD TO CART  ===========>*/}
      <CartAmountToggle
        amount={amount}
        setIncrease={setIncrease}
        setDecrease={setDecrease}
      />

      {/* BUTTON  =======> */}
      <NavLink to="/cart">
        <button className=" px-5 py-3 bg-amber-400 font-medium">
          ADD TO CART
        </button>
      </NavLink>
    </div>
  );
};

export default AddToCart;
