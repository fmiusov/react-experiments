import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import StateExperiment from './experimentOne/stateExperiment';
import * as serviceWorker from './serviceWorker';
import ListsAndConditionals from './experimentThree/listsAndConditionals';

ReactDOM.render(
    <ListsAndConditionals />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
