import React from "react";
import Product from "./Product.jsx";

const GridView = ({ FilterProducts }) => {
  return (
    <>
      {/* GRIDVIEW ===> */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
        {FilterProducts.map((curEle) => {
          return (
            <Product
              key={curEle.id}
              curEle={curEle}
              BG_Color={`bg-slate-200`}
            />
          );
        })}
      </div>
    </>
  );
};

export default GridView;
