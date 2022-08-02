import React from "react";
import { FaCalendar } from "react-icons/fa";
import { EconomicCalendar } from "react-ts-tradingview-widgets";

export default function EconomicCalender() {
  return (
    <div className="ec">
      <h3
        style={{
          padding: "5px 1rem",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <FaCalendar /> Economic Calendar
      </h3>
      <EconomicCalendar
        colorTheme="light"
        height={650}
        width="100%"
      ></EconomicCalendar>
    </div>
  );
}
