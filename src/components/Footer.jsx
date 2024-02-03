import React from "react";
import { NavLink } from "react-router-dom";
import { FaDiscord } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="mt-[5rem]">
      {/* FOOTER Title ===========> */}
      <div className=" flex justify-between items-center max-w-[60rem] m-auto bg-slate-200 px-[3.8rem] py-8 rounded-lg translate-y-12">
        <div className="text-[1.1rem] font-medium">
          <h3>Ready to get started</h3>
          <h3>Talk to us today</h3>
        </div>
        <div>
          <button className=" uppercase bg-amber-400 px-5 py-2.5 rounded-md">
            <NavLink to="/contact">Get Started</NavLink>
          </button>
        </div>
      </div>

      {/* Main FOOTER  ===========> */}
      <div className=" bg-blue-950 pt-[5rem]">
        <div className=" max-w-[60rem] m-auto grid md:grid-cols-4 grid-cols-2 gap-y-10 lg:gap-x-[3rem] gap-x-[2.5rem] px-6">
          {/* ABOUT ARTICLE-1  =========> */}
          <article className=" text-[white] flex flex-col gap-3.5">
            <h3 className=" font-semibold">ABDUL STORE</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit,
              provident.
            </p>
          </article>
          {/* SUBSCRIBE  ARTICLE-2  =========> */}
          <article className=" text-[white] flex flex-col gap-4">
            <h3 className=" font-semibold">Subscribe to get new updates</h3>
            <form action="#" className=" flex flex-col gap-4">
              <input
                type="email"
                name="Email"
                placeholder="Enter email"
                className=" px-5 py-2 text-[black]"
                required
                autoComplete="off"
              />
              <div className=" grid place-content-start text-black">
                <input
                  type="submit"
                  value="Subscribe"
                  className="px-6 py-2 bg-amber-400"
                />
              </div>
            </form>
          </article>
          {/* SOCIAL  ARTICLE-3  =========> */}
          <article className=" flex flex-col gap-4">
            <h3 className=" text-white font-semibold">Follow us</h3>
            <div className=" flex items-center lg:gap-10 gap-5">
              <div className=" w-[2.5rem] h-[2.5rem] bg-white grid place-content-center rounded-[50%]">
                <FaDiscord className=" text-[1.5rem]" />
              </div>
              <div className=" w-[2.5rem] h-[2.5rem] bg-white grid place-content-center rounded-[50%]">
                <FaInstagramSquare className=" text-[1.5rem]" />
              </div>
              <div className=" w-[2.5rem] h-[2.5rem] bg-white grid place-content-center rounded-[50%]">
                <FaYoutube className=" text-[1.5rem]" />
              </div>
            </div>
          </article>
          {/* CONTACT FOOTER-4 */}
          <article className="font-semibold text-[white] flex flex-col gap-4">
            <h3>CONTACT US</h3>
            {/* <p>+337-6725198</p> */}
            <a href="tel:3324030947">+92-3324030947</a>
          </article>
        </div>
        {/* FOOTER BOTTOM ==========> */}
        <div className="w-full h-[0.1rem] bg-white mt-[4.5rem]">J</div>
        <div className="mt-[2rem] max-w-[60rem] m-auto px-6">
          <div className="text-white flex sm:flex-row sm:justify-between flex-col justify-center gap-x-[2rem] gap-y-[1rem] sm:items-start items-center">
            <p className=" hover:text-amber-400 cursor-pointer md:max-w-[23rem] max-w-[25rem]">
              @{new Date().getFullYear()} ABDUL E-commerce. All Rights Reserved
            </p>
            <div className=" flex flex-col gap-1 sm:items-start items-center">
              <p className=" hover:text-amber-400 cursor-pointer">
                Privacy Policy
              </p>
              <p className=" hover:text-amber-400 cursor-pointer">
                Terms & Conditions
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
