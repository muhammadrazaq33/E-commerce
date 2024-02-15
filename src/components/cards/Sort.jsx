import React from "react";
import { BsGrid3X3GapFill, BsList } from "react-icons/bs";
import { useFilterContaxt } from "../../Contaxt/FilterContaxt";

const Sort = () => {
  const { FilterProducts, setListView, setGridView, Grid_view, sorting } =
    useFilterContaxt();

  return (
    <div className="flex  justify-between items-center">
      <div className="flex items-center sm:justify-start justify-between gap-5">
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
          }  px-2 py-2`}
          onClick={setListView}
        >
          <BsList />
        </button>
      </div>

      <p className="text-[1.1rem]">{FilterProducts.length} total products</p>
      {/* selection =====> */}
      <form action="#">
        <label htmlFor="sort"></label>
        <select
          name="sort"
          id="sort"
          className="border-[2px] border-black px-1 py-1"
          onClick={sorting}
        >
          <option value="lowest">Price (lowest)</option>
          <option value="highest">Price (highest)</option>
          <option value="a-z">Price (a-z)</option>
          <option value="z-a">Price (z-a)</option>
        </select>
      </form>
    </div>
  );
};

export default Sort;
