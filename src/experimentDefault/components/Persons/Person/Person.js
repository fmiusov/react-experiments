import React, { Component } from "react";
import classes from "./Person.css";
import Aux from "../../../hoc/Auxilliary";

class Person extends Component {

  componentDidMount() {
    this.inputElement.focus();
  }

  render() {
    console.log("[Person.js] rendering...");
    return (
      <Aux>
        <div className={classes.Person}>
          <p onClick={this.props.click}>
            I'm {this.props.name} and I am {this.props.age} years old!
          </p>
          <p key="i2" >{this.props.children}</p>
          <input
            ref={(inputEl) => {this.inputElement = inputEl}}
            key="i3"
            type="text"
            onChange={this.props.changed}
            value={this.props.name}
          />
        </div>
      </Aux>
    );
  }
}

// Person.propTypes = {
//   click: PropTypes.func,
//   name: PropTypes.string,
//   age: PropTypes.number,
//   changed: PropTypes.func
// }

export default Person;
