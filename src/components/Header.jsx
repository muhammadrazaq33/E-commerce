import React from "react";
import Navbar from "./Navbar";
import { Links } from "../Data.js";

const Header = () => {
  return (
    <div className="max-w-[1280px] m-auto h-[6.3rem] flex justify-between items-center">
      {/* LOGO */}
      <div className="flex items-center">
        <h1 className="text-[1.8rem] font-bold bg-amber-400 text-[white] uppercase px-4 rounded-l-lg">
          abdul
        </h1>
        <p className="text-[1.8rem] font-bold bg-[white] text-amber-400 uppercase border-[1px] border-amber-400 px-4 rounded-r-lg">
          store
        </p>
      </div>
      {/* Links */}
      <Navbar Links={Links} />
    </div>
  );
};

export default Header;
