import React from "react";
import { useFilterContaxt } from "../../Contaxt/FilterContaxt";

const FilterSection = () => {
  const {
    filters: { text },
    updateFilterValue,
  } = useFilterContaxt();
  // console.log()
  return (
    <div>
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="text"
          value={text}
          onChange={updateFilterValue}
          className=" bg-slate-200 text-slate-950 h-[2.1rem] w-[10rem]"
        />
      </form>
    </div>
  );
};

export default FilterSection;
