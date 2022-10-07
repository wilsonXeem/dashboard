import React, { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";

import { ValueContext } from "../Context";

export default function Profile() {
  const { user } = useContext(ValueContext);
  return (
    <div className="profile">
      <h3
        style={{
          padding: "5px 1rem",
          backgroundColor: "black",
          color: "white",
        }}
      >
        Profile
      </h3>
      <div className="img">
        <FaUserCircle size={100} />
        <h3>{user.fullname}</h3>
      </div>
      <br />
      <div className="pro">
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Bitcoin Address: {user.btc}</p>
          <p>Ethereum Address: {user.eth}</p>
          <p>USDT Address: {user.usdt}</p>
          <p>Referral link: bfxtrade/17245/{user.username}</p>
        </div>
      </div>
    </div>
  );
}
