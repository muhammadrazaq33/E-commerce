import React from "react";
import { NavLink } from "react-router-dom";
import NumberFormate from "./NumberFormate";

const ListView = ({ FilterProducts }) => {
  return (
    <div className="flex flex-col gap-y-7">
      {FilterProducts.map((curEle) => {
        const { id, name, description, image, price } = curEle;
        return (
          <article
            key={id}
            className="grid md:grid-cols-2 grid-cols-1 place-items-center gap-[2.5rem] lg:gap-[4rem] border-[2px] border-slate-200 lg:px-12 px-12 md:px-7 md:py-5 lg:py-5 py-8"
          >
            {/* image =====> */}
            <figure className="overflow-hidden">
              <img src={image} alt="image" className=" hover:scale-125" />
            </figure>

            {/* product data ====> */}
            <div className="flex flex-col lg:gap-4 gap-2.5">
              <h2 className="lg:text-[1.7rem] text-[1.5rem]">{name}</h2>
              <div className="flex flex-col gap-1">
                <p className=" font-medium text-[blue]">
                  <NumberFormate price={price} />
                </p>
                <p>{description.slice(0, 80)}...</p>
              </div>
              <NavLink to={`/singleproduct/${id}`}>
                <button className="bg-amber-400 hover:bg-amber-300 lg:px-3.5 px-3 py-2">
                  READ MORE
                </button>
              </NavLink>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ListView;
