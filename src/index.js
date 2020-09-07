import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import ListsAndConditionals from './experimentThree/listsAndConditionals';
import ExperimentDefault from './experimentDefault/App';

ReactDOM.render(
    <ExperimentDefault />,
  document.getElementById('root')
);

serviceWorker.unregister();
