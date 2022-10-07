import React, { useContext } from "react";

import { ValueContext } from "../../Context";

export default function PromoEarning() {
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
        Promo Earning History
      </h3>
      <div>
        {user.transactions.promoEarnings.length < 1 ? (
          <h2 style={{ textAlign: "center" }}>No Transactions Yet</h2>
        ) : (
          user.transactions.promoEarnings.map((x, i) => {
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
