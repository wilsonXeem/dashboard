import React, { useContext, useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { ValueContext } from "../Context";

export default function Profile() {
  const { id } = useParams();
  const { setId } = useContext(ValueContext);
  const [data, setData] = useState({});
  useEffect(() => {
    setId(id);
    fetch(`https://britishfx-server.herokuapp.com/user/${id}`)
      .then((response) => response.json())
      .then((json) => {
        // console.log(json.user);
        setData(json.user);
      });
  }, [id]);
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
        <h3>{data.fullname}</h3>
      </div>
      <br />
      <div className="pro">
        <div>
          <p>Username: {data.username}</p>
          <p>Email: {data.email}</p>
          <p>Bitcoin Address: {data.btc}</p>
          <p>Ethereum Address: {data.eth}</p>
          <p>USDT Address: {data.usdt}</p>
        </div>
      </div>
    </div>
  );
}
