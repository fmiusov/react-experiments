import React, { Component } from "react";
import Validation from "./components/Validation";
import "./style.css";

class ListsAndConditionals extends Component {
  state = {
    userInput: ''
  };

  inputChangedHandler = (event) => {
    this.setState({
      userInput: event.target.value
    });
  };

  render() {
    return (
      <div className="body">
        <input type="text" onChange={this.inputChangedHandler} value={this.state.userInput}></input>
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
      </div>
    );
  }
}

export default ListsAndConditionals;
