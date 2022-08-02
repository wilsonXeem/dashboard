import React from "react";
import { TechnicalAnalysis, ForexHeatMap } from "react-ts-tradingview-widgets";
import { FaChartBar } from "react-icons/fa";
// import { CDBIcon } from "cdbreact";

export default function Technicalanalysis() {
  return (
    <div className="ta">
      <h3
        style={{
          padding: "5px 1rem",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <FaChartBar /> Technical Analysis
      </h3>
      <div style={{ marginBottom: "1rem" }}>
        <TechnicalAnalysis symbol="ALL" width="100%" />
        <TechnicalAnalysis symbol="EURUSD" width="100%" />
        <TechnicalAnalysis symbol="EURGBP" width="100%" />
      </div>
      <div>
        <h4
          style={{
            padding: "5px 1rem",
            backgroundColor: "black",
            color: "white",
          }}
        >
          Forex Heat Map
        </h4>
        <ForexHeatMap colorTheme="light" height={400} width="100%" />
      </div>
    </div>
  );
}
