import React from "react";
import FilterSection from "./components/cards/FilterSection";
import Sort from "./components/cards/Sort";
import ProductList from "./components/cards/ProductList";

const Products = () => {
  return (
    <>
      <div className="TWO_COL max-w-[60rem] m-auto">
        {/* FILTERSECTION   ======> */}
        <div>
          <FilterSection />
        </div>

        {/* SORT & LIST =====> */}
        <div className=" grid grid-rows-2">
          {/* SORT ========>*/}
          <div>
            <Sort />
          </div>

          {/* LIST ========> */}
          <div>
            <ProductList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
