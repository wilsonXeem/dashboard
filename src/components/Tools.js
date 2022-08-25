import React from "react";
import {
  MiniChart,
  CryptoCurrencyMarket,
  ForexCrossRates,
  MarketOverview,
  StockMarket,
} from "react-ts-tradingview-widgets";
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
      <MiniChart width="100%" height={400} />
      <br />
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
      <h3
        style={{
          padding: "5px 1rem",
          backgroundColor: "black",
          color: "white",
        }}
      >
        Market Fundamental Overview
      </h3>
      <MarketOverview
        colorTheme="light"
        height={500}
        width="100%"
        showFloatingTooltip
      ></MarketOverview>
      <h3
        style={{
          padding: "5px 1rem",
          backgroundColor: "black",
          color: "white",
        }}
      >
        Forex Market Fundamental Data
      </h3>
      <ForexCrossRates
        colorTheme="light"
        height={500}
        width="100%"
      ></ForexCrossRates>
      <h3
        style={{
          padding: "5px 1rem",
          backgroundColor: "black",
          color: "white",
        }}
      >
        Stock Market Fundamental Data
      </h3>
      <StockMarket colorTheme="light" height={450} width="100%" />
    </div>
  );
};

export default Tools;
