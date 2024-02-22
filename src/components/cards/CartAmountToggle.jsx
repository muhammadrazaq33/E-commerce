import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({ amount, setIncrease, setDecrease }) => {
  return (
    <div className=" flex items-center gap-6 ml-1">
      <button className="text-[1.2rem]" onClick={() => setDecrease()}>
        <FaMinus />{" "}
      </button>
      <p className=" text-[1.2rem]">{amount}</p>
      <button className="text-[1.2rem]" onClick={() => setIncrease()}>
        <FaPlus />{" "}
      </button>
    </div>
  );
};

export default CartAmountToggle;
