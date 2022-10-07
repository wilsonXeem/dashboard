import { ArrowForwardRounded } from "@mui/icons-material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ValueContext } from "../Context";

export default function Dashboard() {
  const { user } = useContext(ValueContext);
  const navigate = useNavigate();

  return (
    <div className="dash">
      <h3
        style={{
          padding: "5px 1rem",
          backgroundColor: "black",
          color: "white",
        }}
      >
        {" "}
        Dashboard
      </h3>
      <div className="dashes">
        <div style={{ backgroundColor: "darkorange" }}>
          <h2>${user.account.balance}</h2>
          <h5>Account Balance</h5>
          <p>
            <ArrowForwardRounded />
          </p>
        </div>
        <div style={{ backgroundColor: "darkgreen" }}>
          <h2>${user.account.deposit}</h2>
          <h5>Total Deposit</h5>
          <p onClick={() => navigate("/transactions/deposit")}>
            Transaction details <ArrowForwardRounded fontSize="15" />
          </p>
        </div>
        <div style={{ backgroundColor: "darkgreen" }}>
          <h2>${user.account.promoDeposit}</h2>
          <h5>Promo Deposit</h5>
          <p onClick={() => navigate("/transactions/promo-deposit")}>
            Transaction details <ArrowForwardRounded fontSize="15" />
          </p>
        </div>
        <div style={{ backgroundColor: "darkgreen" }}>
          <h2>${user.account.profit}</h2>
          <h5>Total Profit</h5>
          <p onClick={() => navigate("/transactions/profit")}>
            Transaction details <ArrowForwardRounded fontSize="15" />
          </p>
        </div>
        <div style={{ backgroundColor: "darkgreen" }}>
          <h2>${user.account.promoEarnings}</h2>
          <h5>Promo Earning</h5>
          <p onClick={() => navigate("/transactions/promo-earning")}>
            Transaction details <ArrowForwardRounded fontSize="15" />
          </p>
        </div>
        <div style={{ backgroundColor: "darkgreen" }}>
          <h2>${user.account.referralCommission}</h2>
          <h5>Total Referral Commission</h5>
          <p onClick={() => navigate("/transactions/referral-earning")}>
            Transaction details <ArrowForwardRounded fontSize="15" />
          </p>
        </div>
        <div style={{ backgroundColor: "darkred" }}>
          <h2>${user.account.withdrawn}</h2>
          <h5>Total Withdrawal</h5>
          <p onClick={() => navigate("/transactions/withdrawal")}>
            Transaction details <ArrowForwardRounded fontSize="15" />
          </p>
        </div>
      </div>
    </div>
  );
}
