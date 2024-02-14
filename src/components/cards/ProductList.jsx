import React from "react";
import { useFilterContaxt } from "../../Contaxt/FilterContaxt";
import GridView from "./GridView";

const ProductList = () => {
  const { FilterProducts, setGridView } = useFilterContaxt();

  if (setGridView === "false") {
    return <ListView />;
  }

  if (setGridView) {
    return <GridView FilterProducts={FilterProducts} />;
  }
};

export default ProductList;
