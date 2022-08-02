import React from "react";
import { MiniChart, CryptoCurrencyMarket } from "react-ts-tradingview-widgets";
import { FaChartLine, FaBitcoin } from "react-icons/fa";

const Tools = () => {
  return (
    <div>
      <h3
        style={{
          padding: "5px 1rem",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <FaChartLine /> Minichart
      </h3>
      <MiniChart width="100%" height={400} /><br />
      <h3
        style={{
          padding: "5px 1rem",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <FaBitcoin /> Cryptocurrency Market
      </h3>
      <CryptoCurrencyMarket colorTheme="light" width="100%" height={400} />
    </div>
  );
};

export default Tools;
