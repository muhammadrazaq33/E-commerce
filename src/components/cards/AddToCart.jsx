import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const AddToCart = ({ products }) => {
  const { id, stock, colors } = products;
  const [color, setColor] = useState(colors[0]);

  return (
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
  );
};

export default AddToCart;
