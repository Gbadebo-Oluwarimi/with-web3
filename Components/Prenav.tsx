import React from "react";

const Prenav = () => {
  return (
    <div className="text-xs width-full p-4 bg-[rgb(30 41 59)] text-white pl-16 md:flex flex-nowrap gap-2">
      <div>
        Coins: <span className="font-semibold text-green-500"> 14,845</span>
      </div>
      <div>
        Exchanges:<span className="text-yellow-400 font-bold"> 1,148</span>
      </div>
      <div>
        Market Cap:
        <span className="text-green-500 font-bold"> $2.403T 1.6%</span>
      </div>
      <div>
        24h Vol:<span className="text-red-300 font-bold"> $82.26B</span>
      </div>{" "}
      <div>
        Dominance:
        <span className="text-blue-400 font-bold"> BTC 50.4% ETH 17.2%</span>
      </div>
      <div>Gas: 3 GWEI</div>
    </div>
  );
};

export default Prenav;
