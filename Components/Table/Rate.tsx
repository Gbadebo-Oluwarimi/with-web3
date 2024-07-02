import React from "react";
import ChevronDown from "../../assets/svg/chevronDown";
import ChevronUp from "../../assets/svg/chevronUp";

// Define styles object with typed CSS classes
const styles: Record<string, string> = {
  rate: `rate flex items-center`,
  red: `ml-2 text-[#EA3943]`,
  green: `ml-2 text-[#17C784]`,
};

// Define props interface
interface RateProps {
  isIncrement: boolean;
  rate: number | string; // Adjust type based on your data type for rate
}

const Rate: React.FC<RateProps> = ({ isIncrement, rate }) => {
  return (
    <div className={styles.rate}>
      {isIncrement ? (
        <ChevronUp fill="#17C784" />
      ) : (
        <ChevronDown fill="#EA3943" />
      )}
      <p className={isIncrement ? styles.green : styles.red}>{rate}</p>
    </div>
  );
};

export default Rate;
