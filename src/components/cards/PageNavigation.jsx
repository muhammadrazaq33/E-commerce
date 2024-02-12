import React from "react";
import { NavLink } from "react-router-dom";

const PageNavigation = ({ name }) => {
  return (
    <div className=" text-[2rem] bg-slate-200 pl-4 h-[4rem]">
      <NavLink to="/" className="font-bold hover:text-amber-400">
        Home
      </NavLink>{" "}
      / {name}
    </div>
  );
};

export default PageNavigation;
