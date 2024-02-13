import React, { useState } from "react";

const MyImage = ({ image = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(image[0]);
  //   console.log(image);
  return (
    <div className=" grid grid-cols-[1fr,3fr] gap-x-4 items-center">
      {/* Images =========> */}
      <div className=" flex flex-col gap-y-2">
        {image.map((curEle) => {
          return (
            <figure key={curEle.id}>
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
          <img src={mainImage.url} alt={mainImage.filename} />
        </figure>
      </div>
    </div>
  );
};

export default MyImage;
