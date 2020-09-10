import React from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {
    const classes = [];
    if (props.persons.length <= 2) {
      classes.push("red");
    }
    if (props.persons.length <= 1) {
      classes.push("bold");
    }

  return (
    <div {classes.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={classes.join(" ")}>This is really working!</p>
      <button className="button" onClick={this.togglePersonsHandler}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
