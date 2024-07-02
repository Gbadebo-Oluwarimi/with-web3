import React from "react";
import Image, { StaticImageData } from "next/image";

interface CoinNameRowProps {
  name: string;
  icon: StaticImageData | string;
}

const CoinNameRow: React.FC<CoinNameRowProps> = ({ name, icon }) => {
  return (
    <div className="flex items-center">
      <div className="w-4 h-4 relative mr-2">
        <Image src={icon} alt={name} layout="fill" objectFit="contain" />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default CoinNameRow;
