import React from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useCartContaxt } from "../Contaxt/CartContaxt";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = ({ Links }) => {
  const { total_item } = useCartContaxt();
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
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
        {/* login button */}
        {isAuthenticated ? (
          <div className="bg-amber-300 px-5 py-2 rounded-sm">
            <button
              className="text-[1.2rem] font-semibold"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          </div>
        ) : (
          <div className="bg-amber-300 px-5 py-2 rounded-sm">
            <button
              className="text-[1.2rem] font-semibold"
              onClick={() => loginWithRedirect()}
            >
              Login
            </button>
          </div>
        )}
        {/*end of  login button */}
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
