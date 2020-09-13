import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ExperimentDefault from './experimentDefault/containers/App';

ReactDOM.render(
    <ExperimentDefault appTitle="Person Manager"/>,
  document.getElementById('root')
);

serviceWorker.unregister();
