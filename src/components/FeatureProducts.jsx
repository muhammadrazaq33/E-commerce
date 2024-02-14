import React from "react";
import { useCustomHook } from "../Contaxt/ProductContaxt";
import Product from "./cards/Product.jsX";

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

          {/* GRIDVIEW ===> */}
          <div className="grid lg:grid-cols-3 grid-cols-2 gap-10">
            {featureProducts.map((curEle) => {
              return (
                <Product
                  key={curEle.id}
                  curEle={curEle}
                  BG_Color={`bg-white`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
