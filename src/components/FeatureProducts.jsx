import React from "react";
import { useCustomHook } from "../Contaxt/ProductContaxt";
import { NavLink } from "react-router-dom";
import NumberFormate from "../components/cards/NumberFormate";

export const FeatureProducts = () => {
  const { isLoading, featureProducts } = useCustomHook();

  // Loading Section of FeatureProducts
  if (isLoading) {
    return (
      <div className=" text-center text-[2.5rem] mt-[5rem]">Loading...</div>
    );
  }
  //   console.log(featureProducts);
  return (
    <div className="bg-slate-200 mt-[5rem] py-16">
      <div className="max-w-[60rem] m-auto w-[1280px]">
        <div className=" flex flex-col gap-8">
          <div>
            <h4 className="text-slate-400 text-[1.2rem] font-semibold">
              Check Now!
            </h4>
            <h1 className=" text-[2rem] font-bold leading-8">
              Our Feature Services
            </h1>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-2 gap-10">
            {featureProducts.map((curEle) => {
              const { id, image, name, category, price } = curEle;
              return (
                <NavLink to={`/singleproduct/:${id}`} key={id}>
                  <article className=" bg-white flex flex-col gap-3 p-3 rounded-md">
                    <figure className=" overflow-hidden relative">
                      <img
                        src={image}
                        className="hover:scale-125 w-auto"
                        alt=""
                      />
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
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
