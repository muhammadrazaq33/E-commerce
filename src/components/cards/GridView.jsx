import React from "react";
import Product from "./Product.jsX";

const GridView = ({ FilterProducts }) => {
  return (
    <>
      {/* GRIDVIEW ===> */}
      <div className="grid lg:grid-cols-3 grid-cols-2 gap-3">
        {FilterProducts.map((curEle) => {
          return <Product key={curEle.id} curEle={curEle} />;
        })}
      </div>
    </>
  );
};

export default GridView;
