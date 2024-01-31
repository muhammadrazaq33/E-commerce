import React from "react";
import { NavLink } from "react-router-dom";
import { FaDiscord } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="my-[5rem]">
      {/* FOOTER Title ===========> */}
      <div className=" flex justify-between items-center max-w-[60rem] m-auto bg-slate-200 px-[3.8rem] py-8 rounded-lg">
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
      <div className=" bg-blue-950 py-[5rem]">
        <div className=" max-w-[60rem] m-auto grid grid-cols-4 gap-[3rem]">
          {/* ABOUT ARTICLE-1  =========> */}
          <article className=" text-[white] flex flex-col gap-3.5">
            <h3>ABDUL STORE</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit,
              provident.
            </p>
          </article>
          {/* SUBSCRIBE  ARTICLE-2  =========> */}
          <article className=" text-[white] flex flex-col gap-4">
            <h3>Subscribe to get new updates</h3>
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
            <h3 className=" text-white">Follow us</h3>
            <div className=" flex items-center gap-10">
              <div className=" w-[2.5rem] h-[2.5rem] bg-white grid place-content-center rounded-[50%]">
                <FaDiscord className=" text-[1.5rem]" />
              </div>
              <div>
                <FaInstagramSquare />
              </div>
              <div>
                <FaYoutube />
              </div>
            </div>
          </article>
          {/* CONTACT FOOTER-4 */}
          <article>
            <h3>CONTACT US</h3>
            <p>+337-6725198</p>
          </article>
        </div>
      </div>
    </footer>
  );
};
