import React from "react";

interface subprop {
  title: string;
}
const Subcard: React.FC<subprop> = ({ title }) => {
  return (
    <div className=" ring-2 ring-[#273648] rounded-md p-3 mb-3 w-full text-[#dfe5ec]">
      <div className="flex text-white justify-between text-sm mb-5 ">
        <div className="font-bold text-xl">{title}</div>
        <div className="text-xs text-blue-500">More</div>
      </div>
      <div className="  inline-block text-lg  text-[#dfe5ec] w-full ">
        <div className="flex text-sm cursor-pointer font-semibold mb-1 justify-between w-full rounded-lg p-2 hover:bg-[#1c2228]">
          <div className="text-lg">Bitcoin</div>
          <div className="text-lg">$0.0004593000</div>
        </div>

        <div className="flex text-sm cursor-pointer font-semibold mb-1 justify-between w-full rounded-lg p-2 hover:bg-[#1c2228]">
          <div className="text-lg">Ethereum</div>
          <div className="text-lg">$0.0004593000</div>
        </div>

        <div className="flex text-sm cursor-pointer font-semibold justify-between w-full rounded-lg p-2 hover:bg-[#1c2228]">
          <div className="text-lg">usdt</div>
          <div className="text-lg">$0.0004593000</div>
        </div>
      </div>
    </div>
  );
};

export default Subcard;
