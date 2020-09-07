import React, { Component } from "react";
import Validation from "./components/Validation";
import Char from "./components/CharBox";
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

  deleteCharHandler = ( index ) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});
  }

  render() {
    const charList = this.state.userInput.split('').map((char, index) => {
      return <Char character={char} key={index} clicked={() => this.deleteCharHandler(index)} />
    })

    return (
      <div className="body">
        <input type="text" onChange={this.inputChangedHandler} value={this.state.userInput}></input>
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default ListsAndConditionals;
