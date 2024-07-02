"use client";

import React, { createContext, ReactNode, FC, useContext } from "react";

// Define the type for the context value
interface CoinMarketContextValue {
  getTopTenCoins: () => Promise<any[]>;
}

// Create the context with the default value
const CoinMarketContext = createContext<CoinMarketContextValue | undefined>(
  undefined
);

// Define the type for the provider's props
interface CoinMarketProviderProps {
  children: ReactNode;
}

// Create the provider component
export const CoinMarketProvider: FC<CoinMarketProviderProps> = ({
  children,
}) => {
  const getTopTenCoins = async (): Promise<any[]> => {
    try {
      const response = await fetch("/api/Getcoins", {
        headers: {
          Accept: "Application/json",
          method: "GET",
        },
      });
      console.log(response);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      return data.data;
    } catch (error) {
      console.error("Failed to fetch data", error);
      return [];
    }
  };

  return (
    <CoinMarketContext.Provider value={{ getTopTenCoins }}>
      {children}
    </CoinMarketContext.Provider>
  );
};

// Create a custom hook to use the CoinMarketContext
export const useCoinMarket = (): CoinMarketContextValue => {
  const context = useContext(CoinMarketContext);
  if (context === undefined) {
    throw new Error("useCoinMarket must be used within a CoinMarketProvider");
  }
  return context;
};
