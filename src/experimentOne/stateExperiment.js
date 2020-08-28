import React, { useState } from "react";
import "./stateExperiment.css";
// import UserInput from './components/UserInput';
import UserOutput from "./components/UserOutput";

const StateExperiment = (props) => {
  const [namesState, setNamesState] = useState({
    names: [
      { name: "Bob", nickname: "Bildar" },
      { name: "Jayson", nickname: "Json" },
      { name: "Frank", nickname: "Hosan" },
    ],
  });

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
        <li>
          Output multiple UserOutput components in the App component (any
          paragraph texts of your choice)
        </li>
        <li>
          Pass a username (of your choice) to UserOutput via props and display
          it there
        </li>
        <li>
          Add state to the App component (=&gt; the username) and pass the
          username to the UserOutput component
        </li>
        <li>
          Add a method to manipulate the state (=&gt; an event-handler method)
        </li>
        <li>
          Pass the event-handler method reference to the UserInput component and
          bind it to the input-change event
        </li>
        <li>
          Ensure that the new input entered by the user overwrites the old
          username passed to UserOutput
        </li>
        <li>
          Add two-way-binding to your input (in UserInput) to also display the
          starting username
        </li>
        <li>
          Add styling of your choice to your components/ elements in the
          components - both with inline styles and stylesheets
        </li>
      </ol>
    </div>
  );
};

export default StateExperiment;

// class StateExperiment extends Component {
//   state = {
//     names: [
//       { name: 'Bob', nickname: 'Bildar'},
//       { name: 'Jayson', nickname: 'Json'},
//       { name: 'Frank', nickname: 'Hosan'}
//     ]
//   }

//   switchUsernameHandler = () => {
//     this.setState({names: [
//       { name: 'Bo-bithia', nickname: 'Bildarius'},
//       { name: 'Jaysoni', nickname: 'Jsoney Pepperoni'},
//       { name: 'Franken', nickname: 'Hostein'}
//     ] })
//   }
