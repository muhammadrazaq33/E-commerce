import React from "react";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const Menu = ({ Links, setMenu }) => {
  return (
    <div className="flex flex-col gap-8 fixed  top-0 right-0 h-[100vh] w-[100vw] bg-[white]">
      <IoClose
        onClick={() => setMenu(false)}
        className="text-[3rem] absolute top-[1rem] right-[1rem]"
      />

      {/* for small screen ===========================>*/}
      <ul className=" flex flex-col justify-center items-center gap-8">
        {Links.map((links) => {
          const { id, link, path } = links;
          return (
            <li key={id} className="">
              <NavLink
                to={path}
                className="text-[1.8rem] font-semibold hover:text-slate-400"
              >
                {link}
              </NavLink>
            </li>
          );
        })}
      </ul>
      {/* Cart  ==================>*/}
      <NavLink to="/cart" className=" relative">
        <FiShoppingCart className=" relative text-[3.2rem]" />
        <span className="absolute text-[1rem] bg-amber-300 rounded-[50%] grid place-content-center -top-[20%] left-[70%] w-[1.8rem] h-[1.8rem]">
          10
        </span>
      </NavLink>
    </div>
  );
};

export default Menu;
