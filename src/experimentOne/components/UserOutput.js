import React from "react";

const userOutput = (props) => {
  return (
    <>
      <p>
        Hello, I am {props.name} but you can call me {props.nickname}!
      </p>
      <p>{props.children}</p>
    </>
  );
};

export default userOutput;
