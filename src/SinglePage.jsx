import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCustomHook } from "./Contaxt/ProductContaxt";

const API = "https://api.pujakaitem.com/api/products";

const SinglePage = () => {
  const { isSingleLoading, getSingleProduct, SingleProduct1 } = useCustomHook();

  const { id } = useParams();

  // usestate
  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);
  // console.log(SingleProduct1);

  const {
    id: productid,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
  } = SingleProduct1;

  return <div>SinglePage</div>;
};

export default SinglePage;
