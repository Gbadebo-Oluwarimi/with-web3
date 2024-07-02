"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useCoinMarket } from "../../context/context"; // Adjust the path if needed
import TableHeader from "./TableHeader";
import CMCtableRow from "./TableRow";
import btc from "../../assets/btc.png";

const Table = () => {
  const { getTopTenCoins } = useCoinMarket();
  const [coinData, setCoinData] = useState<any[]>([]);

  const setData = useCallback(async () => {
    try {
      const apiResponse = await getTopTenCoins();
      const filteredResponse = apiResponse.filter(
        (coin: any) => coin.cmc_rank <= 10
      );
      setCoinData(filteredResponse);
    } catch (error) {
      console.error("Failed to fetch coin data", error);
    }
  }, [getTopTenCoins]);

  useEffect(() => {
    setData();
  }, [setData]);

  return (
    <div className="text-[#dfe5ec] max-w-7xl m-auto py-3 px-3">
      <div className="text-2xl font-bold">Latest Coin Value</div>
      <div className="pt-1 text-xs font-light">
        Refresh the page to view updated currency data.
      </div>
      <div className="text-white font-bold">
        <div className="mx-auto max-w-screen-2xl">
          <table className="w-full">
            <TableHeader />

            {coinData && coinData ? (
              coinData.map((coin, index) => {
                return (
                  <CMCtableRow
                    key={index}
                    starNum={coin.cmc_rank}
                    coinName={coin.name}
                    coinSymbol={coin.symbol}
                    coinIcon={btc}
                    hRate={coin.quote.USD.percent_change_24h}
                    dRate={coin.quote.USD.percent_change_7d}
                    hRateIsIncrement={true}
                    dRateIsIncrement={true}
                    price={coin.quote.USD.price}
                    marketCapValue={coin.quote.USD.market_cap}
                    volumeCryptoValue={coin.quote.USD.volume_24h}
                    volumeValue={coin.total_supply}
                    circulatingSupply={coin.circulating_supply}
                  />
                );
              })
            ) : (
              <></>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
