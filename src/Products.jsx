import React from "react";
import FilterSection from "./components/cards/FilterSection";
import Sort from "./components/cards/Sort";
import ProductList from "./components/cards/ProductList";
import { useFilterContaxt } from "./Contaxt/FilterContaxt";

const Products = () => {
  // const { FilterProducts } = useFilterContaxt();
  // console.log(FilterProducts);

  return (
    <>
      {/* <div className="TWO_COL max-w-[63em] m-auto px-5 mt-[4rem]"> */}
      {/* FILTERSECTION   ======> */}
      {/* <div> */}
      {/* <FilterSection /> */}
      {/* </div> */}

      {/* SORT & LIST =====> */}
      <div className="max-w-[63rem] m-auto px-6 flex flex-col gap-20">
        {/* SORT ========>*/}
        <div>
          <Sort />
        </div>

        {/* LIST ========> */}
        <div>
          <ProductList />
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Products;
