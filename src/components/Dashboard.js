import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  ForexCrossRates,
  MarketOverview,
  StockMarket,
} from "react-ts-tradingview-widgets";
import { ValueContext } from "../Context";

export default function Dashboard() {
  const { id } = useParams();
  const { setId } = useContext(ValueContext);
  useEffect(() => {
    setId(id);
  }, [id]);

  return (
    <div className="dash">
      <h3
        style={{
          padding: "5px 1rem",
          backgroundColor: "black",
          color: "white",
        }}
      >
        Dashboard
      </h3>
      <div className="mkt">
        <h4>Market Fundamental Overview</h4>
        <MarketOverview
          colorTheme="light"
          height={500}
          width="100%"
          showFloatingTooltip
        ></MarketOverview>
      </div>
      <div className="fcr">
        <h4>Forex Market Fundamental Data</h4>
        <ForexCrossRates
          colorTheme="light"
          height={500}
          width="100%"
        ></ForexCrossRates>
      </div>
      <div className="fcr">
        <h4>Stock Market Fundamental Data</h4>
        <StockMarket colorTheme="light" height={450} width="100%" />
      </div>
    </div>
  );
}
