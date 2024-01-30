import React from "react";
import { NavLink } from "react-router-dom";

const HeroSection = ({ children }) => {
  return (
    <section>
      <div className="grid grid-cols-2 gap-12 max-w-[60rem] m-auto">
        {/* hero info ===========> */}
        <article className="flex flex-col ">
          <p className="text-[1.5rem] font-medium text-slate-400 capitalize">
            welcome
          </p>
          <h1 className="text-[2.8rem] font-bold">{children}</h1>
          <p className="max-w-[25rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem rem
            temporibus a veniam quia nisi? Assumenda perferendis itaque
            blanditiis vitae?
          </p>
          <NavLink to="/products">
            <button className="bg-amber-400 font-semibold px-4 py-2 mt-5 uppercase hover:bg-[white] hover:border-[2px] hover:border-amber-400">
              shop now
            </button>
          </NavLink>
        </article>
        {/* hero Image  =============>*/}
        <article>
          <figure>
            <img src="/Assets/hero.jpg" alt="" />
          </figure>
        </article>
      </div>
    </section>
  );
};

export default HeroSection;
