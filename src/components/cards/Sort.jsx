import React from "react";
import { BsGrid3X3GapFill, BsList } from "react-icons/bs";
import { useFilterContaxt } from "../../Contaxt/FilterContaxt";

const Sort = () => {
  const {
    FilterProducts,
    setListView,
    setGridView,
    Grid_view,
    sorting,
    sorting_value,
    filters: { text, category },
    AllProducts,
    updateFilterValue,
  } = useFilterContaxt();

  // const {
  //   filters: { text, category },
  //   AllProducts,
  //   updateFilterValue,
  // } = useFilterContaxt();

  return (
    <div className=" sm:flex items-center justify-between  mt-[4rem]">
      <div className=" flex justify-between items-center md:gap-20 gap-6">
        {/* search bar ==========> */}
        <div>
          <form action="#" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              name="text"
              value={text}
              onChange={updateFilterValue}
              placeholder="SEARCH"
              className=" bg-slate-200 text-slate-950 h-[2.4rem] sm:w-[15rem] w-[13rem] ml-0 sm:mt-0 mt-2.5 sm:ml-1.5 pl-3 rounded-sm border-[1px] border-amber-400"
            />
          </form>
        </div>

        {/* button =========> */}
        <div className="sm:flex sm:mt-0 mt-4  sm:gap-5 gap-3">
          {/* grid view button */}
          <button
            className={`text-[1.7rem] ${
              Grid_view ? "bg-black text-[white]" : "bg-slate-200"
            } px-2 py-2`}
            onClick={setGridView}
          >
            <BsGrid3X3GapFill />
          </button>

          {/* list view button */}
          <button
            className={`text-[1.8rem] ${
              Grid_view ? "bg-slate-200" : "bg-black text-[white]"
            }  px-2 py-2 sm:ml-0 ml-6`}
            onClick={setListView}
          >
            <BsList />
          </button>
        </div>
      </div>

      {/* TEXT TO SELECT */}
      <div className=" flex justify-between items-center md:gap-20 sm:gap-6 mt-3">
        <p className="sm:text-[1.1rem] sm:mt-0 mt-4 font-semibold ">
          {FilterProducts.length} total products
        </p>
        {/* selection =====> */}
        <form action="#">
          {/* <label htmlFor="sort"></label> */}
          <select
            name="sort"
            id="sort"
            className="border-[2px] sm:mt-0 mt-4 border-black px-1 py-1 mr-1.5"
            onClick={sorting}
          >
            <option value="lowest">Price (lowest)</option>
            <option value="highest">Price (highest)</option>
            <option value="a-z">Price (a-z)</option>
            <option value="z-a">Price (z-a)</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Sort;
