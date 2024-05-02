import React from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useCartContaxt } from "../Contaxt/CartContaxt";

const Navbar = ({ Links }) => {
  const { total_item } = useCartContaxt();
  return (
    <nav>
      <div className="flex  items-center gap-5 lg:gap-7">
        <ul className="flex justify-center items-center gap-5 lg:gap-7">
          {Links.map((links) => {
            const { id, link, path } = links;
            return (
              <li key={id} className="">
                <NavLink
                  to={path}
                  className="text-[1.2rem] font-semibold hover:text-slate-400"
                >
                  {link}
                </NavLink>
              </li>
            );
          })}
        </ul>
        {/* button */}
        <NavLink to="/cart" className=" relative">
          <FiShoppingCart className=" relative text-[3.2rem]" />
          <span className="absolute text-[1rem] bg-amber-300 rounded-[50%] grid place-content-center -top-[20%] left-[70%] w-[1.8rem] h-[1.8rem]">
            {total_item}
          </span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
