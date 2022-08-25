import React from "react";
import { FaUserCircle } from "react-icons/fa";

export default function Profile() {
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
        <h3>Wilson Zimthamaha</h3>
      </div>
      <br />
      <div className="pro">
        <div>
          <p>Username: Zimthamaha</p>
          <p>Email: wilson@gmail.com</p>
          <p>Bitcoin Address: dfeghdjftryefghhfyrgehdhfytgehvsdfhe</p>
          <p>Ethereum Address: dghdnvgdhdygfbefygebfghdfdyfxhdb</p>
          <p>USDT Address: dhjfsdfuyhjdyvhjdxcyhjdxjxdchjxb</p>
        </div>
      </div>
    </div>
  );
}
