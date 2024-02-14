import React from "react";
import { useFilterContaxt } from "../../Contaxt/FilterContaxt";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { FilterProducts, Grid_view } = useFilterContaxt();

  if (Grid_view === false) {
    return <ListView FilterProducts={FilterProducts} />;
  }

  if (Grid_view === true) {
    return <GridView FilterProducts={FilterProducts} />;
  }
};

export default ProductList;
