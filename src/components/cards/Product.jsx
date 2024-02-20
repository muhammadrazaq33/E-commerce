import React from "react";
import { NavLink } from "react-router-dom";
import NumberFormate from "./NumberFormate";

const Product = ({ curEle, BG_Color }) => {
  const { id, image, name, category, price } = curEle;

  return (
    <NavLink to={`/singleproduct/${id}`} key={id}>
      <article
        className={`${BG_Color} flex flex-col gap-3 p-3 rounded-md h-full`}
      >
        <figure className=" overflow-hidden relative h-full">
          <img src={image} className="hover:scale-125 w-auto h-full" alt="" />
          <figcaption className=" absolute right-3 top-3 bg-white px-[1.5rem] py-[0.3rem] capitalize rounded-3xl hover:scale-100 cursor-pointer hover:bg-amber-400">
            {category}
          </figcaption>
        </figure>
        {/* cards info ==========> */}
        <div className=" flex justify-between items-center">
          <h4 className=" capitalize">{name}</h4>
          <h4 className=" capitalize text-[blue]">
            {<NumberFormate price={price} />}
          </h4>
        </div>
      </article>
    </NavLink>
  );
};

export default Product;
