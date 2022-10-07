import React, { useContext } from "react";

import { ValueContext } from "../../Context";

export default function Referral() {
  const { user } = useContext(ValueContext);
  return (
    <div>
      <h3
        style={{
          padding: "5px 1rem",
          backgroundColor: "black",
          color: "white",
        }}
      >
        Referral Commission History
      </h3>
      <div>
        {user.transactions.referralCommission.length < 1 ? (
          <h2 style={{ textAlign: "center" }}>No Transactions Yet</h2>
        ) : (
          user.transactions.referralCommission.map((x, i) => {
            return (
              <ul>
                <li key={i}>{x}</li>
              </ul>
            );
          })
        )}
      </div>
    </div>
  );
}
