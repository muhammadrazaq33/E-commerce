import React from "react";
import { useFilterContaxt } from "../../Contaxt/FilterContaxt";

const FilterSection = () => {
  // const {
  //   filters: { text, category },
  //   AllProducts,
  //   updateFilterValue,
  // } = useFilterContaxt();

  return (
    <div className=" flex flex-col gap-10">
      {/* SEArch BAR ====> */}
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
    </div>
  );
};

export default FilterSection;

//  const getCategoryData = (data, property) => {
//    let newVal = data.map((curEle) => {
//      return curEle[property];
//    });
//    return (newVal = [...new Set(newVal)]);
//  };

//  const categoryData = getCategoryData(AllProducts, "category");

// {
//   /* category SECTIOn ===>  */
// }
// <div className=" flex flex-col gap-4">
//   <h3 className=" text-[1.2rem] font-bold">List</h3>
//   <div className=" flex flex-col gap-4 items-start">
//     {categoryData.map((curEle, index) => {
//       return (
//         <button
//           key={index}
//           type="button"
//           name="category"
//           value={curEle}
//           className=" text-[1.1rem] hover:underline"
//           onClick={updateFilterValue}
//         >
//           {curEle}
//         </button>
//       );
//     })}
//   </div>
// </div>;
