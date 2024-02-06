import React from "react";
import { FaTruck } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

export const Services = () => {
  return (
    <section className=" mt-[5rem]">
      <div className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5  max-w-[60rem] m-auto">
        {/* ARTICLE-1  =========> */}
        <article className="flex flex-col gap-4 items-center justify-center h-[18rem] bg-slate-200 rounded-md">
          <div className="w-[4.5rem] h-[4.5rem] bg-[white] grid place-content-center rounded-[50%]">
            <FaTruck className="text-[2.5rem] text-amber-500" />
          </div>
          <p className="capitalize font-bold ">super fast and free delivery</p>
        </article>
        {/* ARTICLE-2  =========> */}
        <article className="grid grid-rows-2 gap-4">
          <div className="bg-slate-200 flex  lg:gap-2 gap-6 lg:justify-center justify-start items-center rounded-md lg:px-0 px-10 sm:py-0 py-10">
            <div className="w-[4.5rem] h-[4.5rem] bg-[white] grid place-content-center rounded-[50%]">
              <MdOutlineSecurity className="text-[2.5rem] text-amber-500" />
            </div>
            <p className="capitalize font-bold ">Non-contract Shipping</p>
          </div>
          <div className="bg-slate-200 flex  lg:gap-2 gap-6 lg:justify-center justify-start items-center rounded-md lg:px-0 px-10">
            <div className="w-[4.5rem] h-[4.5rem] bg-[white] grid place-content-center rounded-[50%]">
              <GiReceiveMoney className="text-[2.5rem] text-amber-500" />
            </div>
            <p className="capitalize font-bold ">money-back guaranteed</p>
          </div>
        </article>
        {/* ARTICLE-3  =========> */}
        <article className="flex flex-col gap-4 items-center justify-center h-[18rem] bg-slate-200 rounded-md">
          <div className="w-[4.5rem] h-[4.5rem] bg-[white] grid place-content-center rounded-[50%]">
            <RiSecurePaymentLine className="text-[2.5rem] text-amber-500" />
          </div>
          <p className="capitalize font-bold ">super secure payment system</p>
        </article>
      </div>
    </section>
  );
};

// SUPER FAST AND FREE DELIVERY
// NON-CONTRACT SHIPPING
//MONEY-BACK GUARANTEED
// SUPER SECURE PAYMENT SYSTEM
