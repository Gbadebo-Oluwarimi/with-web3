import React from "react";
import btc from "../assets/btc.png";
import eth from "../assets/eth.png";
import usdt from "../assets/usdt.png";
import Rate from "./Table/Rate";
import CoinNameRow from "./Table/CoinNameRow";
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
          <div className="text-sm">
            <CoinNameRow name="BTC" icon={btc} />
          </div>
          <div className="text-sm flex">
            $0.000459 <Rate isIncrement={true} rate="0.41%" />
          </div>
        </div>

        <div className="flex text-sm cursor-pointer font-semibold mb-1 justify-between w-full rounded-lg p-2 hover:bg-[#1c2228]">
          <div className="text-sm">
            <CoinNameRow name="Ethereum" icon={eth} />
          </div>
          <div className="text-sm flex">
            $0.000459 <Rate isIncrement={false} rate="0.21%" />
          </div>
        </div>
      </div>

      <div className="flex text-sm cursor-pointer font-semibold justify-between w-full rounded-lg p-2 hover:bg-[#1c2228]">
        <div className="text-sm">
          <CoinNameRow name="USDT" icon={usdt} />
        </div>
        <div className="text-sm flex">
          $0.000459 <Rate isIncrement={true} rate="0.11%" />
        </div>
      </div>
    </div>
  );
};

export default Subcard;
