import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section>
      <div className="grid place-content-center">
        <div className=" text-center flex flex-col gap-4">
          <h1 className=" text-[4rem] font-bold leading-[3.2rem]">404</h1>
          <h3 className=" text-[2rem] leading-[2rem]">UH HO! You're lost.</h3>
          <p className=" text-[rem]">
            The page you are looking for does not eXisT. How you get here is
            mystery. But you can click the button below to go back to the
            homepage.
          </p>
          <NavLink to="/">
            <button className=" capitalize bg-amber-400 px-6 py-3">
              GO TO HOME PAGE
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
