import React, { useState } from "react";
import "./stateExperiment.css";
import UserOutput from "./components/UserOutput";

const StateExperiment = (props) => {
  const [namesState, setNamesState] = useState({
    names: [
      { name: "Bob", nickname: "Bildar" },
      { name: "Jayson", nickname: "Json" },
      { name: "Frank", nickname: "Hosan" },
    ],
  });

  const [bonusState, setBonusState] = useState('this is the bonus state')

  console.log(namesState, bonusState)

  const switchUsernameHandler = () => {
    setNamesState({
      names: [
        { name: "Bo-bithia", nickname: "Bildarius" },
        { name: "Jaysoni", nickname: "Jsoney Pepperoni" },
        { name: "Franken", nickname: "Hostein" },
      ],
    });
  };

  return (
    <div className="App">
      <ol>
        <li>Create TWO new components: UserInput and UserOutput</li>
        <UserOutput
          name={namesState.names[0].name}
          nickname={namesState.names[0].nickname}
        >
          Testing prop children
        </UserOutput>
        <button onClick={switchUsernameHandler}>Input Username</button>
        <li>
          UserInput should hold an input element, UserOutput two paragraphs
        </li>
        <UserOutput
          name={namesState.names[1].name}
          nickname={namesState.names[1].nickname}
        />
      </ol>
    </div>
  );
};

export default StateExperiment;


