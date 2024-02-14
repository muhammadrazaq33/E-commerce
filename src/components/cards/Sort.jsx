import React from "react";
import { BsGrid3X3GapFill, BsList } from "react-icons/bs";
import { useFilterContaxt } from "../../Contaxt/FilterContaxt";

const Sort = () => {
  const { FilterProducts, setListView, setGridView, Grid_view } =
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

      <p className="text-[1.2rem]">{FilterProducts.length} total products</p>
      <p className="text-[1.2rem]">Filter</p>
    </div>
  );
};

export default Sort;
