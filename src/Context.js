import React, { Component, createContext } from "react";

export const ValueContext = createContext();

export default class Context extends Component {
  state = {
    signin: false,
    user: {},
  };

  setSignIn = () => {
    this.setState({ signin: !this.state.signin });
  };

  setUser = (user) => {
    this.setState({ user: user });
  };

  render() {
    return (
      <ValueContext.Provider
        value={{
          ...this.state,
          setSignIn: this.setSignIn,
          setUser: this.setUser,
        }}
      >
        {this.props.children}
      </ValueContext.Provider>
    );
  }
}
