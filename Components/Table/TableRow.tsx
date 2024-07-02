import React from "react";
import Image from "next/image";
import More from "../../assets/svg/More";
import Star from "../../assets/svg/Star";
import CoinNameRow from "./CoinNameRow";
import Rate from "./Rate";
import { useRouter } from "next/router";

const styles = {
  tableRow: `text-white border-b border-gray-800 text-[0.93rem]`,
};

interface CMCtableRowProps {
  starNum: number;
  coinName: string;
  coinIcon?: string;
  coinSymbol: string;
  price: number;
  hRate: number;
  dRate: number;
  hRateIsIncrement: boolean;
  dRateIsIncrement: boolean;
  marketCapValue: number;
  volumeValue: number;
  volumeCryptoValue: number;
  circulatingSupply: number;
}

const CMCtableRow: React.FC<CMCtableRowProps> = ({
  starNum,
  coinName,
  coinIcon,
  coinSymbol,
  price,
  hRate,
  dRate,
  hRateIsIncrement,
  dRateIsIncrement,
  marketCapValue,
  volumeValue,
  volumeCryptoValue,
  circulatingSupply,
}) => {
  const graphImages = [
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/52.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3408.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5426.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7129.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3957.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/328.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2416.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1765.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2099.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7653.svg",
  ];

  //   const router = useRouter();

  //   const viewCoinDetails = () => {
  //     router.push(
  //       `/currencies/info?symbol=${coinSymbol}&coin=${coinName}&price=${price}`
  //     );
  //   };

  //   const viewPrice = () => {
  //     router.push(
  //       `/currencies/price?symbol=${coinSymbol}&coin=${coinName}&price=${price}`
  //     );
  //   };

  const formatNum = (num: number): string => {
    return Number(num.toFixed(2)).toLocaleString();
  };

  const getRandomGraph = (): string => {
    const rndInt = Math.floor(Math.random() * 10);
    return graphImages[rndInt];
  };

  return (
    <tbody className={styles.tableRow}>
      <tr>
        <td>
          <Star />
        </td>
        <td>{starNum}</td>

        {coinIcon && (
          <td className="cursor-pointer">
            <CoinNameRow name={coinName} icon={coinIcon} />
          </td>
        )}

        <td className="cursor-pointer">
          <p>${formatNum(price)}</p>
        </td>
        <td>
          <Rate isIncrement={hRateIsIncrement} rate={`${formatNum(hRate)}%`} />
        </td>
        <td>
          <Rate isIncrement={dRateIsIncrement} rate={`${formatNum(dRate)}%`} />
        </td>

        <td>
          <div>
            <p>${formatNum(marketCapValue)}</p>
          </div>
        </td>

        <td>
          <div>
            <p>{formatNum(volumeValue)}</p>
            <p className="text-gray-400">
              {formatNum(volumeCryptoValue)} {coinSymbol}
            </p>
          </div>
        </td>

        <td>
          <div>
            <p>{formatNum(circulatingSupply)}</p>
          </div>
        </td>

        <td>
          <Image src={getRandomGraph()} width={150} height={60} alt="" />
        </td>

        <td>
          <More />
        </td>
      </tr>
    </tbody>
  );
};

export default CMCtableRow;
