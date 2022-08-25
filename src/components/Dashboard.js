import { ArrowForwardRounded } from "@mui/icons-material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ValueContext } from "../Context";

export default function Dashboard() {
  const { id } = useParams();
  const { setId } = useContext(ValueContext);
  const [acc, setAcc] = useState({});
  useEffect(() => {
    setId(id);
    fetch(`https://britishfx-server.herokuapp.com/user/${id}`)
      .then((response) => response.json())
      .then((json) => {
        // console.log(json.user);
        setAcc(json.user.account);
      });
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
          <h2>${acc.balance}</h2>
          <h5>Account Balance</h5>
          <p>
            <ArrowForwardRounded />
          </p>
        </div>
        <div style={{ backgroundColor: "darkgreen" }}>
          <h2>${acc.deposit}</h2>
          <h5>Total Deposit</h5>
          <p>
            Transaction details <ArrowForwardRounded fontSize="15" />
          </p>
        </div>
        <div style={{ backgroundColor: "darkgreen" }}>
          <h2>${acc.promoDeposit}</h2>
          <h5>Promo Deposit</h5>
          <p>
            Transaction details <ArrowForwardRounded fontSize="15" />
          </p>
        </div>
        <div style={{ backgroundColor: "darkgreen" }}>
          <h2>${acc.profit}</h2>
          <h5>Total Profit</h5>
          <p>
            Transaction details <ArrowForwardRounded fontSize="15" />
          </p>
        </div>
        <div style={{ backgroundColor: "darkgreen" }}>
          <h2>${acc.promoEarnings}</h2>
          <h5>Promo Earning</h5>
          <p>
            Transaction details <ArrowForwardRounded fontSize="15" />
          </p>
        </div>
        <div style={{ backgroundColor: "darkgreen" }}>
          <h2>${acc.referralCommission}</h2>
          <h5>Total Referral Commission</h5>
          <p>
            Transaction details <ArrowForwardRounded fontSize="15" />
          </p>
        </div>
        <div style={{ backgroundColor: "darkred" }}>
          <h2>${acc.withdrawn}</h2>
          <h5>Total Withdrawal</h5>
          <p>
            Transaction details <ArrowForwardRounded fontSize="15" />
          </p>
        </div>
      </div>
    </div>
  );
}
