import React from "react";

const Card = () => {
  return (
    <div className="max-w-7xl m-auto p-2  overflow-hidden">
      <div className="w-full inline-block md:flex gap-2 ">
        <div className=" bg-red-400 rounded-md p-2 mb-3 w-full">
          <div className="flex text-white">Trending</div>
        </div>
        <div className=" bg-red-400 rounded-md p-2 mb-3 w-full">
          <div className="flex text-white">Trending</div>
        </div>
        <div className=" bg-red-400 rounded-md p-2 mb-3 w-full">
          <div className="flex text-white">Trending</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
