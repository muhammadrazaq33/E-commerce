import React, { useState } from "react";
import Navbar from "./Navbar";
import { Links } from "../Data.js";
import { IoMenu } from "react-icons/io5";
import Menu from "./cards/Menu.jsx";

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="bg-slate-200">
      <div className="max-w-[95vw] w-[1280px] m-auto h-[6.3rem] flex justify-between items-center">
        {/* LOGO */}
        <div className="flex items-center">
          <h1 className="text-[1.8rem] font-bold bg-amber-400 text-[white] uppercase px-4 rounded-l-lg cursor-pointer">
            abdul
          </h1>
          <p className="text-[1.8rem] font-bold bg-[white] text-amber-400 uppercase border-[1px] border-amber-400 px-4 rounded-r-lg cursor-pointer">
            store
          </p>
        </div>
        {/* Hambegar ======> */}
        <button className="md:hidden block">
          <IoMenu onClick={() => setMenu(true)} className="text-[3rem] " />
        </button>
        {/* Menu =========>*/}
        {menu && <Menu Links={Links} setMenu={setMenu} />}
        {/* Links */}
        <div className="md:block hidden">
          {" "}
          <Navbar Links={Links} />
        </div>
      </div>
    </div>
  );
};

export default Header;
