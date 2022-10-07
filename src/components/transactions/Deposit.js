import React, { useContext } from "react";

import { ValueContext } from "../../Context";

export default function Deposit() {
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
        Deposit History
      </h3>
      <div>
        {user.transactions.deposit.length < 1 ? (
          <h2 style={{ textAlign: "center" }}>No Transactions Yet</h2>
        ) : (
          user.transactions.deposit.map((x, i) => {
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
