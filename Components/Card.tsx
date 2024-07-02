import React from "react";
import Subcard from "./Subcard";

const Card = () => {
  return (
    <div className="max-w-7xl m-auto p-2  overflow-hidden text-[#dfe5ec]">
      <div className="w-full inline-block md:flex gap-2 ">
        <Subcard title={"Largest Gainers"} />
        <Subcard title={"Biggest Losers"} />
        <div className="inline-block w-full">
          <div className="  ring-2 ring-[#273648] rounded-md p-3 px-5 h-1/3 mb-3 w-full">
            <div className="text-green-500 text-2xl font-semibold">
              $2,413,739,196,575
              <div className="text-xs text-[#dfe5ec]">Market Cap</div>
            </div>
          </div>
          <div className="  ring-2 ring-[#273648] rounded-md p-3 px-5 h-1/3 mb-3 w-full">
            <div className="text-green-500 text-2xl font-semibold">
              $80,699,337,717
              <div className="text-xs text-[#dfe5ec]">24Hr Trading Volume</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
