import React, { Component, createContext } from "react";

export const ValueContext = createContext();

export default class Context extends Component {
  state = {
    id: "",
  };

  setId = (id) => {
    this.setState({ id: id });
  };
  render() {
    return (
      <ValueContext.Provider value={{ ...this.state, setId: this.setId }}>
        {this.props.children}
      </ValueContext.Provider>
    );
  }
}
