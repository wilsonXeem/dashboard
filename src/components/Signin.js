import React, { useState, useContext } from "react";
import { Button, Paper, FormHelperText, TextField } from "@mui/material";

import Logo from "../data/spin.png";
// import spin from "../data/spin.gif";

import { ValueContext } from "../Context";

export default function Signin() {
  const { setSignIn, setUser } = useContext(ValueContext);
  const [username, setUsername] = useState("");
  const [mmail, setMmail] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState(false);
  const [pass, setPass] = useState(false);
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState(false);
  const [email, setEmail] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (username === "" || password === "") {
      alert("Invalid username or password");
    } else {
      setLoading(!loading);
      fetch("https://britishfx-server.herokuapp.com/user/signin", {
        method: "POST",
        body: JSON.stringify({
          email: username.toLowerCase(),
          password: password,
        }),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.type === "email") {
            setMail(!mail);
          } else if (json.type === "password") {
            setPass(!pass);
          } else {
            setPassword("");
            setUsername("");
            setMail(false);
            setPass(false);
            setUser(json.user);
            setSignIn();
            setLoading(!loading);
          }
        });
    }
  };

  const handleSub = () => {
    fetch(`https://britishfx-server.herokuapp.com/user/verify/${mmail}`, {
      method: "POST",
      body: JSON.stringify({
        email: mmail.toLowerCase(),
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.type === "email") {
          setEmail(!email);
        } else {
          setMmail("");
          setEmail(false);
          setMsg(!msg);
        }
      });
  };

  return (
    <div className="sign">
      {loading ? (
        <div>
          <div className="spinner">
            <img src={Logo} alt="" />
          </div>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="form">
          {show ? (
            <Paper size={1000}>
              <h2 style={{ textAlign: "center" }}>
                {" "}
                <img src={Logo} alt="" /> <br /> Password recovery
              </h2>
              {msg && (
                <FormHelperText
                  style={{ color: "blue" }}
                  id="component-error-text"
                >
                  A mail will be sent to this address shortly...
                </FormHelperText>
              )}

              <TextField
                fullWidth
                label={"Email"} //optional
                value={mmail}
                onChange={(e) => setMmail(e.target.value)}
              />
              {email && (
                <FormHelperText
                  style={{ color: "red" }}
                  id="component-error-text"
                >
                  Email does not exist
                </FormHelperText>
              )}

              <Button variant="contained" onClick={handleSub}>
                Submit
              </Button>
              <Button onClick={() => setShow(!show)}>back to login</Button>
            </Paper>
          ) : (
            <Paper size={1000}>
              <h2 style={{ textAlign: "center" }}>
                <img src={Logo} alt="" /> <br /> Sign in
              </h2>

              <TextField
                fullWidth
                label={"Email"} //optional
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {mail && (
                <FormHelperText
                  style={{ color: "red" }}
                  id="component-error-text"
                >
                  Email does not exist
                </FormHelperText>
              )}
              <TextField
                fullWidth
                type="password"
                label={"Password"} //optional
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {pass && (
                <FormHelperText
                  style={{ color: "red" }}
                  id="component-error-text"
                >
                  Invalid password
                </FormHelperText>
              )}

              <Button variant="contained" onClick={handleSubmit}>
                Sign in
              </Button>
              <Button onClick={() => setShow(!show)}>forgot password</Button>
            </Paper>
          )}
        </div>
      )}
    </div>
  );
}
