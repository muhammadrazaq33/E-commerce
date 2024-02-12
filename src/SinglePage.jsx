import React from 'react'
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  isSingleLoading,
  useCustomHook,
  SingleProduct1,
} from "./Contaxt/ProductContaxt";

//http://localhost:5173/singleproduct/:thapaserialnoa
const API = "http://localhost:5173/singleproduct/:thapaserialnoa";

const SinglePage = () => {

    const { id } = useParams();
    useEffect(() => {
    getSingleProduct(`${API}/:${id}`);
  }, []);
  console.log(id);

  return (
    <div>SinglePage</div>
  )
}

export default SinglePage;
