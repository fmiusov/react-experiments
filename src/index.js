import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ListsAndConditionals from './experimentThree/listsAndConditionals';

ReactDOM.render(
    <ListsAndConditionals />,
  document.getElementById('root')
);

serviceWorker.unregister();
