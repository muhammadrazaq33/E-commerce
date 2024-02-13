import React, { useState } from "react";

const MyImage = ({ image }) => {
  const [mainImage, setMainImage] = useState(image[0]);

  return (
    <div className=" grid grid-cols-[1fr,3fr] gap-x-4 items-center">
      {/* Images =========> */}
      <div className=" flex flex-col gap-y-2">
        {image.map((curEle, index) => {
          return (
            <figure>
              <img
                src={curEle.url}
                alt={curEle.filename}
                onClick={() => setMainImage(curEle)}
              />
            </figure>
          );
        })}
      </div>
      {/* Main Image  =========> */}
      <div>
        <figure>
          <img src={mainImage.url} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default MyImage;
