import React from "react";

export default function Withdraw() {
  return (
    <div className="withdraw">
      <h3
        style={{
          padding: "5px 1rem",
          backgroundColor: "black",
          color: "white",
        }}
      >
        Withdraw Funds
      </h3>
      <div className="msg">
        <h4>
          Please contact our agent with your desired account to receive funds
        </h4>
      </div>
    </div>
  );
}
