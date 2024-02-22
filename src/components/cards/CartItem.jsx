import React from "react";
import NumberFormate from "./NumberFormate";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";

const CartItem = ({ id, image, amount, price, name, color }) => {
  //   const [color, setColor] = useState(colors[0]);
  //   const [amount, setAmount] = useState(1);

  // Increasing function
  const setIncrease = () => {
    // stock > amount ? setAmount(amount + 1) : setAmount(1);
  };

  // Decreasing function
  const setDecrease = () => {
    // amount > 1 ? setAmount(amount - 1) : setAmount(amount);
  };

  return (
    <div className="grid grid-cols-5 place-items-center">
      {/* IMAGE & name  =======> */}
      <div className=" flex items-center justify-start gap-4 w-full">
        {/* imAge  =====> */}
        <div>
          <figure className=" w-[4rem] h-8">
            <img src={image} alt={id} />
          </figure>
        </div>
        {/* name & COLOR  ==== */}
        <div className="">
          {/* namE  ========>*/}
          <p>{name}</p>
          {/* TITLE & COLOR */}
          <div className=" flex items-center gap-2">
            <p>Color:</p>
            <div
              className=" w-4 h-4 rounded-[50%]"
              style={{ backgroundColor: color }}
            ></div>
          </div>
        </div>
      </div>

      {/* PRice    ============>*/}
      <div>
        <NumberFormate price={price} />
      </div>

      {/* AMOUNT  ==========>*/}
      <div>
        {/* ADD TO CART  ===========>*/}
        <CartAmountToggle
          amount={amount}
          setIncrease={setIncrease}
          setDecrease={setDecrease}
        />
      </div>

      {/* SUBTOTAL  ===========> */}
      <div>
        <NumberFormate price={price * 2} />
      </div>

      {/* DEleTe button  =======>*/}
      <div>
        <FaTrash className=" text-[red]" />
      </div>
    </div>
  );
};

export default CartItem;
