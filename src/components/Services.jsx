import React from "react";
import { FaTruck } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

export const Services = () => {
  return (
    <section className=" mb-[6rem]">
      <div className=" grid grid-cols-3 gap-5  max-w-[60rem] m-auto">
        {/* ARTICLE-1  =========> */}
        <article className="flex flex-col gap-4 items-center justify-center h-[18rem] bg-slate-200 rounded-md">
          <FaTruck className="text-[2.5rem] text-amber-500" />
          <p className="capitalize font-bold ">super fast and free delivery</p>
        </article>
        {/* ARTICLE-2  =========> */}
        <article className="grid grid-rows-2 gap-4">
          <div className="bg-slate-200 flex flex-col gap-2  justify-center items-center rounded-md">
            <MdOutlineSecurity className="text-[2.5rem] text-amber-500" />
            <p className="capitalize font-bold ">Non-contract Shipping</p>
          </div>
          <div className="bg-slate-200 flex flex-col gap-2  justify-center items-center rounded-md">
            <MdOutlineSecurity className="text-[2.5rem] text-amber-500" />
            <p className="capitalize font-bold ">Non-contract Shipping</p>
          </div>
        </article>
        {/* ARTICLE-1  =========> */}
        <article className="flex flex-col gap-4 items-center justify-center h-[18rem] bg-slate-200 rounded-md">
          <FaTruck className="text-[2.5rem] text-amber-500" />
          <p className="capitalize font-bold ">super fast and free delivery</p>
        </article>
      </div>
    </section>
  );
};

// SUPER FAST AND FREE DELIVERY
// NON-CONTRACT SHIPPING
//MONEY-BACK GUARANTEED
// SUPER SECURE PAYMENT SYSTEM
