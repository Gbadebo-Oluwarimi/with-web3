import React from "react";

const Tab = () => {
  return (
    <div className="text-white p-4 tab ">
      <div className="rounded-md w-full p-10 ">
        <div className="text-2xl font-bold">
          Today's Cryptocurrency Prices by{" "}
          <span className="text-green-400">Market Cap</span>
        </div>
        <div className="text-sm pt-3">
          The global crypto market cap is $2.29T, a{" "}
          <span className="text-green-400">1.02%</span> increase over the last
          day.Read More
        </div>
        <div className="pt-4">
          <button className="p-2 py-3 rounded-lg bg-blue-800 min-w-36 text-sm  ">
            Add Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tab;
