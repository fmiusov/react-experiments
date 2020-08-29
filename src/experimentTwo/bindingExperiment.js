import React, { Component } from "react";
import "./style.css";

import UserInput from "./UserInput/index.js";
import UserOutput from "./UserOutput/index.js";

class BindingExperiment extends Component {
  state = {
    username: "testro",
  };

  usernameChangedHandler = (event) => {
    this.setState({ username: event.target.value });
  };

  render() {
    return (
      <div className="body">
        <UserInput
          changed={this.usernameChangedHandler}
          currentName={this.state.username}
        />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName='HardCoder' />
      </div>
    );
  }
}

export default BindingExperiment;
