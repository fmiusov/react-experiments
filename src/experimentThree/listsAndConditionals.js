import React, { Component } from "react";
import Validation from "./components/Validation";
import CharBox from "./components/CharBox";
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

  deleteCharHandler = (charIndex) => {
    const chars = [...this.state.chars];
    chars.splice(charIndex, 1);
    this.setState({ chars: chars });
  };

  render() {
    return (
      <div className="body">
        {this.state.length.map((char, index) => {
          return <CharBox click={() => this.deleteCharHandler(index)} />;
        })}
        <input type="text" onChange={this.inputChangedHandler} value={this.state.userInput}></input>
        <p>{this.state.userInput} character(s)</p>
        <Validation length={this.state.length} />
      </div>
    );
  }
}

export default ListsAndConditionals;
