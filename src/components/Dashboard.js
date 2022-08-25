import { ArrowForwardRounded } from "@mui/icons-material";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

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
      <div className="dashes">
        <div style={{ backgroundColor: "darkblue" }}>
          <h3>Beginner</h3>
          <h5>Investment Plan</h5>
        </div>
        <div style={{ backgroundColor: "darkOrange" }}>
          <h2>$10,000.00</h2>
          <h5>Account Balance</h5>
          <p>
            <ArrowForwardRounded />
          </p>
        </div>
        <div style={{ backgroundColor: "darkgreen" }}>
          <h2>$10,000.00</h2>
          <h5>Total Deposit</h5>
          <p>
            Transaction details <ArrowForwardRounded fontSize="15" />
          </p>
        </div>
        <div style={{ backgroundColor: "darkgreen" }}>
          <h2>$10,000.00</h2>
          <h5>Promo Deposit</h5>
          <p>
            Transaction details <ArrowForwardRounded fontSize="15" />
          </p>
        </div>
        <div style={{ backgroundColor: "darkgreen" }}>
          <h2>$10,000.00</h2>
          <h5>Total Profit</h5>
          <p>
            Transaction details <ArrowForwardRounded fontSize="15" />
          </p>
        </div>
        <div style={{ backgroundColor: "darkgreen" }}>
          <h2>$10,000.00</h2>
          <h5>Promo Earning</h5>
          <p>
            Transaction details <ArrowForwardRounded fontSize="15" />
          </p>
        </div>
        <div style={{ backgroundColor: "darkgreen" }}>
          <h2>$10,000.00</h2>
          <h5>Total Referral Commission</h5>
          <p>
            Transaction details <ArrowForwardRounded fontSize="15" />
          </p>
        </div>
        <div style={{ backgroundColor: "darkred" }}>
          <h2>$10,000.00</h2>
          <h5>Total Withdrawal</h5>
          <p>
            Transaction details <ArrowForwardRounded fontSize="15" />
          </p>
        </div>
      </div>
    </div>
  );
}
