import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Stars = ({ stars, reviews }) => {
  console.log(stars);
  // STARS
  const ratingStar = Array.from({ length: 5 }, (Ele, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar />
        ) : stars >= number ? (
          <FaStarHalfAlt />
        ) : (
          <AiOutlineStar />
        )}
      </span>
    );
  });

  return (
    <div className=" flex items-center gap-3">
      <p className=" flex gap-1 text-[rgb(255,200,0)] text-[1.1rem]">
        {ratingStar}
      </p>
      <p>({reviews} customers reviews)</p>
    </div>
  );
};

export default Stars;
