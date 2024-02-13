import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCustomHook } from "./Contaxt/ProductContaxt";
import PageNavigation from "./components/cards/PageNavigation";
import MyImage from "./components/cards/MyImage";
import NumberFormate from "./components/cards/NumberFormate";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import Stars from "./components/cards/Stars";
import AddToCart from "./components/cards/AddToCart";

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
    image,
  } = SingleProduct1;

  return (
    <>
      {/* Pagenavgator =============> */}
      <PageNavigation name={name} />

      {/* PRODUCT DETAILS  ==========> */}
      <div className="max-w-[60rem] m-auto mt-[6rem] p-4">
        <div className=" grid md:grid-cols-2 grid-cols-1 gap-12">
          {/* Product IMAGES    ===========> */}
          <div className=" flex items-center">
            <MyImage image={image} />
          </div>

          {/* Product Data    =============> */}
          <div className=" flex flex-col gap-3">
            <h3 className=" text-[2rem] font-semibold">{name}</h3>

            {/* STAR Component */}
            <Stars stars={stars} reviews={reviews} />

            <p className=" font-bold">
              MRP:{" "}
              <del>
                {" "}
                <NumberFormate price={price + 250000} />{" "}
              </del>
            </p>
            <p className=" text-[blue]">
              {" "}
              Deal of the day: <NumberFormate price={price} />{" "}
            </p>
            <p>{description}</p>
            {/* Icons  =======> */}
            <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-4 gap-y-3 border-b-[2px] mt-2.5">
              {Icons.map((Icon) => {
                const { id, icon, text } = Icon;
                return (
                  <article
                    key={id}
                    className=" flex flex-col gap-1 items-center"
                  >
                    <p className=" text-[1.3rem] h-[2.3rem] w-[2.3rem] bg-slate-200 rounded-[50%] grid place-content-center">
                      {icon}
                    </p>
                    <p className=" md:text-[0.7rem] sm:text-[0.8rem] text-[0.6rem]">
                      {text}
                    </p>
                  </article>
                );
              })}
            </div>
            {/* End of icons */}

            {/* product information ===> */}
            <div className=" mt-2.5 flex flex-col gap-2">
              <p>
                Available:{" "}
                <span className=" font-bold">
                  {stock > 0 ? "In Stock" : "Not-Available"}
                </span>
              </p>
              <p>
                ID: <span className=" font-bold">{productid}</span>
              </p>
              <p>
                Brand: <span className=" font-bold">{company}</span>
              </p>
            </div>
            <div className="max-w-[100%] w-[90%] border-[2px] border-black"></div>

            {/* AddToCart Component ====> */}
            <div className=" mt-2">
              {stock > 0 && <AddToCart products={SingleProduct1} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePage;

const Icons = [
  {
    id: 1,
    icon: <TbTruckDelivery />,
    text: "Free Delivery",
  },
  {
    id: 2,
    icon: <TbReplace />,
    text: "30 Days Replacement",
  },
  {
    id: 1,
    icon: <TbTruckDelivery />,
    text: "Abdul Delivered ",
  },
  {
    id: 1,
    icon: <MdSecurity />,
    text: "2 Year Warranty ",
  },
];
